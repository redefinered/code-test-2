import React from 'react';
import HomeScreen from '../home.screen';

import renderer from 'react-test-renderer';

describe('Home screen tests', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
