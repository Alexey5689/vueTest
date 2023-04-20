<template>
    <div class="container">
        <div class="todo_head">
            <h1>ToDOList</h1>
        </div>
        <div class="todo">
            <form class="todoList__form" @submit.prevent="createToDoList">
                <MyInput
                    v-model="nameTask"
                    placeholder="Название"
                />  
                <MyInput
                    v-model="containTask"
                    placeholder="Описание"
                />
                <MyButton type="submit" class="todoList_btn">Добавить</MyButton>
            </form> 
            <div class="todo_list">
                <div class="todo_list_list" :key="idTask" v-for="deal in dealList" >
                    <div class="list">
                        <div class="list_numb">
                            <strong>№:</strong> {{ deal.id }}
                        </div>
                        <div class="list_task">
                            <strong>Название:</strong> {{ deal.task }}
                        </div>
                        <div class="list_cont" v-if="!deal.check">
                            <strong>Описание:</strong> {{ deal.contain }}
                        </div>
                        <div class="list_cont" v-else>
                            <strong>Готово</strong> 
                        </div>

                    </div>
                    <div class="rulList">
                        <input 
                            type="checkbox" 
                            v-model="deal.check"
                            :id="idTask"
                        />
                        <MyButton @click="remove(deal)">Удалить</MyButton>
                    </div>
                   
                </div>
            </div>  
        </div>
       
    </div>
    

   
   
</template>
<script>


    export default{
    name: "ToDo",
    data(){
        return{
            checked:false,
            idTask:1,
            nameTask:'',
            containTask:'',
            dealList:[

            ]
        }
    },
    methods:{
        createToDoList(){
            if( (this.nameTask && this.containTask) === '') return
            const todo = {
                id: this.idTask,
                task: this.nameTask,
                contain: this.containTask,
                chech: this.checked
            }
            this.dealList.push(todo);
            this.idTask += 1;
            this.nameTask ='';
            this.containTask ='';
        },
        remove(deal){
            this.dealList = this.dealList.filter(d=>d.id !== deal.id)
        }
    }
    
}
</script>


<style scoped>
    .container{
        width: 100%;
        height: auto;  
        display: flex;
        flex-direction: column;
    }
    .todo_head{
        width: 100%;
        padding: 10px;
    }
    .todo_head>h1{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
    .todo{
        width: 100%;
        height: auto;
    }
    .todoList__form{
        display: flex;
        flex-direction: column;
        width: 40%;
    }
    .todoList_btn{
        margin-top: 20px;
    }
    .todo_list{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    .todo_list_list{
        display: flex;
        flex-direction: row;
        padding-bottom: 10px;
        width: 100%;
        border-bottom: 2px solid red;
        font-size: 20px;
        font-family: sans-serif;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .list{
        display: flex;
        flex-direction: row;
        width: 70%;
        align-items: center;
    }
    .list_numb{
        width: 10%;
    }
    .list_task{
        width: 30%; 
    }
    .rulList{
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items: center;
    }
    




</style>