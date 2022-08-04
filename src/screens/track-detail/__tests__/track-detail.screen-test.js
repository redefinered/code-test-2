import React from 'react';
import TrackDetailScreen from '../track-detail.screen';

import renderer from 'react-test-renderer';

describe('search-bar tests', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<TrackDetailScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
