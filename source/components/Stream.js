var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet');
var Header = require('./Header');


var Stream = React.createClass({

  getInitialState: function () {
    return {
      tweet: null
    };
  },

  componentDidMount: function () {
    console.log('DidMount. searching from Twitter...')
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  },

  componentWillUnmount: function () {
    SnapkiteStreamClient.destroyStream();
  },

  handleNewTweet: function (tweet) {
    this.setState({
      tweet: tweet
    });
  },

  render: function () {
    var tweet = this.state.tweet;
    if (tweet) {
      return (
        <StreamTweet
            tweet={tweet}
            onAddTweetToCollection={this.props.onAddTweetToCollection}
        />
      )
    }
    return (
      <Header text="Waiting for public photos from Twitter..." />
    );
  }
});

module.exports = Stream;
