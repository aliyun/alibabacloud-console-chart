import * as React from 'react';
import * as G6 from '@antv/g6';

const { createRef } = React;
const { TreeGraph } = G6;

interface Props {
  data: object,
  config?: options,
}

interface options {
  width?: number,
  height?: number,
  style?: object,
  fitView?: boolean,
  dragCanvas?: boolean,
  zoomCanvas?: boolean,
  nodeExpand?: boolean,
}

class ConsoleTreeGraph extends React.Component<Props, null> {
  graph = null
  ref = createRef() as React.RefObject<HTMLDivElement>

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { config = {} as options, data } = this.props;
    const {
      width = 800,
      height = 600,
      fitView = false,
      dragCanvas = false,
      zoomCanvas = false,
      nodeExpand = false,
      ...others
    } = config;
    if (this.ref && this.ref.current) {
      this.graph = new TreeGraph({
        container: this.ref.current as HTMLElement,
        width,
        height,
        ...others,
        fitView,
        modes: {
          default: [],
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

  updateConfig = () => {
    const {
      fitView = false,
      dragCanvas = false,
      zoomCanvas = false,
      nodeExpand = false,
    } = this.props.config;
    if (!this.graph) return;
    this.graph.set('fitView', fitView);

    if (dragCanvas) {
      this.graph.addBehaviors(['drag-canvas']);
    } else {
      this.graph.removeBehaviors(['drag-canvas']);
    }
    if (zoomCanvas) {
      this.graph.addBehaviors(['zoom-canvas']);
    } else {
      this.graph.removeBehaviors(['zoom-canvas']);
    }
    if (nodeExpand) {
      this.graph.addBehaviors([
        {
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            const data = item.get('model').data;
            data.collapsed = collapsed;
            return true;
          }
        }
      ]);
    } else {
      this.graph.removeBehaviors(['collapse-expand']);
    }
  }

  render() {
    const { style } = this.props.config;
    return <div ref={this.ref} style={style} />;
  }
}

export default ConsoleTreeGraph;
