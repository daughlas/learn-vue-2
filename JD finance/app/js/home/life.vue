<template>
  <panel title="生活服务" cname :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.item" v-for="item in items" :key="item.title">
        <img :src="item.src" alt>
        <p>{{item.title}}</p>
        <p>{{item.sub}}</p>
      </li>
    </ul>
  </panel>
</template>

<script>
import panel from "../core/panel";
export default {
  components: {
    panel
  },
  data() {
    return {
      items: [
        {
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
          title: "优惠券",
          sub: "100-99券"
        },
        {
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
          title: "白条提醒",
          sub: ""
        },
        {
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90",
          title: "工资理财",
          sub: ""
        },
        {
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90",
          title: "租房",
          sub: ""
        },
        {
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t27088/243/2089650291/12365/2469f395/5bf677f9N795eec5e.png?width=120&height=120",
          title: "车主服务",
          sub: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    @include flex(row);
    box-sizing: border-box;
    padding-bottom: 40px;
    .item {
      width: 20%;
      text-align: center;
      img {
        width: 90px;
        height: 90px;
      }
      p {
        font-size: 26px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 12px;
        &:nth-child(3) {
          color: #FF801A;
        }
      }
    }
  }
}
</style>
