---
title: Getting Started

image: /browsehandsfree-cover.jpg
description: Come learn how to setup Handsfree.js through CDN or through NPM, so that you can get started on making handsfree experiences and assistive tech!
---

# Getting Started

Handsfree.js is a thin wrapper around popular computer vision libraries: we handle the initialization code, which is different from model to model, and provide a single API and "[game loop](https://en.wikipedia.org/wiki/Game_programming#Game_structure)" to help make everything work together.

## Quickstart

The easiest way to get started is to use our CDN, hosted on [unpkg](https://unpkg.com/):

```html
<link rel="stylesheet" href="https://unpkg.com/handsfree@7.0.3/dist/handsfree.css" />
<script src="https://unpkg.com/handsfree@7.0.3/dist/handsfree.js"></script>
```

Additional assets will be fetched from this CDN depending on the specific models you are using. Note that this will add the `Handsfree` class to the global `window` namespace.

---

# Using your own assets

If you'd rather control all assets (eg for using offline or in production), then you can build them yourself. To do so, run the following from our project's root:

    npm run bundle

This will create a folder at `/dist/handsfreejs` which contains the library and assets (models and dependencies). Place this directory anywhere on your server and create a script tag with a reference to the `handsfree.js` file. Handsfree will use the script tags URI to fetch other dependencies in that path, so make sure to leave the build folder structure as is!

```html
<script src="/path/to/handsfree.js"></script>
```

<!-- @TODO Add instructions on how to download Google CDN assets -->

::: warning 📅 Using offline
Currently, the only model that works offline is Weboji. To keep file size low, PoseNet, BodyPix, and HandPose are loaded from Google's CDN, but we'll have instructions on how to download them for offline use soon!
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

I want to take a quick moment to thank everyone who's supported this project so far! A very special thanks goes out to [@Golan](https://twitter.com/golan) for inviting me out to his studio, [The STUDIO for Creative Inquiry at Carnegie Mellon](http://studioforcreativeinquiry.org/) during the [Spring of 2019](https://www.flickr.com/photos/creativeinquiry/albums/72157703188612302). It was during this residency that I was encouraged to begin integrating Handsfree.js into different libraries and where I had a chance to use Handsfree.js with a real UR5 robot!

Another special thanks goes out to [@AnilDash](https://twitter.com/anildash) for sponsoring me during Winter 2018. Also a thank you to [The School of AI](https://twitter.com/SchoolOfAIOffic) for the [2018 Fellowship](https://www.youtube.com/watch?v=CJDpF4xUieY&t=58). And a very special thanks to [Jess Holbrook](https://twitter.com/jessscon) from Google Pair for driving all the way out to meet me and helping kickstart this project with a powerful Alienware computer!

Thanks also to everyone who's supported me on Patreon, GoFundMe, and through Twitter over the years!
