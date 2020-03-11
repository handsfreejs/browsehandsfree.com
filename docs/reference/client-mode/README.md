---
title: Client Mode

image: /browsehandsfree-cover.jpg
description: Learn what client mode is and how you can use it to use Handsfree.js in environments outside the browser
---

# Client Mode

Client Mode is an experimental feature that allows you to run inference in one environment and execute plugins in another. Some use cases include:

- Keeping `getUserMedia` stream isolated (Server) from where the logic is running (Client)
- For browser extensions, loading dependencies and models just once in a background page (Server), and loading and running just the plugins within tabs (Clients)

### isClient: true

```js
handsfree = new Handsfree({
  isCLient: true
})
```

- Doesn't load dependencies
- You'll manually need to update `handsfree.head` (eg, from server)
- You'll also need to manually call `handsfree.runOnFrame()` to run all plugin `onFrame` callbacks
