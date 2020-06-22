---
name: console-line-chart
zhName: 折线图
---

# 线图API

# 引入方式

```javascript
import { ConsoleLineChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本折线图

[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 多组数据

[MDXInstruction:importDemo:Multi](./demo/Multi.tsx)

## 自定义X轴label

[MDXInstruction:importDemo:XLabel](./demo/XLabel.tsx)

## 自定义x轴时间刻度间距

通过传入`tickInterval`字段，来配置坐标轴上每个刻度之间的差值大小。注意：如果是`type`设置为`time`的话，`tickInterval`字段的值必须是时间戳（毫秒）。

[MDXInstruction:importDemo:XAxisTickInterval](./demo/XAxisTickInterval.tsx)

## 动态显示X轴

[MDXInstruction:importDemo:XAxisAsync](./demo/XAxisAsync.tsx)

## 设置双轴

[MDXInstruction:importDemo:DoubleAxis](./demo/DoubleAxis.tsx)

## 配置顶部单位

[MDXInstruction:importDemo:Unit](./demo/Unit.tsx)

## 设置光滑曲线

[MDXInstruction:importDemo:Smooth](./demo/Smooth.tsx)

## 线条带点

[MDXInstruction:importDemo:Dot](./demo/Dot.tsx)

## 面积堆栈图

[MDXInstruction:importDemo:Stack](./demo/Stack.tsx)

# Config 配置

# 数据列配置

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 数据列名称 | String | - |
| yAxis | 坐标轴下标 | Number | 0 |
| data | 数据 | Array | - |
| color | 自定义当前数据列颜色 | String | 主题`color_24` |

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

### grid： Boolean
是否显示网格线

### smooth: Boolean
是否为圆滑曲线图

### lineSize: Number
配置线的宽度，优先级`config.lineSize` > `config.size`

### symbol: Boolean
线上是否同时存在数据点标记。

### symbolSize:
当`symbol`开启时，配置线上点的`size`, 优先级`config.symbolSize` > `config.size`

### area: Boolean
是否开启面积图

### stack: Boolean
当开启 `area` 时，是否显示堆叠面积图。

### yAxisColor: Boolean
是否开启坐标轴颜色。
