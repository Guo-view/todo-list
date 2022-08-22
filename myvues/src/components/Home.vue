<template>
    <div>
        <el-container>
            <el-header>
                <div class="img-box">
                    <img src="../assets/logo.png" alt="">
                </div>
                <ul class="ullist">
                        <li>
                            <i class="el-icon-house"></i>
                            主页
                        </li>
                        <li>
                            <i class="el-icon-house"></i>
                            商城
                        </li>
                        <li>
                            <i class="el-icon-house"></i>
                            个人
                        </li>
                        <li>
                            <i class="el-icon-house"></i>
                            分类
                        </li>
                        <li>
                            <i class="el-icon-house"></i>
                            购物
                        </li>
                        <li>
                            <i class="el-icon-house"></i>
                            动态
                        </li>
                        <li>
                            <i class="el-icon-house"></i>
                            足迹
                        </li>
                    </ul>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="2" class="el-menu-vertical-demo"
                        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                        <el-menu-item index="2" v-for="item in asidelist" :index="item.path" :key="item.id" @click="names(item.namea)">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.namea}}</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    {{idx}}
                    <hr>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'MyvuesHome',

    data() {
        return {
            asidelist:[],
            idx:''
        };
    },

    mounted() {
        this.getaside()
        console.log(this.$route);
        this.names('学生管理')
    },

    methods: {
        getaside(){
            this.$axios.get('/asides/query').then(res=>{
                console.log(res);
                this.asidelist=res.data.data.data
                console.log(this.asidelist);
            })
        },
        names(id){
            this.idx=id
        }
    },
};
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
.el-menu-vertical-demo{
height: 100%;
}
.img-box img{
    width: 30px;
    margin-top: 20px;
    margin-left: 80px;
}
.ullist{
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin-left: 150px;
}
.el-header{
    display: flex;
    justify-content: left;
    line-height: 60px;
    background-color: cornflowerblue;
}
</style>