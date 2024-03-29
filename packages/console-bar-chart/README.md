---
name: console-bar-chart
zhName: 柱状图
---

# 柱状图API

目前柱状图只支持单轴，不支持双轴，在配置 `yAxis`时需要注意。

# 引入方式

```javascript
import { ConsoleBarChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本使用

[MDXInstruction:importDemo:basic](./demo/Basic.tsx)

## 水平柱状图

[MDXInstruction:importDemo:horizontal](./demo/Horizontal.tsx)

## 堆叠柱状图

[MDXInstruction:importDemo:stack](./demo/Stack.tsx)

## 镜面柱状图

[MDXInstruction:importDemo:facet](./demo/Facet.tsx)

## 分组柱状图

[MDXInstruction:importDemo:dodgeStack](./demo/DodgeStack.tsx)

## 自定义数据列颜色

[MDXInstruction:importDemo:color](./demo/Color.tsx)


# 数据列配置
| 属性 | 说明 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| yAxis | 坐标轴下标 | Number | 0 | - |
| data | 数据 | Array | - | - |
| color | 自定义当前数据列颜色 | String | 主题`color_24` | - |
| dodge | 分组名 | String | - | 如使用需开启`dodgeStack`配置 |

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

### grid: Boolean
是否显示网格线，`默认开启`。

### marginRatio: Number
数值范围为 0 至 1，用于调整分组中各个柱子的间距。

### dodgeStack: Boolean
是否为分组柱状图。如开启该配置，需在数据列中配置`dodge`

### horizontal: Boolean
是否水平展示柱状图。

### stack: Boolean
是否为堆叠柱状图

### facet: Boolean
是否使用镜面柱状图
