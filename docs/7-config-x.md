---
name: config-x
zhName: 配置-x轴
---

# config-x轴

`xAxis` 属性控制x轴展示。

## 配置方式
```javascript
config = {
  xAxis: {},
};
```

## 属性列表

### position: String
设置坐标轴的显示位置，可设置的值包含 `top`、`bottom`、`left`、`right`，即上下左右四个位置

### line: Object|null

设置坐标轴线的样式，包括线的颜色、粗细等。如果该属性值为 null 则表示不展示坐标轴线。

```javascript
line: {
  stroke: {string}, // 坐标轴线的颜色
  strokeOpacity: {number}, // 坐标轴线的透明度，数值范围为 0 - 1
  lineDash: {array}, // 设置虚线的样式，如 [2, 3]第一个用来表示实线的像素，第二个用来表示空白的像素。如果提供了奇数个值，则这个值的数列重复一次，从而变成偶数个值
  lineWidth: {number} // 设置坐标轴线的粗细
}
```

### label: Object|null
设置坐标轴文本的样式。如果该属性值为 `null` 则表示不展示坐标轴文本。

```javascript
label: {
  offset: {number}, // 数值，设置坐标轴文本 label 距离坐标轴线的距离
  offsetX: {number}, // 在 offset 的基础上 x 方向的偏移量
  offsetY: {number}, // 在 offset 的基础上 y 方向的偏移量
  // 设置文本的显示样式，还可以是个回调函数，回调函数的参数为该坐标轴对应字段的数值
  rotate: 30, // 注意，旋转角度的配置不再在 textStyle 里配置
  textStyle: {
    textAlign: 'center', // 文本对齐方向，可取值为： start center end
    fill: '#404040', // 文本的颜色
    fontSize: '12', // 文本大小
    fontWeight: 'bold', // 文本粗细
    textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
  } | (text) => {
    // text: 坐标轴对应字段的数值
  },
  autoRotate: {boolean}, // 文本是否需要自动旋转，默认为 true
  /**
   * 用于格式化坐标轴上显示的文本信息的回调函数
   * @param  {string} text  文本值
   * @param  {object} item  该文本值对应的原始数据记录
   * @param  {number} index 索引值
   * @return {string}       返回格式化后的文本值
   */
  formatter(text, item, index) {},
  /**
   * 使用 html 渲染文本
   * @param  {string} text  文本值
   * @param  {object} item  该文本值对应的原始数据记录
   * @param  {number} index 索引值
   * @return {string}       返回 html 字符串
   */
  htmlTemplate(text, item, index) {}
}
```

### title: Object|null
设置坐标轴标题的显示样式。如果该属性值为 `null` 则表示不展示坐标轴标题。

**在 G2 的默认主题中，坐标轴标题是不展示的。**

通过 `title: true` 渲染坐标轴标题。通过以下配置对标题进行个性化配置

```javascript
title: {
  autoRotate: {boolean}, // 是否需要自动旋转，默认为 true
  offset: {number}, // 数值，设置坐标轴标题距离坐标轴线的距离
  // 设置标题的文本样式
  textStyle: {
    textAlign: 'center', // 文本对齐方向，可取值为： start middle end
    fill: '#404040', // 文本的颜色
    fontSize: '12', // 文本大小
    fontWeight: 'bold', // 文本粗细
    rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
    textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
  },
  position: 'start' | 'center' | 'end' // 标题的显示位置（相对于坐标轴线），可取值为 start center end
}
```

### tickLine: Object|null
设置坐标轴的刻度线。如果该属性值为 null 则表示不展示。

```javascript
tickLine: {
  lineWidth: 1, // 刻度线宽
  stroke: '#ccc', // 刻度线的颜色
  strokeOpacity: 0.5, // 刻度线颜色的透明度
  length: 5, // 刻度线的长度，可以为负值（表示反方向渲染）
  alignWithLabel:true//设为负值则显示为category数据类型特有的样式
}
```

### subTickCount: Number
设置每两个刻度之间次刻度线的个数，默认为 0，即不展示次刻度线。

### subTickLine: Object
设置次刻度线的样式，仅当 subTickCount 不为 0 时生效。

```javascript
subTickLine: {
  lineWidth: 1, // 次刻度线宽
  stroke: '#ddd', // 次刻度线颜色
  strokeOpacity: 0.5, // 次刻度线颜色的透明度
  length: 3 // 次刻度线的长度，可以为负值（表示反方向渲染）
}
```

### grid: Object|null
设置坐标轴网格线的样式，网格线与坐标轴线垂直。如果该属性值为 `null` 则表示不展示。

```javascript
grid: {
  align: 'center', // 声明网格顶点从两个刻度中间开始，默认从刻度点开始
  type: 'line' | 'polygon', // 声明网格的类型，line 表示线，polygon 表示矩形框
  // 当网格类型 type 为 line 时，使用 lineStyle 设置样式
  lineStyle: {
    stroke: '#d9d9d9', // 网格线的颜色
    lineWidth: 1, // 网格线的粗细
    lineDash: [4, 4 ] // 网格线的虚线配置，第一个参数描述虚线的实部占多少像素，第二个参数描述虚线的虚部占多少像素
  },
  hightLightZero: true, // 默认不高亮0轴
  zeroLineStyle: { // 当且仅当 highLightZero 为 true 时生效
    stroke: '#595959',
    lineDash: [ 0, 0 ]
  },
  alternateColor: '#ccc' | [ '#f80', '#ccc' ], // 当网格类型 type 为 polygon 时，使用 alternateColor 为网格设置交替的颜色，指定一个值则先渲染奇数层，两个值则交替渲染
  hideFirstLine: true | false, // 是否隐藏第一条网格线，默认为 false
  hideLastLine: true | false // 是否隐藏最后一条网格线，默认为 false
}
```

