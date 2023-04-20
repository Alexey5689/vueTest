<template>
    <div>
        {{ showNumb }}
    </div>
    
    <div>
        <MyButton @click="startIncNumb">+1</MyButton>
    </div>
    <div>
        {{ $store.state.test.numb }}
    </div>

    
</template>

<script>
    
    import {mapActions, mapGetters} from 'vuex';
    export default{
        data(){
            return{
                 
            }
        },
        methods:{
            ...mapActions({
                startIncNumb:'startIncNumb'
            })
        },
        computed:{
            ...mapGetters({
                showNumb:"showNumb",
            })
        }
    }

</script>


<style scoped>


</style>