'use strict';
var test = require('ava');
var requireUncached = require('require-uncached');

test('.data', function (t) {
	process.env.XDG_DATA_HOME = 'data';
	var xdgBasedir = requireUncached('./');
	t.is(xdgBasedir.data, 'data');
});

test('.config', function (t) {
	process.env.XDG_CONFIG_HOME = 'config';
	var xdgBasedir = requireUncached('./');
	t.is(xdgBasedir.config, 'config');
});

test('.cache', function (t) {
	process.env.XDG_CACHE_HOME = 'cache';
	var xdgBasedir = requireUncached('./');
	t.is(xdgBasedir.cache, 'cache');
});

test('.runtime', function (t) {
	process.env.XDG_RUNTIME_DIR = 'runtime';
	var xdgBasedir = requireUncached('./');
	t.is(xdgBasedir.runtime, 'runtime');
});

test('.dataDirs', function (t) {
	process.env.XDG_DATA_DIRS = 'dirs:data_dirs';
	var xdgBasedir = requireUncached('./');
	t.is(xdgBasedir.dataDirs[0], 'data');
	t.is(xdgBasedir.dataDirs[1], 'dirs');
	t.is(xdgBasedir.dataDirs[2], 'data_dirs');
});

test('.configDirs', function (t) {
	process.env.XDG_CONFIG_DIRS = 'dirs:config_dirs';
	var xdgBasedir = requireUncached('./');
	t.is(xdgBasedir.configDirs[0], 'config');
	t.is(xdgBasedir.configDirs[1], 'dirs');
	t.is(xdgBasedir.configDirs[2], 'config_dirs');
});
