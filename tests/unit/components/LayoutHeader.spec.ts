import LayoutHeader from '@/components/LayoutHeader.vue';
import { shallowMount } from '../utils';

describe('LayoutHeader tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(LayoutHeader);

    const container = wrapper.find('.LayoutHeader');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(LayoutHeader);
    expect(wrapper.element).toMatchSnapshot();
  });
});
