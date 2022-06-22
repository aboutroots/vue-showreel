import flushPromises from 'flush-promises';
import UserDetailView from '@/views/UserDetailView.vue';
import { UserDTO } from '@/models';
import api from '@/services/api';
import { shallowMount } from '../utils';

jest.mock('@/services/api');
const defaultUser: UserDTO = {
  id: 1,
  email: 'test@test.com',
  first_name: 'John',
  last_name: 'Test',
  avatar: 'https://img.com/1.png',
};

describe('UserDetailView tests suite', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    api.users.getUser.mockResolvedValue(defaultUser);
  });
  test('renders the component successfully', async () => {
    const wrapper = shallowMount(UserDetailView);
    await flushPromises();

    const container = wrapper.find('.UserDetailView');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', async () => {
    const wrapper = shallowMount(UserDetailView);
    await flushPromises();

    expect(wrapper.element).toMatchSnapshot();
  });
});
