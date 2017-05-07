var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  addTweetToCollection: function (tweet) {
    var action = {
      type: 'add_tweet_to_collection',
      tweet: tweet
    };
    AppDispatcher.dispatcher(action);
  },
  removeTweetFromCollection: function (tweetId) {
    var action = {
      type: 'remove_all_tweets_from_collection',
      tweetId: 'tweetId'
    };
    AppDispatcher.dispatcher(action);
  },
  removeAllTweetFromCollection: function () {
    var action = {
      type: 'remove_all_tweets_from_collection',
    };
    AppDispatcher.dispatcher(action);
  },
  setCollectionName: function (collectionName) {
    var action = {
      type: 'set_collection_name',
      collectionName: collectionName
    };
    AppDispatcher.dispatcher(action);
  }
};
