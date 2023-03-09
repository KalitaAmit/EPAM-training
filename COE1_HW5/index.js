// Your code goes here

//Task #1

function isEquals(a, b) {
  return a === b;
}

//Task #2

function isBigger(a, b) {
  return a > b;
}

//Task #3

function storeNames(...names) {
  return names;
}

//Task #4

function getDifference(a, b) {
  if (a < b) {
    [a, b] = [b, a]; // swap values of a and b using destructuring assignment
  }
  return a - b;
}

//Task #5

function negativeCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

//Task #6

function letterCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

//Task #7

function countPoints(games) {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    let [x, y] = games[i].split(':').map(Number);
    if (x > y) {
      let pt = 3;
      points += pt;
    } else if (x === y) {
      points += 1;
    }
  }
  return points;
}
