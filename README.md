## create an twitter app about snapterest which is collect photos.

## https://apps.twitter.com
- twitter account: Carlsiry
- Consumer Key (API Key)
- Consumer Secret (API Secret)

- Access Token
- Access Token Secret


## Snapkite
git clone https://github.com/snapkite/snapkite-engine.git
npm install --global node-gyp
cd snapkite-engine
yarn
cp example.config.json config.json
vim config.json
  trackKeywords: 'sexy'
  filters:[
    "snapkite-filter-is-possibly-sensitive",
    "snapkite-filter-has-mobile-photo",
    "snapkite-filter-is-retweet",
    "snapkite-filter-is-text"
  ]


## clone filters
git clone https://github.com/snapkite/snapkite-filter-is-possibly-sensitive.git

git clone https://github.com/snapkite/snapkite-filter-has-mobile-photo.git

git clone https://github.com/snapkite/snapkite-filter-is-retweet.git

git clone https://github.com/snapkite/snapkite-filter-has-text.git


## config filters
cp snapkite-filter-is-possibly-sensitive/example.config.json snapkite-filter-is-possibly-sensitive/config.json

cp snapkite-filter-has-mobile-photo/example.config.json snapkite-filter-has-mobile-photo/config.json

cp snapkite-filter-has-text/example.config.json snapkite-filter-has-mobile-photo/config.json

cp snapkite-filter-is-retweet/example.config.json snapkite-filter-is-retweet/config.js
