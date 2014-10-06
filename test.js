'use strict';
var path = require('path');
var test = require('ava');
var requireUncached = require('require-uncached');

test('.data', function (t) {
	process.env.XDG_DATA_HOME = 'foo';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.data === 'foo');
	t.end();
});

test('.config', function (t) {
	process.env.XDG_CONFIG_HOME = 'foo';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.config === 'foo');
	t.end();
});

test('.cache', function (t) {
	process.env.XDG_CACHE_HOME = 'foo';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.config === 'foo');
	t.end();
});

test('.runtime', function (t) {
	process.env.XDG_RUNTIME_DIR = 'foo';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.runtime === 'foo');
	t.end();
});

test('.dataDirs', function (t) {
	process.env.XDG_XDG_DATA_DIRS = 'foo:bar';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.dataDirs[0] === 'foo');
	t.end();
});

test('.configDirs', function (t) {
	process.env.XDG_XDG_CONDIG_DIRS = 'foo:bar';
	var xdgBasedir = requireUncached('./');
	t.assert(xdgBasedir.configDirs[0] === 'foo');
	t.end();
});
