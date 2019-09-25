import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 1000,
        student: [{
                id: 1,
                age: 12,
                name: 'tom'
            },
            {
                id: 2,
                age: 24,
                name: 'jack'
            },
            {
                id: 3,
                age: 18,
                name: 'pick'
            }
        ]
    },
    mutations: {
        increment(state, number) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        addCount(state, payload) {
            state.count += payload.count
        },
        asyAdd(state) {
            state.count++

        }
    },
    actions: {
        aAdd(context, payload) {
            setTimeout(() => {
                context.commit('asyAdd')
                console.log(payload)
            }, 1000);
        }
    },
    getters: {
        powerCounter(state) {
            return state.count * state.count
        },
        one(state) {

            return (age = '') => state.student.filter(o => o.age > age)
        }
    }
})