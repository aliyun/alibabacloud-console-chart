---
name: console-rose-chart
zhName: 玫瑰图
---

# 玫瑰图API

# 引入方式

```javascript
import { ConsoleRoseChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本用法

[MDXInstruction:importDemo:basic](./demo/basic.tsx)

# 配置 Config

## 通用配置

| 属性 | 说明 |
| --- | --- |
| padding | 配置绘图内边距 |
| xAxis | 配置x轴 |
| yAxis | 配置y轴 |
| legend | 配置图例 |
| guide | 配置辅助元素 |
| tooltip | 配置提示信息 |
| label | 配置图形文本 |
| size | 配置自定义大小 |
| style | 配置自定义样式 |

## 专属配置

# 数据列配置

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| data | 数据 | Array | - | - |
