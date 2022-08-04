# Code Test 1

## Installation

### Clone repo

1. copy repo url and run `git clone <repo url here>`

### Run The Application

1. run `yarn` or `yarn install` in terminal
2. run `yarn ios` or `yarn android` to run project in iOS simulator or Android emulator respectively

## Security

The API url is hardcoded for brevity, but in the real world APIs should not be included in the repo and it can be stored in an environment config files

## State Management Pattern

For the sake of the code test, context API is used in this project as there are only 2 screens so there absolutely no need to use reducer pattern and Redux for state management

To get an idea how I implement reducer pattern please view the ff file from my other repos:
- https://github.com/redefinered/iplayya/blob/master/src/modules/ducks/auth/auth.reducer.js
- https://github.com/redefinered/react-ecommerce-prototype/blob/master/client/src/modules/ducks/shop/shop.reducer.js
