<template>
    <ul class="side_menu">
        <li class="side_menu_block">
            <router-link to="/profile/images">Images</router-link>
        </li> 
        <li class="side_menu_block">
            <router-link to="/profile/images2">Images2</router-link>
        </li>
        <li class="side_menu_block">
            <router-link to="/profile/images3">Images3</router-link>
        </li>
        <li class="side_menu_block">
            <router-link to="/profile/">Add</router-link>
        </li>
        <li class="side_menu_block">
            <router-link to="/profile/postPage">PostList</router-link>
        </li>
        <li class="side_menu_block">
            <router-link :to="{name:'ToDo'}">ToDoLitst</router-link>
        </li>
        <li class="side_menu_block">
            <router-link :to="{name:'TestStore'}">TestStore</router-link>
        </li>
    </ul>
</template>


<script>
    export default{
        name:'SideMenu',
    }

</script>

<style scoped>
    .side_menu{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .side_menu_block{
        font-size: calc(5px + 17 * (100vw / 1280));
        font-family: sans-serif;
        padding: 25px 0 25px 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        
        
    }
    .side_menu_block>a{
        all:unset;
    }
    .side_menu_block:hover{
        box-shadow: 0px -5px 5px -5px rgb(80, 34, 34) inset,
                    0px 5px 5px -5px rgb(80, 34, 34) inset;           
    }

</style>