---
templateKey: blog-post
title: Nuxtjs run using PM2
date: 2020-12-27T14:52:59.446Z
description: pm2 service to manage nuxt application.
featuredpost: false
featuredimage: ""
tags:
  - nuxtjs
  - node
  - pm2
---
Create `ecosystem.config.json`.

```
module.exports = {
  apps: [
    {
      name: 'app_name',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}

```

Now run use`pm2` command.

You can also create `app.js`.

```
require('pm2')
require('child_process').fork(require.resolve('pm2/bin/pm2'), ['start'], {
  stdio: 'inherit'
})
```

