import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
// const isDev = process.env.NODE_ENV === 'production'

const service = axios.create({
    baseURL: isDev ? 'http://api.chia.xmublockchain.com' : 'http://api.chia.xmublockchain.com'
})
// const service1 = axios.create({
//     baseURL: isDev ? 'http://192.168.11.24' : 'http://192.168.11.24'
// })
//添加请求拦截器
service.interceptors.request.use((config) => {
    if (window.localStorage.getItem('token')) {
        config.headers = {
            token: window.localStorage.getItem('token'),
        };
    }
    return config;
});

// //添加响应拦截器
service.interceptors.response.use((res) => {
    if (res.status === 200) {
        return res.data;
    } else {
        console.log('错误！');
    }
});
//封装post promise请求
const RequestPost = (url, params) => {
    return new Promise((resolve, reject) => {
        service
            .post(url, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
//封装GET  promise请求
const RequestGet = (url) => {
    return new Promise((resolve, reject) => {
        service
            .get(url)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
//登录接口
export const login = (userInfo) => {
    return service.post('/api/user/login', userInfo);
};
//获取收益
export const getProfit = () => {
    return service.post('/api/user/profit_info');
};
//获取云算力
export const getCloud = (data) => {
    return service.post('/api/user/order_list', data)
}


// 获取代理
export const getAgent = (obj) => {
    return service.post('/api/user/agent', obj);
};