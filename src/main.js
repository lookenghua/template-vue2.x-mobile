import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import Vconsole from "vconsole";
/*样式重置*/
import "./assets/css/reset.css";
/*全局样式*/
import "./assets/css/global.css";

Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
  new Vconsole();
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
