import HomeView from '@/views/HomeView.vue';
import { shallowMount } from '../utils';

describe('HomeView tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(HomeView);

    const container = wrapper.find('.HomeView');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.element).toMatchSnapshot();
  });
});
