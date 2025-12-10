/**
 * Calculates the total bowling score from parsed frames
 * @param frames Array of frames, where each frame is an array of pin counts
 * @returns Total score
 *
 * Bowling scoring rules:
 * - Strike (X): 10 + next 2 rolls
 * - Spare (/): 10 + next 1 roll
 * - Open frame: sum of 2 rolls
 * - 10th frame: can have up to 3 rolls if strike/spare
 */
export const roundsToScore = (frames: number[][]): number => {
  let totalScore = 0;

  // Flatten all rolls for easier bonus calculation
  const allRolls: number[] = [];
  for (const frame of frames) {
    allRolls.push(...frame);
  }

  let rollIndex = 0;

  frames.forEach((frame, index) => {
    // 10th frame
    if (index === 9) {
      totalScore += frame[0] + frame[1] + (frame[2] ?? 0);
      return;
    }

    if (frame.length === 0) {
      throw new Error(`Frame ${index + 1} is empty`);
    }

    // Strike: 10 + next 2 rolls
    if (frame[0] === 10) {
      totalScore += 10 + (allRolls[rollIndex + 1] || 0) + (allRolls[rollIndex + 2] || 0);
      rollIndex += 1;
    }

    // Spare: 10 + next 1 roll
    else if (frame.length >= 2 && frame[0] + frame[1] === 10) {
      totalScore += 10 + (allRolls[rollIndex + 2] || 0);
      rollIndex += 2;
    }

    // Open frame: sum of rolls
    else {
      if (frame.length < 2) {
        throw new Error(`Frame ${index + 1} is incomplete`);
      }

      totalScore += frame[0] + frame[1];
      rollIndex += 2;
    }
  })

  return totalScore;
};
