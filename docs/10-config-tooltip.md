---
name: config-tooltip
zhName: 配置-提示信息
sort: 10
---

# config-提示信息

下面提到的 `tooltip` 等同于提示信息。

# 配置方式

`tooltip` 如果不配置，默认开启。

## 关闭 tooltip
```javascript
config.tooltip = false;
// or
config.tooltip = { visible: false };
```

## 开启配置
```javascript
config = {
  tooltip: {},
};
```

# 配置列表

## G2

### triggerOn: string

tooltip 的触发方式，可配置的值为：`mousemove`、`click`、`none`，默认为 `mousemove`。

- 'mousemove': 鼠标移动触发；
- 'click': 鼠标点击出发；
- 'none': 不触发 tooltip，用户通过 chart.showTooltip() 和 chart.hideTooltip() 来控制 tooltip 的显示和隐藏

### showTitle: boolean

是否展示提示信息的标题，默认为 true，即展示，通过设置为 false 来隐藏标题。

### title: string

设置 tooltip 的标题展示的数据字段，设置该字段后，该标题即会展示该字段对应的数值。showTitle 为 false 时，该设置不生效。

### crosshail: object

是一个对象类型，用于设置 tooltip 的辅助线或者辅助框。

默认我们为 geom 为 ‘line’, ‘area’, ‘path’, ‘areaStack’ 开启了垂直辅助线；geom 为‘interval’ 默认会展示矩形背景框。

该属性可支持的配置如下：

```javascript
crosshairs: {
  type: 'rect' | 'x' | 'y' | 'cross',
  style: {
    // 图形样式
    fill: {string}, // 填充的颜色
    stroke: {string}, // 边框的颜色
    strokeOpacity: {number}, // 边框颜色的透明度，数值为 0 - 1 范围
    fillOpacity: {number}, // 填充的颜色透明度，数值为 0 - 1 范围
    lineWidth: {number}, // 边框的粗细
    lineDash: {number} | {array} // 线的虚线样式
  }
}
```

### offset: number

设置 tooltip 距离鼠标的偏移量

### inPlot: boolean

设置是否将 tooltip 限定在绘图区域内，默认为 true，即限定在绘图区域内

### shared: boolean

设置 tooltip 只展示单条数据。

### enterable: boolean

用于控制是否允许鼠标进入 tooltip，默认为 false，即不允许进入。

### position: string

该属性设置之后，就会在固定位置展示 tooltip，可设置的值为：left、right、top、bottom。

### hideMarkers: boolean

对于 line、area、path 这三种几何图形，我们在渲染 tooltip 时会自动渲染 tooltipMarker ，通过声明该属性值为 true 来关闭 tooltipMarker。

### containerTpl: string

tooltip 默认的容器模板，默认值如下：

```javascript
containerTpl: '<div class="g2-tooltip">'
  + '<div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>'
  + '<ul class="g2-tooltip-list"></ul>'
  + '</div>',
```

如默认结构不满足需求，可以自定义该模板，但是自定义模板时必须包含各个 dom 节点的 class，样式可以自定义。

### itemTpl: string

tooltip 每项记录的默认模板，默认值如下：

```javascript
itemTpl: '<li data-index={index}>' +
  '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
  '{name}: {value}' +
  '</li>';
```

如默认结构不满足需求，可以自定义该模板，但是自定义模板时必须包含各个 dom 节点的 class，样式可以自定义。

### g2-tooltip: object

设置 tooltip 容器的 CSS 样式。

### g2-tooltip-title: object

设置 tooltip 标题的 CSS 样式。

### g2-tooltip-list: object

设置 tooltip 列表容器的 CSS 样式。

### g2-tooltip-list-item: object

设置 tooltip 列表容器中每一项的 CSS 样式。

### g2-tooltip-marker: object

设置 tooltip 列表容器中每一项 marker 的 CSS 样式。

### 外部 css 控制

除了使用配置上述属性来自定义 tooltip 的样式外，用户也可以直接为 html 定义 CSS 样式。

参考样例：

```javascript
config.tooltip = {
  containerTpl:
    '<div class="g2-tooltip">' +
    '<p class="g2-tooltip-title"></p>' +
    '<table class="g2-tooltip-list"></table>' +
    '</div>', // tooltip的外层模板
  itemTpl:
    '<tr class="g2-tooltip-list-item"><td style="color:{color}">{name}</td><td>{value}</td></tr>', // 支持的字段 index,color,name,value
  offset: 50,
  'g2-tooltip': {
    position: 'absolute',
    visibility: 'hidden',
    border: '1px solid #efefef',
    backgroundColor: 'white',
    color: '#000',
    opacity: '0.8',
    padding: '5px 15px',
    transition: 'top 200ms,left 200ms',
  }, // 设置 tooltip 的 css 样式
  'g2-tooltip-list': {
    margin: '10px',
  },
};
```

## Console-Chart

### sort: String|Function
tooltip 排序，传入类型为 string 时，可选值有'asc'，'desc'
