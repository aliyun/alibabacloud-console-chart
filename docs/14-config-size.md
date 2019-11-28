---
name: config-size
zhName: 配置-大小
sort: 14
---

# config-size自定义



# 配置方式

## 关闭size自定义
Console-Chart 默认关闭 所有图表size自定义功能。

```javascript
config.size = null;
```


## 开启size自定义

### 使用常量
```javascript
config.size = 5;
```

注意： 不同图形的 size 的含义有所差别：

- point 图形的 size 影响点的半径大小；
- line, area, path 中的 size 影响线的粗细；
- interval 的 size 影响柱状图的宽度


### 使用Field

根据 field 字段的值映射大小，使用默认的最大值 max:10 和最小值 min: 1。<br />我们使用 highcharts 的数据，所有的数据都会转换为`x*y*type*facet`的形式，所以请按照实际情况填入`field`字段。

```javascript
config.size = 'y';
```


### 使用区间
根据 field 字段的值映射大小，使用默认的最大值 max:10 和最小值 min: 1。

```javascript
config.size = [5, 10];
```


### 使用函数
如果传递的是一个普通的回调函数，我们默认的内部处理逻辑为：
```javascript
config.size = type => {}
```


### 指定字段+函数

`field` 指定要设置 size 的字段， 可以是`x*y*type*facet` 的任意组合。

`sizeConfig` 可以是`number`、 `array`、`function`形式。

```javascript
config.size = ['x*y', (x, y) => {}];
```

