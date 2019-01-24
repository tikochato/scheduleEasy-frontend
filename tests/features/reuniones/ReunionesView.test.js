import React from 'react';
import { shallow } from 'enzyme';
import { ReunionesView } from '../../../src/features/reuniones';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ReunionesView />);
  expect(renderedComponent.find('.reuniones-reuniones-view').length).toBe(1);
});
