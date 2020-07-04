<template>
  <panel :class="$style.panel" title="新品推荐">
    <section :class="$style.content">
      <div :class="$style.arrow">
        更多尖货&nbsp;&nbsp;>
      </div>
      <slider :options="options" :items="items" cname="product-slider"></slider>
    </section>
  </panel>
</template>

<script>
import panel from "../core/panel";
import slider from "../core/slider";
export default {
  components: {
    panel,
    slider
  },
  data() {
    return {
      items: [
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/8400/39/12559/14819/5c387a22Eb2b1d29f/70588a5a61bfdde1.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/7388/5/12769/16802/5c387a23Ee497f7d9/e593f68e29afa8b6.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/11417/29/6015/31505/5c387a28E3756cc25/0707389bbdefb14d.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src: 'https://img30.360buyimg.com/cf/jfs/t1/29878/14/6017/131864/5c4577f2E74db7cb5/9f599e896ceeb6d4.jpg!q70.jpg.dpg'
        }
      ],
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        pageination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        freeMode: true
      }
    };
  }
};
</script>

<style lang="scss">
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      >a {
        display: inline-block;
        width: 100%;
        >img {
          width: 100%;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    position: relative;
    .arrow {
      position: absolute;
      font-size: 28px;
      color: #999;
      top: -70px;
      right: 20px;
    }
  }
}
</style>

