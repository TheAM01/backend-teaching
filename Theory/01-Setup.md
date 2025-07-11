# Setup

This file will guide you through the process of initializing and setting up a Node.js project,
installing the Express.js package, running the app and using `nodemon` for automatic server restarts.
All steps are listed below.

### Steps:
1. Navigate to the folder where you wish to initialize your project and open terminal.
2. Run the following command:
   ```bash
   npm init -y
   ```
   This will initialize a Node.js project with the default options & create a `package.json` file which will contain all your project details.
3. Open the `package.json` file and in the end, add the following line:
    ```json
    "type": "module"
    ```
   This will allow you to use ESModule syntax, allowing us to use top level `await` and `import` and `export`.
4. In the same terminal, run `npm i express` to install the Express.js package.
This will create a `node_modules` folder and place all the dependencies of the project and list Express.js in the dependencies list in your `package.json` file.
5. Create an `index.js` file in your folder. This will be your entry file and host all your primary code.


## Starting template
The following is the starter template for a backend server in Express.js.

```js
// import express module
import express from "express";


// initialize express app
const app = express();

// define port for development server
// recommended values are 2000-9000
const PORT = 2000;


// your default "/" route with a "Hello, World!" response
app.get("/", (req, res) => {
    res.send("Hello, World!");
});


// start the server by making it listen on PORT
app.listen(PORT, () => {
    console.log(`Server is live on port: ${PORT}!`)
});

```

Copy and paste this code in your `index.js` file and go back to terminal. Run the command `node index.js` to start the server.
You will see `Server is live on port: 2000!` in the terminal.
Navigate to [http://localhost:2000/](http://localhost:2000/) in your browser to see your server in action. You will see `Hello, World!` there.

Congratulations, you have successfully created your own backend server in Node.js using the Express.js package.


## Nodemon

Nodemon is a utility package that allows us to see our changes refreshed automatically instead of us having to manually restart the server.

#### Installation

Go to terminal and run the following command:

```bash
npm install -g nodemon
```

We use the `-g` flag to install this package globally.

#### Usage

Instead of doing 
```bash
node index.js
```
We do
```bash
nodemon index.js
```

This refreshes the server everytime changes are saved to any `.js` file in your project.

---

_This guide may update when necessary._

Abdul Mueed [Website ↗](https://mueed.xyz/) [GitHub ↗](https://mueed.xyz/github)