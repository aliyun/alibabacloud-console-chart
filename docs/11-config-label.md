---
name: config-label
zhName: 配置-文本
---

# config-图形文本

下面提到的 `label` 等同于图形文本

# 配置方式

## 关闭 label

若不主动指定`config.label`, HailChart 默认关闭所有图表的 label。

```javascript
config.label = null;
// or
config.label = { visible: false };
```

## 开启label

### 对默认 field 配置 cfg
```javascript
// 对值所在的field设置cfg
config.label = {};
```

### 对默认field配置callback
```javascript
config.label = y => {};
```

### 指定field
可以显示指定field对应的数据值。
```javascript
config.label = 'y';
```

### 为指定 field 配置 callback
```javascript
config.label = ['x', x => {}];
```

### 为指定 field 配置 cfg
```javascript
// 对自定义field设置label
config.label = ['x', {}];
```

### 为指定field 配置 callback+cfg

```javascript
config.label[('x', x => {}, {})];
```

# 配置列表

## G2

### useHtml: boolean

是否使用 html 渲染，默认为 false。

### formatter: function

对显示文本进行格式化。

```javascript
config.label = {
  formatter: function(text, item, index) {
    return text + item.point.y;
  },
};
```

### type: string

文本布局类型。默认为'default'。

### labelLine: Object|Boolean

配置文本连线。如果值为 false，表示不展示文本线

```javascript
config.label = [
  'x',
  {
    labelLine: {
      lineWidth: 1, // 线的粗细
      stroke: '#ff8800', // 线的颜色
      lineDash: [2, 1], // 虚线样式
    },
  },
];
```

以下属性为 Canvas 专属配置

### position: String

仅当 chart 的 geom 为 interval 时有效。指定当前 label 与当前图形的相对位置，可选参数为 `middle`, `top`, `bottom`, `left`, `right`。默认为 `top`。

### offset: Number|Array

设置坐标轴文本 label 距离坐标轴线的距离，可以是数值或数组。默认为[0, 20]。数组可指定当前坐标轴 x,y 方向上的偏移。单个数值指定 y 方向上的偏移。

### autoRotate: Boolean

文本是否需要自动旋转，默认为 true

以下配置 html 专有配置属性

### htmlTemplate: Function

代码示例, 使用 x 轴的值作为`label`的值。

```javascript
config.label = [
  'x',
  {
    useHtml: true,
    htmlTemplate: (text, item, index) => {
      return '<div>' + text + '</div>';
    },
  },
];
```
