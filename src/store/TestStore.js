
export const TestModul = {
    state: () => ({
        numb: 1,
    }),
    getters:{
       showNumb(state){
            return state.numb
       }
    },
    mutations:{
        incNumb(state){
            state.numb +=1;
        }
    },
    actions:{
        startIncNumb({commit}){
            commit('incNumb');
        }
    },
    namespased: true,
    //пространство имен
}