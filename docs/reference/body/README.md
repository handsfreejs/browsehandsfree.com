---
title: The Body

image: /browsehandsfree-cover.jpg
description: Come learn how to use TensorFlow's BodyPix model within Handsfree.js to get user segmentation and body pose estimation!
---

# The Body

[Body pose and segmentation via BodyPix](https://github.com/tensorflow/tfjs-models/tree/master/body-pix) is disabled by default, but can be enabled during instantiation:

```js
handsfree = new Handsfree({
  models: {
    bodypix: {
      enabled: true,
      // The inference method to use: ['segmentPerson', 'segmentPersonParts', 'segmentMultiPerson', 'segmentMultiPersonParts']
      method: 'segmentPerson',
      // The method to use to display debugging: ['toMask', 'toColoredPartMask']
      debugMethod: 'toMask',
      // @see https://github.com/tensorflow/tfjs-models/tree/master/body-pix#loading-the-model
      modelConfig: {
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
      }
    }
  }
})
```

## Poses

`handsfree.body.pose` and `handsfree.body.poses` each contain pose information. `handsfree.body.poses` is an array of poses (one for each tracked person) and `handsfree.body.pose === handsfree.body.poses[0]`. Each pose contains the following:

```js
handsfree.body.pose ===
  {
    score: NUMBER,
    keypoints: [
      {
        part: STRING,
        position: { x, y },
        score: NUMBER
      }
    ]
  }
```

Here, `handsfree.body.pose.score` represents how confident we are that there is a full person in the image. Each of the 17 keypoints represent a body part:

```bash
0	nose
1	leftEye
2	rightEye
3	leftEar
4	rightEar
5	leftShoulder
6	rightShoulder
7	leftElbow
8	rightElbow
9	leftWrist
10	rightWrist
11	leftHip
12	rightHip
13	leftKnee
14	rightKnee
15	leftAnkle
16	rightAnkle
```

`handsfree.body.pose.keypoints[n].position` refer to which pixel on the canvas/video that body part is located at, with `handsfree.body.pose.keypoints[n].score` representing how confident we are that it's there.

## Body part helpers

To make accessing body parts easier, the following are available:

```js
handsfree.body.nose
handsfree.body.nose.x
handsfree.body.nose.y

handsfree.body.leftEye
handsfree.body.leftEye.x
handsfree.body.leftEye.y

...

handsfree.body.rightAnkle
handsfree.body.rightAnkle.x
handsfree.body.rightAnkle.y
```

## Use within a plugin

```js
Handsfree.use('bodypixLogger', ({ body }) => {
  console.log('Score: ', body.pose.score)
})
```
