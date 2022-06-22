import NotFoundView from '@/views/NotFoundView.vue';
import { shallowMount } from '../utils';

describe('NotFoundView tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(NotFoundView);

    const container = wrapper.find('.NotFoundView');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(NotFoundView);
    expect(wrapper.element).toMatchSnapshot();
  });
});
