<template>
<div class="logingo">
    <el-input v-model="input" placeholder="用户名" clearable />
    <el-input v-model="password" placeholder="密码" clearable />
    <el-button type="primary" @click="loginadd()">登录</el-button>
</div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'
import  {useRouter} from "vue-router";
const input = ref('')
const password = ref('')
const router = useRouter()
let loginadd=async()=>{
    let res=await axios.post('http://vue.mengxuegu.com/pro-api/user/login')
    console.log(res);
    if(res.data.code==2000){
        sessionStorage.setItem('token',res.data.data.token)
        router.push('/heads')
    }
}
</script>
<style>
.logingo{
    width: 300px;
    height: 100px;
    margin: auto;
}
</style>