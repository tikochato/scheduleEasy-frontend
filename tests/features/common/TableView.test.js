import React from 'react';
import { shallow } from 'enzyme';
import { TableView } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TableView />);
  expect(renderedComponent.find('.common-table-view').length).toBe(1);
});
