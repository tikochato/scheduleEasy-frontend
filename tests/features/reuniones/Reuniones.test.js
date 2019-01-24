import React from 'react';
import { shallow } from 'enzyme';
import { Reuniones } from '../../../src/features/reuniones/Reuniones';

describe('reuniones/Reuniones', () => {
  it('renders node with correct class name', () => {
    const props = {
      reuniones: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Reuniones {...props} />
    );

    expect(
      renderedComponent.find('.reuniones-reuniones').length
    ).toBe(1);
  });
});
