import flushPromises from 'flush-promises';
import UserDetailView from '@/views/UserDetailView.vue';
import api from '@/services/api';
import { shallowMount } from '../utils';
import { defaultUser } from '../fixtures';

jest.mock('@/services/api');

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
