<template>
  <Panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <Slider :items="items" :cname="$style.slider"></Slider>
    </section>
    <!-- <Slider :items="items" :cname="$style.slider"></Slider> -->
    <!-- <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link :to="{name: item.href}">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section> -->
  </Panel>
</template>

<script>
import Panel from '../core/panel'
import  Slider from '../core/slider';
export default {
  components: {
    Slider,
    Panel
  },
  data() {
    return {
      items: [
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/10219/37/10193/38106/5c5258c8Eac6f81e8/8bee6874591b5bf4.jpg?width=750&height=320'
        }, {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/29274/25/5216/37518/5c3bf4f7E1a6c67cc/7a4bc2851b53fece.jpg?width=750&height=320'
        }, {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/30243/9/410/139307/5c3bf5a0E4c711dc5/2580ffc99ae33977.jpg?width=750&height=320'
        }, {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/15510/10/5298/69592/5c3bf522E820edd64/de08228d007fbd92.jpg?width=750&height=320'
        }
      ],
      // {href: '', img: '', title: ''}
      enters: [
        {
          href: 'home',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          title: '优惠券'
        }, {
          href: 'home',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领福利'
        }, {
          href: 'home',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        }, {
          href: 'home',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        }, {
          href: 'home',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
          title: '众筹'
        }
      ]
    }
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
    
    .slider {
      margin-top: 120px;
    }
  }
}
</style>
