const { items: spotifyData } = require("../data/spotify.json");
const {
  pipe,
  multiply,
  inc,
  both,
  filter,
  lte,
  equals,
  defaultTo,
  ifElse,
  cond,
  always,
  T
} = require("ramda");

arithmetic: {
  const square = x => multiply(x, x);
  const operate = pipe(
    multiply,
    inc,
    square
  );
  operate(2, 2);
}

comparision: {
  const isUnpopular = artist => lte(artist.popularity, 50);
  const isAmerican = artist => equals(artist.nationality, "USA");

  const unpopularAmericans = both(isUnpopular, isAmerican);
  filter(unpopularAmericans, spotifyData);
}

logic: {
  const server = {};
  const esPort = server.port || 8080;
  const ramdaPort = defaultTo(8080, server.port);
}

conditional: {
  // Vanilla
  let forever21 = age => (age >= 21 ? 21 : age + 1);
  // Refactor to ifElse
  forever21 = age => ifElse(gte(21), () => 21, inc)(age);
  // Refactor to lte
  forever21 = age => ifElse(lte(21), () => 21, inc)(age);
  // Refactor to constant
  forever21 = age => ifElse(gte(__, 21), always(21), inc)(age);


  const water = cond([
    [equals(0), always("water freezes at 0°C")],
    [equals(100), always("water boils at 100°C")],
    [T, temp => `nothing special happens at ${temp}°C`]
  ]);
}
