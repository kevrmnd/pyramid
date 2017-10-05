class Pyramid {
    constructor() {

        var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
        this.mesh = new THREE.Mesh();
        this.mesh.rotation.y = ( -45 * Math.PI ) / 180;

        var meshesRotation = [];
        for ( var i=0; i<=10; i++ ) {
            // MESH
            var geometry = new THREE.BoxGeometry( 0.5*i, 0.5, 0.5*i );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.y = 3 - 0.5 * i;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.mesh.add( mesh );

            meshesRotation.push(mesh.rotation);
        }

        // ANIM
        anime( {
            targets: meshesRotation,
            y: ( 360 * Math.PI ) / 180,
            duration: 5000,
            easing: 'easeInOutQuart',
            delay: function( el, i ) {
                return i * 50;
            },
            loop: true
        } );

        this.onUpdate = this.onUpdate.bind(this);
    }
    onUpdate() {}
}
module.exports = Pyramid;
  