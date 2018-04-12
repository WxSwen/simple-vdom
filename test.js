var h = require('snabbdom/h').h
var toHTML = require('snabbdom-to-html')

var output = toHTML(
  h('div', { style: { '--color': 'red' } , props: { className: '10px' }}, 'The quick brown fox jumps')
)

console.log(output)

// var h = require('snabbdom/h')

// var init = require('snabbdom-to-html/init')
// var modules = require('snabbdom-to-html/modules')
// var toHTML = init([
//   modules.class,
//   modules.props,
//   modules.attributes,
//   modules.style
// ])

// var output = toHTML(
//   h.h('div', { style: { color: 'lime' } }, 'over the lazy fox')
// )

// console.log(output)