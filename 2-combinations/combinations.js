const { items: spotifyData } = require("../data/spotify.json");
const {
  filter,
  complement,
  both,
  either,
  pipe,
  compose
} = require("ramda");
const myArray = [1, 2, 3, 4, 5];

complement: {
  const isOdd = value => value % 2;
  const isEven = complement(isOdd);

  filter(isOdd, myArray);
  filter(isEven, myArray);
}

both: {
  // &&
  const isUnpopular = artist => artist.popularity <= 50;
  const isAmerican = artist => artist.nationality === "USA";

  const unpopularAmericans = both(isUnpopular, isAmerican);
  filter(unpopularAmericans, spotifyData);
}

either: {
  const isAmerican = artist => artist.nationality === "USA";
  const isEnglish = artist => artist.nationality === "UK";

  const allAllies = either(isEnglish, isAmerican);
  filter(allAllies, spotifyData);
}

pipe: {
  const multiply = (a, b) => a * b;
  const addOne = x => x + 1;
  const square = x => x * x;
  const operate = pipe(
    multiply,
    addOne,
    square
  );
  operate(2, 2);
}

compose: {
  const multiply = (a, b) => a * b;
  const addOne = x => x + 1;
  const square = x => x * x;
  const operate = compose(
    square,
    addOne,
    multiply
  );
  operate(2, 2);
}
