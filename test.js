import test from 'ava';
/// import importFresh from 'import-fresh';

// TODO: Enable tests again when `import-fresh` supports ESM.

test('x', t => {
	t.pass();
});

/// test('xdgData', t => {
// 	process.env.XDG_DATA_HOME = 'data';
// 	const {xdgData} = importFresh('.');
// 	t.is(xdgData, 'data');
// });
//
// test('xdgConfig', t => {
// 	process.env.XDG_CONFIG_HOME = 'config';
// 	const {xdgConfig} = importFresh('.');
// 	t.is(xdgConfig, 'config');
// });
//
// test('xdgCache', t => {
// 	process.env.XDG_CACHE_HOME = 'cache';
// 	const {xdgCache} = importFresh('.');
// 	t.is(xdgCache, 'cache');
// });
//
// test('xdgRuntime', t => {
// 	process.env.XDG_RUNTIME_DIR = 'runtime';
// 	const {xdgRuntime} = importFresh('.');
// 	t.is(xdgRuntime, 'runtime');
// });
//
// test('xdgDataDirectories', t => {
// 	process.env.XDG_DATA_DIRS = 'dirs:data_dirs';
// 	const {xdgDataDirectories} = importFresh('.');
// 	t.is(xdgDataDirectories[0], 'data');
// 	t.is(xdgDataDirectories[1], 'dirs');
// 	t.is(xdgDataDirectories[2], 'data_dirs');
// });
//
// test('xdgConfigDirectories', t => {
// 	process.env.XDG_CONFIG_DIRS = 'dirs:config_dirs';
// 	const {xdgConfigDirectories} = importFresh('.');
// 	t.is(xdgConfigDirectories[0], 'config');
// 	t.is(xdgConfigDirectories[1], 'dirs');
// 	t.is(xdgConfigDirectories[2], 'config_dirs');
// });
