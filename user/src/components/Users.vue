<template>
    <div class="home-wrapper">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">学员管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                学生状态：<el-input @input="a = 1" class="inp" v-model="status" placeholder="请输入内容" style="width:20%">
                </el-input>
                学生名称：<el-input @input="a = 2" class="inp1" v-model="name" placeholder="请输入内容" style="width:20%">
                </el-input>
                手机号：<el-input @input="a = 3" class="inp2" v-model="molibe" placeholder="请输入内容" style="width:20%">
                </el-input>
                <el-button icon="el-icon-search" @click="search">搜索</el-button>
                <el-button icon="el-icon-eleme" @click="reset">重置</el-button>
            </div>
            <div class="btn-box">
                <el-button type="primary">新增学员</el-button>
                <el-button type="primary">批量导入</el-button>
                <el-button type="primary">批量导出</el-button>
                <el-button type="primary">查看报表</el-button>
            </div>
            <template>
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                    <el-table-column type="selection">
                    </el-table-column>
                    <el-table-column prop="nickname" label="学生名称">
                    </el-table-column>
                    <el-table-column prop="mobile" label="手机号">
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                    </el-table-column>
                    <el-table-column prop="created_at" label="创建时间">
                        <template slot-scope="{row:{created_at}}">
                            {{ new Date(Number(created_at)).toLocaleString() }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="操作">
                        <span>详情-</span>
                        <span>编辑-</span>
                        <span>启动-</span>
                        <span>删除-</span>
                        <span>重置密码-</span>
                    </el-table-column>
                </el-table>
            </template>
        </el-card>
        <div class="block">···············
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="pagenum" :page-sizes="[19, 11, 5]" :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            datalist:[],
            a: 0,
            status: '',
            name: '',
            molibe: '',
            total: 0,
            pagenum:1,
            pagesize:10,
            input: '',
            num:0,
            tableData:[]
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pagesize = val
            console.log(`每页 ${val} 条`);
            this.tableData = this.datalist.slice( 0 ,val)
            this.num = val
        },
        handleCurrentChange(val) {
            this.pagenum = val
            console.log(`当前页: ${val}`);
            this.tableData = this.datalist.slice(this.num * (val-1),this.num * val)
        },
        getData() {
            var list = require('@/assets/list.json')
            this.tableData = list
            this.total = this.tableData.length
            this.datalist = this.tableData
        },
        reset() {
            this.getData()
        },
        search() {
            if (this.a == 1) {
                let cc = this.tableData.filter(item => {
                    return item.status == this.status
                })
                this.tableData = cc
            } else if (this.a == 2) {
                let aa = this.tableData.filter(item => {
                    return item.nickname.includes(this.name)
                })
                this.tableData = aa
            } else if (this.a == 3) {
                let bb = this.tableData.filter(item => {
                    return item.mobile.includes(this.molibe)
                })
                this.tableData = bb
            }
        }
    },
    created() {
        this.getData()
    }
}
</script>

<style lang="less" scoped>
.el-table {
    span {
        color: rgba(0, 0, 255, 0.553);
    }
}

.el-card {
    margin-top: 20px;
}

.clearfix {
    display: flex;
    height: 40px;
    line-height: 40px;

    .inp {
        margin-right: 10px;
    }

    .inp1 {
        margin-right: 10px;
    }

    .inp2 {
        margin-right: 10px;
    }
}
</style>