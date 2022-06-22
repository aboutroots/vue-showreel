import flushPromises from 'flush-promises';
import UsersView from '@/views/UsersView.vue';

import { shallowMount } from '../utils';

describe('UsersView tests suite', () => {
  test('renders the component successfully', async () => {
    const wrapper = shallowMount(UsersView);
    await flushPromises();

    const container = wrapper.find('.UsersView');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', async () => {
    const wrapper = shallowMount(UsersView);
    await flushPromises();

    expect(wrapper.element).toMatchSnapshot();
  });
});
