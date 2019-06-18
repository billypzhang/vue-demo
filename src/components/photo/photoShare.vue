<template>
   <div class="tmpl">
       <nav-bar title="图文分享"></nav-bar>
       <div class="photo-header">
            <ul>
                <li v-for="category in categorys" :key="category.id">
                    <a href="javascript:;" @click="loadImg(category.id)">{{category.title}}</a>
                </li>
                
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgs" :key="img.id">
                    <router-link :to="{name:'photo.detail',params:{id:img.id} }">
                         <!-- <img :src="img.img_url"> -->
                         <!-- 懒加载 -->
                         <img v-lazy="img.img_url">
                        <p>
                            <span v-text="img.title"></span>
                            <br>
                            <span v-text="img.zhaiyao"></span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
           categorys:[],
           imgs:[]
       }
   },
   created() {
       this.categorys = [
            {id:0,title:"全部"},
            {id:1,title:"家居生活"},
            {id:2,title:"婚纱摄影"},
            {id:3,title:"明星美女"},
            {id:4,title:"空间设计"},
            {id:5,title:"户型设计"}
        ]
       this.loadImg(0)
   },
   methods:{
       loadImg(id){
            this.$ajax.get("/api/phoneList").then(res => {
                this.imgs = res.data.data;
                this.imgs.splice(0,id)
            })
       }
   }
}
</script>

<style scoped>
    .photo-header li {
        list-style: none;
        display: inline-block;
        margin-left: 10px;
        height: 30px;
    }

    .photo-header ul {
        /*强制不换行*/
        white-space: nowrap;
        overflow-x: auto;
        padding-left: 0px;
        margin: 0;
        margin-top: 10px;
    }


    /*下面的图片*/

    .photo-list li {
        list-style: none;
        position: relative;
    }

    .photo-list li img {
        width: 100%;
        height: 230px;
        vertical-align: top;
    }

    .photo-list ul {
        padding-left: 0px;
        margin: 0;
    }

    .photo-list p {
        position: absolute;
        bottom: 0px;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        margin-bottom: 0px;
    }

    .photo-list p span:nth-child(1) {
        font-weight: bold;
        font-size: 16px;
    }

    /*图片懒加载的样式*/
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>
