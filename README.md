# A simple MEAN application for Doctor's management

## File Structure

We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:

```
DocSys/
 │
 ├──app/                            * back-end routing and MongoDB object models
 │   ├──models/                     * model definitions for Mongoose
 │   │   ├──user.model.js           * a user model for use with PassportJS
 │   ├──routes/                     * store modular REST API routes for Express here
 │   │   └──authentication          * an Express route for use with PassportJS
 │   │        .router.js
 │   └──routes.js                   * import Express routes and middleware here
 │
 ├──config/                         * configuration files
 |   ├──helpers.js                  * helper functions for our configuration files
 |   ├──spec-bundle.js              * magic that sets up the NG2 testing environment
 |   ├──karma.conf.js               * karma config for our unit tests
 |   ├──protractor.conf.js          * protractor config for our end-to-end tests
 │   ├──webpack.dev.js              * our development webpack config
 │   ├──webpack.prod.js             * our production webpack config
 │   ├──webpack.test.js             * our test webpack config
 │   ├──config.json/                * allows definition of environment variables
 │   ├──env.conf.js/                * utility functions for setting up env vars
 │   ├──mongoose.conf.js/           * configuration file for Mongoose
 │   ├──gulpfile.conf.js            * contains all of the workflow management delegated
 │   │                                to `gulp`: auto documentation generation; `sass`
 │   │                                linting; `nodemon`, et cetera
 │   └──passport.conf.js/           * configuration file for PassportJS
 │
 ├──sockets/                        * directory for socket.io functionality
 │   └──base.js/                    * a basic socket.io server function
 │
 ├──src/                            * source that will be compiled to javascript
 │   ├──main.ts                     * our entry file for our browser environment
 │   │
 │   ├──index.html                  * Index.html: where we generate our index page
 │   │
 │   ├──polyfills.ts                * our polyfills file
 │   │
 |   ├──vendor.ts                   * our vendor file
 │   │
 |   ├──directives/                 * Custom directives folder
 │   │   └──(Directive name)/                   * an example directive directory
 │   │       ├──(Directive name).ts             * a simple Angular 2 custom directive
 │   │       └──(Directive name).html           * template for our custom directive
 │   │
 │   ├──app/                        * WebApp: folder
 │   │   ├──(Component name)/                   * an example component directory
 │   │   │   ├──(Component name).component.ts   * a simple Angular 2 component
 │   │   │   ├──(Component name).e2e.ts         * simple test of components in (Component name).component.ts
 │   │   │   ├──(Component name).spec.ts        * a simple end-to-end test for /(Component name)
 │   │   │   ├──(Component name).html           * template for our component
 │   │   │   └──(Component name).service.ts     * Angular 2 service linking to our API
 │   │   ├──app.spec.ts             * a simple test of components in app.ts
 │   │   ├──app.e2e.ts              * a simple end-to-end test for /
 │   │   └──app.ts                  * App.ts: primary application component
 │   │
 │   ├──assets/                     * static assets are served here
 │   │   ├──icon/                   * our list of icons from www.favicon-generator.org
 │   │   ├──service-worker.js       * ignore this. Web App service worker that's not
 │   │   │                            complete yet
 │   │   ├──robots.txt              * for search engines to crawl your website
 │   │   └──human.txt               * for humans to know who the developers are
 │   │
 │   └──sass/                       * folder for Sass stylesheets
 │       |
 │       ├──base/
 │       │   ├──_animations.scss    * Animation keyframe definitions
 │       │   ├──_reset.scss         * Reset/normalize
 │       │   ├──_typography.scss    * Typography rules
 │       │   ├──_module.scss        * Load all partials into a single partial
 │       │   └── …                  * Etc.
 │       │
 │       ├──components/
 │       │   ├──_buttons.scss       * Buttons
 │       │   ├──_carousel.scss      * Carousel
 │       │   ├──_cover.scss         * Cover
 │       │   ├──_dropdown.scss      * Dropdown
 │       │   ├──_module.scss        * Load all partials into a single partial
 │       │   └── …                  * Etc.
 │       │
 │       ├─ layout/
 │       │   ├──_navigation.scss    * Navigation
 │       │   ├──_grid.scss          * Grid system
 │       │   ├──_header.scss        * Header
 │       │   ├──_footer.scss        * Footer
 │       │   ├──_sidebar.scss       * Sidebar
 │       │   ├──_forms.scss         * Forms
 │       │   ├──_module.scss        * Load all partials into a single partial
 │       │   └── …                  * Etc.
 │       │
 │       ├─ pages/
 │       │   ├──_home.scss          * Home specific styles
 │       │   ├──_contact.scss       * Contact specific styles
 │       │   ├──_module.scss        * Load all partials into a single partial
 │       │   └── …                  * Etc.
 │       │
 │       ├─ themes/
 │       │   ├──_theme.scss         * Default theme
 │       │   ├──_admin.scss         * Admin theme
 │       │   ├──_module.scss        * Load all partials into a single partial
 │       │   └── …                  * Etc.
 │       │
 │       ├─ utils/
 │       │   ├──_variables.scss     * Sass Variables
 │       │   ├──_functions.scss     * Sass Functions
 │       │   ├──_mixins.scss        * Sass Mixins
 │       │   ├──_helpers.scss       * Class & placeholders helpers
 │       │   ├──_module.scss        * Load all partials into a single partial
 │       │   └── …                  * Etc.
 │       ├──vendors/
 │       │   ├──_bootstrap.scss     * Bootstrap
 │       │   ├──_jquery-ui.scss     * jQuery UI
 │       │   ├──_module.scss        * Load all partials into a single partial
 │       │   └── …                  * Etc.
 │       │
 │       │
 │       └──main.scss               * Main sass file importing all partials
 │
 ├──.babelrc                        * configure Babel 6 plugins and ES6/ES7 presets
 │
 ├──server.js                       * ES5 `.js` importing the server code along with a
 │                                    Babel 6 hook to transpile server ES6/ES7 code
 │                                    on the fly
 ├──server.conf.js                  * configure Express application, connect to
 │                                    database, instantiate Mongoose models, define API
 │                                    and front-end Angular routes, et cetera
 │
 ├──gulpfile.js                     * ES5 `gulpfile` importing the `gulp` workflow code
 │                                    along with a Babel 6 hook to transpile the ES6
 │                                    code on the fly
 │
 ├──protractor.conf.js              * Exposes `protractor.conf` from `config/`
 │
 ├──karma.conf.js                   * Exposes `karma.conf` from `config/`
 │
 ├──tslint.json                     * typescript lint config
 ├──typedoc.json                    * typescript documentation generator
 │
 ├──tsconfig.json                   * config that webpack uses for typescript
 ├──typings.json                    * our typings manager
 └──package.json                    * what npm uses to manage it's dependencies
```

