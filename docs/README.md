---
home: true
heroImage: https://media.giphy.com/media/ihl0vpnBDrrk8X14et/giphy.gif
heroText: Handsfree.js
tagline: A library for working with face pointers, assistive tech, and creative expression 👋
actionText: Get started
actionLink: /reference/
footer: Apache 2.0 Licensed | Copyright © 2019-present Oz Ramos

description: A library for working with face pointers, assistive tech, and creative expression 👋
image: /handsfreejs-cover.jpg
---

## Quickstart

```html
<!DOCTYPE html>
<head>
  <!-- Import styles and Handsfree into global namespace -->
  <script src="https://unpkg.com/handsfree@7.0.3/dist/handsfree.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/handsfree@7.0.3/dist/handsfree.css" />
</head>
<body>
  <!-- Start tracking with enabled models -->
  <button onclick="handsfree.start()">Start Webcam</button>

  <script>
    // Create a new instance of Handsfree (one instance per camera)
    const handsfree = new Handsfree({
      // Enable the face tracker
      weboji: true
    })

    // Create a plugin that logs "face click" events
    handsfree.use('consoleLogger', ({ weboji }) => {
      if (weboji.pointer.state === 'mousedown') {
        console.log(`Clicked at: (${weboji.pointer.x}, ${weboji.pointer.y})`)
        console.log('Clicked on:', weboji.pointer.$target)
      }
    })
  </script>
</body>
```

## Deep Dives

<!-- Features section -->
<div class="features">
  <div class="feature">
    <img src="https://media2.giphy.com/media/ieJF2jqrrDhfxAMCZi/giphy.gif">
    <h2>Face Gestures</h2>
    <p>Use head pose and face gestures to power things like face pointers and assistive tech tools. <a href="https://github.com/jeeliz/jeelizWeboji">Powered by Weboji</a></p>
    <p><button>Get started</button></p>
  </div>
  <div class="feature">
    <img src="https://media1.giphy.com/media/fuEEO5v6Oh5YKBTYa4/giphy.gif">
    <h2>Pose Estimation</h2>
    <p>Use your whole body as an input device to games and art installations. <a href="https://github.com/tensorflow/tfjs-models/tree/master/posenet">Powered by PoseNet</a></p>
    <p><button>Get started</button></p>
  </div>
  <div class="feature">
    <img src="https://media.giphy.com/media/ZZZ7DgmLszJG9UfLOe/source.gif">
    <h2>Hand Gestures</h2>
    <p><b>Coming soon!</b> Use hand gestures to control web components and AR experiences. <a href="https://blog.tensorflow.org/2020/03/face-and-hand-tracking-in-browser-with-mediapipe-and-tensorflowjs.html?linkId=83996111">Powered by Handpose</a></p>
    <p><button disabled>Coming soon!</button></p>
  </div>
</div>
