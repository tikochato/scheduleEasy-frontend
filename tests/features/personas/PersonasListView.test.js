import React from 'react';
import { shallow } from 'enzyme';
import { PersonasListView } from '../../../src/features/persona';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PersonasListView />);
  expect(renderedComponent.find('.personas-personas-list-view').length).toBe(1);
});
