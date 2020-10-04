export default {
  computeRating: (ratingObj) => {
    return Math.round((ratingObj.lowIncome + ratingObj.studentGrowth + ratingObj.testScores + ratingObj.equity) / 4);
  },
  starPath: (reviewsArr, score) => {
    const map = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
    };
    let path = '';

    if (reviewsArr) {
      const reviewScoreSum = reviewsArr.reduce((acc, current) => acc + current.score, 0);
      const averageStarsNum = Math.round(reviewScoreSum / reviewsArr.length);
      path = `./assets/${map[averageStarsNum]}Star.png`;
    } else {
      path = `./assets/${map[score]}Star.png`;
    }
    return path;
  },
};
