function getNumberOfTweetsInCollection(collection) {
  var TweetUtils = require('./TweetUtils');
  var listOfCollectionTweetIds = TweetUtils.getListOfTweetIds(collection);
  return listOfCollectionTweetIds.length;
}

function isEmptyCollection(collection) {
  return (getNumberOfTweetsInCollection === 0);
}

module.exports = {
  getNumberOfTweetsInCollection: getNumberOfTweetsInCollection,
  isEmptyCollection: isEmptyCollection
};
