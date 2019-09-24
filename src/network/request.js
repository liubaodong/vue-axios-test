import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


export function request(config) {
    // 1 创建axios实例
    const instance = axios.create({
        baseURL: 'http://jsonplaceholder.typicode.com',
        timeout: 10000,
        headers: {
            'X-Custom-Header': 'foobar'
        }
    });
    // 2 axios的拦截器
    // 全局拦截器
    // axios.interceptors.request.use()
    // axios.interceptors.response.use()
    // 实例拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config)
        return config
    }, err => console.log(err))
    // 响应拦截
    instance.interceptors.response.use(res => {
            console.log(res)
            return res.data
        },
        err => console.log(err))

    // 3 发送真正的网络请求
    return instance(config)
}