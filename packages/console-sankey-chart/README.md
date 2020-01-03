---
name: console-sankey-chart
zhName: 桑基图
---

# 桑基图API

桑基图是关系图的一种，常用来表示流入流出的关系。

典型桑基图的特点有：

- 开始总和 = 结束总和，能量平衡
- 每个流向(即每条边)的宽度有意义，常用来表示当前分支在所在深度的占比
- 每个节点的宽度也有意义，表示这个节点的占比

# 引入方式

```javascript
import { ConsoleSankeyChart } from '@alicloud/console-chart';
```

# 示例 Demo

关系图情况复杂，使用方式多变，如果有未满足的场景，烦请联系我们。

## 基本用法

[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

## 多列情况

[MDXInstruction:importDemo:MultiCol](./demo/MultiCol.tsx)

## 配置边

[MDXInstruction:importDemo:LinkStyle](./demo/LinkStyle.tsx)

## 垂直布局
通过`direction`属性来进行改变布局方向，有`vertical`,`horizontal`两个值。

[MDXInstruction:importDemo:Vertical](./demo/Vertical.tsx)

## 节点排列方式
节点排列方式通过`nodeAlign`属性来进行配置，有`start end center justify`四个值，默认为`justify`

[MDXInstruction:importDemo:NodeAlign](./demo/NodeAlign.tsx)

## 拓扑图
通过使用`topology`属性来配置拓扑图

[MDXInstruction:importDemo:Topology](./demo/Topology.tsx)


# 配置 Config

# 数据列配置

桑基图的数据列分2列，一列为节点数据，另一列为边数据。

| 属性 | 说明 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | 说明性质，可不填 |
| type | 数据类型 | String | - | 必填，`node`或`link` |
| data | 数据 | Array | - | - |

数据示例：
```js
const data = [
  {
    type: 'node',
    data: [
      { "name": "ecs" },
    ]
  },
  {
    type: 'link',
    data: [
      {
        "source": 3,
        "target": 0,
        "value": 5
      },
    ]
  }
];
```

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

### direction: String
通过`direction`属性来进行改变布局方向，有`vertical`,`horizontal`两个值。

### linkType: String
用来简单配置边的类型。

### nodeAlign: String
节点排列方式通过`nodeAlign`属性来进行配置，有`start end center justify`四个值，默认为`justify`

### topology: Boolean
是否开启拓扑图模式。在拓扑图模式下，一个节点身上只会有一个连接点，且连接点位于节点的中间处