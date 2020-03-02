---
name: console-tree-graph
zhName: 基本树图
sort: 14
---

# 树图API

# 引入方式

```javascript
import ConsoleTreeGraph from '@alicloud/console-tree-graph';
```

注意，目前为了减少打包之后的体积大小，暂不将Graph相关的加入`console-chart`包内，所以只能通过单包引入的方式使用。

# 示例 Demo

## 基本使用

[MDXInstruction:importDemo:Basic](./demo/Basic.tsx)

# 配置 Config

## 数据列配置

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 数据列名称 | String | - | - |
| data | 数据 | Object | - | - |

注意：与普通图表不同的是，树图的数据结构为一个`JSON对象`，通过`children`属性来关联子级节点。

最简单的一个数据例子：
```json
{
  id: '01',
  children: [
    {
      id: '011',
      children: []
    },
    {
      id: '012',
      children: [
        {
          id: '0121',
        }
      ]
    }
  ]
}
```

## 专属配置

### fitView: Boolean
是否自适应画布

