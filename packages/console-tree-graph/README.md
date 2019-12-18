---
name: console-tree-graph
zhName: 树图
---

# 雷达图API

# 引入方式

```javascript
import { ConsoleRadarChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本使用

[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 面积图

[MDXInstruction:importDemo:Area](./demo/Area.tsx)

## 多组数据

[MDXInstruction:importDemo:Multi](./demo/Multi.tsx)

## 自定义坐标轴

[MDXInstruction:importDemo:Axis](./demo/Axis.tsx)

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

### symbol: Boolean
是否展示数据点

### smooth: Boolean
显示成光滑曲线

### area: Boolean
是否显示面积雷达图

### stack: Boolean
是否显示堆栈图, 仅在`area=true`时生效

### radius: Number
设置极坐标系的半径，可控制显示图形的大小

## 数据列配置

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| data | 数据 | - | - | - |
| color | 自定义当前数据列颜色 | String | 主题`color_24` | - |
