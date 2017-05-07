jest.autoMockOff();

describe('Collection utilities module', function () {
  var CollectionUtils = require('../CollectionUtils');
  var collectionTweetsMock = {
    collection7: {},
    collection8: {},
    collection9: {}
  };

  it('returns a number of tweets in collection', function () {
    var actualNumberOfTWeetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
    var expectNumberOfTweetsInCollection = 3;
    expect(actualNumberOfTWeetsInCollection).toBe(expectNumberOfTweetsInCollection);
  });

  it('check if collection is not empty', function () {
    var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);
    expect(actualIsEmptyCollectionValue).toBeDefined();
    expect(actualIsEmptyCollectionValue).toBe(false);
    expect(actualIsEmptyCollectionValue).not.toBe(true);
  });
});
