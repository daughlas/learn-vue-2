<template>
  <Panel title="广告一" :class="$style.panel">
    <h4>理财精选</h4>
    <section :class="$style.content">
      <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/38699/22/6523/41839/5cd13ce4E40c8efb9/087c86a48a9615ab.png?width=686&height=226" alt="">
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
      height: 226px;
      display: block;
    }
  }
}
</style>