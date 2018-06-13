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
const proxys = [{
    paths: /^\/sso1/,
    option: {
        target: 'http://www.baidu.com',
        changeOrigin: true
    }
},{
    paths: /^\/(ssoconfiguration|role|login|session|application|user|org|user-center|adms|data|permission|ehr)/,
    option: {
        target: 'http://10.86.87.180:8011/',
        changeOrigin: true
    }
}];

module.exports = {
    // 端口
    port: 3004,
    // 反向代理设置
    proxys: proxys
};
