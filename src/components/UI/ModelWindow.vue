<template>
    <div class="modelWindow" v-if="stateShow" @click.stop ="hideWindow">
        <div @click.stop class="modelWindow__contant">
            <slot></slot>
        </div>
    </div>
</template>


<script>
    import { mapActions, mapGetters } from 'vuex';
    export default{
        name: 'ModelWindow',
        // props:{
        //     show:{
        //         type: Boolean,
        //         default:false,
        //     }
        // },
        methods:{
            ...mapActions({
                toggleShowState:'toggleShowState'
            }),
            // hideWindow(){
            //     this.$emit('update:show', false)
            // }
            hideWindow(){
                this.toggleShowState();
            }
        },
        computed:{
            ...mapGetters({
                stateShow:'stateShow'
            })
        }
        
    }
</script>


<style scoped>
    .modelWindow{
        display: flex;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #00000052;
    }
    .modelWindow__contant{
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: auto;
        min-width: 500px;
        padding: 20px;
    }



</style>