export * from './types/index';

import { G2 } from './common/utils';
import * as Utils from './common/utils';
import * as Constants from './constants/index';
export { G2, Utils, Constants };

export * from './g2Helper/common';
export { default as dataAdapter } from './g2Helper/dataAdapter';

export * from './g2Helper/rectAutoTickCount';

export { default as axisX } from './g2Helper/axisX';
export { default as axisY } from './g2Helper/axisY';
export { default as drawLine } from './g2Helper/drawLine';

export { default as g2Tooltip } from './g2Helper/tooltip';
export { default as g2Guide } from './g2Helper/guide';
export { default as g2Label } from './g2Helper/label';
export { default as g2Style } from './g2Helper/style';
export { default as g2Size } from './g2Helper/size';
export { default as g2Legend } from './g2Helper/legend';
export { default as g2Factory } from './g2Helper/g2Factory';

export * from './theme/index';
export * from './config/index';
