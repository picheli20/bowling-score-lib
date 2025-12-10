import { Args, Command, Flags } from '@oclif/core';

import { parseTextToRounds } from '../services/parse-text-to-rounds.js';
import { roundsToScore } from '../services/rounds-to-score.js';

export default class Score extends Command {
  static override args = {
    sequence: Args.string({
      description: '- sequence of throws where X is a strike, / is a spare and 0-9 are the number of pins knocked down',
      required: true
    }),
  }
  static override description = 'calculate the score of a bowling game'
  static override examples = [
    '<%= config.bin %> <%= command.id %> "12345123451234512345"',
    '<%= config.bin %> <%= command.id %> "XXXXXXXXXXXX" --json',
    '<%= config.bin %> <%= command.id %> "X9-9-9-9-9-9-9-9-9-" --json --rounds',
  ]
  static override flags = {
    // flag with a value (-n, --name=VALUE)
    json: Flags.boolean({
      char: 'j',
      description: 'Outputs the score as a json object with the score key set as "score". \n If this option is not passed, then score is printed to stdout.',
    }),
    rounds: Flags.boolean({
      char: 'r',
      description: 'Add rounds to the output - it only works with the json flag.',
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Score);

    const rounds = parseTextToRounds(args.sequence);
    const score = roundsToScore(rounds);

    this.log(flags.json ? JSON.stringify({ score, ...flags.rounds ? { rounds } : {} }) : `${score}`);
  }
}
