<template lang="html">
  <div>
    <my-header></my-header>
    <h-slider></h-slider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
    <life></life>
    <my-footer></my-footer>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import myHeader from '../public/header'
import myFooter from '../public/footer'
import HSlider from './h-slider'
import Novice from './novice'
import Borrow from './borrow'
import Money from './money'
import Product from './products'
import Life from './life'
import NavBar from '../public/nav-bar'

export default {
  components: {
    myHeader,
    HSlider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    myFooter,
    NavBar
  },
  data() {
    return {
      items: [
        {
          href: 'home',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/29274/25/5216/37518/5c3bf4f7E1a6c67cc/7a4bc2851b53fece.jpg?width=750&height=320'
        }, {
          href: 'home',
          src: 'src="https://img12.360buyimg.com/jrpmobile/jfs/t1/15510/10/5298/69592/5c3bf522E820edd64/de08228d007fbd92.jpg?width=750&height=320"'
        }, {
          href: 'home',
          src: ''
        }, {
          href: 'home',
          src: ''
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
</style>