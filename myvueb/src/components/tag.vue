<template>
    <div class="tags">
        <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)" @click="goroute(tag)">
            {{ tag }}
        </el-tag>
    </div>
</template>

<script>
export default {
    name: 'MyvuebTag',

    data() {
        return {
            dynamicTags: [],
            copydynamicTags:[],
            inputVisible: false,
            inputValue: '',
            abslut:''
        };
    },

    mounted() {
        this.gettags()
    },

    methods: {
        gettags(){
            console.log(this.$store.state.Homes.homelist);
            this.copydynamicTags=this.$store.state.Homes.homelist
            this.copydynamicTags.forEach(item=>{
                this.dynamicTags.push(item.name)
            })
            console.log(this.dynamicTags);
        },
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            this.$store.commit('Homes/delstag',tag)
        },
        goroute(val){
            console.log(val);
            this.abslut=this.copydynamicTags.filter(item=>item.name==val)
            console.log(this.abslut);
            this.$router.push(this.abslut[0].path)
        }
    },
};
</script>

<style lang="scss" scoped>
</style>