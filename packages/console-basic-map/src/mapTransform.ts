export interface Options {
  callback?(item: any, index: number, arr: any[]): any;
}

function defaultCallback(row: any): any {
  return row;
}

export default (dataView: any, options: Options) => {
  dataView.rows = dataView.rows.map(options.callback || defaultCallback);
};
