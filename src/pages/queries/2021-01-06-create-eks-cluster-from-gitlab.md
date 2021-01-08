---
templateKey: blog-post
title: Create eks cluster from Gitlab
date: 2021-01-06T17:24:47.542Z
description: This post will give some insight while creating eks cluster from Gitlab.
featuredpost: false
featuredimage: ""
tags:
  - gitlab
  - eks
  - k8s
---
Create role using inline policy from below link.

https://docs.gitlab.com/ee/user/project/clusters/add_eks_clusters.html#new-eks-cluster

Next is to add `AmazonEKSClusterPolicy` in role policy.



Now go to Gitlab and integrate Kubernetes.