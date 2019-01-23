import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '../../../src/features/home/Menu';

describe('home/Menu', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(<Menu {...props} />);

    expect(renderedComponent.find('.home-menu').length).toBe(1);
  });
});
