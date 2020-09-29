import Vue from "vue";
import VuePageStack from "vue-page-stack";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import http from "./http";
import "amfe-flexible";
import Vconsole from "vconsole";
/*样式重置*/
import "./assets/css/reset.css";
/*全局样式*/
import "./assets/css/global.css";
/*导入vant*/
import Vant from "./plugin/vant";
/*引入CompositionAPI*/
import VueCompositionAPI from "@vue/composition-api";
/*引入vue-create-api*/
import "./plugin/create";

/*全局注册axios*/
Vue.prototype.$http = http;
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  new Vconsole();
}

Vue.use(VuePageStack, { router });
Vue.use(Vant);
Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
