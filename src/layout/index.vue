<template>
  <div class="layout">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        v-for="(item, index) in tabBar"
        :key="index"
        :to="item.pagePath"
        @change="handleTabChange"
      >
        <span>{{ item.text }}</span>
        <template #icon="props">
          <van-icon
            :name="props.active ? item.selectedIconPath : item.iconPath"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import app from "../app.json";
export default {
  name: "Layout",
  data() {
    return {
      tabBar: app.tabBar.list
    };
  },
  computed: {
    active: {
      get() {
        return this.$store.state.app.active;
      },
      set(value) {
        this.$store.commit("app/SET_ACTIVE", value);
      }
    }
  },
  methods: {
    // 标签栏变化
    handleTabChange(index) {
      console.log("当前变化标签栏:", index);
      this.active = index;
    }
  }
};
</script>

<style scoped lang="scss"></style>
