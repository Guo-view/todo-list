<template>
  <div>
    员工管理
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="会员卡号" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.Num" placeholder="会员名字" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-scrollbar>
      <el-table :data="tableData.arr">
        <el-table-column type="index" label="序号" width="140" />
        <el-table-column prop="cardNum" label="会员卡号" width="120" />
        <el-table-column prop="name" label="会员姓名" width="120" />
        <el-table-column prop="birthday" label="会员生日" />
        <el-table-column prop="phone" label="手机号码"> </el-table-column>
        <el-table-column prop="integral" label="可用积分"> </el-table-column>
        <el-table-column prop="money" label="开卡金额"> </el-table-column>
        <el-table-column prop="payType" label="支付类型"> </el-table-column>
        <el-table-column prop="address" label="会员地址"> </el-table-column>
        <el-table-column prop="address" label="操作" width="200">
          <el-button>编辑</el-button>
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </el-scrollbar>
    <div class="demo-pagination-block">
      <el-pagination v-model:currentPage="currentPage2" v-model:page-size="pageSize2" :page-sizes="[3, 5, 8, 10]"
        :small="small" :disabled="disabled" :background="background" layout="sizes, prev, pager, next"
        :total="total.totals" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import Vue, { ref, reactive, onMounted } from 'vue'
const formInline = reactive({
  user: '',
  Num: '',
})
const currentPage2 = ref(5)
const pageSize2 = ref(10)
const small = ref(false)
const total = reactive({ totals: 0 })
const background = ref(false)
const disabled = ref(false)
const tableData = reactive({ arr: [] })
const onSubmit = () => {
  console.log('submit!')
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
let getlist = async () => {
  let res = await axios.post('http://vue.mengxuegu.com/pro-api/member/list/search/1/20')
  tableData.arr = res.data.data.rows
  console.log(res);
  total.totals = res.data.data.total
  console.log(tableData.arr);
}
onMounted(() => {
  getlist()
})

</script>

<style  scoped>
.el-scrollbar {
  height: 450px;
  overflow: auto
}
</style>