<template>
  <div class="member-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>供应商管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4">
        <el-input v-model="input" placeholder="会员卡号"></el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="input1" placeholder="会员名字"></el-input>
        </el-col>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click='dialogFormVisible = true'>新增</el-button>
        <el-button>重置</el-button>
      </el-row>
      <!-- 表格 -->
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="80">
          </el-table-column>
          <el-table-column prop="name" label="供应商名称" >
          </el-table-column>
          <el-table-column prop="linkman" label="联系人" >
          </el-table-column>
          <el-table-column prop="mobile" label="联系电话" >
          </el-table-column>
          <el-table-column prop="remark" label="备注" >
          </el-table-column>
          <el-table-column prop="" label="操作" >
            <template slot-scope="scope">
              <el-button @click='edit(scope.row)'>编辑</el-button>
              <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <!-- 分页 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="[1, 10, 20, 30]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-card>
    <!-- 添加模态框 -->
    <el-dialog title="供应商添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="供应商名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人" :label-width="formLabelWidth">
          <el-input v-model="form.linkman" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click='addUser'>确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑模态框 -->
    <el-dialog title="供应商编辑" :visible.sync="editDialogFormVisible">
      <el-form :model="editForm">
        <el-form-item label="供应商名称" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人" :label-width="formLabelWidth">
          <el-input v-model="editForm.linkman" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="editForm.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click='editAddUser'>确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Aside } from 'element-ui';
export default {
  data() {
    return {
      //添加对话框
      dialogFormVisible: false,
      editDialogFormVisible: false,
      //添加模态框数据
      form: {
        name: '',
        linkman :'',
        mobile:'',
        remark:''
      },
      editForm: {},
      //添加的宽
      formLabelWidth: "100px",
      total: 0,
      input: "",
      input1: "",
      tableData: [],
      currentPage: 1,
      pagesize: 10,
    };
  },
  methods: {
    async getData() {
      let data = await this.$http.post(
        "http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10",
        this.pagesize,
        this.currentPage
      );
      console.log(data);
      if (data.status === 200) {
        this.tableData = data.data.data.rows;
        this.total = data.data.data.total;
        console.log(this.tableData);
      }
    },
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
      this.getData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getData();
    },
    //添加
    async addUser() {
      let data = await this.$http.post('http://vue.mengxuegu.com/pro-api/member', this.form)
      if (data.status === 200) {
        this.$message({
          type: 'success',
          message: '添加成功'
        })
        this.dialogFormVisible = false
      }
      console.log(data);
    },
    // 编辑
    async editAddUser() {
      let data = await this.$http.put('http://vue.mengxuegu.com/pro-api/member/10', this.editForm)
      console.log(data);
      if (data.status === 200) {
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      }
      this.editDialogFormVisible = false
    },
    // 编辑获取数据
    edit(val) {
      this.editDialogFormVisible = true
      console.log(val);
      this.editForm = val
      console.log(this.editForm);
    },
    // 查询
    async search() {
      let data = await this.$http.post('http://vue.mengxuegu.com/pro-api/member/list/search/1/20', this.input)
      console.log(data);
      if (data.status === 200) {
        this.form = data.data.data.rows
      }
    },
    //删除
    async del(id) {

      let data = await this.$http.delete('http://vue.mengxuegu.com/pro-api/member/10?id=' + id)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (data.status === 200) {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.el-card {
  margin-top: 20px;
}
</style>