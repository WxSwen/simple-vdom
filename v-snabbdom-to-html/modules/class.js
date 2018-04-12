function classModule(vnode, attributes){
  let _add = [];
  let _remove = [];
  let existing = attributes.get('class');
  existing = existing.length > 0 ? existing.split(' ') : [];
  let classList = vnode.data.class || {};

  let values = Object.keys(classList).forEach(key => {
    (classList[key] ? _add : _remove).push(key);
  })

  values.length && attributes.set('class', values.join(' ')) 
}

classModule({ data: { class: { 'v-dom': true, 'y-dom': false, 'z-dom': true}}})