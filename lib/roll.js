// Dice-rolling functions

const result = [];

export const roll = function (numSides, numDice, numRolls) {
  for (let i = 1; i <= numRolls; i++) {
    const eachRoll = [];
    for (let j = 1; j <= numDice; j++) {
      var randomNum = Math.floor(Math.random() * numSides) + 1;
      eachRoll.push(randomNum);
    }
    var eacRollSum = eachRoll.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    result.push(eacRollSum);
  }
  return { sides: numSides, dice: numDice, rolls: numRolls, results: result };
};
