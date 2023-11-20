// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, 3, 9, 13, 17, 15, 14, 9, 5];
const calctempAmplitude = function name(tempArr) {
  let max = tempArr[0];
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] > max) {
      max = tempArr[i];
    }
  }
  console.log(max);
};

calctempAmplitude(temperatures);
