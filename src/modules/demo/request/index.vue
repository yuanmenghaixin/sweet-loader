<template>
    <div class="request-demo-page">
        <h1>AJAX DEMO</h1>
        <h3>AJAX 数据列表</h3>
        <ul>
            <li v-for="item in listData" :key="item.id">{{item.title}}</li>
        </ul>
        <h3>AJAX 取消</h3>
        <p>多次重复请求，新的请求会取消老的请求（如果该请求在pending状态中）</p>
        <a href="javascript:;" @click="getData">发起请求</a>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'requestDemo',
    data() {
        return {
            getDataXHR: this.SWXHR.create({ isCancel: true }),
            listData: [],
            source: ''
        };
    },
    methods: {
        getData() {
            /**
             * json文件获取规则
             * /json/ + json文件在开发目录中的文件路径以‘_’连接，并且不含 json文件夹自身的路径
             * 例如：
             * json文件的开发路径为： /src/modules/demo/request/json/list.json
             * ajax调用的路径则是：/json/demo_request_list.json
             */
            return this.getDataXHR
                .GET('/json/demo_request_list.txt', {
                    // cancelToken: this.source.token,
                    params: {
                        params1: 'aa',
                        params2: 'bb'
                    }
                })
                .then(res => {
                    console.log(res);
                    this.listData = res.data;
                }).catch(res => {
                  // 如果需要取消请求 那么这里需要加上catch 避免promise异常无法捕获
                });
        },
        cancel() {
          this.getDataXHR.source.cancel();
        }
    },
    mounted() {
        this.getData();
    }
};

</script>
