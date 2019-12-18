import * as React from 'react';
import * as G6 from '@antv/g6';

const { createRef } = React;
const { TreeGraph } = G6;

interface Props {
  data: object,
  width?: number,
  height?: number,
  config?: object,
  style?: object,
}

class ConsoleTreeGraph extends React.Component<Props, null> {
  graph = null
  ref = createRef() as React.RefObject<HTMLDivElement>

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { width = 800, height = 600, data } = this.props;
    if (this.ref && this.ref.current) {
      this.graph = new TreeGraph({
        container: this.ref.current as HTMLElement,
        width,
        height,
        modes: {
          default: [{
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model').data;
              data.collapsed = collapsed;
              return true;
            }
          }, 'drag-canvas', 'zoom-canvas' ]
        },
        defaultNode: {
          size: 26,
          anchorPoints: [[ 0, 0.5 ], [ 1, 0.5 ]],
          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9'
          }
        },
        defaultEdge: {
          shape: 'cubic-horizontal',
          style: {
            stroke: '#A3B1BF'
          }
        },
        layout: {
          type: 'compactBox',
          direction: 'LR',
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 10;
          },
          getHGap: function getHGap() {
            return 100;
          }
        }
      });
      this.graph.data(data);
      this.graph.render();
    }
  }

  render() {
    const { style } = this.props;
    return <div ref={this.ref} style={style} />;
  }
}

export default ConsoleTreeGraph;
