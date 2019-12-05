---
name: console-dot-chart
zhName: 散点图
---

# 散点图API

# 引入方式

```javascript
import { ConsoleDotChart } from '@alicloud/console-chart';
```

# 示例 Demo

## 基本散点图
[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 多组数据
[MDXInstruction:importDemo:Multi](./demo/Multi.tsx)

## 自定义点大小
[MDXInstruction:importDemo:Size](./demo/Size.tsx)

## 扰动图
[MDXInstruction:importDemo:Disturbance](./demo/Disturbance.tsx)

# 配置 Config

# 数据列配置
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
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

### jitter: Boolean
是否展示成扰动图
