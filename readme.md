
# Rapid Prototyping in JavaScript

<sup>Twitter: [@jebli_7](https://twitter.com/jebli_7)</sup>

This is a brief introduction to my current workflow for small-app, browser demos and prototypes.


## goals

The aim of this workflow is to produce browser modules that are decoupled from the larger applications that surround them, so that the code is easier to re-use and maintain across projects. We also want to make use of the [npm ecosystem](https://www.npmjs.com/) for faster prototyping.

Deliverable demos, usually in the form of JavaScript (Node.js) powered websites, applications and services to the cloud. this can be used to get public feedback. We also want a simple dev script, easy for others to run after a `git clone`.

## npm scripts

Build tools like Gulp and Grunt are great for large applications, but for small modules and demos they tend to be overkill, and the build scripts become a maintenance burden.

For these small demos, we will use the [scripts](https://docs.npmjs.com/misc/scripts) field in our `package.json`. This means that any build tools should use `--save-dev` so that others cloning our repository can get the same versions. For example:

```json
"scripts": {
  "build": "browserify index.js > bundle.js"
}
```

You can then use the `npm run build` command to trigger the build script.

## folder structure

When creating new modules, I typically lay it out like so:
```text
  my-module
    .gitignore
    README.md
    index.html
    test.js
    index.js
    bundle.js
    package.json
```

Where `test.js` is the unit test (where possible), and `bundle.js` is the runnable mock which will be published on ▲Now. In some cases, the module will have its own `test` or `demo` folder.

## bundler

In order to use npm modules in the browser, we will need to use a bundler like [browserify](https://wwnpmjs.com/package/browserify).


## budo

An easy way to get a demo up and running is to serve your `demo.js` source with [budo](https://www.npmjs.com/package/budo). This tool creates a local server on port `9966`, and bundles your source code on the fly.

First, install it as a devDependency:

    npm install ▲ --save-dev

Then include it as a script in `package.json`:

```json
"scripts": {
    "start": "budo index.js:bundle.js -P -v --live -- -t es2020"
  }

```
Now enter `npm run start` in terminal to start the development server. When you open `localhost:9966`, it will serve the browserified bundle to a stub `index.html`.

This tool uses [watchify](https://www.npmjs.com/package/watchify) under the hood, creating a fast and efficient workflow for local browserify development.


## live reload

Unlike some other tools, budo will suspend the server request until the bundle is ready, so you will never be served an empty or stale bundle.

However, during development, it can be nice to reload the page on file changes. The `--live` option will inject a script tag into the served `index.html`, giving it support for LiveReload integration.

Now, when you save your source, it will trigger a LiveReload page refresh. Because budo injects the LiveReload script, no plugin is necessary.

## CSS & HTML

Eventually you will need an `index.html` to publish. You might also want CSS styles, HTML content, and fonts. If you have an `index.html` file in the base directory, budo will use that by default. For example:
```html
<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Rapid Prototyping in JavaScript</title>
    <link href="https://npmcdn.com/basscss@7.1.1/css/basscss.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <script src="./bundle.js"></script>
  </body>
</html>
```

If you are using budo with the `--live` argument, any changes to `style.css` will get injected into the page without destroying application state.


## creating a repo

Once you’re happy with your demo, you can publish it to a new repository in a single command, using [ghrepo](https://github.com/mattdesl/ghrepo).

    `npm install ghrepo -g`

And then, simply run the command in your directory:

    `ghrepo -m "first commit"`

## publishing

This step is optional, but often it’s nice to deliver a runnable demo to the user so they don’t have to `git clone` your repo to try it out.

Make sure you have browserify installed, and uglify-js if you plan to compress the source (optional).

    `npm install browserify uglify-js -D`

Now add your final bundle task:

```json
"scripts": {
    ...
    "build": "browserify index.js | uglifyjs -cm > bundle.js"
}
```

Once you’ve committed your changes to master, To deploy with now, run:

`$ npm install -g now`
> only if now is not installed.

and 
`$ now`
The first time you run now, it'll ask for your email to identify you.
Click the email you receive, and you'll be automatically logged-in.

When the deployment starts you'll get a link (also copied to your clipboard) that you can share immediately with your peers, even before upload and startup completes!


## inspiration

Much of this workflow has evolved from the article of [MATT DESLAURIERS](https://mattdesl.svbtle.com/rapid-prototyping) .
