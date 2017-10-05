document.addEventListener('DOMContentLoaded', function() {

  var Loop = require( 'loop' );
  var Webgl = require( 'components/webgl' );
  var Pyramid = require( 'components/pyramid' );

  var webgl = new Webgl();
  Loop.add(webgl.onUpdate);
  var scene = webgl.scene;

  // **
  // ROAD 1
  var pyramid = new Pyramid();
  scene.add( pyramid.mesh );
  Loop.add( pyramid.onUpdate );

  Loop.start();
});
