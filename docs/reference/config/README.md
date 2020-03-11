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

  // Whether to run this instance in "client mode": models aren't loaded and no inference
  isClient: false,

  // Represents the video feed and it's debug canvases
  debugger: {
    // Where to inject the debugger into
    target: document.body,
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
    head: {
      enabled: true,
      throttle: 0
    },
    bodypix: {
      enabled: false,
      throttle: 0,
      method: 'segmentPerson',
      debugMethod: 'toMask',
      modelConfig: {
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
      }
    }
  },

  head: {
    morphs: {
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
  }
}

const handsfree = new Handsfree(config)
```

## Examples

```js
// Shift the pointer up by 500 pixels and halve sensitivity
const handsfree = new Handsfree({
  plugin: {
    head: {
      pointer: {
        offset: {
          x: -500
        },
        speed: {
          x: 0.5,
          y: 0.5
        }
      }
    }
  }
})

// Set the div that the video feed is embedded in
const handsfree = new Handsfree({
  debugger: {
    target: document.querySelector('#my-debug-panel')
  }
})
```
