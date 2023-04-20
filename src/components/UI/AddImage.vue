<template>
    <div class="container">
        <form @submit.prevent="handleSubmit" class="uploadForm" >
                <input 
                    id="file-upload-button"
                    @change="uploadFile"  
                    type="file" 
                >
            <MyButton class="btnUploadPhoto" type="submit">Загрузить</MyButton>
        </form>
        <div v-if="review.photo" class="preShow">
            <a href="#" @click="removePhoto" class="remove">x</a>
            <img  :src="previePhoto"  class="previewPhoto">
        </div>
       
    </div>
</template>


<script>
    import { computed } from '@vue/reactivity';
    import { reactive} from 'vue';
    export default{
        name:'AddImage',
        setup(){
            const review = reactive({
                photo:null,
            })
            const uploadFile = (e) =>{
                const [file] = e.target.files
                review.photo = file;
            }
            const previePhoto = computed(()=>{
                if(review.photo){
                    return URL.createObjectURL(review.photo);
                }
                return '#';
            })
            return {review , uploadFile, previePhoto}
        },
        methods:{
            handleSubmit(){
                console.log(this.review.photo)
                this.review.photo = null
                location.reload();

            },
            removePhoto(){
                this.review.photo = null;
                location.reload();
                
            }
            
        }
    }

</script>

<style src="../UIStyle/addImageStyle.css" scoped>
   

</style>