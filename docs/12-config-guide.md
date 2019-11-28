---
name: config-guide
zhName: 配置-辅助元素
---

# config-辅助元素

下面提到的 `guide` 等同于辅助元素


# 配置方式
Console-Chart 默认不开启绘制任何的辅助元素。 
```javascript
config.guide = {
  line: {},
  text: {},
  image: {},
  region: {},
  html: {},
  arc: {},
  regionFilter: {},
  dataMarker: {},
  dataRegion: {},
};
```


# 配置列表


## line
辅助线

```javascript
guide.line = {
  top: {boolean}, // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: {object} | {function} | {array}, // 辅助线起始位置
  end: {object} | {function} | {array}, // 辅助线结束位置
  lineStyle: {object}, // 图形样式配置
  text: {
    position: {string} | {number}, // 文本的显示位置，可取值：'start','center','end', 0 ~ 1 范围的数字, '0%'至'100%'
    autoRotate: {boolean}, // 是否沿线的角度排布，默认为 true
    style: {object}, // 文本图形样式配置
    content: {string}, // 文本的内容
    offsetX: {number}, // x 方向的偏移量
    offsetY: {number} // y 方向的偏移量
  }
}
```


### top: Boolean
指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。


### start: Object|Array|Function
指定辅助线的起始位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }<br />
- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：<br />
  1. 对应数据源中的原始数据;<br />
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束<br />
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方<br />
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式<br />
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景<br />

```javascript
{
    start(xScales, yScales) {
      return []; // 位置信息
    }
  }
```


### end: Object|Array|Function
配置方法同 `start` 


### lineStyle: Object
用于设置辅助线的显示样式。


### text: Object
辅助线可以带文本，该属性使用如下：

```javascript
text: {
  position: 'start' | 'center' | 'end' | '39%' | 0.5, // 文本的显示位置，值除了指定的常量外，还可以是百分比或者小数
  autoRotate: {boolean}, // 指定文本是否沿着线的方向排布，默认为 true，即沿着线排布
  style: {
    fill: 'red',
    fontSize: 12
  }, // 设置文本的显示样式
  content: {string}, // 文本的内容
  offsetX: {number}, // x 方向的偏移量
  offsetY: {number} // y 方向的偏移量
}
```


## text
辅助文本
```javascript
guide.text = {
  top: {boolean}, // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  position: {object} | {function} | {array}, // 文本的起始位置
  content: {string}, // 显示的文本内容
  style: {object}}}, // 文本的图形样式属性
  offsetX: {number}, // x 方向的偏移量
  offsetY: {number} // y 方向偏移量
}
```


### top: Boolean
指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。


### position: Object|Array|Function
指定辅助文本的显示位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }<br />
- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：<br />
  1. 对应数据源中的原始数据;<br />
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束<br />
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方<br />
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式<br />
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```javascript
text: {
    position(xScales, yScales) {
      return []; // 位置信息
    },
    content: '最大值'
  }
```


### content: String
辅助文本的显示内容。


### style: Object
用于设置辅助文本的显示样式，`style` 的更详细的配置


### offsetX： Number
设置辅助文本 x 方向的偏移量。


### offsetY: Number
设置辅助文本 y 方向的偏移量。


## image
辅助图片

```javascript
guide.image = {
  top: {boolean}, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: {array} | {function} | {array}, // 图片起始位置
  end: {array} | {function} | {array}, // 图片结束位置
  width: {number}, // 图片的宽度
  height: {number}, // 图片的高度
  src: {string}, // 图片路径
  offsetX: {number}, // x 方向的偏移量
  offsetY: {number} // y 方向偏移量
}
```


### top: Boolean
指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。


### start: Object|Array|Function
指定辅助图片的起始位置，即图片的左上角，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }<br />
- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：<br />
  1. 对应数据源中的原始数据;<br />
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束<br />
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方<br />
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式<br />
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景<br />

```javascript
{
    start(xScales, yScales) {
      return []; // 位置信息
    }
 }
```


