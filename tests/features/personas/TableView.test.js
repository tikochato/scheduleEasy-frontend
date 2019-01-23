import React from 'react';
import { shallow } from 'enzyme';
import { TableView } from '../../../src/features/personas';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TableView />);
  expect(renderedComponent.find('.personas-table-view').length).toBe(1);
});
