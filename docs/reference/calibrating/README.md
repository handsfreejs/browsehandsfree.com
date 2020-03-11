---
title: Calibrating

image: /browsehandsfree-cover.jpg
description: Check out the different classes that are for styling your handsfree plugins!
---

# Calibrating

Handsfree.js comes with a calibration method, `handsfree.startCalibration()`, that updates `Handsfree.plugins.head.pointer.config.offset.x` and `.y` until the pointer is calibrated to the users head pose. Currently this only works for the face pointer. Here's what the calibration looks like:

After calibration, a `handsfreeCalibrationEnded` event is emitted which you can listen to from other parts of the app (either with `handsfree.on('handsfreeCalibrationEnded')` or `window.addEventListener('handsfreeCalibrationEnded')`)

## Configuration

```js
handsfree = new Handsfree({
  // Represents the calibrator settings
  calibrator: {
    // (optional) The target element to act as the calibrator wrapping div
    target: null,
    // The message to display over the marker, can be HTML
    instructions: 'Point head towards center of circle below',
    // (optional if .target === null, otherwise required) The target element to act as the calibrator target (should be inside target)
    marker: null
  }
})
```

By default, if `handsfree.config.calibrator.target` is null then a calibration overlay is created with the following markup:

```html
<div class="handsfree-calibrator-wrap">
  <p>{{ handsfree.config.calibrator.instructions }}</p>
  <div class="handsfree-calibrator-marker"></div>
</div>
```

To set the instructions that are displayed above the marker, set `handsfree.config.calibrator.instructions`. Or if you prefer, you can pass in an HTML element into `handsfree.config.calibrator.target` and supply the element you'd like to use as a marker into `handsfree.config.calibrator.marker`.

When setting the `.target`, make sure to style it with `{pointer-events: none; opacity: 0}`. When calibrating, this element will receive a `.handsfree-visible` class which fades the calibrator in.
