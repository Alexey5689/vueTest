<template>
    <div class="right_hand_gallery">
        <div class="image">
            <!-- <img src="https://source.unsplash.com/collection/1103088/800x600"> -->
            <canvas id="myChart" height="100%" width="100%"></canvas> 
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103081/800x600">
        </div>
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103082/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103079/800x600">
        </div>
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103084/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103085/800x600">
        </div>
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103086/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103087/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103088/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103089/800x600">
        </div>
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103067/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103056/800x600">
        </div>
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103066/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103079/800x600">
        </div>
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103023/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103059/800x600">
        </div>
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103058/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103057/800x600">
        </div>  
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103056/800x600">
        </div> 
        <div class="image">
            <img src="https://source.unsplash.com/collection/1103055/800x600">
        </div>         
    </div>
</template>

<script>
    import Chart from 'chart.js/auto';
    export default{
        name:'Images',
        mounted() {
            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 63, 5, 34, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            });
            // this.myChart();
        },
    }    


</script>


<style scoped>
    .right_hand_gallery{
        display: grid;
        grid-gap: 1vh;
        grid-template-columns: auto auto auto auto;
        width: 80%;
        grid-auto-flow: dense;
        margin: 40px auto;   
   }
   .right_hand_gallery .image{
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
   }
   .right_hand_gallery .image img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 2px;
        filter: brightness(0.5) grayscale(1);
        transition: 0.3s ease-in-out;   
    }
    .right_hand_gallery .image:first-child {
       
        grid-column-start: span 2;
        grid-row-start: span 2;
    }
    .right_hand_gallery .image:nth-child(2n+1) {
        grid-row-start: span 2;
    }
    .right_hand_gallery .image:nth-child(4n+6) {
        grid-column-start: span 2;
        grid-row-start: span 2;
    }
   
    .right_hand_gallery  .image img:hover {
        filter: brightness(1) grayscale(0);
        transform: scale(1.1);
    }


</style>