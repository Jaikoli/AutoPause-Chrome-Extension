<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoPause Chrome Extension</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 20px;
        }
        h1 {
            color: #4CAF50;
        }
        h2 {
            color: #333;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }
        li {
            margin-bottom: 10px;
        }
        .feature, .install, .usage, .troubleshooting, .support, .license {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        .feature {
            background-color: #f9f9f9;
        }
        .install {
            background-color: #f0f8ff;
        }
        .usage {
            background-color: #e6ffe6;
        }
        .troubleshooting {
            background-color: #fff3e6;
        }
        .support {
            background-color: #e6f7ff;
        }
        .license {
            background-color: #f5f5f5;
        }
        code {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            padding: 2px 4px;
            border-radius: 3px;
        }
        a {
            color: #4CAF50;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<h1>AutoPause Chrome Extension</h1>

<div class="feature">
    <h2>Features</h2>
    <ul>
        <li><strong>Automatic Video Control:</strong> Pauses YouTube videos when the page is hidden and resumes playback when visible.</li>
        <li><strong>Seamless Integration:</strong> Automatically injects scripts into YouTube video pages.</li>
        <li><strong>Background Functionality:</strong> Operates efficiently in the background.</li>
        <li><strong>Effortless Activation:</strong> Applies functionality on tab activation or page updates.</li>
        <li><strong>Optimized Multitasking:</strong> Pauses videos when switching tabs or apps 🌐🛑, resumes when returning 📺🔄🎥.</li>
    </ul>
</div>

<div class="install">
    <h2>How to Install</h2>
    <ol>
        <li><strong>Download the Extension:</strong> Download the extension files or clone the repository.</li>
        <li><strong>Open Chrome Extensions Page:</strong> Go to <code>chrome://extensions/</code> in your Chrome browser.</li>
        <li><strong>Enable Developer Mode:</strong> Toggle the <strong>Developer mode</strong> switch at the top right of the page.</li>
        <li><strong>Load the Extension:</strong> Click on <strong>Load unpacked</strong>. Select the directory where you downloaded or cloned the extension files.</li>
        <li><strong>Verify Installation:</strong> The <strong>AutoPause</strong> extension should now appear in your list of installed extensions.</li>
    </ol>
</div>

<div class="usage">
    <h2>How to Use</h2>
    <ol>
        <li><strong>Navigate to YouTube:</strong> Open a YouTube video in your Chrome browser.</li>
        <li><strong>Switch Tabs or Applications:</strong> The extension will automatically pause the video when you switch to another tab or application.</li>
        <li><strong>Return to the Video Tab:</strong> The video will resume playback automatically when you return to the YouTube video tab.</li>
    </ol>
</div>

<div class="troubleshooting">
    <h2>Troubleshooting</h2>
    <ul>
        <li><strong>Extension Not Working:</strong> Ensure that the extension is enabled on the <code>chrome://extensions/</code> page and that you have granted necessary permissions.</li>
        <li><strong>Script Injection Issues:</strong> Verify that the content script is being injected correctly by checking the console for errors.</li>
    </ul>
</div>

<div class="support">
    <h2>Support</h2>
    <p>For support or questions, please contact <a href="mailto:contact.kolijai@gmail.com">contact.kolijai@gmail.com</a>.</p>
</div>

<div class="license">
    <h2>License</h2>
    <p>This extension is licensed under the <a href="LICENSE">MIT License</a>.</p>
</div>

</body>
</html>
