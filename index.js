import os from 'os';
import path from 'path';

const homeDirectory = os.homedir();
const {env} = process;

export const data = env.XDG_DATA_HOME ||
	(homeDirectory ? path.join(homeDirectory, '.local', 'share') : undefined);

export const config = env.XDG_CONFIG_HOME ||
	(homeDirectory ? path.join(homeDirectory, '.config') : undefined);

export const cache = env.XDG_CACHE_HOME || (homeDirectory ? path.join(homeDirectory, '.cache') : undefined);

export const runtime = env.XDG_RUNTIME_DIR || undefined;

export const dataDirs = (env.XDG_DATA_DIRS || '/usr/local/share/:/usr/share/').split(':');

if (data) {
	dataDirs.unshift(data);
}

export const configDirs = (env.XDG_CONFIG_DIRS || '/etc/xdg').split(':');

if (config) {
	configDirs.unshift(config);
}
