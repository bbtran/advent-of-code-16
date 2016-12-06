/*
Then, you notice the instructions continue on the back of the Recruiting Document.
Easter Bunny HQ is actually at the first location you visit twice.
For example, if your instructions are R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.

How many blocks away is the first location you visit twice?
*/

const puzInpt = "R3, L5, R2, L1, L2, R5, L2, R2, L2, L2, L1, R2, L2, R4, R4, R1, L2, L3, R3, L1, R2, L2, L4, R4, R5, L3, R3, L3, L3, R4, R5, L3, R3, L5, L1, L2, R2, L1, R3, R1, L1, R187, L1, R2, R47, L5, L1, L2, R4, R3, L3, R3, R4, R1, R3, L1, L4, L1, R2, L1, R4, R5, L1, R77, L5, L4, R3, L2, R4, R5, R5, L2, L2, R2, R5, L2, R194, R5, L2, R4, L5, L4, L2, R5, L3, L2, L5, R5, R2, L3, R3, R1, L4, R2, L1, R5, L1, R5, L1, L1, R3, L1, R5, R2, R5, R5, L4, L5, L5, L5, R3, L2, L5, L4, R3, R1, R1, R4, L2, L4, R5, R5, R4, L2, L2, R5, R5, L5, L2, R4, R4, L4, R1, L3, R1, L1, L1, L1, L4, R5, R4, L4, L4, R5, R3, L2, L2, R3, R1, R4, L3, R1, L4, R3, L3, L2, R2, R2, R2, L1, L4, R3, R2, R2, L3, R2, L3, L2, R4, L2, R3, L4, R5, R4, R1, R5, R3";

const splitInpt = puzInpt.split(', ');
// console.log(splitInpt);

const trackAllCoords = (inpt) => {
  const position = [];
  const blocks = [];
  const cordStore = {};
  const directions = { n: 0, s: 0, e: 0, w: 0 };
  const startCord = { x: 0, y: 0 };
  let currentDir = 'n';

  const calcDistance = () => {
    return Math.abs((directions.n - directions.s)) + Math.abs((directions.e - directions.w));
  };

  for (let i = 0; i < inpt.length; i++) {
    position.push(inpt[i][0]);
    blocks.push(inpt[i].slice(1));
  }

  // console.log(position + " | " + blocks);

  for (let j = 0; j < position.length; j++) {
    // console.log('currently facing', currentDir);
    if (currentDir === 'n') {
      if (position[j] === 'L') {
        currentDir = 'w';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.x -= 1;
          const currentCord = startCord;
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      } else {
        currentDir = 'e';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.x += 1;
          const currentCord = startCord;
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      }
    } else if (currentDir === 's') {
      if (position[j] === 'L') {
        currentDir = 'e';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.x += 1;
          const currentCord = startCord;
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      } else {
        currentDir = 'w';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.x -= 1;
          const currentCord = startCord;
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      }
    } else if (currentDir === 'e') {
      if (position[j] === 'L') {
        currentDir = 'n';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.y += 1;
          const currentCord = startCord;
          // console.log(currentCord);
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      } else {
        currentDir = 's';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.y -= 1;
          const currentCord = startCord;
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      }
    } else if (currentDir === 'w') {
      if (position[j] === 'L') {
        currentDir = 's';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.y -= 1;
          const currentCord = startCord;
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      } else {
        currentDir = 'n';
        for (let k = 1; k <= blocks[j]; k++) {
          directions[currentDir] += 1;
          startCord.y += 1;
          const currentCord = startCord;
          if (cordStore[JSON.stringify(currentCord)] === undefined) {
            cordStore[JSON.stringify(currentCord)] = 1;
          } else {
            return calcDistance();
          }
        }
      }
    }
  }
  console.log(directions);
  console.log(cordStore);
  return calcDistance();
};

trackAllCoords(splitInpt);
