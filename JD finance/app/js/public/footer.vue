<template>
  <panel title="公司信息" :class="$style.panel">
    <ul :class="$style.content">
      <li>
        <div>
          <img src="https://storage.360buyimg.com/base/images/topbar/topbar-jrapp.png?20170804" alt="">
          <p>客户端</p>
        </div>
        <div>
          <img src="https://storage.360buyimg.com/base/images/topbar/topbar-gpapp-new.png" alt="">
          <p>触屏版</p>
        </div>
        <div>
          <img src="https://storage.360buyimg.com/base/images/topbar/topbar-wxfw.png?20170823" alt="">
          <p>电脑版</p>
        </div>
      </li>
      <li>Copyright &copy; 2004-2017 京东 JD.com 版权所有</li>
      <li>投资有风险，购买需谨慎</li>
      <li>京东金融平台服务协议</li>
      <li>京东金融隐私政策</li>
    </ul>
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
  @include panel;
  margin-bottom: 100px;
  >h4 {
    display: none;
  }
  .content {
    @include flex;
    background: #f5f5f5;
    li {
      width: 100%;
      text-align: center;
      color: #999;
      font-size: 24px;

      >img {
        width: 100%;
        height: 143px;
      }
      &:nth-child(1) {
        @include flex(row);
        height: 186px;
        box-sizing: border-box;
        >div {
          width: 33.3333333%;
          text-align: center;
          box-sizing: border-box;
          padding-top: 30px;
          img {
            width: 90px;
            height: 90px;
          }
          p {
            color: #999;
            margin-top: 12px;
            font-size: 26px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      &:nth-child(n+2) {
        padding: 24px 0;
        height: 38px;
        line-height: 38px;
        border-top: 1px solid #ddd;
      }
    }
  }
}
</style>
