module.exports = function styleModule(vnode, attributes) {
  var values = [];
  var style = vnode.data.style || {};

  // [ 'color: red' ]
  
  Object.keys(style).forEach(key => {
    values.push(`${key}:${style[key]}`);
  })

  if(values.length){
    attributes.set('style', values.join(';'));
  }
}

// styleModule({data:{ style: { 'color': 'red', 'width': '100px' } }}, null);
