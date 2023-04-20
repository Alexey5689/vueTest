<template>
  <NavBar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>


<script>
  
  export default{
   
    data(){
      return{

      }
    }
  }

</script>


<style scoped>
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }
  .app{
    padding: 20px;
    height: 100vh;
    /* background: #d0d0d0; */
  }
 
  

</style>