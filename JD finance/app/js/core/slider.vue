<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="{name: item.href}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div v-if="options.pagination" class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
           notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default: () => {
        // 数据结构： {href: '', src: ''}
        return []
      }
    }
  }
}
</script>

<style lang="scss">
// * 路径要加一个 ～
@import "~swiper/dist/css/swiper.css";
</style>
