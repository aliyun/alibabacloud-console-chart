---
name: quick-start
zhName: 快速开始
sort: 1
---

# 入门指南

# 使用说明

**Console Chart**  图表库采用`lerna`包管理工具开发，每种类型的图表单独放在一个包中，同时提供了一个图表库集合包`@alicloud/console-chart`，你可以使用以下方式使用图表。


## 安装

```bash
npm install @alicloud/console-chart --save
```

## 使用
```javascript
import { ConsoleLineChart } from '@alicloud/console-chart';
const data = [];
const config = {};

<ConsoleLineChart data={data} config={config} />
```

