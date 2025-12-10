import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('score', () => {
  describe('calculation', () => {
    const games = [
      {expected: 60, sequence: '12345123451234512345'},
      {expected: 100, sequence: 'X9-9-9-9-9-9-9-9-9-'},
      {expected: 300, sequence: `XXXXXXXXXXXX`},
      {expected: 90, sequence: `9-9-9-9-9-9-9-9-9-9-`},
      {expected: 150, sequence: `5/5/5/5/5/5/5/5/5/5/5`},
    ];

    for (const game of games) {
      it(`Simple game: ${game.sequence}`, async () => {
        const {stdout} = await runCommand(`score "${game.sequence}"`);
        expect(stdout).to.contain(`${game.expected}`);
      });
    }

    it('Invalid characters', async () => {
      try {
        await runCommand(`score "abc"`);
      } catch (error: unknown) {
        expect((error as Error).message).to.contain('Invalid sequence: it should be 0-9, X, / or -. Received: abc');
      }
    });

    it('Invalid too many throws', async () => {
      try {
        await runCommand(`score "XXXXXXXXXXXXX"`);
      } catch (error: unknown) {
        expect((error as Error).message).to.contain('Invalid sequence: too many throws for frame 10');
      }
    });
  });

  describe('flags', () => {
    it('should output json', async () => {
      const {stdout} = await runCommand(`score "12345123451234512345" --json`);
      expect(stdout).to.contain(`{"score":60}`);
    });

    it('should output json with rounds', async () => {
      const {stdout} = await runCommand(`score "12345123451234512345" --json --rounds`);
      expect(stdout).to.contain(`{"score":60,"rounds":[[1,2],[3,4],[5,1],[2,3],[4,5],[1,2],[3,4],[5,1],[2,3],[4,5]]}`);
    });
  })
})
