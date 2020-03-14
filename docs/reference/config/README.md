---
title: Config

image: /browsehandsfree-cover.jpg
description: Come learn how to configure Handsfree.js for use with head and eye tracking, segmentation and pose estimation, eye tracking and more (as they're implemented 😅)!
---

# Config

The following is a list of possible config options to pass into `new Handsfee()`. The values listed below are the defaults, or skip to the end for some example uses.

## Config Defaults

```js
let config = {
  // Whether Handsfree should automatically start after instantiation
  autostart: false,

  // Represents the video feed and it's debug canvases
  feedback: {
    // The DOM element to inject the video/canvas feedback elements
    $target: document.body,
    enabled: false
  },

  // Represents the calibrator settings
  calibrator: {
    // (optional) The target element to act as the calibrator wrapping div
    target: null,
    // The message to display over the marker, can be HTML
    instructions: 'Point head towards center of circle below',
    // (optional if .target === null, otherwise required) The target element to act as the calibrator target (should be inside target)
    marker: null
  },

  models: {
    /**
     * Head tracking model
     */
    weboji: {
      enabled: true,

      // Run inference every this many milliseconds (0 to run as fast as possible)
      throttle: 0,

      // Represents the calibrator settings
      calibrator: {
        // (optional) The target element to act as the calibrator wrapping div
        target: null,
        // The message to display over the marker, can be HTML
        instructions: 'Point head towards center of circle below',
        // (optional if .target === null, otherwise required)
        // - The target element to act as the calibrator target (should be inside target)
        marker: null
      },

      morphs: {
        // The amount each gesture must be morphed before
        // handsfree.weboji.state[stateName] === true
        threshold: {
          smileRight: 0.7,
          smileLeft: 0.7,
          browLeftDown: 0.8,
          browRightDown: 0.8,
          browLeftUp: 0.8,
          browRightUp: 0.8,
          eyeLeftClosed: 0.4,
          eyeRightClosed: 0.4,
          mouthOpen: 0.3,
          mouthRound: 0.8,
          upperLip: 0.5
        }
      }
    },

    /**
     * Full body pose estimation model
     */
    posenet: {
      enabled: false,

      // Run inference every this many milliseconds (0 to run as fast as possible)
      throttle: 0,

      // The model architecture
      // 'MobileNetV1' === Good for mobile devices or slow internet connections. Fast but less accurate
      // 'ResNet50' === Good for native applications. Slower but more accurate
      architecture: 'MobileNetV1',

      // The image scale factor, between 0.2 and .5
      // Determines how much to resize the image by before feeding into neural network
      imageScaleFactor: 0.3,

      // Specifies the output stride of the PoseNet model
      // Smaller values are faster but less accurate
      // 16 and 32 are supported for the ResNet
      // 8, 16, 32 are supported for the MobileNetV1
      outputStride: 16,

      // Whether to flip the image before infering
      flipHorizontal: false,

      // The minimum confidence needed before a detection occurs
      minConfidence: 0.5,

      // Maximum number of poses to detects. Slower for 2, and slightly slower for every subsequent
      maxPoseDetections: 1,

      // Only return instance detections that have root part score greater or equal to this value
      scoreThreshold: 0.5,

      // Non-maximum suppression part distance
      // Two parts suppress each other if they are less than nmsRadius pixels away
      nmsRadius: 20,

      // Whether to detect 1 or multiple poses. 'single' or 'multiple'
      detectionType: 'single',

      // Can be one of 161, 193, 257, 289, 321, 353, 385, 417, 449, 481, 513, and 801
      // Specifies the size the image is resized to before it is fed into the PoseNet model
      // Larger values are slower but more accurate
      inputResolution: 513,

      // Only used by MobileNetV1. Valid values are: 1.01, 1.0, 0.75, or 0.50
      // The float multiplier for the depth (number of channels) for all convolution ops
      // Larger values are slower but more accurate
      multiplier: 0.75,

      // This argument controls the bytes used for weight quantization
      // A value of 4 leads to a 45MB model size reduction
      // 1 byte per float. Leads to lower accuracy and 4x model size reduction (~22MB).
      quantBytes: 2,
    },

    /**
     * Plugin overrides
     */
    plugin: {
      `${pluginName}`: {
        key: value
      }
    }
  }
}

const handsfree = new Handsfree(config)
```

## Examples

### Enable just the Weboji (head) model with defaults

```js
handsfree = new Handsfree({ weboji: true })
```

### Only run Weboji every 50ms

```js
handsfree = new Handsfree({
  weboji: {
    enabled: true,
    throttle: 50
  }
})
```

### Run Weboji and PoseNet, but throttle PoseNet with ResNet50

```js
handsfree = new Handsfree({
  weboji: true,
  posenet: {
    enabled: true,
    throttle: 50,
    architecture: 'ResNet50'
  }
})
```

### Run Weboji and configure the faceClick plugin to click with a wink

```js
handsfree = new Handsfree({
  weboji: true,
  plugin: {
    faceClick: {
      morphs: {
        // Disable right smile
        0: 0,
        // Disable left smile
        1: 0,
        // Click with right blink
        8: 0.35,
        // Click with left blink
        9: 0.35
      }
    }
  }
})
```
