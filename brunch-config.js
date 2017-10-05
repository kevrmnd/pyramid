module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  npm: {
    globals: {
      THREE: 'three',
      anime: 'animejs',
      GIF: 'gif.js.optimized'
    }
  }
};