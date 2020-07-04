<template>
  <div>
    <paginate
       :page-count="pageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'上一页'"
      :next-text="'下一页'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
import Paginate from './paginate'
export default {
  data() {
    return {
      pageCount: 20
    }
  },
  components: {
    Paginate
  },
  methods: {
    clickCallback (pageNum) {
      console.log(pageNum)
    }
  },
  mounted() {
    let _this = this
    setTimeout(() => {
      alert(_this.pageCount)
      _this.pageCount = 5
    }, 2000)
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  .page-item {
    &.active {
      >a {
        color: blue;
      }
    }
  }
}

</style>
