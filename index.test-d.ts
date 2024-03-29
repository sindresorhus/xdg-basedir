import {expectType, expectError} from 'tsd';
import {xdgData, xdgConfig, xdgState, xdgCache, xdgRuntime, xdgConfigDirectories, xdgDataDirectories} from './index.js';

expectType<string | undefined>(xdgData);
expectError<string>(xdgData);
expectType<string | undefined>(xdgConfig);
expectError<string>(xdgConfig);
expectType<string | undefined>(xdgState);
expectError<string>(xdgState);
expectType<string | undefined>(xdgCache);
expectError<string>(xdgCache);
expectType<string | undefined>(xdgRuntime);
expectError<string>(xdgRuntime);
expectType<readonly string[]>(xdgConfigDirectories);
expectError<string[]>(xdgConfigDirectories);
expectType<readonly string[]>(xdgDataDirectories);
expectError<string[]>(xdgDataDirectories);
