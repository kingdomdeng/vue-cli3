/* eslint-disable no-undef,no-unused-vars */
import dialog from "./dialog";

(function() {
  var vueDialog = {
    install: function(Vue, options) {

      const instance = Vue.extend(dialog);
      let currentDialog;
      const initInstance = () => {
        currentDialog = new instance();
        let el = currentDialog.$mount().$el;
        document.body.appendChild(el);
      };

      initInstance();
      Vue.prototype.$dialog = currentDialog;
    },
  };

  if (typeof exports == "object") {
    module.exports = vueDialog;
  } else if (typeof define == "function" && define.amd) {
    define([], function() {
      return vueDialog;
    });
  } else if (window.Vue) {
    Vue.use(vueDialog);
  }

  if(typeof window!=="undefined"){
    window.$stotage = vueDialog;
  }

})();
