
function createHtmlMarkupStringOfTweetList(collectionTweets) {
  var ReactDOMServer = require('react-dom/server');
  var htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweet={collectionTweets} />
  );
  var htmlMarkup = {
    html: htmlString
  };
  return JSON.stringify(htmlMarkup);
}

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
  isEmptyCollection: isEmptyCollection,
  createHtmlMarkupStringOfTweetList: createHtmlMarkupStringOfTweetList
};
