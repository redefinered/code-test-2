import React from 'react';
import SearchBar from '../search-bar.component';

import renderer from 'react-test-renderer';

describe('search-bar tests', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
