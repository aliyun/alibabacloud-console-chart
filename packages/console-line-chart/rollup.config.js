import generateRollupConfig, { plugins } from '../../rollup.config';

const { typescript, resolve, commonjs, autoExternal } = plugins;
const pluginsArr = ({ fmt, ts, file }) => {
  if (fmt === 'umd') {
    return [typescript(), resolve(), commonjs()];
  } else {
    return [typescript(), resolve(), commonjs(), autoExternal()];
  }
};
const a = generateRollupConfig({
  formatArr: ['es', 'cjs', 'umd'],
  input: 'src/index.ts',
  plugins: pluginsArr,
});

export default a;
