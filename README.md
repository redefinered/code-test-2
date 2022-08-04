# Code Test 1

## Installation

### Clone Repository

1. copy repo url and run `git clone <repo url here>`

### Run The Application

1. run `yarn` or `yarn install` in terminal
2. run `npx pod-install` (iOS only)
2. run `yarn ios` or `yarn android` to run project in iOS simulator or Android emulator respectively

## Security

The API url is hardcoded for brevity, but in the real world APIs should not be included in the repo and it can be stored in an environment config files

## State Management Pattern

For the sake of the code test, context API is used in this project as there are only 2 screens so there absolutely no need to use reducer pattern and Redux for state management

To get an idea how I implement reducer pattern please view the ff file from my other repos:
- https://github.com/redefinered/iplayya/blob/master/src/modules/ducks/auth/auth.reducer.js
- https://github.com/redefinered/react-ecommerce-prototype/blob/master/client/src/modules/ducks/shop/shop.reducer.js

## Testing

### Unit test

The project implements testing with Jest. To demonstrate, there are unit tests included in some of the components. One example is in `./src/components/search-item/__tests__/search-item.component-test.js`

```Javascript

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

```

### Snapshot test

Aside from unit tests that are implemented in some of components, almost every other components have Snapshot testing implemented to them to ensure that devs are reminded about possible impact to the app while they incorporate their code.

#### Issues On Testing

In order for tests to work, some libraries needed extra configuration.

- React Navigation
-- added a `transformIgnorePatterns` field to ignore asset transforms within the library
- AsyncStorage
-- added a mock that handles Jest error for AsyncStorage
