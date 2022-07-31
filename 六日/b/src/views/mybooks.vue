<template>
    <div>
        我的书架
        <ul class="uls">
            <dl>正在看</dl>
            <li v-for="item  in mybooks" :key="item.id">
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BMybooks',

    data() {
        return {
            mybooks:[]
        };
    },

    mounted() {
        this.getmybooks()
    },

    methods: {
        getmybooks(){
            this.mybooks=this.$store.state.mybookss
            console.log(this.mybooks);
        }
    },
};
</script>

<style lang="scss" scoped>
.uls{
    overflow: auto;
    width: 100%;
    li{
        overflow: auto;
        float: left;
        width: 50%;
        position: relative;
        img{
            width: 100%;
        }
        .texts{
            width: 100%;
            height: 60px;
            overflow: auto;
            
            .tes{
                overflow: hidden;
                font-size: 12px;
                color: #ccc;
            }
            .goshopping{
                width: 15px;
                height: 15px;
                line-height: 15px;
                text-align: center;
                border-radius: 50%;
                background-color: #c00;
                color:#fff;
                font-size: 12px;
                position: absolute;
                right: 10px;
                bottom: 10px;
            }
        }
    }
}
</style>