---
nav:
  title: 配置
  order: 2
toc: menu
---

# 配置

## bundler

- Type: `String`
- Default: `rollup`
- Enum: `rollup` | `esbuild`

选择的打包器。

## jsConfig

Type: `Object`

JavaScript 文件的配置对象。

### jsConfig.input

- Type: `String`
- Example: `"res/js/index.mjs"`

输入文件路径。

### jsConfig.output

- Type: `String`
- Example: `"index.src.js"`

输出文件名。

### jsConfig.outputPath

- Type: `String`
- Example: `"res/js/"`
- Example: `"[origin]"`

输出目录路径。

## cssConfig

Type: `Object`

CSS 文件的配置对象。

### cssConfig.extract

- Type: `Boolean`
- Default: `true`

是否将 CSS 提取到单独的文件中。

### cssConfig.input

- Type: `String`
- Example: `"[origin]"`

输入文件路径。

### cssConfig.output

- Type: `String`
- Example: `"[name].src.css"`

输出文件名。

### cssConfig.outputPath

- Type: `String`
- Example: `"res/css/"`

输出目录路径。

## tsConfig

Type: `Object`

TypeScript 编译器的配置对象。

### tsConfig.useTs

- Type: `Boolean`
- Default: `false`

是否使用 TypeScript 编译器。

### tsConfig.disableTypeCheck

- Type: `Boolean`
- Default: `true`

是否禁用检查。

### tsConfig.rt2PluginOpt

- Type: `Object`
- Example: `https://www.npmjs.com/package/rollup-plugin-typescript2`

Rollup TypeScript 2 插件的选项。

## reloadConfig

Type: `Object`

重新加载服务器的配置对象。

### reloadConfig.port

- Type: `Number`
- Default: `5000`

服务器端口号。

### reloadConfig.useHMR

- Type: `Boolean`
- Default: `false`

是否开启热更新钩子。

## chokidarConfig

Type: `Object`

Chokidar 文件监视器的配置对象。

### chokidarConfig.rollupInputFileGlob

- Type: `String`

匹配 Rollup 打包器输入文件的 glob 模式。

### chokidarConfig.needReloadFileGlob

- Type: `Array`
- Example: `["src/**/*.html", "src/**/*.php"]`

匹配需要触发重新加载的文件的 glob 列表。

## assetsConfig

Type: `Object`

资源的配置对象。

### assetsConfig.jspName

- Type: `String`
- Example: `"index.jsp"`

JSP 文件名。

### assetsConfig.jspPath

- Type: `String`
- Example: `"res/jsp/"`

JSP 文件的输出目录路径。

### assetsConfig.jspStrFlag

- Type: `String`

同步 JSP 包含的字符串标志。

### assetsConfig.jspStrFlagAsync

- Type: `String`

异步 JSP 包含的字符串标志。

### assetsConfig.incName

- Type: `String`

inc 文件名。

### assetsConfig.incPath

- Type: `String`

inc 文件路径。

### assetsConfig.incStrFlag

- Type: `String`

inc 文件的字符串标志。

## alias

- Type: `Object`
- Default: `{}`

路径别名对象。

## eol

Type: `Object`

换行符配置对象。

### eol.flag

- Type: `String`
- Default: `lf`
- Enum: `crlf` | `lf` | `auto`

要使用的换行符标志。

### eol.fileRegex

- Type: `RegExp`
- Default: `/\.(src|test)\.(css|js)$/`

匹配要应用换行符转换的文件的正则表达式模式。
