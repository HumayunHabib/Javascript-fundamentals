// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const calctempAmplitude = function name(tempArr) {
//   let max = tempArr[0];
//   for (let i = 0; i < tempArr.length; i++) {
//     if (tempArr[i] > max) {
//       max = tempArr[i];
//     }
//   }
//   console.log(max);
// };

// calctempAmplitude(temperatures);

// Problem 1:
// const temperatures = [3, -2, -6, -1, "error", 3, 9, 13, 17, 15, 14, 9, 5];
// const clacTempAmplitude = (temps) => {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") break;
//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   return max - min;
// };
// const amplitude = clacTempAmplitude(temperatures);
// console.log(amplitude);

// Problem 2:
// Merge two arrays

// const calcTempAmplitudeNew = (t1, t2) => {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") break;
//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

const measureKelvin = function name() {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degree celsius")),
    value: 10,
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
// console.log(measureKelvin());

// Using a debugger

// const calcTempAmplitudeBug = (t1, t2) => {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

const data1 = [17, 21, 23];

// console.log(
//   `${data1[0]}°C in ${1} days......${data1[1]}°C in ${2} days......${
//     data1[2]
//   }°C in ${3} days...`
// );

const printForeCast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log("...", str);
};
printForeCast(data1);
