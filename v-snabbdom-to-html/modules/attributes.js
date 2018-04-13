module.exports = function attrsModule(vnode, attributes){
  let attrs = vnode.data.attrs || {};
  Object.keys(attrs).forEach( key => {
    attributes.set(key, attrs[key])
  })
}