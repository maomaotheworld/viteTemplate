import { defineStore } from 'pinia'

export const MyUerName = defineStore({
    id: 'user', // id必填，且需要唯一

    state: () => {
        return {
            name: 'I am Albee'
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name
        }
    }
})

