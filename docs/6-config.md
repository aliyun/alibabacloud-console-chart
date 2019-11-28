---
name: config
zhName: 通用配置
---

# config 配置

在接下来的文档中，你会看到很多 `config` 的配置项，但默认情况下，Console-Chart 是不需要配置的，你甚至不需要传入任何的 `config` 配置就能够得到你期望的图表。

一方面为了满足更多用户的业务诉求，另外也为了能够将控制台特色的图表能力释放出去，Console-Chart从逻辑上将 `config` 配置分成两种类型： 通用配置、组件专属配置。

## 常见配置样例

```javascript
// 无需任何配置
const config = {};

// 设置图表的内边距
const config = {
  padding: [50, 50, 50, 50],
};

// 格式化X轴的刻度值
const config = {
  xAxis: {
    label: {
      formatter: val => val
    }
  },
  yAxis: {},
};

// 设置图例的位置
const config = {
  legend: {
    position: 'bottom',
  },
};
```

## 通用配置列表
所有组件均可配置，且配置方式相同，列表如下：

| 属性 | 说明 | 相关文档 |
| --- | --- | --- |
| xAxis | 配置 X 轴 | - |
| yAxis | 配置 Y 轴 | - |
| legend | 配置图例 | - |
| guide | 配置引导内容 | - |
| tooltip | 配置鼠标提示框 (tooltip) | - |
| label | 配置标签 | - |
| size | 配置图形 size | - |
| style | 配置图形 style | - |

## 专属配置

每个图表组件由于功能的差异，独享控制其能力的配置项，可参考相关组件的 API 文档。

```javascript
// 线图专属配置项
config = {
 	smooth: true, // 可实现将折线转化为光滑曲线 
}

// 柱状图专属配置
config = {
	dodgeStack: true, // 可实现分组堆叠柱状图
}
```

