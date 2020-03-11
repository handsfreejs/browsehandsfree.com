---
title: Methods

image: /browsehandsfree-cover.jpg
description: Check out the different methods and helpers that are available to help you create handsfree experiences and assistive tech.
---

# Methods

## Instance Methods

```js
// Start tracking
handsfree.start()

// Stop tracking
handsfree.stop()

// Emit an event to be listened to with handsfree.on
handsfree.emit(eventName, ...args)

// A callback to call when handsfree.emit(eventName) is called
handsfree.on(eventName, cb)
```

## Class Methods

```js
// Add a plugin accessible to all instances
Handsfree.use('pluginName', callback)

// Enable a plugin
Handsfree.enable('pluginName')

// Disable a plugin
Handsfree.disable('pluginName')
```

## Helpers

```js
/**
 * Throttles callback to run timeInMilliseconds
 *
 * @param {function} callback The callback to run
 * @param {Integer} time How many milliseconds to throttle (in other words, run this method at most ever x milliseconds)
 * @param {Object} options {leading: true, trailing: true} @see https://lodash.com/docs/4.17.15#throttle
 */
Handsfree.throttle(callback, time, options)
```
