class storageCreater {
  // type: local、session
  constructor(type, storage_pre) {
    this.storage_pre = storage_pre;
    this.storage = window[ type + "Storage" ];
  }

  getAll(arr) {
    let storage = this.storage;
    let storage_pre = this.storage_pre;
    let isArr = arr && Array.isArray(arr);
    let len = isArr ? arr.length : storage.length;
    let result = {};

    for (let i = 0; i < len; i++) {
      let item = arr ? arr[i] : storage.key(i);
      let name = "";

      if (isArr) {
        name = arr[i];
        result[name] = this.get(name);
        continue;
      }

      if (item.indexOf(storage_pre) > -1) {
        name = item.split(storage_pre)[1];
        result[name] = this.get(name);
      }
    }

    return result;
  }

  get(name) {
    return this.storage.getItem(this.storage_pre + name);
  }

  set(name, val) {
    this.storage.setItem(this.storage_pre + name, val);
  }

  remove(name) {
    this.storage.removeItem(this.storage_pre + name);
  }

  clear() {
    this.storage.clear();
  }
}

export default(function() {
  var config = {
    defaultType: "local",
    storagePre: "",
  };

  var vueStorage = {
    install: function(Vue, options = {}) {
      let defaultType = options.defaultType || config.defaultType;
      let storagePre = options.storagePre || config.storagePre;
      let storage = new storageCreater(defaultType, storagePre);

      storage.local = new storageCreater("local", storagePre);
      storage.session = new storageCreater("session", storagePre);

      Vue.prototype.$storage = storage;
      Vue.storage = storage;
    },
  };


  // es6的导出不支持级联
  /* if (typeof exports == "object") {
    module.exports = vueStorage;
  } else if (typeof define == "function" && define.amd) {
    define([], function() {
      return vueStorage;
    });
  } else if (window.Vue) {
    Vue.use(vueStorage);
  }

  if(typeof window!=="undefined"){
    window.$stotage = vueStorage;
  }*/

  return vueStorage;
})();
