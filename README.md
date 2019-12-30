# Dynamic HTML Response for FizzBuzz

This simple application is to dynamically render HTML for a webpage using NodeJS, Express and EJS.
You can pass the FizzBuzz number to the server through a url parameter that Express will catch and
use to dynamically send a HTML response to the client. The client will see a simple HTML response
with no JavaScript. The CSS stylesheet is selected based on if the URL parameter is given a even or odd
number to evaluate for FizzBuzz

### Result with a ODD number given as a url parameter

![FizzBuzz Results Odd Number](/images/FizzBuzzResultsOdd.png)

### Result with a EVEN number given as a url parameter

![FizzBuzz Results Even Number](/images/FizzBuzzResultsEven.png)

### Build steps:

- ensure node.js is installed:
- open the directory this file is in with your terminal
- 'npm install'
- 'node webServer.js'
- navigate to [http://localhost:8080/fizzbuzz/{YOURNUMBER}](http://localhost:8080/fizzbuzz/15)
  - assuming the portNumber variable at the top of the file is still set to 8080

### [View the static version without EJS on the 'static-with-express' branch](https://github.com/TimParrish/server-side-dynamic-html-with-ejs/blob/static-with-express/README.md)
