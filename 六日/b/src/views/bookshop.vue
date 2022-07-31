<template>
  <div>
    <div class="head">
      <div></div>
      <div class="head-left">图书商城</div>
      <div class="head-right" @click="$router.push('/mybooks')">我的书架</div>
    </div>
    <div class="contentbook">
        <input type="text" placeholder="输入书名搜索" v-model="sousuovalue" @keyup.enter="watchs()">
        <ul class="uls">
            <li v-for="item  in booklist" :key="item.id">
                <div class="img-box">
                    <img src="../assets/4.jpg" alt="">
                </div>
                <div class="texts">
                    <div class="tes">{{item.desc}}</div>
                    <div class="bookname">{{item.name}}</div>
                    <div class="goshopping" @click="gomy(item)">+</div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import bookdata from "../assets/data.json"
export default {
  name: "BBookshop",

  data() {
    return {
        bookdata,
        booklist:[],
        imgarr:[],
        sousuovalue:''
    };
  },

  mounted() {
    console.log(this.bookdata);
    this.getbooklist()
  },

  methods: {
    getbooklist(){
        this.booklist=this.bookdata
    },
    watchs(){
        this.booklist=[]
        if(this.sousuovalue==''){
            this.booklist=this.bookdata
            return
        }
        this.bookdata.forEach(item=>{
            var arr=item.name.includes(this.sousuovalue)
            if(arr){
                this.booklist.push(item)
            }
        })
    },
    gomy(obj){
        this.$store.commit('gomybooks',{...obj,num:1})
    }
  },
};
</script>

<style lang="scss" scoped>
.contentbook{
    overflow: auto;
    width: 100%;
}
.uls{
    overflow: auto;
    width: 100%;
    li{
        overflow: auto;
        float: left;
        width: 50%;
        position: relative;
        img{
            width: 100%;
        }
        .texts{
            width: 100%;
            height: 60px;
            overflow: auto;
            
            .tes{
                overflow: hidden;
                font-size: 12px;
                color: #ccc;
            }
            .goshopping{
                width: 15px;
                height: 15px;
                line-height: 15px;
                text-align: center;
                border-radius: 50%;
                background-color: #c00;
                color:#fff;
                font-size: 12px;
                position: absolute;
                right: 10px;
                bottom: 10px;
            }
        }
    }
}
.head{
    display: flex;
    justify-content: space-between;
    background-color: #c00;
    color: #fff;
    .head-left{
      font-size: 25px;
    
    }
  }
</style>