# Getting Started

## Dependencies

Once you have the latest versions of Node 6.x.x and NPM 3.x.x, you should install these globals with `npm install --global`:

- `webpack` (`$ npm install --global webpack`)
- `webpack-dev-server` (`$ npm install --global webpack-dev-server`)
- `karma` (`$ npm install --global karma-cli`)
- `protractor` (`$ npm install --global protractor`)
- `typings` (`$ npm install --global typings`)
- `typescript` (`$ npm install --global typescript`)
- `concurrently` (`$ npm install --global concurrently`)
- `mocha` (`$ npm install --global mocha`)

## Installing

- `$ git clone https://github.com/ninadpardhiye/DocSys.git` Clone the repo to your local machine
- `$ npm install -g typings webpack webpack-dev-server concurrently rimraf` to install global dependencies
- `$ npm install` to install all local dependencies
- `$ typings install` to install necessary typings
- `$ npm run build` to build necessary front-end code with Webpack
- `$ npm start` to enable hot module reloading and build on file change
- In a new terminal, `node server` to start the server for the first time

## config.json

The `server.conf.js` file is expecting certain `environment` `variables` to be set within `Node`. The `env.conf.js` has functions to check whether the expected `environment` `variables` have been setup before proceeding to start up the rest of the server. It uses a file called `config.json` stored in the `config` directory that looks something like this:

```
{
  "ENV" : "development",
  # MAKE SURE PORT IS NOT 8080 OR WHATEVER THE WEBPACK
  # DEV SERVER PORT IS SET TO
  "PORT" : 3000,
  "MONGO_URI" : {
    "DEVELOPMENT" : "mongodb://[username:password]@host[:port]",
    "PRODUCTION" : "mongodb://[username:password]@host[:port]",
    "TEST" : "mongodb://[username:password]@host[:port]"
  },
  # Generate your own 256-bit WEP key here:
  # http://randomkeygen.com/
  # Note that you don't need to use specifically
  # this, but it will certainly suffice
  "SESSION_SECRET" : "355FC4FE9348639B4E4FED1B8E93C"
}

You should definitely change your `SESSION_SECRET` for even the most lackadaisical development effort.
```

### A Quick Note About the `config.json` Object

This object is not absolutely required. You can pass these values in however you want, whether it is through the command line or some alternative method. This just provided me with an easy way of storing a couple of values that do not change often.

## Running the app

After you have installed all dependencies and modified your `config.json` file, you can now run the app. First, you must start up the back-end server in a separate terminal using the `gulp serve` command. This will fire up our Express app using `nodemon`, which will watch for file changes and restart our backend when necessary. Next use the `npm start` command in the original terminal which runs two `npm` scripts in parallel: `npm run server` to start `webpack-dev-server` for building our front-end in the computer's memory, enabling hot module reloading; `npm run watch` to watch all of the front-end files and build them upon changes. You can now fire up your favorite web browser and visit the running application at `localhost:8080`!

### server

```bash
# development
# package front-end files with Webpack and hot reload
# upon any changes
$ npm start
# use `Gulp` in a second terminal to run the Express
# app responsible for our back-end
$ gulp serve
# production
$ npm run build:prod
$ npm run server:prod
```

### build files

```bash
# development
$ npm run build:dev
# production
$ npm run build:prod
```

### run tests

```bash
$ npm run test
```

### watch and run our tests

```bash
$ npm run watch:test
```

### run end-to-end tests

```bash
# make sure you have your server running in another terminal
$ npm run e2e
```

### run webdriver (for end-to-end)

```bash
$ npm run webdriver:update
$ npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)

```bash
$ npm run webdriver:start
# in another terminal
$ npm run e2e:live
```

# Configuration

Configuration files live in `config/`. We are currently using `mongooose`, `passportJS`, `webpack`, `mocha`, `karma`, and `protractor` for different stages and parts of your full-stack application