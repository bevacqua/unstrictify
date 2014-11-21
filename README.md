# unstrictify

> Browserify transform that removes `'use strict'` statements from CommonJS modules

Note that this transform looks for `'use strict'` literals, and it'll strip them even if they were going to be assigned to a variable. In most cases, that should be good enough.

# Install

```shell
npm install unstrictify --save-dev
```

# Usage

You should probably use the `--global` flag, as that will also transform modules in the `node_modules` directory.

```js
var browserify = require('browserify');
var unstrictify = require('unstrictify');

browserify()
  .transform(unstrictify(), { global: true })
  .bundle();
```

```shell
browserify -g unstrictify
```

# License

MIT
