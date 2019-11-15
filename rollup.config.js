import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import copy from 'rollup-plugin-copy';
import autoExternal from 'rollup-plugin-auto-external';

const typescript = require('rollup-plugin-typescript2');

const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.ts');
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

const ALL_FORMATS = [
  { fmt: 'umd', ts: 'es5', dest: 'dist', file: 'dist/index.js' },
  { fmt: 'es', ts: 'esnext', dest: 'es', file: 'es/index.js' },
  { fmt: 'cjs', ts: 'es5', dest: 'lib', file: 'lib/index.js' },
];

const defaultPluginsCb = () => [typescript(), resolve(), commonjs()];

const defaultExternalCb = fmt => {
  if (fmt === 'umd') {
    return ['react', 'react-dom'];
  } else {
    return [
      ...Object.keys(PKG_JSON.dependencies || {}),
      ...Object.keys(PKG_JSON.peerDependencies || {}),
    ];
  }
};

const defaultGlobalsCb = fmt => {
  if (fmt === 'umd') {
    return {
      react: 'React',
      'react-dom': 'ReactDOM',
    };
  } else {
    return {};
  }
};

export default function generateRollupConfig({
  formatArr = ['es'],
  input = INPUT_FILE,
  plugins = defaultPluginsCb,
  external = defaultExternalCb,
  output = {},
}) {
  const allowFormats = ALL_FORMATS.filter(v => formatArr.includes(v.fmt));
  return allowFormats.map(format => {
    const processedConfig = {
      input,
      output: Object.assign(
        {
          file: path.join(PACKAGE_ROOT_PATH, format.file),
          format: format.fmt,
          sourcemap: false,
          name: PKG_JSON.name,
          strict: false,
          globals: defaultGlobalsCb(format.fmt),
        },
        output
      ),
    };
    // 处理external
    if (typeof external === 'function') {
      processedConfig.external = external(format.fmt);
    } else {
      processedConfig.external = external;
    }
    // 处理plugins
    processedConfig.plugins = plugins(format);

    return processedConfig;
  });
}

export const plugins = {
  babel,
  typescript,
  resolve,
  json,
  postcss,
  commonjs,
  autoExternal,
  copy,
};
