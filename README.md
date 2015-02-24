# Electronic Life

An implementation of the Electronic Life project in chapter 7 of
Eloquent JavaScript.

[http://eloquentjavascript.net/07_elife.html](http://eloquentjavascript.net/07_elife.html)

## Install

```
$ npm install -g grunt-cli
$ git clone git@github.com:Ada-Developers-Academy/js-playground.git
$ cd js-playground
$ npm install
```

## Run

```
$ grunt server
```

Then point your bowser to [http://localhost:3000/](http://localhost:3000/).

## Project Structure

```
js-playground/
  |_ index.html   <- root html test file
  |_ test/        <- tests
  |_ src/         <- source js files
  | |_ index.js   <- entry point to JS (use requires here to pull in other files)
  |_ Gruntfile.js <- grunt configuration
  |_ package.json <- npm packages
```

## Run Tests

Tests are run by mocha via grunt. All tests in test/ will be executed.

```
$ grunt test
```

## Start Server

This will start a server on port 3000 to serve index.html and a file watcher to re-build your JS when files change.

```
$ grunt server
```

## Help

```
$ grunt --help
```

This will list the available tasks.
