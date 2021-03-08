# Tic Tac Toe

- Allow users to play Tic-tac-toe with alternating clicks.
- Handle a win by X, O, or a tie.
- Offer a "start new game" feature.
- Offer an "undo move" feature.

---
DEMO IS VISIBLE HERE [https://adnanwahab.com/adnan-frontend-take-home-challenge/]

services/ implements business logic

App.jsx should probably be split into separate game, controls and board components 

Bazinga should be replaced by a css-animation classname 

OVERTIME:
to execute this requirement "
How can you make it easier for a collaborator to jump in and contribute features? 
How can you make your code easier to debug and safer to run?" 

i would add more tests and documentation. To be more safe, i would generate all possible inputs/board configurations and make sure they are all receiving the right result. some should be hardcoded and others can be calculated. 

There's over 16,000 board configurations, so if you didnt want to generate them all because it would be too slow, you could store the board as a byteString and then use bitmasks to compare the boardState to all winStates. This would be slightly faster than looping and checking conditions but It's a bit of an overoptimization and over-engineering imo in this case. 
















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
