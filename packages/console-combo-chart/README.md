---
name: console-combo-chart
zhName: 混合图
---

# 混合图API

# 引入方式
```javascript
import { ConsoleComboChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基础混合图
[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 纵坐标设置颜色
[MDXInstruction:importDemo:YAxisColor](./demo/YAxisColor.tsx)

## 单个纵坐标
[MDXInstruction:importDemo:SingleYAxis](./demo/SingleYAxis.tsx)

## 光滑曲线
[MDXInstruction:importDemo:Smooth](./demo/Smooth.tsx)

## 堆叠图
[MDXInstruction:importDemo:Stack](./demo/Stack.tsx)

## 自定义颜色
[MDXInstruction:importDemo:Color](./demo/Color.tsx)

## 点击事件
[MDXInstruction:importDemo:Click](./demo/Click.tsx)

# 配置 Config

# 数据列配置
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| type | 类型 | String | - | ['bar', 'line'] |
| yAxis | 坐标轴下标 | Number | 0 | [0,1] |
| data | 数据 | - | - | - |
| color | 自定义当前数据列颜色 | String | 主题`color_24` | - |

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

### grid: Boolean
是否显示网格线

### dodgeStack: Boolean
柱状图是否为分组柱状图

### stack: Boolean
柱状图是否为堆叠柱状图

### yAxisColor: Boolean
Y 轴是否开启坐标轴颜色

### autoSmoothNumber: Number
在数值大于指定的条数时，条形图变成线图，并且关闭数据点的展示。

### barSize
自定义柱状图 size，优先级：`config.barSize` > `config.size`

### lineSize
自定义线图 size，优先级：`config.lineSize` > `config.size`

### barStyle
自定义柱状图 style，优先级：`config.barStyle` > `config.style`

### lineStyle
自定义线图 style，优先级：`config.lineStyle` > `config.style`

### lineLabel
单独配置线图的 `label`, 配置方法和通用`label`一致

### barLabel
单独配置柱状图的 `label`, 配置方法和通用`label`一致
