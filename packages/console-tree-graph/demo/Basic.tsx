import React from 'react';
import ConsoleTreeGraph from '../src';
import data from './data';

const config = {};

export default () => {
  const height = window.innerHeight - 200;
  const width = window.innerWidth - 200;
  return (
    <ConsoleTreeGraph data={data} config={config} height={height} width={width} />
  )
};
