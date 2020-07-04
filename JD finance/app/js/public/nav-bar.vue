<template>
  <Panel :class="$style.panel" title="导航条">
    <ul :class="$style.content">
      <li>
        <router-link :to="{name: 'home'}">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'money'}">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60" alt="">
          <p>赚钱</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'activity'}">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60" alt="">
          <p>活动页面</p>
        </router-link>
      </li>
    </ul>
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
  @include panel;
  position: fixed;
  left: 0;
  right: 0;
  height: 100px;
  bottom: 0;
  margin: 0;
  z-index: 999;
  >h4 {
    display: none;
  }
  .content {
    @include flex(row);
    justify-content: space-around;
    li {
      text-align: center;
      a {
        text-decoration: none;
      }
      img {
        width: 44px;
        height: 44px;
        display: inline-block;
        margin: 12px auto 6px;
      }
      p {
        font-size: 22px;
        color: #656565;
      }
    }
  }
}

</style>
