<template>
        <div class="time">
            {{ time }}
        </div>
        <div>{{ $store.state.auth }}</div>
        <div v-if="$store.state.auth">
            <router-link to="/profile/"><MyButton class="btnProfile">Profile</MyButton></router-link>
        </div>
</template>


<script>
    import { mapActions, mapMutations, mapState } from 'vuex';

    export default{
    data() {
        return {};
    },
    methods: {
        ...mapMutations({
            changeTime: "changeTime",
        }),
        ...mapActions({
            changeTimeAsync: "changeTimeAsync",
        }),
    },
    computed: {
        ...mapState({
            time: state => state.time,
        })
    },
    mounted() {
        this.changeTimeAsync();
    },

}


</script>

<style src="./style/styleMain.css" scoped>
    

</style>