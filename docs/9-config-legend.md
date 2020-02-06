---
name: config-legend
zhName: 配置-图例
sort: 9
---

# config-图例

下面的文档介绍中提到的 `legend` 等同于图例。

# 配置方式

## 关闭图例

### 关闭所有图例
```javascript
config.legend = false;
// or
config.legend = { visible: false };
```

### 关闭指定 Field 的图例
```javascript
config.legend = ['y', false];
```

## 开启图例

### 为默认 field 指定图例
```javascript
config.legend = {};
```

### 为特定列设置图例
```javascript
config.legend = [field, cfg];
```

# 属性列表

## G2

### position: String
设置图例的显示位置，可设置的值为 12 个

| left-top | left-center | left-bottom(left) |
| --- | --- | --- |
| right-top | right-center | right-bottom(right) |
| top-left | top-center(top) | top-right |
| bottom-left | bottom-center(bottom) | bottom-right |


也可使用`bottom`,`top`,`left`,`right`设置位置，此时对应的值分别为`bottom-center`,`top-center`,`left-bot|tom`,`right-bottom`。默认为 `bottom-center`。

### layout: String
用于设置各个图例项的排列方式，可设置值包括：`vertical`、`horizontal`，分别表示垂直和水平排布。

### title: Object|null

图例标题的显示样式设置，如果值为 null，表示不展示图例标题，默认不展示。

```javascript
title: {
  textAlign: 'center', // 文本对齐方向，可取值为： start middle end
  fill: '#404040', // 文本的颜色
  fontSize: '12', // 文本大小
  fontWeight: 'bold', // 文本粗细
  rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
  textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
}
```

### background: Object
**针对分类类型的图例**，用于设置图例的背景样式。

```javascript
background: {
  fill: '#000',
  fillOpacity: 0.3
}
```

### itemFormatter: Function
回调函数，用于格式化图例每项的文本显示。

```javascript
itemFormatter(val) {
  return val; // val 为每个图例项的文本值
}
```

### marker: String|Function
用于设置图例的 marker 样式，默认按照 geom 的类型显示。

- 当为 string 类型时，即表示使用 G2 默认提供的类型，支持的类型如下。其中只有一部分支持 HTML 版本的分类图例：

