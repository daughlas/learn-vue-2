<template>
  <div :class="$style.tab">
    <Tab @change="onTabChange($event)">
      <div v-if="!loading">
        <List :list="activatedList"></List>
        <Pagination
        ref="paginate"
        :page-count="pageSize"
        :page-range="10"
        :margin-pages="2"
        :force-page="pageIndex"
        :click-handler="clickCallback"
        :prev-text="'上一页'"
        :next-text="'下一页'"
        :container-class="'pagination'"
        :page-class="'page-item'">
      </Pagination>
      </div>
      
    </Tab>
  </div>
</template>

<script>
import Tab from './tab'
import List from '../list/list.vue'
import listData from '../list/list.js'
import Pagination from '../pagination/paginate'
export default {
  components: {
    Tab,
    List,
    Pagination
  },
  data() {
    return {
      pageIndex: 1,
      list: listData,
      loading: false
    }
  },
  computed: {
    activatedList() {
      let array = []
      for (var i = 0; i < 9; i++) {
        let index = (this.pageIndex-1) * 10 + i
        this.list[index] && array.push(this.list[index])
      }
      return array
    },
    pageSize() {
      return Math.ceil(this.list.length / 10)
    }
  },
  methods: {
    onTabChange(ev) {
      this.pageIndex = 1;
      const that = this
      this.loading = true
      setTimeout(() => {
        that.loading = false
      }, 300)
      this.$refs.paginate.selectFirstPage()
    },
     clickCallback (pageNum) {
      if (this.pageIndex !== pageNum) {
        this.pageIndex = pageNum
      }
    }
  }
}
</script>

<style lang="scss" module>
.tab{
  height: 100%;
}
</style>
