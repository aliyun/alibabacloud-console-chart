// 标准style函数
// https://www.yuque.com/antv/g2-docs/api-geom#style

export default function(gemo: any, config, styleConfig) {
  if (!styleConfig) {
    return;
  }
  const formatStyleConfig = Array.isArray(styleConfig) ? styleConfig : [styleConfig];
  gemo.style(...formatStyleConfig);
}
