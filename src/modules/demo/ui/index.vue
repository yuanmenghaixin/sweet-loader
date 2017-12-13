<template>
    <div class="ui">
        <h1>Element UI 部分 demo</h1>
        
        <div class="block">
            <h2>按钮</h2>
            <el-button>默认按钮</el-button>
        </div>
        <div class="block">
            <h2>Select</h2>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="block">
            <h2>Table</h2>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <h2>DataPicker</h2>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {
    Button,
    Select,
    Option,
    Table,
    TableColumn,
    DatePicker
} from 'element-ui';


Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);

export default {
    name: 'ui',
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            value1: ''
        };
    }
};

</script>
