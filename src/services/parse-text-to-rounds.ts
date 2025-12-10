/**
 *
 * @param sequence Gets the raw sequence of throws and parse into separated rounds - for example: X5/5/5/5/5/5/5/5/5/5 would translate to [[10, 0] [5, 5], [5, 5], ...]
 * @returns The parsed sequence of throws
 */

export const calculateScore = (sequence: string) => {
  sequence = sequence.toUpperCase().replace(/\s/g, ''); // Normalize

  // Create 10 independent arrays for each round
  const frames: number[][] = Array.from({ length: 10 }, () => []);

  let frameIndex: number = 0;
  let throwIndex: number = 0;

  for (let i = 0; i < sequence.length; i++) {
    const c = sequence[i];

    if (!/[0-9X\-\/]/.test(c)) {
      throw new Error(`Invalid sequence: it should be 0-9, X, / or -. Received: ${c}`);
    }

    // Stop processing if we've filled all 10 frames (bonus throws handled separately)
    if (frameIndex >= 10) {
      console.log(`Note: Ignoring remaining characters after 10 frames: ${sequence.slice(i)}`);
      break;
    }

    if (frameIndex === 9 && throwIndex === 3) {
      throw new Error(`Invalid sequence: too many throws for frame ${frameIndex + 1}`);
    }

    switch (c) {
      case 'X': {
        frames[frameIndex].push(10);
        throwIndex = 0;

        // Don't move to next frame if it's the last frame
        if (frameIndex < 9) {
          throwIndex++;
          frameIndex++;
        }
        break;
      }
      case '/': {
        if (frames[frameIndex].length === 0) {
          throw new Error(`Invalid spare: no previous roll for round ${frameIndex + 1}, current frames: ${JSON.stringify(frames)}`);
        }
        const prev: number = frames[frameIndex][frames[frameIndex].length - 1];

        if (prev > 9) {
          throw new Error(`Invalid spare: previous roll exceeds 9 for round ${frameIndex + 1}, current frames: ${JSON.stringify(frames)}`);
        }

        frames[frameIndex].push(10 - prev); // Append the second roll value

        if (frameIndex === 9) {
          throwIndex++;
        } else {
          throwIndex = 0;
          frameIndex++;
        }

        break;
      }
      case '-': {
        frames[frameIndex].push(0);
        throwIndex++;

        if (throwIndex >= 2) {
          throwIndex = 0;
          frameIndex++;
        }
        break;
      }

      default: {
        const val = parseInt(c, 10);
        frames[frameIndex].push(val);
        throwIndex++;

        if (throwIndex >= 2) {
          throwIndex = 0;
          frameIndex++;
        }
        break;
      }
    }
  }

  return frames;
};
