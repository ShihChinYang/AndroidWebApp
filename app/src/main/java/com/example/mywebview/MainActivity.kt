package com.example.mywebview

import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
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
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewAssetLoader.AssetsPathHandler
import com.example.mywebview.ui.theme.MyWebViewTheme


const val PAGE_URL = "https://android.bsafes.com/logIn.html"



class MainActivity : ComponentActivity() {
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
    private var requiredPermissions = arrayOf(android.Manifest.permission.CAMERA, android.Manifest.permission.RECORD_AUDIO)
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
            MyWebViewTheme {
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
                    WebViewScreen(webChromeClient)
                }
            }
        }
    }
    private fun requestPermissions() {
        requestPermissionLauncher.launch(requiredPermissions)
    }
    private fun startCamera() {

    }
}

@Composable
fun WebViewScreen(customWebChromeClient: WebChromeClient) {
    AndroidView(
        factory = { context ->
            val assetLoader = WebViewAssetLoader.Builder()
                .setDomain("android.bsafes.com")
                .addPathHandler("/", AssetsPathHandler(context))
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
