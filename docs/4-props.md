---
name: props
zhName: 属性
---

# 组件 props

**Console-Chart** 所有类型的图表组件遵循`React Component`组件规范，且使用统一的`props`。

### props 列表
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | highcharts 规范的数据格式 | Array | - |
| config | 配置 | Object | - |
| padding | 图表绘制区域的 padding | Array | - |
| width | 图表的宽度 | Number | 父组件的宽度 |
| height | 图表的高度 | Number | 父组件的高度 |
| className | 自定义类名 | String | - |
| style | 自定义样式 | Object | - |
| children | 指定图表的子节点 | ReactNode | - |
| animate | 是否开启动画 | Boolean | false |
| event | [G2 的 event 配置](https://www.yuque.com/antv/g2-docs/api-chart#10b2761d), 支持监听 chart 事件。 | Object | - |
| onGetG2Instance | 获取G2实例 | Function | null |

### data
所有传入图表组件的 `data` 必须是复合Console-Chart数据规范的。<br />基本的格式如下：

```javascript
const data = [{ name: '分类1', data: [] }, { name: '分类2', data: [] }];
```
更详细的信息请参考：数据格式说明

### config
**Console-Chart**会使用`config` 作为图表的配置入口， `config` 配置分为两类：配置+图表专属配置。

- 公共配置：所有图表库公用的，配置方法相同
- 专属配置：不同的图表能力各有不同，需要专属的配置

```javascript
// 无任何配置
config = {};

// 设置图表的padding
config = {
  padding: [20, 30, 20, 40],
};

// 设置图表的x轴的类型及展示格式
config = {
  xAxis: {
    type: 'time',
    mask: 'YYYYMMDD',
  },
};

// 设置图表的Y轴
config = {
  yAxis: {
    label: {
      formatter: val => `${val} 万`,
		}
  },
};
```

### width
**Console-Chart**会优先使用开发者传入的`width`作为图表的绘图宽度，并且不会随父节点的宽度影响。 如果不指定`width`, **Console-Chart**会自动计算父节点的宽度, 并使用该值作为图表的绘图宽度。

### height
**Console-Chart**会优先使用开发者传入的 `height` 作为图表的绘图宽度，并且不会随父节点的宽度影响。 如果不指定`width`, **Console-Chart**会自动计算父节点的宽度, 并使用该值作为图表的绘图宽度。

### padding
设置图表的内边距<br />图表的`padding`可通过`props`传入，也支持通过`config.padding`方式传入。

```javascript
padding: [ 20, 30, 20, 30] // CSS 盒模型（上右下左）

padding: 20 // 四个边都是20px

padding: { top: 20, right: 30, bottom: 20, left: 30 }

padding: 'auto'

padding: [20, 'auto', 30, 'auto']
```

- 另外也支持设置百分比，如 `padding: [ '20%', '30%' ]`，该百分比相对于整个图表的宽高。<br />
- padding 为数字以及数组类型时使用方法同 CSS 盒模型（上右下左）。<br />
- padding 中存在 'auto'，时会自动计算边框，目前仅考虑 axis 和 legend 占用的边框

### event
[G2 的 event 配置](https://www.yuque.com/antv/g2-docs/api-chart#10b2761d), 支持监听 chart 事件。

### children
目前暂不需要使用该属性

### onGetG2Instance
获取 chart 实例的回调。每当生成一个新 chart 时就会调用该函数，并以新生成的 chart 作为回调参数。

```javascript
onGetG2Instance = chart => {
  chart.animate(false);
}
```

