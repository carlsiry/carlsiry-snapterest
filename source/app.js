var React = require('react');
var ReactDOM = require('react-dom');

// createElement function: React.createElement(type, props, children)
var h1 = React.createElement('h1',
      { className: 'header', key:"header" },
      'This is React');

var p = React.createElement('p',
      { className: 'content', key: 'content' },
      "And that's how it woiks.");

// Reactfragment []
var reactFragment = [h1, p];

// factory function: React.createFactory(type)
var createListItemElement = React.createFactory('li');
var listItemElement1 = createListItemElement({ className: 'item-1', key: 'item-1'}, 'Item-1');
var listItemElement2 = createListItemElement({ className: 'item-2', key: 'item-2'}, 'Item-2');
var listItemElement3 = createListItemElement({ className: 'item-3', key: 'item-3'}, 'Item-3');
var listItemFragment = [listItemElement1, listItemElement2, listItemElement3];

// inner factory function: React.DOM.ul/li(props, children)
var todo1 = React.DOM.li({ className: 'todo-1', key: 'todo-1' }, 'todo 1');
var todo2 = React.DOM.li({ className: 'todo-2', key: 'todo-2' }, 'todo 2');
var todo3 = React.DOM.li({ className: 'todo-3', key: 'todo-3' }, 'todo 3');
var todoFragment = [todo1, todo2, todo3];
var listOfTodos = React.DOM.ul({ className: 'list-of-todos'}, todoFragment);


var section = React.createElement('section',
      { className: 'container' },
      [ reactFragment, listItemFragment, listOfTodos]);

ReactDOM.render(section, document.getElementById('react-application'));
