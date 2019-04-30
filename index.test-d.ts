import {expectType, expectError} from 'tsd';
import xdgBasedir = require('.');

expectType<string | undefined>(xdgBasedir.data);
expectError<string>(xdgBasedir.data);
expectType<string | undefined>(xdgBasedir.config);
expectError<string>(xdgBasedir.config);
expectType<string | undefined>(xdgBasedir.cache);
expectError<string>(xdgBasedir.cache);
expectType<string | undefined>(xdgBasedir.runtime);
expectError<string>(xdgBasedir.runtime);
expectType<readonly string[]>(xdgBasedir.configDirs);
expectError<string[]>(xdgBasedir.configDirs);
expectType<readonly string[]>(xdgBasedir.dataDirs);
expectError<string[]>(xdgBasedir.dataDirs);
