import consoleDefaultConfig from './default';
import consoleYunzhiConfig from './yunzhi';

const consoleConfigMap = {
  default: consoleDefaultConfig,
  yunzhi: consoleYunzhiConfig,
};

const CONSOLE_CONFIG_KEY = 'console_config_key';
const CONSOLE_DEFAULT_CONFIG_KEY = 'default';

export function setConsoleConfig(key: string) {
  if (!key) {
    return;
  }
  try {
    window.localStorage.setItem(CONSOLE_CONFIG_KEY, key);
  } catch (e) {}
}

export function getConsoleConfig(key?: string) {
  let consoleConfigKey = null;
  try {
    consoleConfigKey = window.localStorage.getItem(CONSOLE_CONFIG_KEY);
  } catch (e) {}
  key = key || consoleConfigKey;
  return Object.assign(consoleConfigMap[CONSOLE_DEFAULT_CONFIG_KEY], consoleConfigMap[key]);
}
