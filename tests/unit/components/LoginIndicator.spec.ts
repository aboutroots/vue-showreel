import LoginIndicator from '@/components/LoginIndicator.vue';
import { shallowMount } from '../utils';

describe('LoginIndicator tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(LoginIndicator);

    const container = wrapper.find('.LoginIndicator');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(LoginIndicator);
    expect(wrapper.element).toMatchSnapshot();
  });
});
