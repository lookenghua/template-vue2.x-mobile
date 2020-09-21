<template>
  <div class="v-swiper swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination" v-if="$slots.pageination">
      <slot name="pagination" />
    </div>
  </div>
</template>

<script>
import Swiper, { SwiperOptions } from "swiper";
export default {
  name: "VSwiper",
  props: {
    options: {
      type: SwiperOptions,
      required: true
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper.$el, this.options);
  }
};
</script>

<style scoped lang="scss"></style>
