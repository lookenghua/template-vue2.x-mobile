import { Tabbar, TabbarItem, Icon } from "vant";

export default {
  install(Vue) {
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Icon);
  }
};
