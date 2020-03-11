---
title: Properties

image: /browsehandsfree-cover.jpg
description: Check out the different properties available on your handsfree instance
---

# Properties

The following properties are available on your `handsfree = new Handsfree()` instance:

```js
// The original config object passed during instantiation
handsfree._config
// The cleaned config object with their defaults
handsfree.config

// Number of instances
Handsfree.numInstances = 0
// Instance id (the first instance is 1, the second is 2, and so on)
handsfree.id

// document.currentScript as run from inside Handsfree (used for calling dependencies)
Handsfree.libSrc

// Contains the JEELIZ tracker library once it's been injected
handsfree.trackerSDK = null

// Whether we're tracking or not
handsfree.isStarted = false

// Contains a collection of callbacks to call on every frame
handsfree.plugins = []
```
