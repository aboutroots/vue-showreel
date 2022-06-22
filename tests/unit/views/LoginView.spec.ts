import LoginView from '@/views/LoginView.vue';
import { shallowMount } from '../utils';

describe('LoginView tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(LoginView);

    const container = wrapper.find('.LoginView');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(LoginView);
    expect(wrapper.element).toMatchSnapshot();
  });
});
