<template>
  <div>
    <el-input placeholder="请输入内容" v-model="pagelist.query"> </el-input>
    <el-button @click="searchUserList">搜索</el-button>
    <el-button type="primary" @click="dialogFormVisible = true"
      >添加用户</el-button
    >

    <el-dialog title="用户数据" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rulesusersform">
        <el-form-item label="会员卡号">
          <el-input v-model="form.cardNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员姓名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员生日">
          <el-input v-model="form.birthday" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开卡金额">
          <el-input v-model="form.money" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="可用积分">
          <el-input v-model="form.integral" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="支付类型">
          <el-input v-model="form.payType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员地址">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addusers">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%">
      <el-form
        class="login-form"
        ref="editFormRef"
        :model="editForm"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
    <el-main>
      <el-table :data="tableData">
        <el-table-column type="index" label="编号"></el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="cardNum" label="会员卡号"> </el-table-column>
        <el-table-column prop="birthday" label="会员生日"> </el-table-column>
        <el-table-column prop="phone" label="手机号码"> </el-table-column>
        <el-table-column prop="integral" label="可用积分"> </el-table-column>
        <el-table-column prop="money" label="开卡金额"> </el-table-column>
        <el-table-column prop="payType" label="支付类型"> </el-table-column>
        <el-table-column prop="address" label="会员地址"> </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button @click="deluser(scope.row.id)" type="danger"
              >删除</el-button
            >
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="showEditDialog(scope.row.id)"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagelist.pagenum"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pagelist.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      editDialogVisible: false,
      tableData: [],
      editForm: {},
      pagelist: {
        pagesize: 5,
        pagenum: 1,
        query: "",
      },
      total: null,
      form: {
        cardNum: "",
        name: "",
        birthday: "",
        phone: "",
        money:'',
        integral:'',
        payType:'',
        address:'',
      },
      rulesusersform: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入电话", trigger: "blur" }],
      },
    };
  },

  mounted() {
    this.userslist();
  },

  methods: {
    userslist() {
      this.$axios
        .post("http://vue.mengxuegu.com/pro-api/member/list/search/1/10")
        .then((res) => {
          console.log(res.data.data.rows);
          this.tableData = res.data.data.rows;
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagelist.pagesize = val;
      this.userslist();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagelist.pagenum = val;
      this.userslist();
    },
    addusers() {
      this.$axios.post(
        "https://www.liulongbin.top:8888/api/private/v1/users",
        this.addform
      );

      this.dialogFormVisible = false;
      this.$message({
        type: "success",
        message: "添加成功",
      });
    },
    deluser(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.$axios
            .delete(
              `https://www.liulongbin.top:8888/api/private/v1/users/${id}`
            )
            .then((res) => {
              console.log(res);
            });
          this.usersList();
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    searchUserList() {
      this.$axios
        .get("https://www.liulongbin.top:8888/api/private/v1/users/", {
          params: this.pagelist,
        })
        .then((res) => {
          console.log(res);
          if (res.data.meta.status !== 200)
            return this.$message.error(res.data.meta.msg);
          this.$message.success(res.data.meta.msg);
          this.tableData = res.data.data.users;
        });
    },
    showEditDialog(id) {
      this.$axios
        .get(`https://www.liulongbin.top:8888/api/private/v1/users/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.meta.status !== 200)
            return this.$message.error(res.data.meta.msg);
          this.editForm = res.data.data;
          this.editDialogVisible = true;
        });
    },
    editUser() {
      this.$axios
        .put(
          `https://www.liulongbin.top:8888/api/private/v1/users/${this.editForm.id}`,
          {
            email: this.editForm.email,
            mobile: this.editForm.mobile,
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.meta.status !== 200)
            return this.$message.error(res.data.meta.msg);
          this.$message.success(res.data.meta.msg);
          this.userslist();
          this.editDialogVisible = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>