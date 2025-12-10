bowling-score-lib
=================

Ten-Pin Bowling Score Calculator


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bowling-score-lib.svg)](https://npmjs.org/package/bowling-score-lib)
[![Downloads/week](https://img.shields.io/npm/dw/bowling-score-lib.svg)](https://npmjs.org/package/bowling-score-lib)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bowling-score-lib
$ bowling-score-lib COMMAND
running command...
$ bowling-score-lib (--version)
bowling-score-lib/0.0.0 darwin-arm64 node-v22.12.0
$ bowling-score-lib --help [COMMAND]
USAGE
  $ bowling-score-lib COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bowling-score-lib hello PERSON`](#bowling-score-lib-hello-person)
* [`bowling-score-lib hello world`](#bowling-score-lib-hello-world)
* [`bowling-score-lib help [COMMAND]`](#bowling-score-lib-help-command)
* [`bowling-score-lib plugins`](#bowling-score-lib-plugins)
* [`bowling-score-lib plugins add PLUGIN`](#bowling-score-lib-plugins-add-plugin)
* [`bowling-score-lib plugins:inspect PLUGIN...`](#bowling-score-lib-pluginsinspect-plugin)
* [`bowling-score-lib plugins install PLUGIN`](#bowling-score-lib-plugins-install-plugin)
* [`bowling-score-lib plugins link PATH`](#bowling-score-lib-plugins-link-path)
* [`bowling-score-lib plugins remove [PLUGIN]`](#bowling-score-lib-plugins-remove-plugin)
* [`bowling-score-lib plugins reset`](#bowling-score-lib-plugins-reset)
* [`bowling-score-lib plugins uninstall [PLUGIN]`](#bowling-score-lib-plugins-uninstall-plugin)
* [`bowling-score-lib plugins unlink [PLUGIN]`](#bowling-score-lib-plugins-unlink-plugin)
* [`bowling-score-lib plugins update`](#bowling-score-lib-plugins-update)

## `bowling-score-lib hello PERSON`

Say hello

```
USAGE
  $ bowling-score-lib hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ bowling-score-lib hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/bowling-score-lib/bowling-score-lib/blob/v0.0.0/src/commands/hello/index.ts)_

## `bowling-score-lib hello world`

Say hello world

```
USAGE
  $ bowling-score-lib hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bowling-score-lib hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/bowling-score-lib/bowling-score-lib/blob/v0.0.0/src/commands/hello/world.ts)_

## `bowling-score-lib help [COMMAND]`

Display help for bowling-score-lib.

```
USAGE
  $ bowling-score-lib help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bowling-score-lib.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.36/src/commands/help.ts)_

## `bowling-score-lib plugins`

List installed plugins.

```
USAGE
  $ bowling-score-lib plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bowling-score-lib plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.54/src/commands/plugins/index.ts)_

## `bowling-score-lib plugins add PLUGIN`

Installs a plugin into bowling-score-lib.

```
USAGE
  $ bowling-score-lib plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into bowling-score-lib.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BOWLING_SCORE_LIB_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BOWLING_SCORE_LIB_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ bowling-score-lib plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ bowling-score-lib plugins add myplugin

  Install a plugin from a github url.

    $ bowling-score-lib plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ bowling-score-lib plugins add someuser/someplugin
```

## `bowling-score-lib plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bowling-score-lib plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bowling-score-lib plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.54/src/commands/plugins/inspect.ts)_

## `bowling-score-lib plugins install PLUGIN`

Installs a plugin into bowling-score-lib.

```
USAGE
  $ bowling-score-lib plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into bowling-score-lib.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BOWLING_SCORE_LIB_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BOWLING_SCORE_LIB_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ bowling-score-lib plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ bowling-score-lib plugins install myplugin

  Install a plugin from a github url.

    $ bowling-score-lib plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ bowling-score-lib plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.54/src/commands/plugins/install.ts)_

## `bowling-score-lib plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ bowling-score-lib plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bowling-score-lib plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.54/src/commands/plugins/link.ts)_

## `bowling-score-lib plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bowling-score-lib plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bowling-score-lib plugins unlink
  $ bowling-score-lib plugins remove

EXAMPLES
  $ bowling-score-lib plugins remove myplugin
```

## `bowling-score-lib plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ bowling-score-lib plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.54/src/commands/plugins/reset.ts)_

## `bowling-score-lib plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bowling-score-lib plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bowling-score-lib plugins unlink
  $ bowling-score-lib plugins remove

EXAMPLES
  $ bowling-score-lib plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.54/src/commands/plugins/uninstall.ts)_

## `bowling-score-lib plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bowling-score-lib plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bowling-score-lib plugins unlink
  $ bowling-score-lib plugins remove

EXAMPLES
  $ bowling-score-lib plugins unlink myplugin
```

## `bowling-score-lib plugins update`

Update installed plugins.

```
USAGE
  $ bowling-score-lib plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.54/src/commands/plugins/update.ts)_
<!-- commandsstop -->
