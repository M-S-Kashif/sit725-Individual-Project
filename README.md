
# SIT725 - Individual-Project

## Individual Project: The Project Shop

Hello there! This is the final iteration of my practicals as 
my Individual Project. I call it "The Project Shop". This is an
amazing website for all sorts of Robotics Projects you can find 
and can order any of the projects or project components with 
this website. It is a very comprehensive web application which
provides both direction and materials for young students to grow
and develop with.

## Features:

If you want to have a look of the features which the web application 
have explained over my video pitch. Please have a look at my link
from [YouTube](https://www.youtube.com/watch?v=OXviud6CS4Y/).

These are some of the features in summary:
- Home Page --> Dynamic Cards with some text reveal on click.
- Contact Us --> Chat Feature using sockets.io.
- Projects --> Using MongoDB to access projects.
- Order Items --> Enter a form for creating an order reciept. It can also add suggestions for items as well but seperately.

## Software Required:

The following program works with the help of the following software platforms: 
1. We have developed our code using the [Visual Studio 2019](https://visualstudio.microsoft.com/downloads/). Please follow the instructions from [this link](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2022#:~:text=1%20Make%20sure%20your%20computer%20is%20ready%20for,button%20to%20get%20started%20developing%20with%20Visual%20Studio.).
2. We have used [Nodejs](https://nodejs.org/en/download/) for our Server Framework. Please refer to [this link](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/#:~:text=Installation%20of%20Node.js%20on%20Windows%201%20Installing%20Node,your%20PC.%20Double%20click%20on%20the%20.msi%20installer.) for the installation process. 
3. Please also install [GitHub Desktop](https://desktop.github.com/) for making things much much easier! This will automatically provide you the download for your PC.

In case you already are a developer and need not to work on this, you can move on ahead!

## Instructions:

Please follow these instructions to set up your repository on your device:
1. Clone the Repository by clicking the "Code" Button in the top corner.
2. Click on the "Open with GitHub Desktop" which will automatically link the repository to the application. Please also refer [this link](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop) as well.
3. Go to Documents --> GitHub (A folder will be created automatically on Installation). The repository you are looking for will be available.
4. Go into the repository and right-click for selecting the "Open with Visual Studio" option. This will open up the application in your Visual Studio.
5. Once open, please ensure that you have the the Solutions Explorer Tab present on the right of your screen.
6. If you don't have the tab present, please click from the Menubar on the top, "View" --> "Solution Explorer".
7. You would also need a Terminal, so again from the Menubar on the top, "View" --> "Terminal". A window should open from the bottom of the screen.

## Installing Dependencies on the Terminal
Now you are to install a couple of dependencies for your project to be fully functional. Please refer to the commands for the Terminal below:

Now you are to install a couple of dependencies for your project to be fully functional. Please refer to the commands for the Terminal below:

```bash
  npm install --save body-parser chai express express-session
  npm install --save fs-extra mocha mongodb node-fetch 
  npm install --save nodemailer nodemailer-mailgun-transport nodemon
  npm install --save request
```

After Installation, please ensure from your Package.json file for the Dependencies. This is how it will look (versions can differ) like:

```bash
  "dependencies": {
    "body-parser": "^1.19.0",
    "chai": "^4.3.4",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "fs-extra": "^10.0.0",
    "mocha": "^9.1.4",
    "mongodb": "^4.3.0",
    "node-fetch": "^3.2.0",
    "nodemailer": "^6.7.2",
    "nodemailer-mailgun-transport": "^2.1.3",
    "nodemon": "^2.0.15",
    "request": "^2.88.2"
  }
```

## Creating scripts for the Terminal:
On the same file, we will now create a few scripts from the commands we already have (kinda...). 
Please ensure that these changes are available on the Package.json file:

```bash
  "scripts": {
    "start": "node server.js",
    "start-dev": "nodemon server.js",
    "test": "mocha --reporter spec"
  }
```

We can now use these commands to run our application. This is how it is done:

```bash
  npm run start
```

In case you want to test the application. This is the command for the Terminal:

```bash
  npm run test
```

In case you want to contribute the application. This is the command for the Terminal:

```bash
  npm run start-dev
```

## Moment of Truth:
Now you will finally run the command for starting your application. Please head afterwards to the 
browser and type in the URL:

```bash
  http://localhost:8080/
```


## License

This is the license we have for our Repository

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

[Muhammad Sohaib bin Kashif](https://github.com/M-S-Kashif)


