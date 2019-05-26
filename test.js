import path from 'path';
import {serial as test} from 'ava';
import importFresh from 'import-fresh';

test('.data', t => {
	process.env.XDG_DATA_HOME = 'data';
	const xdgBasedir = importFresh('.');
	t.is(xdgBasedir.data, 'data');
});

test('.config', t => {
	process.env.XDG_CONFIG_HOME = 'config';
	const xdgBasedir = importFresh('.');
	t.is(xdgBasedir.config, 'config');
});

test('.cache', t => {
	process.env.XDG_CACHE_HOME = 'cache';
	const xdgBasedir = importFresh('.');
	t.is(xdgBasedir.cache, 'cache');
});

test('.runtime', t => {
	process.env.XDG_RUNTIME_DIR = 'runtime';
	const xdgBasedir = importFresh('.');
	t.is(xdgBasedir.runtime, 'runtime');
});

test('.dataDirs', t => {
	process.env.XDG_DATA_DIRS = ['dirs', 'data_dirs'].join(path.delimiter);
	const xdgBasedir = importFresh('.');
	t.is(xdgBasedir.dataDirs[0], 'data');
	t.is(xdgBasedir.dataDirs[1], 'dirs');
	t.is(xdgBasedir.dataDirs[2], 'data_dirs');
});

test('.configDirs', t => {
	process.env.XDG_CONFIG_DIRS = ['dirs', 'config_dirs'].join(path.delimiter);
	const xdgBasedir = importFresh('.');
	t.is(xdgBasedir.configDirs[0], 'config');
	t.is(xdgBasedir.configDirs[1], 'dirs');
	t.is(xdgBasedir.configDirs[2], 'config_dirs');
});
