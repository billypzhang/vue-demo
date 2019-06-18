<template>
    <div class="tmpl photoDetail">
        <nav-bar title="图片详情"></nav-bar>
        <div class="photo-title">
            <p v-text="imgInfo.title"></p>
            <span>发起日期：{{imgInfo.add_time | covertDate}}</span>
            <span>{{imgInfo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <vue-preview :slides="imgs" @close="handleClose" :height="100"></vue-preview>
        </ul>
        <div class="photo-desc">
            <p v-html="imgInfo.content"></p>
        </div>
        <!-- 使用评论子组件 -->
        <!-- <comment :cid="pid"></comment> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgs:[],//存放缩率图
            imgInfo:{},//详情数据对象
            pid:this.$route.params.id
        }
    },
    created(){
        console.log("图片详情页面id:",this.pid)
        this.$ajax.get("/api/phoneDetail").then(res => {
            this.imgInfo = res.data.data.content;
            this.imgs = res.data.data.img;
        })

    },
    methods: {
        handleClose () {
            console.log('close event')
        }
    }
}


</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 0;
    font-weight: bold;
}

.photo-title span {
    font-size: 14px;
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}

</style>