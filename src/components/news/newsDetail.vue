<template>
  <div class="tmpl">
    <nav-bar title="新闻详情"></nav-bar>
    <div class="news-title">
      <p v-text="newsDetail.title"></p>
      <div>
        <span>{{newsDetail.click}}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{newsDetail.add_time | covertDate}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsDetail.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsDetail: {}
    };
  },
  created() {
    let id = this.$route.query.id;
    console.log("新闻详情页面id：",id)
    this.$ajax.get("/api/newDetail").then(res => {
      this.newsDetail = res.data.data;
    })
  }
}
</script>

<style scoped>
.news-title p {
  color: #0a87f8;
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
  font-weight: bold;
}
.news-title span {
  margin-right: 25px;
  font-size: 14px;
}
.news-title {
  margin-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.news-content {
  padding: 10px 5px;
}
</style>
