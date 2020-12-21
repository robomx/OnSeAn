---
templateKey: blog-post
title: kill ports in Windows
date: 2020-12-21T16:38:34.580Z
description: How to kill port in windows OS
featuredpost: true
featuredimage: /img/apple-touch-icon.png
tags:
  - ports
  - windows
  - kill-port
---
Check for PID.

`netstat -ano | findstr :<port>`

Kill port.

`taskkill/pid 10624 /F`