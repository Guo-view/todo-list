<template>
    <div>
        <tag></tag>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" mini>搜索</el-button>
        <el-table :data="tableData">
            <el-table-column prop="" label="" width="40">
                <input type="checkbox">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="140">
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="120">
            </el-table-column>
            <el-table-column prop="money" label="账户余额">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="" label="头像">
                <template slot-scope="scope">
                    <el-image :src="scope.row.thumb" :preview-src-list="Array(scope.row.thumb)"></el-image>
                </template>
            </el-table-column>
            <el-table-column prop="state" label="状态">
            </el-table-column>
            <el-table-column prop="date" label="注册时间">
            </el-table-column>
            <el-table-column prop="" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="swich(scope.row)">编辑</el-button>
                    <el-button type="danger" mini>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="gjswicks()">确 定</el-button>
            </div>
        </el-dialog>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum"
            :page-sizes="[1, 3, 5, 10]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
            :total="copytableData.length">
        </el-pagination>
    </div>
</template>

<script>
import Tag from '../components/tag.vue'
export default {
    name: 'MyvueUsers',

    data() {
        return {
            tableData: [],
            copytableData: [],
            input: '',
            dialogFormVisible: false,
            form: {
                name: '',
                address: ''
            },
            ids: 0,
            pagesize: 3,
            pagenum: 1
        };
    },

    mounted() {
        this.getlist()
    },
    components: {
        Tag
    },
    methods: {
        getlist() {
            this.$axios.get('/parameter/tableList').then(res => {
                this.copytableData = res.data.data.list
                this.tableData = this.copytableData.slice(0, this.pagesize * this.pagenum)
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pagesize = val
            this.tableData = this.copytableData.slice(0, val)
            console.log(this.tableData);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pagenum = val
            this.tableData = this.copytableData.slice((val - 1) * this.pagesize, val * this.pagesize)
            console.log(this.tableData);
        },
        swich(value) {
            console.log(value);
            this.dialogFormVisible = true
            this.form.name = value.name
            this.form.address = value.address
            this.ids = value.id - 1
        },
        gjswicks() {
            this.tableData[this.ids].name = this.form.name
            this.tableData[this.ids].address = this.form.address
            this.dialogFormVisible = false
        }
    },
    watch: {
        input() {
            var arr = []
            this.copytableData.forEach(item => {
                if (item.name.includes(this.input)) {
                    arr.push(item)
                }
            });
            this.tableData = arr
        }
    }
};
</script>

<style  scoped>
.el-input {
    width: 500px;
}

img {
    width: 20px;
}

.el-image {
    width: 50px;
}
</style>