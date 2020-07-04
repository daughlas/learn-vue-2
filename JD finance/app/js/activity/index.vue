<template>
  <Panel :class="$style.panel" title="下载 APP">
    <section :class="$style.content">
      <div :class="$style.imgwrap" />
      <div :class="$style.button">立即下载</div>
      <span>@copyright;吕嘉文</span>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: { Panel },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
html, body {
  background: #fff;
}
.panel {
  @include panel;
  margin: 0!important;

  >h4 {
    display: none
  }
  .content {
    @include flex;
    height: 1136px;
    width: 100%;
    justify-content: center;
    align-items: center;
    .imgwrap {
      background: url(http://cdn2.image.apk.gfan.com/asdf/PImages/2014/8/12/ldpi_920791_2eb45964c-9cf6-4b93-b30b-0e87b203c7f8.png) no-repeat center;
      background-size: 100% auto;
      width: 300px;
      height: 500px;
      margin-top: -200px;
    }
    .button {
      @include btn($size: 32px, $color: #fff, $bgColor: #f04752, $padding: 5px, $radius: 5px);
      height: 100px;
      line-height: 100px;
      border-radius: 10px;
      width: 471px;
      position: fixed;
      bottom: 130px;
    }
    span {
      position: fixed;
      bottom: 16px;
      font-size: 20px;
      color: #444;
    }
  }
}
</style>
