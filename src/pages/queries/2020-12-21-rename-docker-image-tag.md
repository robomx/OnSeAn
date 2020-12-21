---
templateKey: blog-post
title: Rename Docker image tag
date: 2020-12-21T15:00:42.164Z
description: This post helps to understand how one can rename a docker image tag.
featuredpost: true
featuredimage: /img/apple-touch-icon.png
tags:
  - docker
  - tag
---
You can do it easily using:

Find id using `docker ps`.

`docker image tag <image_id> <new_name>`