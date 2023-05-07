---
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 环境准备

确保正确安装 [Node.js](https://nodejs.org/en) 且版本为 14+ 即可。

```bash
$ node -v
v14.19.1
```

## 配置文件

在项目根目录下新建配置文件。
脚手架支持以下格式: `hd-sfc-cli.config.js, hd-sfc-cli.config.ts, config/hd-sfc-cli.config.ts, config/hd-sfc-cli.config.js`

> 注意: 如果配置文件为 `.ts` 格式，则该项目下需要 `tsconfig.json`

```typescript
import { defineConfig } from '@fai-hd/hd-sfc-cli';

export default defineConfig({
  bundler: 'esbuild',
  jsConfig: {
    input: 'index.mjs',
    output: 'index.src.js',
    outputPath: '[origin]',
  },
  cssConfig: {
    extract: true,
    input: '[origin]',
    output: '[name].src.css',
    outputPath: '/css/',
  },
  tsConfig: {
    useTs: true,
    disableTypeCheck: true,
    rt2PluginOpt: {},
  },
  reloadConfig: {
    port: 5000,
    useHMR: true,
  },
  chokidarConfig: {
    rollupInputFileGlob: 'res/**/index.mjs',
    needReloadFileGlob: ['etc/adi.conf'],
  },
  assetsConfig: {
    jspName: 'jspName',
    jspPath: 'jspPath',
    jspStrFlag: 'jspStrFlag',
    jspStrFlagAsync: 'jspStrFlagAsync',

    incName: 'incName',
    incPath: 'incPath',
    incStrFlag: 'incStrFlag',
  },
  alias: { '@': 'res/js' },
  eol: {
    flag: 'lf',
    fileRegex: /\.src\.(css|js)$/,
  },
});
```

## 配置脚本

```bash
# 安装脚手架
$ pnpm add @fai-hd/hd-sfc-cli -D

# 添加配置文件

# 添加scripts
$ code package.json

"scripts": {
  "dev": "hd-sfc-cli dev",
  "build": "hd-sfc-cli build",
  "build:files": "hd-sfc-cli build:files",
  "ver": "hd-sfc-cli -v",
}

# 开发模式
$ pnpm dev

# 开始打包
$ pnpm build

# 打包部分文件
$ pnpm build:files entry1 entry2 ...

# 查看版本
$ pnpm ver
```
