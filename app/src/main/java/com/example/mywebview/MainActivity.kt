package com.example.mywebview

import android.content.Context
import android.content.pm.PackageManager
import android.content.res.AssetManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.webkit.MimeTypeMap
import android.webkit.ServiceWorkerClient
import android.webkit.ServiceWorkerController
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.LifecycleCameraController
import androidx.camera.view.PreviewView
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.compose.ui.tooling.PreviewActivity
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.webkit.WebViewAssetLoader
import com.example.mywebview.ui.theme.MyWebViewTheme
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

const val PAGE_URL = "https://android.bsafes.com/logIn.html"

class MainActivity : ComponentActivity() {
    // Key Point: Managing Camera Permission State
    private val _isCameraPermissionGranted = MutableStateFlow(false)
    val isCameraPermissionGranted: StateFlow<Boolean> = _isCameraPermissionGranted

    private val webChromeClient = object: WebChromeClient() {
        private var fileUploadCallback: ValueCallback<Array<Uri>>? = null
        override fun onShowFileChooser(
            webView: WebView?,
            filePathCallback: ValueCallback<Array<Uri>>?,
            fileChooserParams: FileChooserParams?
        ): Boolean {
            fileUploadCallback?.onReceiveValue(null)
            fileUploadCallback = filePathCallback
            if(fileChooserParams?.acceptTypes?.contains("image/*") == true && fileChooserParams.isCaptureEnabled) {
                println("Hello World")
                if (ContextCompat.checkSelfPermission(
                        baseContext,
                        android.Manifest.permission.CAMERA
                    ) == PackageManager.PERMISSION_GRANTED
                ) {
                    startCamera()
                } else {
                    requestPermissions()
                }
            }
            return true
        }
    }
    private var requiredPermissions = arrayOf(android.Manifest.permission.CAMERA)
    private val requestPermissionLauncher =
        registerForActivityResult(ActivityResultContracts.RequestMultiplePermissions())
        { permissions  ->
            var permissionGranted  = true
            permissions.entries.forEach {
                if(it.key in requiredPermissions && !it.value) {
                    permissionGranted = false
                }
            }
            if (!permissionGranted) {
                Toast.makeText(baseContext, "Permission request denied",
                    Toast.LENGTH_SHORT).show()
            } else {
                startCamera()
            }
        }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.P) {
            requiredPermissions += android.Manifest.permission.WRITE_EXTERNAL_STORAGE
        }

        enableEdgeToEdge()
        setContent {
            // Collect the camera permission state as a Compose state to automatically update the UI upon change
            val permissionGranted = isCameraPermissionGranted.collectAsState().value
            MyWebViewTheme {
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
                    if (permissionGranted) {
                        CameraPreview()
                    } else {
                        WebViewScreen(webChromeClient)
                    }
                }
            }
        }
    }
    private fun requestPermissions() {
        requestPermissionLauncher.launch(requiredPermissions)
    }
    private fun startCamera() {
        _isCameraPermissionGranted.value = true
    }
}

class myPathHandler(context: Context) : WebViewAssetLoader.PathHandler {
    private val assetManager: AssetManager = context.getAssets()
    override fun handle(path: String): WebResourceResponse? {
        val extension: String = MimeTypeMap.getFileExtensionFromUrl(path)
        val mimeType: String? = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension)
        try {
            return WebResourceResponse(mimeType, "UTF-8", assetManager.open(path))
        } catch(e: Exception) {
            return return WebResourceResponse("text/html", "UTF-8", assetManager.open("404.html"))
        }
    }
}

@Composable
fun WebViewScreen(customWebChromeClient: WebChromeClient) {
    AndroidView(
        factory = { context ->
            val assetLoader = WebViewAssetLoader.Builder()
                .setDomain("android.bsafes.com")
                .addPathHandler("/", myPathHandler(context))
                .build()
            val swController = ServiceWorkerController.getInstance()
            val serviceWorkerClient = object: ServiceWorkerClient() {
                override fun shouldInterceptRequest(request: WebResourceRequest): WebResourceResponse? {
                    return assetLoader.shouldInterceptRequest(request.url)
                }
            }
            swController.setServiceWorkerClient(serviceWorkerClient)
            val serviceWorkerWebSettings = swController.serviceWorkerWebSettings
            serviceWorkerWebSettings.allowContentAccess = true
            serviceWorkerWebSettings.allowFileAccess = true

            return@AndroidView WebView(context).apply {
                @Suppress("SetJavaScriptEnabled")
                settings.javaScriptEnabled = true
                settings.domStorageEnabled = true
                settings.allowFileAccess = true
                settings.allowContentAccess = true
                settings.loadWithOverviewMode = true
                settings.useWideViewPort = true
                settings.setSupportZoom(false)
                webViewClient = object: WebViewClient() {
                    override fun shouldInterceptRequest(
                        view: WebView,
                        request: WebResourceRequest
                    ): WebResourceResponse? {
                        return assetLoader.shouldInterceptRequest(request.url)
                    }
                }
                webChromeClient = customWebChromeClient
            }
        },
        update = {
            it.loadUrl(PAGE_URL)
        }
    )
}

@Composable
fun CameraPreview() {
    // Obtain the current context and lifecycle owner
    val context = LocalContext.current
    val lifecycleOwner = LocalLifecycleOwner.current

    // Remember a LifecycleCameraController for this composable
    val cameraController = remember {
        LifecycleCameraController(context).apply {
            // Bind the LifecycleameraController to the lifecycleOwner
            bindToLifecycle(lifecycleOwner)
        }
    }

    AndroidView(modifier = Modifier.fillMaxSize(),
        factory = { ctx ->
            //Initialize the PreviewView and configure it
            PreviewView(ctx).apply {
                scaleType = PreviewView.ScaleType.FILL_START
                implementationMode = PreviewView.ImplementationMode.COMPATIBLE
                controller = cameraController
            }
        },
        onRelease = {
            // Release the camera controler when the composable is removed from the screen
            cameraController.unbind()
        }
    )
}
