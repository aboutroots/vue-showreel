import SimpleLoader from '@/components/SimpleLoader.vue';
import { shallowMount } from '../utils';

describe('SimpleLoader tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(SimpleLoader);

    const container = wrapper.find('.SimpleLoader');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(SimpleLoader);
    expect(wrapper.element).toMatchSnapshot();
  });
});
