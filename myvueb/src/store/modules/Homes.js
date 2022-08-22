const state={
    homelist:[]
}

const mutations={
    addasidelist(state,val){
        state.homelist=state.homelist.filter(item => item !== val)
        // console.log(state.homelist.filter(item => item !== val));
        state.homelist.push(val)
        console.log(state.homelist);
    },
    delstag(state,val){
        var a=state.homelist.findIndex(item=>item==val)
        state.homelist.splice(a,1)
    }
}

const actions={

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
}