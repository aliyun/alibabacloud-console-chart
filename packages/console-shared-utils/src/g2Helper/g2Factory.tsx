import * as React from 'react';
import isEqual from 'lodash/isEqual';
import isEqualWith from 'lodash/isEqualWith';
import { G2, isFunction } from '../common/utils';
import { getParentSize, requestAnimationFrame, } from './common';
import Updater from './updater';
import { setConsoleTheme, getConsoleTheme } from '../theme/index';
import { IProps } from '../types/index';

const consoleTheme = getConsoleTheme();
setConsoleTheme(consoleTheme);

// 图表唯一id
let uniqueId = 0;
function generateUniqueId() {
  return `console-chart-${uniqueId++}`;
}

const rootClassName = 'console-chart-container';
const rootChildClassName = 'console-chart-children-container';

function g2Factory(chartName: string, chartProcessConfig: any) {
  const chartClassName = chartName.replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return class ConsoleChartFactory extends React.Component<IProps> {
    static displayName = chartName;
    static chartId = generateUniqueId();

    chart: G2.Chart;
    chartDom: HTMLDivElement;
    chartSize: [number, number];
    reRenderTimer: any = null;
    resizeRunning = false;
    resizeTimer: any = null;
    consoleTheme = G2.Global;
    isReRendering: boolean = false;
    unifiedProps: any;


    componentDidMount() {
      const unifiedProps = chartProcessConfig.getUnifiedProps ? chartProcessConfig.getUnifiedProps(this.props) : this.props;
      this.unifiedProps = unifiedProps;
      this.initChart(unifiedProps);
    }

    componentDidUpdate(prevProps: IProps) {
      let unifiedProps = prevProps;
      let nextUnifiedProps = this.props;
      if (chartProcessConfig.getUnifiedProps) {
        unifiedProps = chartProcessConfig.getUnifiedProps(prevProps);
        nextUnifiedProps = chartProcessConfig.getUnifiedProps(this.props);
      }

      this.unifiedProps = nextUnifiedProps;

      const { data: oldData, width: oldWidth, height: oldHeight, config: oldConfig, } = unifiedProps;
      const { data: newData, width: newWidth, height: newHeight, config: newConfig, forceUpdate, changeConfig = true, } = nextUnifiedProps;

      if (forceUpdate || Updater.needRebuildChart(unifiedProps, nextUnifiedProps)) {
        this.reInitChart(unifiedProps, nextUnifiedProps);
        return;
      }

      const changeCustomConfig = chartProcessConfig.changeCustomConfig;

      // 配置项有变化，重新生成图表
      if (changeConfig !== false) {
        let needRedraw = false;
        if (changeCustomConfig && !isEqualWith(newConfig, oldConfig, changeCustomConfig.bind(this))) {
          needRedraw = true;
        } else if (!changeCustomConfig && !isEqual(newConfig, oldConfig)) {
          needRedraw = true;
        } else if (!isEqual(newData, oldData)) {
          // 数据不相同, 由于情况比较复杂， 这里直接就重新渲染了。
          needRedraw = true;
        }
        if (needRedraw) {
          this.chart.clear();
          const config = nextUnifiedProps.config;
          chartProcessConfig.drawChart.call(this, this.chart, config, newData);
        }
      }

      // 传入的长宽有变化
      if (newWidth !== oldWidth || newHeight !== oldHeight) {
        this.changeSize(newConfig, newWidth, newHeight);
      }

      this.chart.repaint();

      this.afterRender(newConfig);
    }

    componentWillUnmount() {
      this.destroyChart();
    }

    initChart(nextUnifiedProps: IProps) {
      // 开始初始化图表
      this.initSize(nextUnifiedProps);

      const { data: initData, padding, width, height, forceFit, config, event, ...otherProps } = nextUnifiedProps;
      const canvasWidth = width || this.chartSize[0];
      const canvasHeight = height || this.chartSize[1];
      // 生成图表实例
      const chart = new G2.Chart({
        container: this.chartDom,
        width: canvasWidth,
        height: canvasHeight,
        padding,
        forceFit: forceFit || false,
        // auto-padding 时自带的内边距
        ...otherProps,
      });

      // 预处理数据
      chart && chartProcessConfig.drawChart.call(this, chart, config, initData);

      if (chart && event) {
        Object.keys(event).forEach((eventKey) => {
          chart.on(eventKey, event[eventKey]);
        });
      }

      this.chart = chart;

      if (isFunction(nextUnifiedProps.onGetG2Instance)) {
        nextUnifiedProps.onGetG2Instance(chart);
      }

      this.afterRender(nextUnifiedProps.config);
    }

    // 初始化时适配高宽
    initSize(props?: IProps) {
      const currentProps = props || this.props;

      const element = this.chartDom;
      const parentSize = getParentSize(element, currentProps.width, currentProps.height);
      this.setSize(parentSize[0], parentSize[1]);

      window.addEventListener('resize', this.autoResize);
    }

    changeSize(config: any, w = this.chartSize[0], h = this.chartSize[1]) {
      this.setSize(w, h);

      if (chartProcessConfig.changeSize) {
        this.chart && chartProcessConfig.changeSize.call(this, this.chart, config, w, h);
      } else {
        this.chart && this.chart.changeSize(w, h);
      }
    }

    autoResize = () => {
      if (this.resizeRunning) {
        window.cancelAnimationFrame(this.resizeTimer);
        return;
      }

      const { chartDom: element, props, chartSize } = this;
      this.resizeRunning = true;

      this.resizeTimer = requestAnimationFrame.call(window, () => {
        this.resizeRunning = false;

        const parentSize = getParentSize(element, props.width, props.height);
        // 读取的高宽需要是有效值，0 也不可以
        if (parentSize[0] && parentSize[1] && !(parentSize[0] === chartSize[0] && parentSize[1] === chartSize[1])) {
          this.changeSize(props.config, parentSize[0], parentSize[1]);
          this.afterRender(this.unifiedProps.config);
        }
      });
    }

    // 设置高宽
    setSize(width: number, height: number) {
      const element = this.chartDom;
      if (!element) return;

      if (width) {
        element.style.width = `${width}px`;
      }
      if (height) {
        element.style.height = `${height}px`;
      }
      this.chartSize = [width, height];
    }

    afterRender(config) {
      if (this.chart && chartProcessConfig.afterRender) {
        chartProcessConfig.afterRender.call(this, this.chart, config || this.props.config);
      }
    }

    reInitChart(unifiedProps, nextUnifiedProps) {
      if (this.chart == null) return;
      const { forceUpdate } = nextUnifiedProps;
      if (forceUpdate || Updater.needRebuildChart(unifiedProps, nextUnifiedProps)) {
        if (this.isReRendering) {
          window.cancelAnimationFrame(this.reRenderTimer);
        }

        this.isReRendering = true;
        this.destroyChart();

        this.reRenderTimer = requestAnimationFrame.call(window, () => {
          if (!this.chartDom) {
            return;
          }
          this.initChart(nextUnifiedProps);
          this.isReRendering = false;
        });
      }
    }

    destroyChart() {
      // 清空缩放相关变量和事件
      this.resizeRunning = false;
      this.resizeTimer = null;
      window.removeEventListener('resize', this.autoResize);
      // 清除配置变化重新生成图表的定时器
      window.cancelAnimationFrame(this.reRenderTimer);

      if (chartProcessConfig.destroy) {
        this.chart && chartProcessConfig.destroy.call(this, this.chart);
      }

      this.chart && this.chart.destroy && this.chart.destroy();
      this.chart = null;

      if (isFunction(this.props.onGetG2Instance)) {
        this.props.onGetG2Instance(null);
      }
    }

    render() {
      const { className, style, children, } = this.props;

      return (
        <div
          ref={dom => (this.chartDom = dom)}
          id={ConsoleChartFactory.chartId}
          key={ConsoleChartFactory.chartId}
          className={`${rootClassName} ${chartName} ${chartClassName} ${className}`}
          style={style}
        >
          {children ? <div className={rootChildClassName}>{children}</div> : null}
        </div>
      );
    }
  }
}

export default g2Factory;
