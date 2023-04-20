<template>
    <!-- <Bar
        :options="chartOptions"
        :data="chartData"
    /> -->
    
    <Pie
        :options="chartOptions"
        :data="chartData"
    />
    <!-- <Line
        :options="chartOptions"
        :data="chartData"
    /> -->
    <!--<Radar
        :options="chartOptions"
        :data="chartData"
    /> -->
    


</template>


<script>
    
    import { Bar } from 'vue-chartjs';
    import {Pie} from 'vue-chartjs';
    import {Line} from 'vue-chartjs';
    import {Radar} from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
    
    

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
    export default{
        name: 'BarChart',
        components: { 
            // Bar, 
            Pie, 
            // Line, 
            // Radar 
        },
       
        props:{
            chartData: {
                type: Object,
                required: true
            },
            chartOptions: {
                type: Object,
                default: () => {} 
            }
        }
       
    }
   

</script>
    
<style scoped>

</style>