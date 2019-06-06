const { items: spotifyData } = require("../data/spotify.json");
const { filter, curry, compose, map, propEq, prop } = require("ramda");

curry: {
  const isNationality = curry(
    (nationality, artist) => artist.nationality === nationality
  );
  filter(isNationality("UK"), spotifyData);
}

compose: {
  const isNationality = curry(
    (nationality, artist) => artist.nationality === nationality
  );

  const getArtistsByNationality = curry((nationality, data) =>
    compose(
      map(artist => artist.name),
      filter(isNationality(nationality))
    )(data)
  );
  const ukArtist = getArtistsByNationality("UK", spotifyData);
  const polishArtist = getArtistsByNationality("Poland", spotifyData);
  console.log({ ukArtist, polishArtist });
}
