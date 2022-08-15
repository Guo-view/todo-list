<template>
    <div class="home-wrapper">
        <el-container>
            <el-header>
                <div class="img-box">
                    <img src="1.jpg" alt="">
                </div>
                <div class="content-text">
                    <ul>
                        <li>用户</li>
                        <li>教学</li>
                        <li>题库</li>
                        <li>运营</li>
                        <li>营售</li>
                        <li>商品</li>
                        <li>财务</li>
                        <li>统计</li>
                        <li>系统</li>
                    </ul>
                </div>
                <div class="img-personage">
                    <img src="3.jpg.jpg" alt="">
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="2" class="el-menu-vertical-demo" >
                            <el-menu-item index="1">
                                <i class="el-icon-setting"></i>
                                <span slot="title" @click="$router.push('/users')">学生管理</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <i class="el-icon-setting"></i>
                                <span slot="title" @click="$router.push('/lecturer')">讲师管理</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-setting"></i>
                                <span slot="title">助教管理</span>
                            </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
}
</script>

<style lang="less" scoped>
.el-header {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to right, blue, rgba(0, 0, 255, 0.597));
    height: 60px;
    .content-text {
        flex: 1;
        ul {
            list-style: none;
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;

            li {
                width: 10%;
                height: 100%;
                line-height: 60px;
                text-align: center;
                color: #ccc;
            }

            li:hover {
                border-bottom: 1px solid greenyellow;
                color: white;
                padding-bottom: 5px;
                box-sizing: border-box;
            }
        }
    }

    .img-box {
        margin-top: 10px;
        width: 240px;
        height: 40px;

        img {
            width: 50px;
            height: 100%;
        }
    }

    .img-personage {
        width: 240px;
        height: 40px;
        padding-left: 190px;
        box-sizing: border-box;
        margin-top: 10px;

        img {
            width: 50px;
            height: 100%;
        }
    }
}
.el-menu{
    overflow: hidden;
    height: 890px;
}
</style>