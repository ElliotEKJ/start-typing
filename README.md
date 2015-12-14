# Start Typing

A handy boilerplate for building [Typed](https://typed.com) themes, powered by Gulp.

* Project: [github.com/elliotekj/start-typing](https://github.com/elliotekj/start-typing)
* Author: [Elliot Jackson](http://casualnotebook.com)

## What does it provide?

* Just enough markup to be useful
* Minifies and auto-prefixes your SASS
* Concatenates your JS and runs it through Uglify
* Compresses PNGs, JPEGs, GIFs and SVGs (lossless)
* Minifies the HTML
* Live-reloads the page once all of the above is done (port 8000, the one used by the [Theme Preview app](https://dl.devmate.com/com.realmacsoftware.typedthemes/ThemePreview.zip))

## Setup

* If you don’t already have it, install [Node.js](https://nodejs.org/en/)
* Grab the Livereload [browser extension](http://livereload.com/extensions/)
* In the Terminal, run `git clone https://github.com/elliotekj/start-typing.git`
* Now run `cd start-typing && npm install`

## Usage

* Run `gulp` to make Gulp watch the `src` folder and automatically act accordingly
* Any changes to your theme should be done in the `src` folder
* The theme name and version can be controlled in `gulpfile.js`
* Point Theme Preview.app at the `theme` folder
* The theme folder is the one that should be zipped and uploaded to Typed

## 3rd party thanks

Start Typing comes bundled with [Nicolas Gallagher](http://nicolasgallagher.com)’s Normalize.css and [Todd Motto](http://toddmotto.com)’s Fluidvids.js.

## Useful links

* The Typed theming docs: https://www.typed.com/
* Our official starter theme (doesn’t require Node or anything): https://github.com/realmacsoftware/typed-themes/tree/master/starter
* Our Mac app for previewing themes locally: https://dl.devmate.com/com.realmacsoftware.typedthemes/ThemePreview.zip
