import LayoutBreadcrumbs from '@/components/LayoutBreadcrumbs.vue';
import { shallowMount } from '../utils';

describe('LayoutBreadcrumbs tests suite', () => {
  test('renders the component successfully', () => {
    const wrapper = shallowMount(LayoutBreadcrumbs);

    const container = wrapper.find('.LayoutBreadcrumbs');

    expect(container.exists()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(LayoutBreadcrumbs);
    expect(wrapper.element).toMatchSnapshot();
  });
});
