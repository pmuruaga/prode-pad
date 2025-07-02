export interface Prediction {
  homeScore: number
  awayScore: number
}

export interface Result {
  homeScore: number
  awayScore: number
}

/**
 * Calculate points earned for a prediction.
 *
 * - 3 points for an exact score.
 * - 1 point for correctly predicting the outcome (win/lose/draw) but not the
 *   exact score.
 */
export function calculateScore(
  prediction: Prediction,
  result: Result
): number {
  if (
    prediction.homeScore === result.homeScore &&
    prediction.awayScore === result.awayScore
  ) {
    return 3
  }

  const predictedDiff = prediction.homeScore - prediction.awayScore
  const resultDiff = result.homeScore - result.awayScore

  // Normalize to -1, 0, 1 for away win, draw or home win
  const predictedOutcome = Math.sign(predictedDiff)
  const resultOutcome = Math.sign(resultDiff)

  return predictedOutcome === resultOutcome ? 1 : 0
}
