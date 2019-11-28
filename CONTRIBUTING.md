# CONTRIBUTING

## 环境准备

```bash
git clone git@github.com:aliyun/alibabacloud-console-chart.git

cd alibabacloud-console-chart

yarn
```

## 项目初始化

在项目根目录下执行命令：

```bash
yarn build
```

因为需要构建每个源码包，所以速度会比较慢，请稍等

## demo 预览

在项目根目录执行命令：

```bash
yarn dev
```

可打开: `http://localhost:9001`  查看demo 情况。每个demo在`/packages`目录下各自对应目录下的`demo`目录。

## 项目开发

建议单个项目开发测试，进入到指定的图表子目录

```bash
cd packages/console-***-chart

yarn watch
```

开启 watch，这时候所有的改动都会被 demo 服务感知，可实时查看更改后的效果。

## 文档编写


## 发包

项目根目录执行命令

```bash
lerna publish
```
