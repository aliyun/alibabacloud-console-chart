# CONTRIBUTING

## 命令

### 环境准备

```bash
git clone git@github.com:aliyun/alibabacloud-console-chart.git

cd alibabacloud-console-chart

yarn
```

### 项目初始化

在项目根目录下执行命令：

```bash
yarn build
```

因为需要构建每个源码包，所以速度会比较慢，请稍等

### demo 预览

在项目根目录执行命令：

```bash
yarn dev
```

可打开: `http://localhost:9001`  查看demo 情况。每个demo在`/packages`目录下各自对应目录下的`demo`目录。

### 项目开发

建议单个项目开发测试，进入到指定的图表子目录

```bash
cd packages/console-***-chart

yarn watch
```

开启 watch，这时候所有的改动都会被 demo 服务感知，可实时查看更改后的效果。

### 文档编写

进入项目根目录，执行以下命令即可预览文档网站：
```bash
yarn site:dev
```

将编写好的文档推动到Github Pages上：
```bash
yarn site:push
```

### 发包

项目根目录执行命令

```bash
lerna publish
```

## 代码仓库组织结构

本仓库使用 yarn workspace + lerna 进行管理，是 monorepo 的结构。
将本仓库克隆到本地以后，执行`yarn build`即可完成项目的初始化。

> 初始化耗时较长，因为需要将所有 package 都构建一遍。

- 图表组件：在`packages/`目录下。使用 webpack 来构建开发环境，进入`packages/console-xx-chart`目录并执行`yarn run watch`来开启 watch，这时候所有的改动都会被 demo 服务感知，可实时查看更改后的效果。
- 文档站点：在`site`目录下。
- 开发指南：原文放在`docs`目录下（比如本指南）。开发指南会被`site`项目打包，在文档站点中展示。

## 所有开发期所需的依赖都安装在根目录

新增图表组件时注意：**所有开发期所需的依赖都安装在根目录中**，从而不需要每个子目录都维护一份自己的开发依赖，做到统一管理、升级。

## 开发工具

所有`package.json`都已经配置好`scripts`，新增业务组件时请仿照已有`package.json`的格式。

- 图表组件：
  - 使用 typescript 开发
  - 使用 storybook 作为开发环境
  - README 使用[mdx](https://mdxjs.com/)来编写，并被文档站打包渲染。在 mdx 中可以引入 storybook 的示例，以及引用源码中的类型、注释信息作为 API 文档
  - `yarn run dev`启动开发环境
- 文档站：使用 gatsbyjs 进行开发。从而文档站是完全静态化的，所有数据在构建期间就被收集（从仓库中），在运行期间无需服务端提供数据

## PR 贡献者必须签署 CLA 协议

在提交 PR 以后会出现一个 CLA 协议让提交者签署，未签署 CLA 协议的 PR 不会被合并。
