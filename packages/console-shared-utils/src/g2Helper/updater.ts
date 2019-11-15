import { shallowEqual } from '../common/utils';

const Updater = {
  needRebuildChart(unifiedProps, nextUnifiedProps) {
    if (unifiedProps == null || nextUnifiedProps == null) return false;

    if (
      !shallowEqual(unifiedProps.padding, nextUnifiedProps.padding) ||
      !shallowEqual(unifiedProps.background, nextUnifiedProps.background) ||
      !shallowEqual(unifiedProps.plotBackground, nextUnifiedProps.plotBackground) ||
      !shallowEqual(unifiedProps.pixelRatio, nextUnifiedProps.pixelRatio)
    ) {
      return true;
    }

    return false;
  },
};

export default Updater;
