---
name: console-pie-chart
zhName: 饼图
sort: 8
---

# 饼图API

# 引入方式

```javascript
import { ConsolePieChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本使用

[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 带label指标

[MDXInstruction:importDemo:Label](./demo/Label.tsx)

## 自定义tooltip

[MDXInstruction:importDemo:Tooltip](./demo/Tooltip.tsx)

## 复杂Tooltip

[MDXInstruction:importDemo:ComplexTooltip](./demo/ComplexTooltip.tsx)

## 配置legend

[MDXInstruction:importDemo:Legend](./demo/Legend.tsx)

## legend在右边

通过设置Chart的`右Padding`和Legend的`offsetY`属性来控制legend的位置。

Note: `右Padding`是指圆形的右边界到渲染区域的右边界。`offsetY`是指圆形的右边界到legend的左边界。

[MDXInstruction:importDemo:LegendRight](./demo/LegendRight.tsx)

## legend tip

配置`legend`的`tip`属性可开启legend悬浮提示。开启tip配置之后，可进一步配置`tipFormatter`属性来进行格式化tip显示内容（取值优先级：`tipFormatter` => `itemFormatter` => `value`）

Note: `legend`的`tip`属性是通过`dom`的`title`属性来进行简单实现的，只能满足简单场景。

[MDXInstruction:importDemo:LegendTip](./demo/LegendTip.tsx)

## 单色

[MDXInstruction:importDemo:SingleColors](./demo/SingleColors.tsx)

## 指定颜色

[MDXInstruction:importDemo:MultiColors](./demo/MultiColors.tsx)

## 基础环状图

[MDXInstruction:importDemo:Circle](./demo/Circle.tsx)

## 环间距

[MDXInstruction:importDemo:CircleSlice](./demo/CircleSlice.tsx)

## 环状带Guide

[MDXInstruction:importDemo:CircleGuide](./demo/CircleGuide.tsx)

## 选中状态

[MDXInstruction:importDemo:Select](./demo/Select.tsx)

## 根据选中状态更新环内Guide

[MDXInstruction:importDemo:SelectCircleGuide](./demo/SelectCircleGuide.tsx)

# 配置 Config

## 数据列配置
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| data | 数据 | Array | - | - |

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

### sliceGap: Number
需要配合`cycle`使用，环图情况下，可以使用该参数来调整每个环之间的间距，数值范围0-1

### select: Boolean
是否支持选中态

### selectData: String
选中的数据

### colors: String|Array
自定义颜色