'use strict';
var path = require('path');
var test = require('ava');
var requireUncached = require('require-uncached');

test('.data', function (t) {
	process.env.XDG_DATA_HOME = 'data';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.data === 'data');
	t.end();
});

test('.config', function (t) {
	process.env.XDG_CONFIG_HOME = 'config';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.config === 'config');
	t.end();
});

test('.cache', function (t) {
	process.env.XDG_CACHE_HOME = 'cache';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.cache === 'cache');
	t.end();
});

test('.runtime', function (t) {
	process.env.XDG_RUNTIME_DIR = 'runtime';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.runtime === 'runtime');
	t.end();
});

test('.dataDirs', function (t) {
	process.env.XDG_DATA_DIRS = 'dirs:data_dirs';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.dataDirs[0] === 'data');
	t.assert(xdgBasedir.dataDirs[1] === 'dirs');
	t.assert(xdgBasedir.dataDirs[2] === 'data_dirs');
	t.end();
});

test('.configDirs', function (t) {
	process.env.XDG_CONFIG_DIRS = 'dirs:config_dirs';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.configDirs[0] === 'config');
	t.assert(xdgBasedir.configDirs[1] === 'dirs');
	t.assert(xdgBasedir.configDirs[2] === 'config_dirs');
	t.end();
});
