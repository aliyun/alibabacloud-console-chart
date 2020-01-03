
enum linkTypes {
  'arc',
  'line',
}

enum nodeAligns {
  'start',
  'end',
  'center',
  'justify',
}

enum directions {
  'vertical',
  'horizontal',
}

export default interface config {
  topology: boolean,
  direction?: directions,
  linkType?: linkTypes,
  linkColor?: string,
  linkOpacity?: number,
  nodeAlign?: nodeAligns,
}
