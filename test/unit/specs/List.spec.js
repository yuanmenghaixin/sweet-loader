import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import List from '@/components/List'

// 创建一个测试点，这是一个基本的 mocha 测试文件
describe('组件：List.vue', () => {
    // 测试文本包含
    it('测试：列表数据渲染', () => {
        const wrapper = mount(List)
        // 测试渲染出来的组件的文本内容中，是否包含"购物"文字
        expect(wrapper.text()).include('购物')
    })

    // 测试值是否正确
    it('测试：值是否正确', () => {
        const wrapper = mount(List)
        let number = Number(wrapper.find('.rest-number span').text())
        expect(number).equal(6)
    })

    // 测试按钮是否触发
    it('测试：按钮是否触发', () => {
        const wrapper = mount(List)
        wrapper.find('#_clearItems').trigger('click')
        let number = Number(wrapper.find('.rest-number span').text())
        expect(number).equal(0)
    })
})