# Notes on the assestment

1) I used create react app because was going to be faster on transpile time and in development time that change the gulp es2015 to the new ES6 systax.
2) Also, I used my favorite UI framework (grommet) and didnt edit the theme but by default come with small (mobile), medium (tablet), large (desktop).
3) Test done on react testing library following the react testing library idea (integrations) and _not_ testing implementation (black box)
4) Also left notes and comments on some parts of the code explaining why i did it like that or some other observations.
5) .env file have been intentionally commited and not git ignored for assestment reasons.
6) API have been recreated like the original using json-server library. now is lighter and it saved me to deal porting also express to webpack.
7) Desktop look weird all in one line, but thats what i understood looking at the images.

## Available Scripts

In the project directory, you can run:

### `yarn start`
### `yarn start:ui`
### `yarn start:api`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
