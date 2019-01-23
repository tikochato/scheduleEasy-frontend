import React from 'react';
import { shallow } from 'enzyme';
import { PersonasList } from '../../../src/features/personas/PersonasList';

describe('personas/PersonasList', () => {
  it('renders node with correct class name', () => {
    const props = {
      persona: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <PersonasList {...props} />
    );

    expect(
      renderedComponent.find('.personas-personas-list').length
    ).toBe(1);
  });
});
