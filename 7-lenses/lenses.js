const { items: spotifyData } = require("../data/spotify.json");
const { lensProp, lensPath, view, set, over, inc, toUpper } = require("ramda");

const nameLens = lensProp('name')
const followerLens = lensPath(['followers', 'total'])

view: {
    view(nameLens, spotifyData[0]);
}

set: {
    set(followerLens, 0, spotifyData[0]);
}

over: {
    over(nameLens, toUpper, spotifyData[0])
}
  