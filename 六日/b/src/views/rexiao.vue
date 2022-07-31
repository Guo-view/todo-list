<template>
    <div>
        {{shuju}}
    </div>
</template>

<script>
export default {
    name: 'VuecliRexiao',

    data() {
        return {
            shuju:''
        };
    },

    mounted() {
        this.getstr()
    },

    methods: {
        getstr(){
            this.shuju=this.$store.state.shurustr
            console.log(this.shuju);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>