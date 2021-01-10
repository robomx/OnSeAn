---
templateKey: blog-post
title: Strapi deploy on Elastic Beanstalk using Gitlab CI/CD
date: 2021-01-10T07:03:45.641Z
description: Create a Strapi application deployed on AWS Elastic Beanstalk with
  a Gitlab pipeline.
featuredpost: false
tags:
  - strapi
  - beanstalk
  - node-deployment
  - gitlab
---
`Important:` Take initial setup from this StackOverflow answer. <https://stackoverflow.com/a/63730247>

Next,

Create Gitlab pipeline file using -> <https://gist.githubusercontent.com/MexsonFernandes/ecc8b4c3e24e644f27587570c28b7f00/raw/ab421d50d7e0cae0992cc83cab1a59471d2e7a78/.gitlab-ci.yml>.

You need to add following variables in Gitlab CI/CD configurations.

`AWS_ACCESS_KEY_ID`, `AWS_APP_NAME`, `AWS_DEFAULT_REGION`, `AWS_ENV_NAME`, `AWS_SECRET_ACCESS_KEY`