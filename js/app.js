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
      for (var i = 0; i < pinsHit.length; i++) {
        score += pinsHit[i];
      } // for loop
      framesLeft--;
      ballsLeft = 2;
    } // nested if !==

    // spare
    if (pinsHit.length === pinNumbers.length && ballsLeft === 0) {
      for (var j = 0; j < pinsHit.length; j++) {
        score += pinsHit[j];
      } // for loop
    } // if spare
  } // if > 1
  console.log(score);
}

bowlingCalculator([1, 2, 3, 5], [4, 6]);