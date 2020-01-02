
enum linkTypes {
  'arc',
  'line',
}

export default interface config {
  linkType?: linkTypes,
  linkColor?: string,
  linkOpacity?: number,
}
