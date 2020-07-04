<template>
  <Panel title="广告一" :class="$style.panel">
    <h4>理财精选</h4>
    <section :class="$style.content">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/24958/23/5984/66824/5c466c74Eefe11794/234f78a6487d9130.jpg?width=750&height=200" alt="">
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