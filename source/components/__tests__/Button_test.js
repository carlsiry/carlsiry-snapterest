jest.dontMock('../Button');

describe('Button component', function () {
  it('calls handler function on click', function () {
    var React = require('react');
    var TestUtils = require('react-addons-utils');
    var Button = require('../Button');
    // 生成模拟函数
    var handleClick = jest.genMockFunction();
    // 渲染出 Button 组件的实例，将模拟函数作为点击事件的处理函数
    var button = TestUtils.renderIntoDocument(<Button handleClick={handleClick});
    // 找到渲染到 DOM 中的 Button 组件实例
    var buttonInstance = TestUtils.findDOMComponentWithTag(button, 'button');
    // 模拟DOM中的 Button 组件实例的点击事件
    TestUtils.Simulate.click(buttonInstance);

    // 创建一个期望：被调用
    expect(handleClick).toBeCalled();

    // 检查被调用的次数
    var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

    // 期望被调用的次数仅为一次
    expect(numberOfCallsMadeIntoMockFunction).toBe(1);
  });
});
