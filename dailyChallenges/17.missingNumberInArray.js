require("colors");

/*
AlgoDaily Day 17
We're given an array of continuous numbers that should increment sequentially by 1, which just means that we expect a sequence like:
[1, 2, 3, 4, 5, 6, 7]

However, we notice that there are some missing numbers in the sequence.
[1, 2, 4, 5, 7]

Can you write a method missingNumbers that takes an array of continuous numbers and returns the missing integers?

missingNumbers([1, 2, 4, 5, 7]);
//should return [3, 6]

Constraints
-Length of the array <= 100000
-The array will always contain non negative integers (including 0)
-Expected time complexity : O(n)
-Expected space complexity : O(1)

Link: https://algodaily.com/challenges/find-missing-number-in-array
*/

function missingNumberInArrBrute(arr) {
  let start = arr[0];
  let next = start;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === next) {
      next = next + 1;
      continue;
    } else {
      let k = arr[i];
      let j = next;
      while (j < k) {
        arr2.push(j++);
      }
      next = k + 1;
    }
  }
  return arr2;
}

const arr1 = [1, 2, 4, 5, 7, 10];

console.time("brute T");
console.log(`Output: ${missingNumberInArrBrute(arr1)}`);
console.timeEnd("brute T");
