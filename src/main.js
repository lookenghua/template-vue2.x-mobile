import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import Vconsole from "vconsole";

Vue.config.productionTip = false;
if (process.env.NODE_ENV) {
  new Vconsole();
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
