"use strict";

/*Problem 1;
Given array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.*/

const temperature = [3, -2, -6, 1, "error", 10, 13, 15, 17, 11, 8, 6];

/* 1. Understanding the problem:
-What is the temp amplitude? Answer: difference between highest and lowest temp.
-How to comnpute max and min temperature.
-What is a sensor error and how to deal w/ it.

2. Breaking up into sub-promblems
- How to ignore errors?
- Find max value in temps Array
- Find min value in temps Array
- Subtract min form max (amplitude) and return it */

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(min, max)
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 9], [4, 8, 10]);
console.log(amplitudeNew);

/*Problem 2:
 Function should now reeive 2 arrays of temps
 1. Understanding the promblem
 - With 2 arrays, should functionality be implement twice? Node, merge the two arrays

2. Breaking up into sub-promblems:
-merge two arrays. */


