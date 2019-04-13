import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import Gallery from '@/components/gallery';

describe('Gallery', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Gallery);
    expect(wrapper.isVueInstance()).to.be.true; // eslint-disable-line
  });
});
