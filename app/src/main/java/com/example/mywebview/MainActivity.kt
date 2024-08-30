package com.example.mywebview

import android.content.Context
import android.content.pm.PackageManager
import android.content.res.AssetManager
import android.graphics.Bitmap
import android.graphics.Color
import android.graphics.ImageDecoder
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.MediaStore
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.webkit.MimeTypeMap
import android.webkit.ServiceWorkerClient
import android.webkit.ServiceWorkerController
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.LinearLayout
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageCapture
import androidx.camera.core.ImageCapture.OnImageSavedCallback
import androidx.camera.core.ImageCaptureException
import androidx.camera.view.LifecycleCameraController
import androidx.camera.view.PreviewView
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.input.pointer.PointerIcon.Companion.Text
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.core.net.toFile
import androidx.webkit.WebViewAssetLoader
import com.example.mywebview.ui.theme.MyWebViewTheme
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import java.io.File
import java.io.FileOutputStream
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

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
                        CameraView()
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
    override fun handle(path: String): WebResourceResponse {
        val extension: String = MimeTypeMap.getFileExtensionFromUrl(path)
        val mimeType: String? = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension)
        try {
            return WebResourceResponse(mimeType, "UTF-8", assetManager.open(path))
        } catch(e: Exception) {
            return WebResourceResponse("text/html", "UTF-8", assetManager.open("404.html"))
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
fun CameraView(onImageCatpureed: (imageFile: File, uri: Uri) -> Unit) {
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

    val lensFacing = remember {
        mutableStateOf(CameraSelector.LENS_FACING_BACK)
    }
    var imageTakenUri = remember {
        mutableStateOf(Uri.EMPTY)
    }
    // We always need to build the camera selector again if the user changes the camera len's
    val cameraSelector = remember(lensFacing.value) {
        CameraSelector.Builder().requireLensFacing(lensFacing.value).build()
    }
    // We also need to pass this cameraSelector to the cameraController instance

    // We need to pass this flashMode to our cameraController
    val flashMode = remember {
        mutableStateOf(ImageCapture.FLASH_MODE_OFF)
    }
    var flashLightContentDescription = ""
    if(flashMode.value == ImageCapture.FLASH_MODE_ON)
        flashLightContentDescription = "Flashlight is ON"
    else
        flashLightContentDescription = "Flashlight is Off"

    Scaffold(modifier = Modifier.fillMaxSize(),
        bottomBar = {
            Row(
                modifier = Modifier.fillMaxWidth()
            ) {
                if (imageTakenUri.value == Uri.EMPTY ) {
                    Row(modifier = Modifier
                        .fillMaxWidth()
                        .background(
                            color = androidx.compose.ui.graphics.Color.Black,
                            shape = RectangleShape
                        )
                        .padding(30.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Image(
                            painter = painterResource(
                                id =
                                if (flashMode.value == ImageCapture.FLASH_MODE_OFF )
                                    R.drawable.flashlightoff
                                else
                                    R.drawable.flashlighton
                            ),
                            modifier = Modifier
                                .width(25.dp)
                                .height(30.dp)
                                .clickable {
                                    if(flashMode.value == ImageCapture.FLASH_MODE_ON)
                                        flashMode.value == ImageCapture.FLASH_MODE_OFF
                                    else
                                        flashMode.value == ImageCapture.FLASH_MODE_ON
                                },
                            contentDescription = flashLightContentDescription,
                            contentScale = ContentScale.FillBounds
                        )
                        Image(
                            painter = painterResource(
                                id = R.drawable.take_photo
                            ),
                            modifier = Modifier
                                .size(62.dp)
                                .clickable {
                                    takePhoto(
                                        cameraController = cameraController,
                                        context = context,
                                        onImageCatpureed = { uri: Uri ->
                                            imageTakenUri.value = uri
                                        }
                                    )
                                },
                            contentDescription = "Take Photo",
                            contentScale = ContentScale.FillBounds
                        )
                        Image(
                            painter = painterResource(
                                id = R.drawable.switch_camera
                            ),
                            modifier = Modifier
                                .width(32.dp)
                                .height(30.dp)
                                .clickable {
                                    if (lensFacing.value == CameraSelector.LENS_FACING_FRONT) {
                                        lensFacing.value = CameraSelector.LENS_FACING_BACK
                                    } else {
                                        lensFacing.value = CameraSelector.LENS_FACING_FRONT
                                    }
                                },
                            contentDescription = "Switch Camera",
                            contentScale = ContentScale.FillBounds
                        )
                    }
                } else {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 25.dp),
                        horizontalArrangement = Arrangement.SpaceAround,
                        verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column(
                                horizontalAlignment = Alignment.CenterHorizontally
                            ) {
                                Box(
                                    modifier = Modifier
                                        .size(70.dp)
                                        .clip(shape = CircleShape )
                                        .background(color = androidx.compose.ui.graphics.Color(0xffedbb99 )),
                                    contentAlignment = Alignment.Center
                                ){
                                    Image(
                                        painter = painterResource(
                                            id = R.drawable.retake
                                        ),
                                        modifier = Modifier
                                            .width(30.dp)
                                            .height(30.dp)
                                            .clickable {
                                                if(imageTakenUri.value != Uri.EMPTY) {
                                                    imageTakenUri.value.toFile().delete()
                                                    imageTakenUri.value = Uri.EMPTY
                                                }
                                            },
                                        contentDescription = "Retake Photo",
                                        contentScale = ContentScale.FillBounds
                                    )
                                    Text(
                                        text="Retake",
                                        modifier = Modifier.padding(top = 8.dp)
                                    )
                                }
                            }
                            Column(
                                horizontalAlignment = Alignment.CenterHorizontally
                            ){
                                Box(
                                    modifier = Modifier
                                        .size(70.dp)
                                        .background(
                                            color = androidx.compose.ui.graphics.Color(0x00ffffff)
                                        ),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painter = painterResource(
                                            id = R.drawable.tick
                                        ),
                                        colorFilter = ColorFilter.tint(androidx.compose.ui.graphics.Color.White),
                                        modifier = Modifier
                                            .width(23.dp)
                                            .height(16.dp)
                                            .clickable {
                                                val uri = imageTakenUri.value
                                                if (uri != null) {
                                                    val imageFile =
                                                }
                                            },
                                        contentDescription = "Retake Photo",
                                        contentScale = ContentScale.FillBounds
                                    )
                                }

                            }
                    }

                }
            }

        }) { innerPadding ->
        AndroidView(modifier = Modifier.fillMaxSize().padding(innerPadding),
            factory = { ctx ->
                //Initialize the PreviewView and configure it
                PreviewView(ctx).apply {
                    layoutParams = LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT)
                    setBackgroundColor(Color.BLACK)
                    scaleType = PreviewView.ScaleType.FILL_START
                    implementationMode = PreviewView.ImplementationMode.COMPATIBLE
                    controller = cameraController
                }.also { previewView ->
                    cameraController.imageCaptureFlashMode = flashMode.value
                    cameraController.cameraSelector = cameraSelector
                }
            },
            onRelease = {
                // Release the camera controler when the composable is removed from the screen
                cameraController.unbind()
            },
            update = {
                cameraController.cameraSelector = cameraSelector
            }
        )

    }

}

