---
name: config
zhName: 通用配置场景
sort: 1
---

# 通用配置场景

## Props

### width/height
通过`width/height`这两个属性可以配置图表组件的宽度和高度，不配置时则默认为父组件的宽度/高度。
注意，这两个属性是直接通过`props`向组件传递的，不需要放在`config`中。

[MDXInstruction:importDemo:WidthHeight](./demo/WidthHeight.tsx)

---

以下所有配置都是`config`中的参数。

## Padding
可以通过配置`config.padding`来控制图表的内边距。padding的值类似与css里的padding，详细的请看这里[属性-padding](/guides/props#padding)

### 设置Padding大小

[MDXInstruction:importDemo:PaddingBasic](./demo/PaddingBasic.tsx)

## Legend
可以通过配置`config.legend`来控制图表里的图例，详细的请看这里[配置-图例](/guides/config-legend)

### Legend位置

[MDXInstruction:importDemo:LegendPosition](../console-pie-chart/demo/Legend.tsx)

### Legend在右边
通过设置Chart的`右Padding`和Legend的`offsetY`属性来控制legend的位置。

Note: `右Padding`是指圆形的右边界到渲染区域的右边界。`offsetY`是指圆形的右边界到legend的左边界。

[MDXInstruction:importDemo:LegendRight](../console-pie-chart/demo/LegendRight.tsx)

### Legend tip

配置`legend`的`tip`属性可开启legend悬浮提示。开启tip配置之后，可进一步配置`tipFormatter`属性来进行格式化tip显示内容（取值优先级：`tipFormatter` => `itemFormatter` => `value`）

Note: `legend`的`tip`属性是通过`dom`的`title`属性来进行简单实现的，只能满足简单场景。

[MDXInstruction:importDemo:LegendTip](../console-pie-chart/demo/LegendTip.tsx)

## Tooltip
可以通过配置`config.tooltip`来控制图表里的图例，详细的请看这里[配置-提示信息](/guides/config-tooltip)

## 自定义tooltip

[MDXInstruction:importDemo:Tooltip](../console-pie-chart/demo/Tooltip.tsx)

## 复杂Tooltip

[MDXInstruction:importDemo:ComplexTooltip](../console-pie-chart/demo/ComplexTooltip.tsx)