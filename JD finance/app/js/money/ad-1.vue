<template>
  <Panel title="广告一" :class="$style.panel">
    <section :class="$style.content">
      <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/56975/39/11673/167165/5d8ad3c3E4556ac65/f2813c1cbfa32340.png?width=984&height=224" alt="">
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
  @include panel;
  >h4 {
    display: none;
  }
  .content {
    img {
      width: 100%;
      height: 156px;
      display: block;
    }
  }
}
</style>