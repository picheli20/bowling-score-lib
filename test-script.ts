import { calculateScore } from './src/services/parse-text-to-rounds.js';

console.log('=== Testing calculateScore ===\n');

// Simple test cases
const testCases = [
  // { input: '9-9-9-9-9-9-9-9-9-9-', description: 'All 9s (no strikes/spares)' },
  // { input: 'X9-9-9-9-9-9-9-9-9-', description: 'One strike, rest 9s' },
  // { input: '5/5/5/5/5/5/5/5/5/5/5', description: 'All spares (10th frame bonus)' },
  // { input: '9-9-9-9-9-9-9-9-9-9-9', description: `All 9s and 3 plays in the last round` },


  // { input: '12345123451234512345', description: `All 9s and 3 plays in the last round` },
  // { input: 'XXXXXXXXXXXX', description: `a perfect game, 12 strikes, giving a score of 300` },
  // { input: '9-9-9-9-9-9-9-9-9-9-', description: `heartbreak - 9 pins down each round, giving a score of 90` },

  { input: '5/5/5/5/5/5/5/5/5/5/5', description: `a spare every round, giving a score of 150` },
];

testCases.forEach(({ input, description }) => {
  console.log(`Test: ${description}`);
  console.log(`Input: "${input}"`);
  try {
    const result = calculateScore(input);
    console.log(`Result: ${JSON.stringify(result)}`);
  } catch (error) {
    console.log(`Error: ${(error as Error).message}`);
  }
  console.log('---\n');
});
