import React from 'react';
import { shallow } from 'enzyme';
import { ReporteView } from '../../../src/features/reporte';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ReporteView />);
  expect(renderedComponent.find('.reporte-reporte-view').length).toBe(1);
});
