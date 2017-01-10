var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(path.join(__dirname, 'build'), {
  user: {
    name: 'CircleCI',
    enail: 'deployment@blended.io'
  },
  repo: 'https://github.com/nodeconf/barcelona.git',
  branch: 'gh-pages'
}, function (err) {
  if (err) {
    console.log(err)
    process.exit(-1)
  }
})
