var omit = [
  'attributes',
  'childElementCount',
  'children',
  'classList',
  'clientHeight',
  'clientLeft',
  'clientTop',
  'clientWidth',
  'currentStyle',
  'firstElementChild',
  'innerHTML',
  'lastElementChild',
  'nextElementSibling',
  'ongotpointercapture',
  'onlostpointercapture',
  'onwheel',
  'outerHTML',
  'previousElementSibling',
  'runtimeStyle',
  'scrollHeight',
  'scrollLeft',
  'scrollLeftMax',
  'scrollTop',
  'scrollTopMax',
  'scrollWidth',
  'tabStop',
  'tagName'
]

module.exports = function propsModule(vnode, attributes) {
  let props = vnode.data.props || {};

  Object.keys(props).forEach(key => {
    if(omit.indexOf(key) > -1){
      return;
    }
    let _key = key === 'htmlFor' ? 'for' : (key === 'className' ? 'class' : key);

    attributes.set(_key.toLowerCase(), props[key]);
  })
}

// propsModule({ data: { style: { '--color': 'red' } , props: { className: '10px' }}}, null)