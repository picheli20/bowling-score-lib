bowling-score-lib
=================

Ten-Pin Bowling Score Calculator


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bowling-score-lib.svg)](https://npmjs.org/package/bowling-score-lib)
[![Downloads/week](https://img.shields.io/npm/dw/bowling-score-lib.svg)](https://npmjs.org/package/bowling-score-lib)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Develpment](#develpment)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bowling-score-lib
$ bowling-score-lib COMMAND
running command...
$ bowling-score-lib (--version)
bowling-score-lib/0.0.2 darwin-arm64 node-v22.12.0
$ bowling-score-lib --help [COMMAND]
USAGE
  $ bowling-score-lib COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bowling-score-lib score SEQUENCE`](#bowling-score-lib-score-sequence)

## `bowling-score-lib score SEQUENCE`

calculate the score of a bowling game

```
USAGE
  $ bowling-score-lib score SEQUENCE [-j] [-r]

ARGUMENTS
  SEQUENCE  - sequence of throws where X is a strike, / is a spare and 0-9 are the number of pins knocked down

FLAGS
  -j, --json    Outputs the score as a json object with the score key set as "score".
                If this option is not passed, then score is printed to stdout.
  -r, --rounds  Add rounds to the output - it only works with the json flag.

DESCRIPTION
  calculate the score of a bowling game

EXAMPLES
  $ bowling-score-lib score "12345123451234512345"

  $ bowling-score-lib score "XXXXXXXXXXXX" --json

  $ bowling-score-lib score "X9-9-9-9-9-9-9-9-9-" --json --rounds
```

_See code: [src/commands/score.ts](https://github.com/bowling-score-lib/bowling-score-lib/blob/v0.0.2/src/commands/score.ts)_
<!-- commandsstop -->


# Develpment
Run on terminal the `./.bin/dev.js` in order to test locally, example:
```sh
./bin/dev.js score "X9-9-9-9-9-9-9-9-9-" --json --rounds
```
