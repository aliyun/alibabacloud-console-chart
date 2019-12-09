import * as React from 'react';
import * as G6 from '@antv/g6';

const { useEffect, useRef } = React;
const { TreeGraph } = G6;

export default function({ data, height = 500, width = 800, config = {}, style={} }) {
  const ref = useRef(null);
  let graph = null;

  useEffect(() => {
    if (ref && ref.current) {
      graph = new TreeGraph({
        container: ref.current,
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
    }
    graph.data(data);
    graph.render();
  }, []);

  return <div ref={ref} style={style} />;
};