### end: Object|Array|Function
**可选**，指定辅助图片的结束位置，即图片的右下角，该属性用法同 `start`。当 `start` 和 `end` 属性同时声明时，图片的宽度和高度即已确定，此时可以不需要指定 `width` 和 `height` 这两个属性


### src: String
指定图片的地址，可以是路径，也可以是 base64 编码。


### width: Number
**当仅指定了 `start` 属性时使用**，用于设置图片的宽度。


### height: Number
**当仅指定了 `start` 属性时使用**，用于设置图片的高度。


### offsetX: Number
设置图片 x 方向的偏移量。


### offsetY: Number
设置图片 y 方向的偏移量。


## region
辅助背景框

```javascript
guide.region = {
  top: {boolean}, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: {object} | {function} | {array}, // 辅助框起始位置
  end: {object} | {function} | {array},// 辅助框结束位置
  style: {object} // 辅助框的图形样式属性
}
```


### top: Boolean
指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。


### start: Object|Array|Function
指定辅助背景框的起始位置，即背景框的左上角，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }<br />
- array: 使用数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：<br />
  1. 对应数据源中的原始数据;<br />
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束<br />
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方<br />
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式<br />
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场<br />

```javascript
{
    start(xScales, yScales) {
      return []; // 位置信息
    }
 }
```


### end: Object|Array|Function
指定辅助背景框的结束位置，即背景框的右下角，该属性用法同 `start`。


### style
用于设置辅助背景框的样式。


## html
辅助html

```javascript
guide.html = {
  position: {object} | {function} | {array}, // html 的中心位置
  htmlContent: {string}, // html 代码
  alignX: {string}, // html 水平方向的布局，可取值为 'left'，'middle'，'right'
  alignY: {string}, // html 垂直方向的布局，可取值为 'top'，'middle'，'bottom'
  offsetX: {number},
  offsetY: {number},
  zIndex: {number}
}
```


### position: Object|Array|Function
设置 html 的显示位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }<br />
- array: 使用数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：<br />
  1. 对应数据源中的原始数据;<br />
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束<br />
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方<br />
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式<br />
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```javascript
{
    position(xScales, yScales) {
      return []; // 位置信息
    }
}
```


### alignX: String
html 的水平对齐方式，可取值为： `left`、`middle`、`right`，默认值为 `middle`。


### alignY: String
html 的垂直对齐方式，可取值为： `top`、`middle`、`bottom`，默认值为 `middle`。


### htmlContent: String
需要显示的 html 内容。


### zIndex: Number
html 层级。


### offsetX: Number
设置 html 在 x 方向的偏移量。


### offsetY: Number
设置 html 在 y 方向的偏移量。


## arc
辅助圆弧。

```javascript
guide.arc = {
  top: {boolean}, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: {object} | {function} | {array}, // 辅助框起始位置
  end: {object} | {function} | {array},// 辅助框结束位置
  style: {object} // 图形样式属性
}
```


### top: Boolean
指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。


### start: Object|Array|Function
指定辅助背景框的起始位置，即背景框的左上角，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }
- array: 使用数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
  1. 对应数据源中的原始数据;
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场

```javascript
{
    start(xScales, yScales) {
      return []; // 位置信息
    }
 }
```


### end: Object|Array|Function
指定辅助圆弧的结束位置，该属性用法同 `start`。


### style: Object
设置圆弧的显示样式。


## regionFilter
辅助区域过滤，将图表中位于矩形选区中的图形元素提取出来，重新着色。

```javascript
guide.regionFilter = {
  top: {boolean}, // 指定 giude 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
  start: {object} | {function} | {array}, // 起始位置
  end: {object} | {function} | {array},// 结束位置
  color: {string}, // 染色色值
  apply: {array}, // 可选，设定 regionFilter 只对特定 geom 类型起作用
  style: {object} // 可选，为 regionFilter 区域设定额外的样式
}
```


