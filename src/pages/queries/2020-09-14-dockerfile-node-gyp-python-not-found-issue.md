---
templateKey: blog-post
title: Dockerfile Node GYP Python not found issue
date: 2020-09-14T16:28:47.759Z
description: " "
featuredpost: true
featuredimage: /img/capture.png
tags:
  - nodejs
  - docker
---
**Error Description**

`info sharp Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.9.0/libvips-8.9.0-linuxmusl-x64.tar.gz
prebuild-install WARN install No prebuilt binaries found (target=14.10.1 runtime=node arch=x64 libc=musl platform=linux)`
`gyp ERR! find Python 
gyp ERR! find Python Python is not set from command line or npm configuration
gyp ERR! find Python Python is not set from environment variable PYTHON
gyp ERR! find Python checking if "python" can be used
gyp ERR! find Python - "python" is not in PATH or produced an error
gyp ERR! find Python checking if "python2" can be used
gyp ERR! find Python - "python2" is not in PATH or produced an error
gyp ERR! find Python checking if "python3" can be used
gyp ERR! find Python - "python3" is not in PATH or produced an error
gyp ERR! find Python
gyp ERR! find Python 
gyp ERR! find Python You need to install the latest version of Python.
gyp ERR! find Python Node-gyp should be able to find and use Python. If not,
gyp ERR! find Python you can try one of the following options:
gyp ERR! find Python - Use the switch --python="/path/to/pythonexecutable"
gyp ERR! find Python   (accepted by both node-gyp and npm)
gyp ERR! find Python - Set the environment variable PYTHON
gyp ERR! find Python - Set the npm configuration variable python:
gyp ERR! find Python   npm config set python "/path/to/pythonexecutable"
gyp ERR! find Python For more information consult the documentation at:
gyp ERR! find Python https://github.com/nodejs/node-gyp#installation
gyp ERR! find Python 
gyp ERR! find Python
gyp ERR! configure error
gyp ERR! stack Error: Could not find any Python installation to use
gyp ERR! stack     at PythonFinder.fail (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:307:47)
gyp ERR! stack     at PythonFinder.runChecks (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:136:21)
gyp ERR! stack     at PythonFinder.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:179:16)
gyp ERR! stack     at PythonFinder.execFileCallback (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:271:16)
gyp ERR! stack     at exithandler (child_process.js:315:5)
gyp ERR! stack     at ChildProcess.errorhandler (child_process.js:327:5)
gyp ERR! stack     at ChildProcess.emit (events.js:314:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:274:12)
gyp ERR! stack     at onErrorNT (internal/child_process.js:464:16)
gyp ERR! stack     at processTicksAndRejections (internal/process/task_queues.js:80:21)
gyp ERR! System Linux 4.19.104-microsoft-standard
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /node_modules/sharp
gyp ERR! node -v v14.10.1
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules/strapi/node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN notsup Unsupported engine for watchpack-chokidar2@2.0.0: wanted: {"node":"<8.10.0"} (current: {"node":"14.10.1","npm":"6.14.8"})
npm WARN notsup Not compatible with your version of node/npm: watchpack-chokidar2@2.0.0
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules/watchpack-chokidar2/node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})`

``

**Solution Ref:** <https://lifesaver.codes/answer/node-7-9-alpine-unable-to-build-package-due-python-is-not-installed>