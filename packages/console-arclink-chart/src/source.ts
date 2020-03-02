import { isFunction } from '@antv/util';

const DEFAULT_OPTIONS: Options = {
  nodes(d: any) {
    // optional
    return d.nodes;
  },
  edges(d: any) {
    // optional
    return d.edges;
  },
};

export interface Options {
  nodes?(data: any): any[];
  edges?(data: any): any[];
}

function source(data: any, options?: Options): any {
  options = Object.assign({}, DEFAULT_OPTIONS, options || {});
  const { nodes, edges } = options;
  if (nodes && !isFunction(nodes)) {
    throw new TypeError('Invalid nodes: must be a function!');
  }
  if (edges && !isFunction(edges)) {
    throw new TypeError('Invalid edges: must be a function!');
  }
  // @ts-ignore
  return {
    nodes: nodes!(data),
    edges: edges!(data),
  };
}

export default source;
