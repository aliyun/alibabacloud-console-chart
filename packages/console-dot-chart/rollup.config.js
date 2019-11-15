import generateRollupConfig, { plugins } from '../../rollup.config';

const { typescript, resolve, postcss, commonjs, autoExternal } = plugins;
const pluginsCb = ({ fmt, ts, file }) => {
  if (fmt === 'umd') {
    return [typescript({}), resolve(), commonjs()];
  } else {
    return [typescript({}), resolve(), commonjs(), autoExternal()];
  }
};

export default generateRollupConfig({
  formatArr: ['es', 'cjs', 'umd'],
  input: 'src/index.ts',
  plugins: pluginsCb,
});
