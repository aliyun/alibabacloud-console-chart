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

## 只有一个点数据时展示线

[MDXInstruction:importDemo:OneDotToLine](./demo/OneDotToLine.tsx)

## 自定义x轴时间刻度间距

通过传入`tickInterval`字段，来配置坐标轴上每个刻度之间的差值大小。注意：如果是`type`设置为`time`的话，`tickInterval`字段的值必须是时间戳（毫秒）。

[MDXInstruction:importDemo:XAxisTickInterval](./demo/XAxisTickInterval.tsx)

## 动态显示X轴

[MDXInstruction:importDemo:XAxisAsync](./demo/XAxisAsync.tsx)

## y轴最小值与正整数
通过设置`yAxis.min`来设置坐标轴显示的最小值，通过`yAxis.formatter`来控制不显示浮点数。

[MDXInstruction:importDemo:YAxisMin](./demo/YAxisMin.tsx)

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

## 颜色渐变图

通过数据列里的`color`属性来进行指定，如果传入的值为字符串，则将该颜色应用到该数据列的`线图`和`面积图`上，也可以传入一个数组，第一个值指定`线图`的颜色，第二个值指定`面积图`的颜色

颜色色值支持传入渐变，渐变规则请看[G2渐变色原始文档](https://g2-v3.antv.vision/zh/docs/api/graphics#%E6%B8%90%E5%8F%98%E8%89%B2)

[MDXInstruction:importDemo:GradualColor](./demo/GradualColor.tsx)

## Legend点击事件

通过`event`属性来配置事件，配置`legend-item:click`对应的事件即可以配置图例点击事件。注意，由于内部实现和React自带的Function Component优化有冲突，`event`属性配置的事件不会触发`function component`的更新，所以这时候请使用`class`语法。

更多事件请看[G2-图表事件](https://g2-v3.antv.vision/zh/docs/manual/tutorial/event)

[MDXInstruction:importDemo:LegendClick](./demo/LegendClick.tsx)

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
