<template>
  <Panel :class="$style.panel" title="极速借贷">
    <section :class="$style.content">
      <router-link :to="{name: 'home'}">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/24958/23/5984/66824/5c466c74Eefe11794/234f78a6487d9130.jpg?width=750&height=200">
      </router-link>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
  .content {
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
