# xdg-basedir

> Get [XDG Base Directory](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html) paths

This package is meant for Linux. You should not use XDG on macOS and Windows. Instead, you should follow their platform conventions. You can use [`env-paths`](https://github.com/sindresorhus/env-paths) for that.


## Install

```
$ npm install xdg-basedir
```


## Usage

```js
const xdgBasedir = require('xdg-basedir');

xdgBasedir.data;
//=> '/home/sindresorhus/.local/share'

xdgBasedir.config;
//=> '/home/sindresorhus/.config'

xdgBasedir.dataDirs
//=> ['/home/sindresorhus/.local/share', '/usr/local/share/', '/usr/share/']
```


## API

The properties `.data`, `.config`, `.cache`, `.runtime` will return `null` in the uncommon case that both the XDG environment variable is not set and the users home directory can't be found. You need to handle this case. A common solution is to [fall back to a temp directory](https://github.com/yeoman/configstore/blob/b82690fc401318ad18dcd7d151a0003a4898a314/index.js#L15).

### .data

Directory for user-specific data files.

### .config

Directory for user-specific configuration files.

### .cache

Directory for user-specific non-essential data files.

### .runtime

Directory for user-specific non-essential runtime files and other file objects (such as sockets, named pipes, etc).

### .dataDirs

Preference-ordered array of base directories to search for data files in addition to `.data`.

### .configDirs

Preference-ordered array of base directories to search for configuration files in addition to `.config`.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-xdg-basedir?utm_source=npm-xdg-basedir&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
