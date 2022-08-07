<template>
  <div>
    <!-- 顶部功能表单 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="会员卡号" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.Num" placeholder="会员名字" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        <el-button @click="onNew">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 列表渲染 -->
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
        <el-table-column prop="address" label="操作" width="200" #default="scope">    
              <el-button>编辑</el-button>
              <el-button type="danger" @click="Del(scope.row)">删除</el-button>
        </el-table-column>
      </el-table>
    </el-scrollbar>

    <!-- 分页组件 -->
    <div class="demo-pagination-block">
      <el-pagination v-model:currentPage="currentPage2" v-model:page-size="pageSize2" :page-sizes="[3, 5, 8, 10]"
        :small="small" :disabled="disabled" :background="background" layout="sizes, prev, pager, next"
        :total="total.totals" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <!-- 添加弹出框 -->
    <el-dialog v-model="dialogFormVisible" title="添加会员">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
        :size="formSize" status-icon>
        <el-form-item label="会员卡号" prop="name">
          <el-input v-model="ruleForm.cardNum" />
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="会员生日">
          <el-col :span="11">
            <el-form-item prop="birthday">
              <el-date-picker v-model="ruleForm.birthday" type="date" label="Pick a date" placeholder="会员生日"
                style="width: 100%" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="ruleForm.phone" />
        </el-form-item>
        <el-form-item label="开卡金额" prop="money">
          <el-input v-model="ruleForm.money" />
        </el-form-item>
        <el-form-item label="可用积分" prop="intagral">
          <el-input v-model="ruleForm.intagral" />
        </el-form-item>
        <el-form-item label="支付类型" prop="count">
          <el-select v-model="ruleForm.paytype" placeholder="支付类型">
            <el-option label="微信" value="微信" />
            <el-option label="支付宝" value="支付宝" />
          </el-select>
        </el-form-item>
        <el-form-item label="会员地址" prop="address">
          <el-input v-model="ruleForm.address" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">关闭</el-button>
          <el-button type="primary" @click="Adds()">确认添加</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import type { FormRules } from 'element-plus'
import Vue, { ref, reactive, onMounted } from 'vue'
const formInline = reactive({
  user: '',
  Num: '',
})
const currentPage2 = ref(5)
const pageSize2 = ref(10)
let dialogFormVisible = ref(false)
const small = ref(false)
const total = reactive({ totals: 0 })
const background = ref(false)
const disabled = ref(false)
const tableData = reactive({ arr: [] })
const formSize = ref('default')
// 添加表单数据
const ruleForm = reactive({
  name: '',
  cardNum: '',
  paytype: '',
  birthday: '',
  address: '',
  intagral: '',
  money: '',
  phone: ''
})
// 添加表单校验
const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
],
})
const onSubmit = () => {
  console.log('submit!')
}
const onNew = () => {
  console.log('重置!')
  formInline.Num=''
  formInline.user=''
}
const Adds = () => {
  console.log(ruleForm);
  console.log('添加成功!')
  dialogFormVisible.value = false
}
const Del=(datas: any)=>{
  console.log(datas);
  console.log('删除成功');
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  getlist()
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

.el-form {
  text-align: left;
  padding-left: 50px;
  padding-top: 20px;
}
</style>