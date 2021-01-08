---
templateKey: blog-post
title: Run nuxt from cli or app.js
date: 2020-12-27T14:49:59.387Z
description: Now you can easily run a nuxt project using app.js
featuredpost: false
featuredimage: ""
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
