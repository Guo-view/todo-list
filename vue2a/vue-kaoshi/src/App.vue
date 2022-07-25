<template>
  <div>
    <div class="kaoshi-warpper"></div>
    <input type="text" placeholder="商品名称" @change="sousuo" v-model="sousuoitem"/>
    <table class="table-warpper">
      <thead>
        <th @click="idsort()">编号<img :src="idsorts?'./assets/arrow-red.png':'./assets/arrow-down.png'" alt="" class="idimg"/></th>
        <th>名称</th>
        <th @click="picsort()">价格<img :src="picsorts?'./assets/arrow-red.png':'./assets/arrow-down.png'" alt="" class="idimg"/></th>
        <img src="" alt="">
      </thead>
      <tbody >
        <tr v-for="item in allitem" :key="item.id" class="tes">
          <td>{{item.id}}</td>
          <td>{{item.goods_name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    </table>
    <div class="foot-warpper">
      <div class="foot-size">
        每页<input type="text" v-model="pagesize" @keyup.enter="getsize()">条，共10条
      </div>
      <ul class="pagesizess">
        <li v-for="item,index in sizenums" :key="index" @click="getnum(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from '../src/assets/data.json'
export default {
  
  name: 'VueKaoshiApp',

  data() {
    return {
      data,
      sousuoitem:'',
      allitem:[],
      idsorts:false,
      picsorts:false,
      pagesize:10,
      pagenum:0,
      pagenums:1,
      sizenums:[],
    };
  },
  mounted() {
    this.pageslist()
    this.getlistall()
    console.log(this.data);
  },
  methods: {
    getnum(index){
      this.pagenums=index
      console.log(this.pagenums);
      this.getlistall()
    },
    getlistall(){
      console.log((this.pagenums-1)*this.pagesize);
      console.log(this.pagesize);
      console.log(this.pagenums); 
      this.allitem=this.data.data.slice(Number((this.pagenums-1)*this.pagesize),this.pagesize)
      console.log(this.allitem);
    },
    sousuo(){
      if(this.allitem.length<10){
        this.allitem=this.data.data
      }
      var allss=[]
      this.allitem.forEach(item=>{
        if(this.sousuoitem.length==''){
          this.allitem=this.data.data
        }
        var arr=item.goods_name.includes(this.sousuoitem)
        if(arr){
          this.allitem=[]
          allss.push(item)
          this.allitem=allss
        }
      })
      this.pageslist()
    },
    idsort(){
      this.idsorts?this.idsorts=false:this.idsorts=true
      var newidarr=this.allitem.sort((a,b)=>{
        return this.idsorts ? b.id - a.id : a.id-b.id
      })
      console.log(newidarr);
    },
    picsort(){
      this.picsorts?this.picsorts=false:this.picsorts=true
      var newidarr=this.allitem.sort((a,b)=>{
        return this.picsorts ? b.price - a.price : a.price-b.price
      })
      console.log(newidarr);
    },
    // 分页
    pageslist(){
      this.pagenum=Math.ceil(this.data.data.length/this.pagesize)
      this.sizenums=[]
      var num=1
      for(var i=0;i<this.pagenum;i++){
        this.sizenums.push(num++)
      }
      console.log(this.sizenums);
    },
    getsize(){
      console.log(123);
      this.pageslist()
      this.getlistall()
    }
  },
};
</script>

<style scoped>
  .table-warpper{
    width: 100%;
    height: 600px;
  }
  .idimg{
    width: 25px;
    height: 25px;
  }
  .tes{
    height: 55px;
  }
  .pagesizess{
    list-style: none;
    display: flex;
  }
  .foot-warpper{
    display: flex;
    height: 120px;
    line-height: 120px;
    justify-content: space-between;
  }
  .pagesizess li{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 2px solid rgb(27, 42, 210);
    margin: 40px;
  }
</style>