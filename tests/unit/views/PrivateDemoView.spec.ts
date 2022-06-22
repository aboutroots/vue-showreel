import PrivateDemoView from '@/views/PrivateDemoView.vue';
import { shallowMount } from '../utils';

describe('PrivateDemoView tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(PrivateDemoView);

    const container = wrapper.find('.PrivateDemoView');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(PrivateDemoView);
    expect(wrapper.element).toMatchSnapshot();
  });
});
