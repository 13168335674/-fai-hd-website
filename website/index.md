---
title: '@fai-hd'
hero:
  title: '@fai-hd'
  desc: 📦 一键式开发打包工具
  actions:
    - text: 快速上手 →
      link: /getting-started

footer: Open-source MIT Licensed | Copyright © 2023<br />
---

## 快速使用

```bash
# 安装脚手架
$ pnpm add @fai-hd/hd-sfc-cli -D

# 添加配置文件 hd-sfc-cli.config.js

import { defineConfig } from "@fai-hd/hd-sfc-cli";

export default defineConfig({
  bundler: "esbuild",
  jsConfig: {
    input: "index.mjs",
    output: "index.src.js",
    outputPath: "[origin]",
  },
  cssConfig: {
    extract: true,
    input: "[origin]",
    output: "[name].src.css",
    outputPath: "/css/",
  },
});

# 添加scripts
$ code package.json

"scripts": {
  "dev": "hd-sfc-cli dev",
  "build": "hd-sfc-cli build"
}

# 开发模式
$ pnpm dev

# 开始打包
$ pnpm build
```
