import { mount } from "@vue/test-utils";
import Hello from "../helloWorld.vue";

it('content', () => {
    const Comp = {
        template: `<div><Hello /></div>`
    }
    const wrapper = mount(Comp, {
        global: {
            components: {
                Hello
            }
        }
    })
    // 最简单的测试用例查看是否包含Hello Jest文字。
    expect(wrapper.findComponent({ name: 'HelloWorld' }).text()).toContain('Hello Jest')
})
