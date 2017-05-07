// 引入依赖
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
// 用于把多个对象的全部属性复制到一个目标对象中
var assign = require('object-assign');

// 定义由存储管理数据的初始值
var tweet = null;

// 更新数据值的函数
function setTweet(receiveTweet) {
  tweet = receiveTweet;
}

// 触发改变事件的函数
function emitChange() {
  TweetStore.emit('change');
}

var TweetStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },
  getTweet: function () {
    return tweet;
  }
});

function handleAction(action) {
  if (action.type === 'receive_tweet') {
    setTweet(action.tweet);
    emitChange();
  }
}

TweetStore.dispatcherToken = AppDispatcher.register(handleAction);

module.exports = TweetStore;
