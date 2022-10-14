import { defineStore } from 'pinia';

// 這邊 defineStore 會自動動態註冊模組，回傳值為 hook function


//使用時須引入 import { useStore } from "./store/main";
//然後可以在底下const store = useStore();
export const useStore = defineStore('Main', {
    // 注意 state 是一個 function，推薦使用 arrow function
    // 可幫助 typescript 更好進行類型推斷
    state: () => ({
        isLoading: false,

        counter: 11111111111111222,
        //叫出這個Data時    {{ store.counter }}

    }),
    getters: { //computed  
        // this 指向 store 本身
        // 可以 ${store.counter}
        loading: (state) => {
            state.isLoading = !state.isLoading;
        },


        doubleCount: (state) => state.counter * 2,

        doubleCountPlusOne() {
            this.doubleCount + 1;
        }
    },
    actions: { //methods
        loadingAction(val: boolean) {
            this.isLoading = val
        },

        increment() {
            this.counter++;
        },
        randomizeCounter() {
            this.counter = Math.round(100 * Math.random());
        },
    },
})