### start: Object|Array|Function
指定辅助背景框的起始位置，即背景框的左上角，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }
- array: 使用数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
  1. 对应数据源中的原始数据;
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场

```javascript
{
    start(xScales, yScales) {
      return []; // 位置信息
    }
 }
```


### end: Object|Array|Function
指定辅助过滤区域的结束位置，即过滤区域的右下角，该属性用法同 `start`。


### color: String
指定辅助过滤区域内图形元素重新着色的色值。


### apply: Array
可选，设定 regionFilter 只对特定 geom 类型起作用，如 `apply: [ 'area' ]`，默认 regionFilter 的作用域为整个图表。


### style: Object
可选，为过滤区域的图形设置额外的样式。


## dataMarker
特殊数据标注点，适用于折线图和面积图。

```javascript
guide.dataMarker = {
  top: {boolean}, // 指定 giude 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
  position: {object} | {function} | {array}, // 标注点起始位置
  content: {string}, // 显示的文本内容
  style: {
    text: {object}, // 设置文本的显示样式
    point:{object}, // 设置标注点的显示样式
    line: {object} // 设置标注线的显示样式
  },// 可选
  display:{
    text: {boolean}, // 是否显示文本
    point: {boolean}, // 是否显示标注点
    line: {boolean} // 是否显示标注线
  },// 可选，是否显示文本/point/line，默认为全部显示
  lineLength: {number}, //可选，line 长度，default 为 20
  direction: {string}, // 可选，朝向，默认为 upward，可选值为 'upward' 或者 'downward'
  autoAdjust: {boolean} // 可选，文本超出绘制区域时，是否自动调节文本方向，默认为 true
}
```


### top: Boolean
指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。


### position: Object|Array|Function
指定特殊数据点标注的位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }<br />
- array: 使用数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：<br />
  1. 对应数据源中的原始数据;<br />
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束<br />
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方<br />
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式<br />
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景<br />

```javascript
{
    position(xScales, yScales) {
      return []; // 位置信息
    }
}
```


### content: String
辅助文本的显示内容。


### style: Object
用于设置 point/line/text 样式。


### display: Object
用于设置是否显示 point/line/text。


### lineLength: Number
设置 line 的长度，default为 20。


### direction: String
标注点朝向：'upward' | 'downward', default为 'upward'，即向上。


### adjust: Boolean
当文本超出绘制区域时，是否自动调节文本方向，默认为 true，内部会自动调节文本方向。


## dataRegion
特殊数据区间标注，适用于折线图和面积图。

```javascript
guide.dataRegion = {
  top: {boolean}, // 指定 giude 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
  start: {object} | {function} | {array}, // 标注点起始位置
  end: {object} | {function} | {array}, // 标注点结束位置
  content: {string}, // 显示的文本内容
  style: {
    region: {object}, // 填充区域的显示样式设置
    text: {object} // 文本的显示样式设置
  },// 可选
  lineLength: {number} // 可选，line长度，default为 0
}
```


### top: Boolean
指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。


### start: Object|Array|Function
指定特殊数据区间标注的起始位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }<br />
- array: 使用数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：<br />
  1. 对应数据源中的原始数据;<br />
  1. 关键字：'min', 'max', 'median', 'start', 'end'，分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束<br />
  1. x，y 都是百分比的形式，如 30%，在绘图区域定位。注意：对于 Y 轴，起始点为 Y 轴上方<br />
  1. 1 和 2 两种类型的数据可以混用，使用百分比形式时 x 和 y 必须都是百分比形式<br />
- function: 回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景<br />

```javascript
{
    start(xScales, yScales) {
      return []; // 位置信息
    }
}
```



### end: Object|Array|Function
指定特殊数据区间标注的结束位置，该属性用法同 `start`。


### content: String
辅助文本的显示内容。


### style: Object
region/text 的显示样式


### lineLength: Number
line 的长度，default为 0。


## Console-Chart

### topUnit
为直角坐标系的指定顶部单位。
```javascript
config.guide = {
  topUnit: '单位: 元',
};
```


