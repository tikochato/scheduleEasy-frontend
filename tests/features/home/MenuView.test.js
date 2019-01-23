import React from 'react';
import { shallow } from 'enzyme';
import { MenuView } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MenuView />);
  expect(renderedComponent.find('.home-menu-view').length).toBe(1);
});
