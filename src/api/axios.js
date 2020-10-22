import axios from 'axios'
import qs from 'qs'


axios.defaults.timeout = 20000; //响应时间
axios.defaults.baseURL = "https://hn216.api.yesapi.cn/"; 
// axios.defaults.baseURL = "https://aip.baidubce.com"; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //配置请求头

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
	//在发送请求之前做某件事
	// if(config.method  === 'post'){
	// 	config.data = qs.stringify(config.data);
	// }
	// return config;
	config.method === 'post' ?
		config.data = qs.stringify({ ...config.data
		}) :
		config.params = { ...config.params
		};
	// 请求发送前进行处理
	return config
}, (error) => {
	console.log('错误的传参')
	return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
	//对响应数据做些事
	if (!res.data.success) {
		return Promise.resolve(res);
	}
	return res;
}, (error) => {
	console.log('网络异常')
	return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function post(url, params,type) {
	return new Promise((resolve, reject) => {
		let obj = {}
		type == 'douban'?obj = {apikey: '0df993c66c0c636e29ecbb5344252a4a'}:obj = {app_key:'96B4B5059E3DB099C78FFA6E90182B33',}
		axios.post(url, params = {
				...obj,
				...params,
			})
			.then(response => {
				resolve(response);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}

////返回一个Promise(发送get请求)
export function get(url, params,type) {
	return new Promise((resolve, reject) => {
		type == 'douban'?obj = {apikey: '0df993c66c0c636e29ecbb5344252a4a'}:obj = {app_key:'96B4B5059E3DB099C78FFA6E90182B33',}
		axios.get(url, params = {
				...obj,
				...params,
			})
			.then(response => {
				resolve(response)
			}, err => {
				reject(err)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default {
	get,post
}
