import { Tabbar, TabbarItem, Icon, Toast } from "vant";

export default {
  install(Vue) {
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Icon);
    Vue.use(Toast);
  }
};
