---
name: console-arclink-chart
zhName: 弧长链接图
sort: 13
---

# 弧长链接图API

# 引入方式

暂时只支持单独引用。
```javascript
import ConsoleArclinkChart from '@alicloud/console-arclink-chart@next';
```

# 示例 Demo

## 基本使用

[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 极坐标

[MDXInstruction:importDemo:Polar](./demo/Polar.tsx)

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

### polar: Boolean
是否使用极坐标体系，展示为圆形

## 数据列配置

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| data | 数据 | - | - | - |
| color | 自定义当前数据列颜色 | String | 主题`color_24` | - |