| **type** | **样式** | **是否支持 HTML** |
| :---: | :---: | :---: |
| 'circle' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210024495-4f0b71f2-7d19-4967-aad8-a228feaf78fd.png#width=67#align=left&display=inline&height=44&originHeight=44&originWidth=124&search=&status=done&width=124) | 是 |
| 'square' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210041286-51bdc31a-fab6-48e1-a08d-a09e558f85fb.png#width=70#align=left&display=inline&height=46&originHeight=46&originWidth=136&search=&status=done&width=136) | 是 |
| 'bowtie' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210155591-b5e21daf-79bd-44bc-8b81-e8883fdfaf78.png#width=73#align=left&display=inline&height=44&originHeight=44&originWidth=134&search=&status=done&width=134) | 否 |
| 'diamond' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210170026-0f7fb963-0f62-4a11-8fc6-ba84189e2011.png#width=72#align=left&display=inline&height=42&originHeight=42&originWidth=126&search=&status=done&width=126) | 否 |
| 'hexagon' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210208456-d4c23407-c60b-4318-8d05-06bed00200f8.png#width=74#align=left&display=inline&height=42&originHeight=42&originWidth=130&search=&status=done&width=130) | 否 |
| 'triangle' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210220822-2d86203a-a48a-4f04-86d6-961a1022a894.png#width=82#align=left&display=inline&height=38&originHeight=38&originWidth=130&search=&status=done&width=130) | 否 |
| 'triangle-down' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210233143-38ebab00-773d-4d5e-8df2-061bbb61c873.png#width=88#align=left&display=inline&height=38&originHeight=38&originWidth=140&search=&status=done&width=140) | 否 |
| 'cross' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210248444-11980df1-7bd4-4733-a7a0-da2a46ceabc6.png#width=72#align=left&display=inline&height=42&originHeight=42&originWidth=126&search=&status=done&width=126) | 否 |
| 'tick' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210259514-4522e36a-b1c9-44e3-a5ed-20c525891005.png#width=76#align=left&display=inline&height=44&originHeight=44&originWidth=140&search=&status=done&width=140) | 否 |
| 'plus' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210271072-d6a6f1d4-2f4b-4b96-b130-1e3a78e2bd55.png#width=85#align=left&display=inline&height=38&originHeight=38&originWidth=136&search=&status=done&width=136) | 否 |
| 'hyphen' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210281940-1e075428-d6f0-41fa-aa94-a671d1e09d95.png#width=82#align=left&display=inline&height=38&originHeight=38&originWidth=130&search=&status=done&width=130) | 否 |
| 'line' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210295861-270830b4-6fa1-4cef-8895-0121be862ecf.png#width=69#align=left&display=inline&height=44&originHeight=44&originWidth=128&search=&status=done&width=128) | 否 |
| hollowCircle | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210306497-7cfd32b5-0105-4d98-947b-8a3044211488.png#width=74#align=left&display=inline&height=38&originHeight=38&originWidth=118&search=&status=done&width=118) | 否 |
| 'hollowSquare' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210317063-caac8dd8-5e33-4cb7-a316-fda9d5333186.png#width=80#align=left&display=inline&height=40&originHeight=40&originWidth=134&search=&status=done&width=134) | 否 |
| 'hollowBowtie' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210330132-d042eb6d-c5d7-4485-a00e-3d4b85f2b2b2.png#width=88#align=left&display=inline&height=32&originHeight=32&originWidth=118&search=&status=done&width=118) | 否 |
| 'hollowDiamond' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210340430-844f30f3-4f22-4270-be26-5f7cdc09d5f8.png#width=88#align=left&display=inline&height=32&originHeight=32&originWidth=118&search=&status=done&width=118) | 否 |
| 'hollowHexagon' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210351419-f6bc6c29-f49a-4472-afb2-c6bc1611c11a.png#width=72#align=left&display=inline&height=42&originHeight=42&originWidth=126&search=&status=done&width=126) | 否 |
| 'hollowTriangle' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210362642-e8919479-4956-4641-bf9f-1882bb3a44a3.png#width=66#align=left&display=inline&height=44&originHeight=44&originWidth=122&search=&status=done&width=122) | 否 |
| 'hollowTriangle-down' | ![](https://cdn.nlark.com/yuque/0/2018/png/100996/1543210372690-15f17d8e-0489-4834-ad18-8e8007b86cd2.png#width=98#align=left&display=inline&height=36&originHeight=36&originWidth=148&search=&status=done&width=148) | 否 |


- 非 HTML 版本的分类图例的 marker 也支持自定义 shape，使用方式如下，

```javascript
/**
 * 自定义 marker 形状
 * @param  {number} x   该 marker 的横轴坐标
 * @param  {number} y   该 marker 的纵轴坐标
 * @param  {number} r   该 marker 的半径大小
 * @return {null}
 */
marker(x, y, r) {}
```

以下代码绘制了如图所示的 marker ：![](https://gw.alipayobjects.com/zos/rmsportal/WOOfsuIGEAPWdtgsdciZ.png#align=left&display=inline&height=32&originHeight=32&originWidth=40&status=done&width=40#align=left&display=inline&height=32&originHeight=32&originWidth=40&search=&status=done&width=40)

```javascript
marker(x, y, r) {
  return [
    [ 'M', x - r, y ],
    [ 'L', x + r, y ]
  ];
}
```

### textStyle: Object
用于设置图例项的文本样式。

```javascript
textStyle: {
  textAlign: 'center', // 文本对齐方向，可取值为： start middle end
  fill: '#404040', // 文本的颜色
  fontSize: '12', // 文本大小
  fontWeight: 'bold', // 文本粗细
  rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
  textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
}
```

### clickable: Boolean
**针对分类类型的图例**，设置图例项是否允许点击，默认为 true，即允许点击。

### selectedMode: String
**针对分类类型图例**，当 clickable 为 true 时该配置项生效，用于设置图例的选中交互模式，可配置的属性:

- `selectedMode: 'single'`：表示开启单选模式；
- `selectedMode: 'multiple'`：表示开启多选模式，默认为 `'multiple'`。

```javascript
/**
 * 自定义图例项鼠标 hover 事件，hoverable 为 false 不生效
 * @param  {object} ev 事件对象
 * @return {null}
 */
onHover: ev => {};
```

### onClick: Function
**针对分类类型的图例**，用于自定义鼠标点击图例项的交互，当 `clickable` 为 false 不生效。

```javascript
/**
 * 自定义图例项点击事件， clickable 为 false 不生效
 * @param  {object} ev 事件对象
 * @return {null}
 */
onClick: ev => {};
```

### useHtml: Boolean
**针对分类类型图例**，用于开启是否使用 HTML 渲染图例，默认为 false，true 表示使用 HTML 渲染图例。这种情况下不要使用 'legend-item:click'  建议使用   `onClick`

```javascript
chart.legend({
  useHtml: true,
  onClick: e => {
    console.log('e', e);
  },
});
```

### flipPage: Boolean
**针对 HTML 版本的分类类型图例，即 useHtml 为 true 时**。指定是否使用翻页的方式来交互超出容器的图例项。默认为 false ，即不使用翻页方式，而使用滚轮滚动的交互方式。

### container: String
**当 `useHtml` 为 true 时生效**，用于指定生成图例的 dom 容器，那么该值必须为 dom 容器的 id 值为分类类型的话，则支持传入索引值。

### containerTpl: String
**当 `useHtml` 为 true 时生效**，用于指定图例容器的模板，默认值如下：

```javascript
containerTpl: '<div class="g2-legend" style="position:absolute;top:20px;right:60px;width:auto;">' +
  '<h4 class="g2-legend-title"></h4>' +
  '<ul class="g2-legend-list" style="list-style-type:none;margin:0;padding:0;"></ul>' +
  '</div>';
```

如默认结构不满足需求，可以自定义该模板，但是**自定义模板时必须包含各个 dom 节点的 class**，样式可以自定义。

### itemTpl: String
**当 `useHtml` 为 true 时生效**，用于指定生成图例的图例项 HTML 模板，默认值如下：

1. `itemTpl`: string<br />
当 `useHtml` 为 true 时生效。HTML 版本的分类图例的图例项 HTML 模版。默认为：

```javascript
itemTpl: '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}">' +
  '<i class="g2-legend-marker" style="background-color:{color};"></i>' +
  '<span class="g2-legend-text">{value}</span></li>';
```

!注意：自定义模板时必须包含各个 dom 节点的 class，样式可以自定义。

### slidable: Boolean
**针对连续图例**，用于设置连续图例是否允许滑动，默认为 true，即开启滑动操作。

### width: Number
**针对连续图例**，用于设置图例的宽度。

### height: Number
**针对连续图例**，用于设置图例的高度。

### hoverable: Boolean
**针对分类图例**，设置是否开启鼠标 hover 至图例的交互效果，默认为 true，即开启动画。

### onHover: event => void
用于自定义鼠标 hover 图例项的交互，当 `hoverable` 为 false 不生效。

### tip: boolean
是否开启`legend`hover状态下悬浮提示。

内部通过`onHover`属性实现，如自己配置了`onHover`属性，该属性将会无效。

### tipFormatter: value => void
开启`tip`配置下，可通过该属性格式化`tip`展示的内容。

取值优先级：`tipFormatter` => `itemFormatter` => `value`

### reactive: Boolean
设置是否开启鼠标 hover 图表元素时，图例对应项的高亮效果。默认为 false，即不开启动画。

### isSegment: Boolean

**针对连续的颜色图例**，设置图例样式是否为分块颜色模式，默认为 false，即非分块颜色模式，为渐变颜色模式。

### sizeType: String
**针对连续的大小图例**，设置图例是否是针对节点大小映射的样式。可选 'circle' | 'normal' | null, 默认为 null，即针对除节点以外的其他元素的大小映射。<br />当 sizeType 为 'circle' 时的样式：![](https://gw.alipayobjects.com/zos/rmsportal/SvFuwFlbTMHGKaxCnFYa.png#align=left&display=inline&height=138&originHeight=138&originWidth=418&status=done&width=418#align=left&display=inline&height=138&originHeight=138&originWidth=418&search=&status=done&width=418)

当 sizeType 为 'normal' 或 null 时的样式：![](https://gw.alipayobjects.com/zos/rmsportal/MGbEMcquJGArjRtHAXAh.png#align=left&display=inline&height=116&originHeight=116&originWidth=442&status=done&width=442#align=left&display=inline&height=116&originHeight=116&originWidth=442&search=&status=done&width=442)

### custom: Boolean

默认为 false，当 `custom` 为 true，表示不使用默认生成的图例，允许用户自定义非 HTML 版本的分类类型图例，包括具体的图例项以及 click、hover 交互。

自定义图例时需要用户自己声明具体的图例项 `items` (该属性是一个对象数组，数组中每一项为一个对象类型，结构为：
`{ value: '', marker: { fill: 'red' } }`以及图例项的 hover 和 click 事件。

具体使用如下：

```javascript
// 自定义图例
config.legend = {
  custom: true,
  items: [
    {
      value: 'waiting', // 图例项的文本内容
      marker: {
        symbol: 'circle', // 该图例项 marker 的形状，参见 marker 参数的说明
        fill: '#3182bd', // 该图例项 marker 的填充颜色
      },
    },
    {
      value: 'call',
      marker: {
        symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
        fill: '#99d8c9', // 该图例项 marker 的填充颜色
      },
    },
    {
      value: 'people',
      fill: '#fdae6b',
      marker: {
        symbol: 'line', // 该图例项 marker 的形状，参见 marker 参数的说明
        stroke: '#fdae6b', // 该图例项 marker 的填充颜色
        radius: 6,
      },
    },
  ],
  onHover: ev => {}, // 自定义 hover 事件
  onClick: ev => {}, // 自定义 click 事件
}
```

