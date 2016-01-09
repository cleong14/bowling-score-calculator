// export function
module.exports = bowlingCalculator;

// function to calculate score of bowling game
// pinsList should be an array of pins that got knocked down
function bowlingCalculator (pinsList1, pinsList2) {
  var pinNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var pinsHit = [];
  var framesLeft = 10;
  var ballsLeft = 2;
  var score = 0;

  // last frame
  if (framesLeft === 1) {

  }

  // all other frames
  if (framesLeft > 1) {
    // first bowl
    if (pinsList1) {
      pinsHit = pinsList1;
      ballsLeft = 1;
    }

    // 2nd bowl
    if (pinsList2) {
      for (var k = 0; k < pinsList2.length; k++) {
        pinsHit.push(pinsList2[k]);
      }
      ballsLeft = 0;
    }

    // no strike or spare
    if (pinsHit.length !== pinNumbers.length) {
      score += pinsHit.length;
      framesLeft--;
      ballsLeft = 2;
    } // nested if !==

    // spare
    if (pinsHit.length === pinNumbers.length && ballsLeft === 0) {
      score += pinsHit.length;
      ballsLeft = 2;
    } // if spare

    // strike 
    if (pinsHit.length === pinNumbers.length && ballsLeft === 1) {
      score += pinsHit.length;
      ballsLeft = 2;
    }
  } // if > 1
}

// bowlingCalculator([1, 2, 3, 5], [4, 6]); // 6 (no spare/strike)
// bowlingCalculator([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]); // 10 (spare)
bowlingCalculator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10 (strike)