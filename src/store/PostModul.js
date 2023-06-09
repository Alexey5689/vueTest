import axios from 'axios';

export const PostModul = {
    state: ()=>({
            limit:10,
            page:1,
            totalPages:0,
            isPostLoading:false,
            posts: [
            ], 
    }),
    getters:{
       //базовоее состояние
    },
    mutations:{
       getPost(state, posts){
            state.posts = posts;
       },
       getLoader(state, bool){
            state.isPostLoading = bool;
       },
       getPage(state,page){
            state.page = page;
       },
       getTotalPages(state, totalPages){
            state.totalPages = totalPages;
       },
    },
    actions:{
        //запрос постов
        async fetchPost({state, commit}){
            try{
                commit('getLoader', true)
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params:{
                            _page:state.page,
                            _limit:state.limit,
                        }      
                    })
                    commit('getTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                    console.log(response);
                    commit('getPost', response.data);


            }catch(e){
                console.log(e);
            }finally{
                commit('getLoader', false)
                
            }
        },
        changePosts({state, commit}){
            commit('setPosts', state.posts);
        }
    },
    namespased: true,
    //пространство имен
}




