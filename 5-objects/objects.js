const { items: spotifyData } = require("../data/spotify.json");

const {
  filter,
  both,
  compose,
  pick,
  map,
  equals,
  lte,
  prop,
  __,
  path,
  pathOr,
  assoc,
  find,
  propEq,
  dissoc,
  evolve,
  inc,
  propOr,
  without,
  multiply
} = require("ramda");

pointfree_pick: {
  // pick / omit
  const isUnpopular = compose(
    lte(__, 50),
    prop("popularity")
  );
  const isAmerican = compose(
    equals("USA"),
    prop("nationality")
  );

  const unpopularAmericans = both(isUnpopular, isAmerican);

  const unpopularAmericanArtists = compose(
    map(pick(["name", "nationality"])),
    filter(unpopularAmericans)
  );
  // console.log(unpopularAmericanArtists(spotifyData))
}

path: {
  const isUnpopular = compose(
    lte(__, 50),
    prop("popularity")
  );
  const isAmerican = compose(
    equals("USA"),
    prop("nationality")
  );

  const unpopularAmericans = both(isUnpopular, isAmerican);

  const unpopularAmericanUrl = compose(
    map(path(["external_urls", "spotify"])),
    // map(pathOr("https://www.spotify.com", ["external_urls", "spotify"])),
    filter(unpopularAmericans)
  );
}

assoc: {
  // assoc / assocPath / dissoc / dissocPath
  const makeEnglish = assoc('nationality', 'English')
  const findBritish = filter(propEq('nationality', 'UK'))
  const updateCountry = compose(map(makeEnglish), findBritish);
  updateCountry(spotifyData)
}

evolve: {
  const artist = spotifyData[0];
  const increasePopularity = evolve({
    popularity: inc,
    genres: without('symphonic black metal'),
    external_urls: { spotify: () => 'foo' },
    followers: { total: multiply(2) }
   });
  console.log(increasePopularity(artist));
}