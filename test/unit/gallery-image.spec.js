import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import GalleryImage from '@/components/gallery-image';

describe('GalleryImage', () => {
  beforeEach(() => {

  });

  test('is a Vue instance', () => {
    const wrapper = mount(GalleryImage);
    expect(wrapper.isVueInstance()).to.be.true; // eslint-disable-line
  });

  test('contains an actual image', () => {
  });
});
