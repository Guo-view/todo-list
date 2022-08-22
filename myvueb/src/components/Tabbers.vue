<template>
    <div>
        <tag></tag>
        <el-tabs v-model="activeName">
            <el-tab-pane label="未读消息" name="first">
                <el-table :data="tableDatafirst" stripe style="width: 100%">
                    <el-table-column prop="title" label="消息" width="600">
                    </el-table-column>
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="gosecond(scope.row)">标为已读</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="20">
                </el-pagination>
                <el-button @click="gosecondass()" type="primary">全部标记已读</el-button>
            </el-tab-pane>
            <el-tab-pane label="已读消息" name="second">
                <el-table :data="tableDatasecond" stripe style="width: 100%">
                    <el-table-column prop="title" label="消息" width="600">
                    </el-table-column>
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="操作">
                        <template slot-scope="scope">
                            <el-button type="danger" @click="gothird(scope.row)">删除</el-button>
                            <el-button @click="gofirst(scope.row)">还原未读</el-button>
                        </template>

                    </el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="1">
                </el-pagination>
                <el-button type="danger" @click="delss()">删除全部</el-button>
            </el-tab-pane>
            <el-tab-pane label="回收站" name="third">
                <el-table :data="tableDatathird" stripe style="width: 100%">
                    <el-table-column prop="title" label="消息" width="600">
                    </el-table-column>
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="gofirsts(scope.row)">还原</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="1">
                </el-pagination>
                <el-button type="danger" @click="delssass()">清空回收站</el-button>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Tag from '../components/tag.vue'
import Tabs from '../assets/tabs.json'
export default {
    name: 'MyvuebTabbers',
    data() {
        return {
            Tabs,
            activeName:'first',
            tableDatafirst: [],
            tableDatasecond: [],
            tableDatathird: []
        };
    },
    components: {
        Tag
    },
    mounted() {
        console.log(this.Tabs);
        this.getlist()
    },

    methods: {
        getlist() {
            this.tableDatafirst = this.Tabs.unread
            this.tableDatasecond = this.Tabs.recycle
            this.tableDatathird = this.Tabs.read
        },
        gosecond(value) {
            console.log(value);
            this.tableDatasecond.push(value)
            var ass = this.tableDatafirst.findIndex(item => {
                return item == value
            })
            this.tableDatafirst.splice(ass, 1)
        },
        gothird(value) {
            this.tableDatathird.push(value)
            var ass = this.tableDatasecond.findIndex(item => {
                return item == value
            })
            this.tableDatasecond.splice(ass, 1)
        },
        gofirst(value) {
            this.tableDatafirst.push(value)
            var ass = this.tableDatasecond.findIndex(item => {
                return item == value
            })
            this.tableDatasecond.splice(ass, 1)
        },
        gofirsts(value) {
            this.tableDatafirst.push(value)
            var ass = this.tableDatathird.findIndex(item => {
                return item == value
            })
            this.tableDatathird.splice(ass, 1)
        },
         gosecondass() {
            this.tableDatafirst.forEach(item => {
                this.tableDatasecond.push(item)
            });
            this.tableDatafirst = []
        },
        delss() {
            this.tableDatasecond.forEach(item => {
                this.tableDatathird.push(item)
            });
            this.tableDatasecond = []
        },
        delssass() {
            this.tableDatathird = []
        }
    },
};
</script>

<style lang="scss" scoped>
tbody{
    height: 500px;
    overflow: auto;
}
</style>