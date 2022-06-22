import ContactView from '@/views/ContactView.vue';
import { shallowMount } from '../utils';

describe('ContactView tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(ContactView);

    const container = wrapper.find('.ContactView');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.element).toMatchSnapshot();
  });
});
