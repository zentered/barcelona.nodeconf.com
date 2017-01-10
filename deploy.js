var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(path.join(__dirname, 'build'), {
  user: {
    name: 'Blended Deployments',
    enail: 'deployment@blended.io'
  },
  repo: `https://${process.env.GH_TOKEN}@github.com/nodeconf/barcelona.git`,
  branch: 'gh-pages'
}, function (err) {
  if (err) {
    console.log(err)
    process.exit(-1)
  }
})
