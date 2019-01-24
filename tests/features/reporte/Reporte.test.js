import React from 'react';
import { shallow } from 'enzyme';
import { Reporte } from '../../../src/features/reporte/Reporte';

describe('reporte/Reporte', () => {
  it('renders node with correct class name', () => {
    const props = {
      reporte: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Reporte {...props} />
    );

    expect(
      renderedComponent.find('.reporte-reporte').length
    ).toBe(1);
  });
});
