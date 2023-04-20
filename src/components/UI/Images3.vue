<template>
   <BarChart :chartData="chartData" :chartOptions="chartOptions"/>
</template>

<script>
    
    export default{
        
        name:'Images3',
        data(){
            return{
                mass:[
                    {title: 'January', data: 70, bgcolor:"#b32b2b", color:"#ffffff"},
                    {title: 'February', data: 30, bgcolor:"#050505", color:"#ffffff"},
                    {title: 'March', data: 22, bgcolor:"#cc2ade", color:"#ffffff"},
                    {title: 'April', data: 71, bgcolor:"#482ade", color:"#ffffff"},
                    {title: 'May', data: 40, bgcolor:"#2adecc", color:"#ffffff"},
                    {title: 'Jun', data: 18, bgcolor:"#2ade39", color:"#ffffff"},
                ],
                // chartData:{
                   
                // },
                chartOptions: {
                    responsive: true
                },     
            }  
        },
        computed:{
           chartData(){
            return{
                labels: this.mass.map(m=>m.title),
                datasets: [ 
                        { 
                            data: this.mass.map(m=>m.data), 
                            borderColor: this.mass.map(m=>m.color),
                            backgroundColor: this.mass.map(m=>m.bgcolor)
                        } 
                    ]
            }
           }
        },    
      
        
       
    }


</script>


<style>



</style>