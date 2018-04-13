module.exports = function datasetModule(vnode, attributes) {
  let data = vnode.data.dataset || {};
  Object.keys(data).forEach( key => {
    attributes.set(`data-${key}`, data[key])
  })
}