# CONTRIBUTING

## 环境准备

```bash
git clone git@github.com:aliyun/alibabacloud-console-chart.git

cd root-package

yarn
```

## demo 预览

项目 demo 放置在每个图表  子目录中， 在项目根目录执行命令：

```bash
yarn build
yarn dev
```

可打开: http://localhost:9001 查看 demo 情况

## 项目开发

建议单个项目开发测试，进入到指定的图表子目录

```bash
cd packages/console-***-chart

yarn watch
```

开启 watch，这时候所有的改动都会被 demo 服务感知，可实时查看更改后的效果。

## 发包

项目根目录执行命令

```bash
lerna publish
```
