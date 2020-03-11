---
title: The Head

image: /browsehandsfree-cover.jpg
description: Come learn how to use the Head tracker (through Jeeliz FaceFilter) to capture head pose, face morphs, and gestures from one or many users!
---

# The Head

[Head tracking via Weboji](https://github.com/jeeliz/jeelizWeboji) is enabled by default, but can be disabled during instantiation:

```js
handsfree = new Handsfree({
  models: {
    head: { enabled: false }
  }
})
```

## Rotation

`handsfree.head.rotation` is an array containing the heads `[pitch, yaw, roll]` in radians:

```js
// Pitch
handsfree.head.rotation[0]

// Yaw
handsfree.head.rotation[1]

// Roll
handsfree.head.rotation[2]
```

To convert from radians to degrees, use the following formula:

```js
degrees = (handsfree.head.rotation[0] * 180) / Math.PI
```

## Pointer

Included with Handsfree is a plugin called `head.pointer`, located in `/src/assets/handsfree/plugins/head/pointer.js`. This plugin calculates where on the screen the user is pointing their head towards and places `div#handsfree-pointer` there. The properties of this div are available via the following:

```js
handsfree.head.pointer = {
  // The inferred pointer position
  x: 0,
  y: 0,
  // The pointer DIV element
  $el: null,
  // The pointer state ('mouseDown', 'mouseDrag', 'mouseUp', '')
  state: ''
}
```

## Morphs

The following morph values are available on `handsfree.head.morphs`. These values range from 0 (not activated) to 1 (fully activated):

```
0: smileRight → closed mouth smile right
1: smileLeft → closed mouth smile left
2: eyeBrowLeftDown → eyebrow left frowned
3: eyeBrowRightDown → eyebrow right frowned
4: eyeBrowLeftUp → eyebrow left up (surprised)
5: eyeBrowRightUp → eyebrow right up (surprised)
6: mouthOpen → mouth open
7: mouthRound → mouth round
8: eyeRightClose → close right eye
9: eyeLeftClose → close left eye
10: mouthNasty → mouth nasty (upper lip raised)
```

## States

In addition to morphs, we've added a set of active states which are either `true` or `false`. A `true` state occurs when the corresponding `config.head.state` threshold is met:

```js
handsfree.head.state = {
  // Smiles to the right
  smileRight,
  // Smiles to the left
  smileLeft,
  // Smiles in both directions
  smile,
  // Smiles exactly to the right or the left, but not both
  smirk,
  // When both lips are brought in, as in a kissing face
  pursed,

  // Left eyebrow is up
  browLeftUp,
  // Right eyebrow is up
  browRightUp,
  // Left eyebrow is down
  browLeftDown,
  // Right eyebrow is down
  browLeftDown,
  // When both eyebrows are up
  browsUp,
  // When both eyebrows are down
  browsDown,
  // When one eyebrow is up and the other is down
  browsUpDown,

  // Left eye is closed
  eyeLeftClosed,
  // Right eye is closed
  eyeRightClosed,
  // When both eyes are closed
  eyesClosed,

  // When mouth is closed
  mouthClosed,
  // When mouth is open
  mouthOpen
}
```
