---
templateKey: blog-post
title: Run nuxt from cli or app.js
date: 2020-12-27T14:49:59.387Z
description: Now you can easily run a nuxt project using app.js
featuredpost: true
featuredimage: /img/apple-touch-icon.png
tags:
  - nuxtjs
  - nuxt-cli
---

Create `app.js` file and add following content.

```bash
require('child_process').fork(`${__dirname}/node_modules/nuxt/bin/nuxt.js`, [
  'start'
])
```
