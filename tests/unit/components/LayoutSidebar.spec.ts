import LayoutSidebar from '@/components/LayoutSidebar.vue';
import { shallowMount } from '../utils';

describe('LayoutSidebar tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(LayoutSidebar);

    const container = wrapper.find('.LayoutSidebar');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(LayoutSidebar);
    expect(wrapper.element).toMatchSnapshot();
  });
});
