const OrbitControls = require('three-orbit-controls')(THREE)

class Webgl {
    constructor() {
        // ##
        // SCENE
        this.scene = new THREE.Scene();

        // ##
        // CAMERA
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 8;
        this.camera.position.y = 4;
        new OrbitControls( this.camera );

        // ##
        // LIGHT
        this.ambientLight = new THREE.AmbientLight( 0xfecffd, 0.6 );
        this.scene.add( this.ambientLight );

        this.directionalLight = new THREE.SpotLight( 0xaaacf9, 0.4 );
        this.directionalLight.position.x = 4;
        this.directionalLight.position.y = 3;
        this.directionalLight.position.z = 3;
        this.directionalLight.castShadow = true; 
        this.scene.add( this.directionalLight );
        // var directionalLightHelper = new THREE.SpotLightHelper( this.directionalLight, 5 );
        // this.scene.add( directionalLightHelper );

        this.directionalLightBis = new THREE.SpotLight( 0xfdc2b4, 0.4 );
        this.directionalLightBis.position.x = -4;
        this.directionalLightBis.position.y = 3;
        this.directionalLightBis.position.z = 0;
        this.directionalLightBis.castShadow = true; 
        this.scene.add( this.directionalLightBis );
        // var directionalLightBisHelper = new THREE.SpotLightHelper( this.directionalLightBis, 5 );
        // this.scene.add( directionalLightBisHelper );

        // ##
        // RENDERER
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor( 0xfecffd );
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild( this.renderer.domElement );

        this.onUpdate = this.onUpdate.bind( this );
    }
    onUpdate() {
        this.renderer.render( this.scene, this.camera );
    }
}
module.exports = Webgl;