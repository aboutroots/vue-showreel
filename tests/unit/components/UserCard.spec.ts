import UserCard from '@/components/UserCard.vue';
import { shallowMount } from '../utils';

describe('UserCard tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(UserCard);

    const container = wrapper.find('.UserCard');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(UserCard);
    expect(wrapper.element).toMatchSnapshot();
  });
});
