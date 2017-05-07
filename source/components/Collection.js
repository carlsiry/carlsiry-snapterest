var React = require('react');
var CollectionControls = require('./CollectionControls');
var TweetList = require('./TweetList');
var Header = require('./Header');
var CollectionUtils = require('../utils/CollectionUtils');
var CollectionStore = require('../stores/CollectionStore');


var Collection = React.createClass({

  getInitialState: function () {
    return {
      collectionTweets: CollectionStore.getCollectionTweets()
    }
  },
  componentDidMount: function () {
    CollectionStore.addChangeListener(this.onCollectionChange);
  },
  componentWillMount: function () {
    CollectionStore.removeChangeListener(this.onCollectionChange);
  },
  onCollectionChange: function () {
    this.setState({
      collectionTweets: CollectionStore.getCollectionTweets()
    });
  },

  render: function () {

    var collectionTweets = this.state.collectionTweets;
    var numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);

    if (numberOfTweetsInCollection > 0) {
      var htmlMarkup = CollectionUtils.createHtmlMarkupStringOfTweetList(collectionTweets);
      // console.log(htmlMarkup); // test
      return (
        <div>
          <CollectionControls
              numberOfTweetsInCollection={numberOfTweetsInCollection}
              htmlMarkup={htmlMarkup}
          />
          <TweetList tweets={collectionTweets} />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
});

module.exports = Collection;
