---
name: config-style
zhName: 配置-样式
---

# config-自定义样式

用于配置几何标记显示的图形属性。


# 配置方法

## 关闭 style
Console-Chart 默认关闭所有图形自定义样式。


## 自定义

### 统一设置
```javascript
config.style = {
  lineWidth: 2,
};
```


### callback方式设置
使用回调函数设置属性

```javascript
config.style = [
  'x*y',
  {
    lineWidth: (x, y) => {},
    stroke: 'red',
  },
];
```


# 属性列表

## 通用属性

- `fill` 设置用于填充绘画的颜色、渐变或模式；<br />
- `stroke` 设置用于笔触的颜色、渐变或模式；<br />
- `shadowColor` 设置用于阴影的颜色；<br />
- `shadowBlur`  设置用于阴影的模糊级别；<br />
- `shadowOffsetX` 设置阴影距形状的水平距离；<br />
- `shadowOffsetY` 设置阴影距形状的垂直距离；<br />
- `opacity` 设置绘图的当前 alpha 或透明值；<br />
- `globalCompositeOperation` 设置新图像如何绘制到已有的图像上

style 的更详细的配置项请参考：[绘图属性](https://www.yuque.com/antv/g2-docs/api-graphic)
