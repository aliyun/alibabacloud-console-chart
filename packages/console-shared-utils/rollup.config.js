import generateRollupConfig, { plugins } from '../../rollup.config';

const { typescript, resolve, commonjs } = plugins;

const pluginsCb = ({ fmt, ts, dest }) => {
  return [typescript(), resolve(), commonjs()];
};

export default generateRollupConfig({
  formatArr: ['es', 'cjs'],
  input: 'src/index.ts',
  plugins: pluginsCb,
});
