import React from 'react';
import ConsoleTreeGraph from '../src';
import data from './data';

export default () => {
  const height = window.innerHeight - 200;
  const width = window.innerWidth - 200;
  const config = {
    height,
    width,
  };
  return (
    <ConsoleTreeGraph data={data} config={config} />
  )
};
