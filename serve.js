var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var layouts = require('metalsmith-layouts')
var assets = require('metalsmith-assets')
var permalinks = require('metalsmith-permalinks')
var browserSync = require('metalsmith-browser-sync')
var metadata = require('metalsmith-metadata')
var sass = require('metalsmith-sass')

Metalsmith(__dirname)
  .source('src/')
  .destination('./build')
  .use(permalinks({
    pattern: ':collection/:title'
  }))
  .use(metadata({
    speakers: 'data/speakers.json',
    team: 'data/team.json',
    sponsors: 'data/sponsors.json',
    venue: 'data/venue.json'

  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(sass({
    outputStyle: 'expanded',
    outputDir: 'assets/css/'
  }))
  .use(assets({
    source: './2015', // relative to the working directory
    destination: './2015' // relative to the build directory
  }))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .use(browserSync({
    server: './build',
    files: ['src/**/*.*', 'layouts/*.html', 'partials/*.html']
  }))
  .build(function (error) {
    if (error) {
      console.log(error)
    }
  })
