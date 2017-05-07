jest.dontMock('../TweetUtils');

// 定义一个测试套件（套件名称，套件实现）
describe('Tweet utilities module', function () {

  // 定义一个测试规范（规范名称，规范实现），即一个单独的功能测试
  it('returns an array of tweet ids', function () {
    var TweetUtils = require('../TweetUtils');
    var tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };
    // 预期的结果
    var expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
    // 实际的结果
    var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);
    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});
