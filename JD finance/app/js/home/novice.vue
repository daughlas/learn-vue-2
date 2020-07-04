<template lang="html">
  <panel title="新手特权" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>
          下载APP
          <span :class="$style.red">送888元礼包</span>
        </h4>
        <p :class="$style.grey">新手专享</p>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550209996938&di=6ca87525f15638c0a4adb4ff619fa294&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F41%2F11%2F59c307c70b871_610.jpg">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <h4 :class="$style.red">领128元新手礼包 </h4>
            <p :class="$style.grey">立即开通享好礼</p>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550209996938&di=6ca87525f15638c0a4adb4ff619fa294&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F41%2F11%2F59c307c70b871_610.jpg">
          </li>
          <li>
            <h4> 
              打白条
              <span :class="$style.red">享免息</span>
            </h4>
            <p :class="$style.grey">立即开通</p>
            
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550209996938&di=6ca87525f15638c0a4adb4ff619fa294&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F41%2F11%2F59c307c70b871_610.jpg">
          </li>
        </ul>
      </div>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
  >h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    @include list(row);
    .item {
      width: 50%;
      &:first-child {
        padding: 32px 20px;
        text-align: center;
        box-sizing: border-box;
        border-right: 1px solid #ddd;
        img {
          width: 132px;
          height: 132px;
          margin: 20px auto;
        }
      }
      h4 {
        font-size: 26px;
        line-height: 40px;
      }
      .red {
        color: #f00;
      }
      .grey {
        font-size: 24px;
        color: #999; 
      }
      p {
        margin-top: 6px;
        font-size: 24px;
      }
      ul {
        li {
          padding: 32px 28px;
          height: 144px;
          width: 100%;
          box-sizing: border-box;
          &:first-child {
            border-bottom: 1px solid #ddd;
          }
          h4 {
            font-size: 26px;
            width: calc(100% - 100px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
          }
          img {
            width: 80px;
            height: 80px;
            float: right;
          }
        }
      }
    }
  }
}
</style>
