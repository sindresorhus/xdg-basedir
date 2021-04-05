import {expectType, expectError} from 'tsd';
import {xdgData, xdgConfig, xdgCache, xdgRuntime, xdgConfigDirectories, xdgDataDirectories} from './index.js';

expectType<string | undefined>(xdgData);
expectError<string>(xdgData);
expectType<string | undefined>(xdgCache);
expectError<string>(xdgCache);
expectType<string | undefined>(xdgCache);
expectError<string>(xdgCache);
expectType<string | undefined>(xdgRuntime);
expectError<string>(xdgRuntime);
expectType<readonly string[]>(xdgConfigDirectories);
expectError<string[]>(xdgConfigDirectories);
expectType<readonly string[]>(xdgDataDirectories);
expectError<string[]>(xdgDataDirectories);
