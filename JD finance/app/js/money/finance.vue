<template>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550209996938&di=6ca87525f15638c0a4adb4ff619fa294&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F41%2F11%2F59c307c70b871_610.jpg" alt="">
        <div>
          <h4>月度理财</h4>
          <p>预计年化收益率4.5%</p>
        </div>
        <em>去赚钱 ></em>
      </div>
      <div :class="$style.item">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550209996938&di=6ca87525f15638c0a4adb4ff619fa294&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F41%2F11%2F59c307c70b871_610.jpg" alt="">
        <div>
          <h4>季度理财</h4>
          <p>预计年化收益率4.5%</p>
        </div>
        <em>去赚钱 ></em>
      </div>
      <div :class="$style.item">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550209996938&di=6ca87525f15638c0a4adb4ff619fa294&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F41%2F11%2F59c307c70b871_610.jpg" alt="">
        <div>
          <h4>全年理财</h4>
          <p>预计年化收益率4.5%</p>
        </div>
        <em>去赚钱 ></em>
      </div>
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
@import '../../css/layout.scss';
.panel {
  @include panel;
  >h4 {
    border-bottom: 1px solid #ccc;
  }
  .content {
    @include flex;
    .item {
      @include flex(row);
      align-items: center;
      height: 140px;
      &:after {
        content: '';
        box-sizing: border-box;
        height: 0;
        width: 100%;
        border: 1px solid #ddd;
        margin-left: 136px;
      }
      &:last-child:after {
        border:none; 
      }
      >img {
        margin: 0 32px;
        width: 88px;
        height: 88px;
        display: inline-block;
      }
      >div {
        flex: 1;
        h4 {
          font-size: 32px;
          color: #333;
          line-height: 1.8;
        }
        p {
           color: #ff3232;
           font-size: 24px;
           line-height: 1.1;
           white-space: nowrap;
           text-overflow: ellipsis;
           overflow: hidden;
        }
      }
      >em {
        color: #FF801A;
        font-size: 28px;
        margin-right: 32px;
      }
    }
  }
}
</style> 