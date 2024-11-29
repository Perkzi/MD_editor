import { shallowMount } from '@vue/test-utils';
import Edit from '../../src/views/Edit/index.vue';

describe('Index.vue', () => {
  it('renders the tabbar component', () => {
    const wrapper = shallowMount(Index);
    expect(wrapper.findComponent({ name: 'Tabbar' }).exists()).toBe(true);
  });

  it('has the correct structure', () => {
    const wrapper = shallowMount(Index);
    expect(wrapper.classes()).toContain('edit');
    expect(wrapper.find('#edit').exists()).toBe(true);
    expect(wrapper.find('#edit').attributes('style')).toBe('height: calc(100% - 36px);');
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(Index);
    expect(wrapper.element).toMatchSnapshot();
  });
});