private fun takePhoto(cameraController: LifecycleCameraController,
                      context: Context,
                      onImageCatpureed: (uri:Uri) -> Unit
) {
    val imageFile = File.createTempFile(
        SimpleDateFormat(
            "yyyy-MM-dd-HH-mm-ss-SSS",
            Locale.US
        ).format(System.currentTimeMillis()), ".jpg"
    )
    val outputFileOptions = ImageCapture.OutputFileOptions.Builder(imageFile).build()
    val mainExecutor = ContextCompat.getMainExecutor(context)
    cameraController.takePicture(outputFileOptions, mainExecutor, object: OnImageSavedCallback {
        override fun onImageSaved(outputFileResults: ImageCapture.OutputFileResults) {
            val savedUri = Uri.fromFile(imageFile)
            onImageCatpureed(savedUri)
        }

        override fun onError(exception: ImageCaptureException) {
            print("exception arises on saving a captured image in temp file")
        }
    })
}

fun getImageFileInPngFormat(uri: Uri, context: Context) : File {
    var bitmap: Bitmap? = null
    if(Build.VERSION.SDK_INT < 28) {
        bitmap = MediaStore.Images.Media.getBitmap(context.contentResolver, uri)
    } else {
        val source = ImageDecoder.createSource(context.contentResolver, uri)
        bitmap = ImageDecoder.decodeBitmap(source)
    }
    val timeStamp: String = SimpleDateFormat("yyyyMMdd_HHmmss", Locale.getDefault()).format(
        Date()
    )
    val storageDir: File? = context.getExternalFilesDir(null)
    val file = File.createTempFile(
        "PNG_${timeStamp}_",
        ".png",
        storageDir
    )
    FileOutputStream(file).use { out ->
        bitmap?.compress(Bitmap.CompressFormat.JPEG, 100, out)
        out.flush()
    }
    return file
}
