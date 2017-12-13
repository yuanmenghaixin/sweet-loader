/**
 * 
 * 开发环境配置文件
 * 
 */

/*
* 反向代理设置可以设置多个
* 

const porxys = [
	{
	    paths: ['/management-center', '/platform', '/user-center'],
	    option: {
	    	target: 'http://10.200.188.30:11300',
	    	changeOrigin: true
	    }
	},
	{
	    paths: ['/management-center', '/platform', '/user-center'],
	    option: {
	    	target: 'http://10.200.188.30:11300',
	    	changeOrigin: true
	    }
	}
];

*/

// 反向代理设置
const porxys = [{
    paths: ['/management-center', '/platform', '/user-center'],
    option: {
        target: 'http://10.200.188.30:11300',
        changeOrigin: true
    }
}];

module.exports = {
    // 定义全局变量
    globalVar: {
        'process.env.NODE_ENV': '"development"',
        'baseURL': ''
    },
    // 端口
    port: 3002,
    // 反向代理设置
    porxys: porxys
};
