---
name: console-funnel-chart
zhName: 漏斗图
---

# 漏斗图API

# 引用方式
```javascript
import { ConsoleFunnelChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本使用

[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 居左

[MDXInstruction:importDemo:Left](./demo/Left.tsx)

## 横向居中

[MDXInstruction:importDemo:Horizontal](./demo/Horizontal.tsx)

## 金字塔

`金字塔图`和漏斗图的主要区别在于图形顶部是否有“尖角”

[MDXInstruction:importDemo:Pyramid](./demo/Pyramid.tsx)

## 横向金字塔

[MDXInstruction:importDemo:PyramidHor](./demo/PyramidHor.tsx)

# 配置 Config

## 数据列配置

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| data | 数据 | - | - | - |
| color | 自定义当前数据列颜色 | String | 主题`color_24` | - |

## 通用配置

| 属性 | 说明 |
| --- | --- |
| padding | 配置绘图内边距 |
| ~~xAxis~~ | ~~配置x轴~~ |
| ~~yAxis~~ | ~~配置y轴~~ |
| ~~legend~~ | ~~配置图例~~ |
| guide | 配置辅助元素 |
| tooltip | 配置提示信息 |
| label | 配置图形文本 |
| size | 配置自定义大小 |
| style | 配置自定义样式 |

## 专属配置

### direction: String
控制漏斗的方向， 可选值： `vertical` 、 `horizontal` 

### align: String
漏斗图的对齐方式。<br />当 `direction = vertical` 时，可选对齐方式为： `left` 、 `center` 、 `right` <br />当 `direction = horizontal` 时，可选对齐方式为： `top` 、 `center` 、 `bottom` 

### pyramid: Boolean
是否显示金字塔尖角。
