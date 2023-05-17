# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**The purpose of the program:**
1. Display a list of systems using a component that allows scrolling to the right or left.
2. For each system - its name, its description, and a picture must be presented. Clicking on the system is a link to it.
3. Allow adding a new system
4. Allow the user to manage the addition of a system to favorites or removal from the user's favorites.
Favorites are managed using the browser's sessionStorage.
5. For the purpose of the test, create a list of systems in the code and save it using the browser's sessionStorage.

**The list of systems consists of the following fields:**
1. System code (number)
2. System name (text up to 100 letters)
3. System description (long text up to 255 letters)
4. Background image
5. Link


**The resulting component should look similar to what is drawn in the picture:**
In this example, a central provider system is in favorites and there is an indication of a button with a full heart.
The rest of the systems are not in the favorites and the button is of an empty heart.
Clicking on the full heart removes the system from favorites.
Clicking on the empty heart adds the system to favorites.
The upper part of each component contains a background image, on which the name and description of the system are displayed.
Only up to 100 characters of the system description should be displayed, and 3 dots should be displayed if the text is truncated.
By clicking on the scroll buttons on the sides of the component, additional systems are displayed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# project-systems-presentation
