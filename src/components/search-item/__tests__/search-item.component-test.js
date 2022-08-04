import React from 'react';
import SearchItem from '../search-item.component';

import renderer from 'react-test-renderer';

import mockresults from '../__mocks__/results-mock';

const ITEM = mockresults.results.find(
  item => typeof item.trackName !== 'undefined',
);

const ITEM_WITH_UNDEFINED_TRACK_NAME = mockresults.results.find(
  item => item.collectionId === '379168762',
);

describe('search-item tests', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<SearchItem item={ITEM} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correct if trackName is is undefined', () => {
    const tree = renderer
      .create(<SearchItem item={ITEM_WITH_UNDEFINED_TRACK_NAME} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
