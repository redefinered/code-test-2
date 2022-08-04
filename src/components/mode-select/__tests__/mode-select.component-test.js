import React from 'react';
import ModeSelect from '../mode-select.component';

import renderer from 'react-test-renderer';

describe('search-bar tests', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ModeSelect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
