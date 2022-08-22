<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="状态">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="启用" value="启用"></el-option>
                    <el-option label="禁用" value="禁用"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学生姓名">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="formInline.phone"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary" @click="onSubmit"><i class="el-icon-loading"></i>重置</el-button>
            </el-form-item>
        </el-form>
        <div class="btnbox">
            <el-button type="primary" @click="onSubmit">新增学员</el-button>
            <el-button type="primary" @click="onSubmit">批量导入</el-button>
            <el-button type="primary" @click="onSubmit">批量导出</el-button>
            <el-button type="primary" @click="onSubmit">查看报表</el-button>
        </div>
        <template>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="" label="多选" width='120'>
                    <input type="checkbox">
                </el-table-column>
                <el-table-column prop="nickname" label="学生名称">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" alt="" style="width:30px">
                        <span class="nicknames">{{ scope.row.nickname }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="mobile" label="手机号">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.status == 1">启用</el-tag>
                        <el-tag type="warning" v-if="scope.row.status == 0">禁用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="created_at" label="创建时间">
                    <template slot-scope="scope">
                        {{ new Date(Number(scope.row.created_at) * 1000).toLocaleString() }}
                    </template>
                </el-table-column>
                <el-table-column prop="" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text">详情</el-button> -
                        <el-button type="text">编辑</el-button> -
                        <el-button type="text" v-if="scope.row.status == 1">禁用</el-button>
                        <el-button type="text" v-if="scope.row.status == 0">启用</el-button>-
                        <el-button type="text">删除</el-button> -
                        <el-button type="text">重置密码</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum"
                :page-sizes="[1, 3, 5, 10]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
                :total="copytableData.length">
            </el-pagination>
        </template>
    </div>
</template>
<script>
export default {
    name: 'MyvuesHeaders',

    data() {
        return {
            formInline: {
                user: '',
                region: '',
                phone: ''
            },
            tableData: [],
            copytableData: [],
            pagesize: 10,
            pagenum: 1
        };
    },

    mounted() {
        this.getdatalist()
    },

    methods: {
        // 获取初始化数据
        getdatalist() {
            this.$axios.get('/parameter/query').then(res => {
                console.log(res);
                this.copytableData = res.data.data.data
                this.tableData = this.copytableData.slice(0, this.pagesize * this.pagenum)
            })
        },
        // 分页功能
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
        // 搜索大功能
        onSubmit() {
            console.log('submit!');
            let keys = 0
            let ipt = this.formInline.region
            let nameas = this.formInline.user
            let mobile = this.formInline.phone
            // 给switch语句更改keys值
            if (ipt && nameas && mobile) {
                keys = 123
            } else if (ipt && nameas) {
                keys = 12
            } else if (mobile && nameas) {
                keys = 23
            } else if (ipt && mobile) {
                keys = 13
            } else if (ipt) {
                keys = 1
            } else if (nameas) {
                keys = 2
            } else if (mobile) {
                keys = 3
            }
            console.log(keys);
            // debugger   打点专用
            // 搜索switch语句
            switch (keys) {
                case 123:
                    this.getinp();
                    break;
                case 12:
                    this.getin();
                    break;
                case 23:
                    this.getnp();
                    break;
                case 13:
                    this.getip();
                    break;
                case 1:
                    this.getinp();
                    break;
                case 2:
                    this.getn();
                    break;
                case 3:
                    this.getp();
                    break;
                default:
                    this.tableData = this.copytableData
                    console.log('全部不符合');
                    break;
            }
        },
        // 搜索逻辑部分
        // 三个搜索
        getinp() {
            var ipp = []
            var npp = []
            var ppp = []
            this.copytableData.forEach(item => {
                if (this.formInline.region == '启用') {
                    if (item.status == 1) {
                        ipp.push(item)
                    }
                } else {
                    if (item.status == 0) {
                        ipp.push(item)
                    }
                }
            });
            ipp.forEach(item => {
                var a = item.nickname.includes(this.formInline.user)
                if (a) {
                    npp.push(item)
                }
            })
            console.log(npp);
            npp.forEach(item => {
                var a = item.mobile.includes(this.formInline.phone)
                if (a) {
                    ppp.push(item)
                }
            })
            this.tableData = ppp
        },
        // 状态和姓名
        getin() {
            var ipp = []
            var npp = []
            this.copytableData.forEach(item => {
                if (this.formInline.region == '启用') {
                    if (item.status == 1) {
                        ipp.push(item)
                    }
                } else {
                    if (item.status == 0) {
                        ipp.push(item)
                    }
                }
            });
            ipp.forEach(item => {
                var a = item.nickname.includes(this.formInline.user)
                if (a) {
                    npp.push(item)
                }
            })
            this.tableData = npp
        },
        // 状态和手机号
        getip() {
            var ipp = []
            var ppp = []
            this.copytableData.forEach(item => {
                if (this.formInline.region == '启用') {
                    if (item.status == 1) {
                        ipp.push(item)
                    }
                } else {
                    if (item.status == 0) {
                        ipp.push(item)
                    }
                }
            });
            ipp.forEach(item => {
                var a = item.mobile.includes(this.formInline.phone)
                if (a) {
                    ppp.push(item)
                }
            })
            this.tableData = ppp
        },
        // 姓名和手机号
        getnp() {
            var npp = []
            var ppp = []
            this.copytableData.forEach(item => {
                var a = item.nickname.includes(this.formInline.user)
                if (a) {
                    npp.push(item)
                }
            })
            console.log(npp);
            npp.forEach(item => {
                var a = item.mobile.includes(this.formInline.phone)
                if (a) {
                    ppp.push(item)
                }
            })
            this.tableData = ppp
        },
        // 单状态可用第一个
        // 单姓名
        getn() {
            var npp = []
            this.copytableData.forEach(item => {
                var a = item.nickname.includes(this.formInline.user)
                if (a) {
                    npp.push(item)
                }
            })
            this.tableData = npp
        },
        // 但手机号
        getp() {
            var ppp = []
            this.copytableData.forEach(item => {
                var a = item.nickname.includes(this.formInline.user)
                if (a) {
                    ppp.push(item)
                }
            })
            this.tableData = ppp
        }
    },
};
</script>

<style lang="scss" >
.el-form{
    text-align: left;
    margin-left: 100px;
}
.btnbox{
    text-align: left;
}

.el-table .el-table__cell{
    text-align: center;
}

</style>