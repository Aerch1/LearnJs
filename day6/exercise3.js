//  Custom `split()` function

const split = (stringToSplit, seperator) => {
  let word = stringToSplit.split(seperator);

  console.log("Seperated word: ", word);
  console.log("Word Length", word.length, "Element", word.join("/"));
};

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";
split(tempestString, "");
split(tempestString, space);
split(tempestString);
split(tempestString, comma);
