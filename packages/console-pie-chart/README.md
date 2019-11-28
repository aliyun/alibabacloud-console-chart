---
name: console-pie-chart
zhName: 饼图
---

# 饼图API

# 引入方式

```javascript
import { ConsolePieChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本使用

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

### autoSort: Boolean
是否需要按照从大到小的顺序排序

### cycle: Boolean
是否将饼状图转变为环状图

### innerRadius: Number
内圈半径，需要配合`cycle`使用

### select: Boolean
是否支持选中态

### selectData: String
选中的数据

### colors: String|Array
自定义颜色

## 数据列配置
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| data | 数据 | Array | - | - |
