---
title: Getting Started

image: /browsehandsfree-cover.jpg
description: Come learn how to setup Handsfree.js through CDN or through NPM, so that you can get started on making handsfree experiences and assistive tech!
---

# Getting Started

Handsfree.js is a thin wrapper around popular computer vision libraries: we handle the initialization code, which is different from model to model, and provide a single API and "[game loop](https://en.wikipedia.org/wiki/Game_programming#Game_structure)" to create "face pointers", handsfree interfaces, and handsfree creative coding controllers.

## Quickstart

The easiest way to get started is to use our CDN, hosted on [unpkg](https://unpkg.com/):

<!-- prettier-ignore-start -->
```html
<script src="https://unpkg.com/handsfree@7.0.3/dist/handsfree.js"></script>
```
<!-- prettier-ignore-end -->

Additional assets will be fetched from this CDN depending on the specific models you are using. This will add the `Handsfree` class to the global `window` namespace.

---

# Using your own assets

If you'd rather control all assets (eg for using offline or in production), then you can build them yourself. To do so, run the following from our project's root:

    npm run bundle

This will create a folder at `/dist/handsfreejs` which contains the library and assets (models and dependencies). Place this directory anywhere on your server and then simply link to the `handsfree.js`.

```html
<script src="/path/to/handsfree.js"></script>
```

<!-- @TODO Add instructions on how to download Google CDN assets -->

::: warning 📅 Using offline
Currently, the only model that works offline is Weboji. PoseNet and BodyPix are loaded from Google's CDN, but we'll have instructions on how to download them for offline use soon!
:::

## Using from Node

If you're looking to bundle Handsfree.js as a dependency to your project, first add Handsfree.js to your project:

```bash
npm install handsfree
# or
yarn handsfree
```

Then, `import` or `require` Handsfree:

```js
import Handsfree from 'handsfree'
```

<!-- @TODO Test this -->

::: warning 📂 Copy the assets folder
To keep initial load times fast, models and large dependencies are loaded only as needed. If you plan on bundling Handsfree with your own project, you'll need to copy the assets folder located in `/node_modules/handsfree/assets/` into your public folder.

Then when instantiating, set the `assetsPath` to match your public folder:

```js
const handsfree = new Handsfree({ assetsPath: '/path/to/assets' })
```

:::

---

# Acknowledgements
