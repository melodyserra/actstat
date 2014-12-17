var container, stats;
var camera, scene, renderer, particles, geometry, material, i, h, color, sprite, size;
var mouseX = 0, mouseY = 0;
var colors = new Array();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var cnt = 0;
var comments = new Array();

comments [0] = "The Golden Gate Bridge is the world's widest bridge.";
comments [1] = "Around 2,200 public school students lack permanent homes.";
comments [2] = "The homeless street and shelter count was 6,436 in 2013.";
comments [3] = "An estimated 15,901 people are living with HIV/AIDS.";
comments [4] = 'comment';
comments [5] = 'comment';
comments [6] = 'comment';
comments [7] = 'comment';
comments [8] = 'comment';
comments [9] = 'comment';
comments [10] = 'comment';
comments [11] = 'comment';
comments [12] = 'comment';
comments [13] = 'comment';
comments [14] = 'comment';
comments [15] = 'comment';
comments [16] = 'comment';
comments [17] = 'comment';
comments [18] = 'comment';
comments [19] = 'comment';
var particles = new Array();
var renderPass;
var effectCopy;
var composer;
var renderScene;
var particles,composer,hblur, vblur;
var hblur, vblur;
var vertex;

function init() {
  $('#center').mouseenter(function(){
    $('#center p').stop().fadeOut(200);
    $('#center img').stop().fadeIn(200);
  });
  $('#center').mouseleave(function(){
    $('#center p').fadeIn(200);
    $('#center img').fadeOut(200);
  });

  // container = document.createElement( 'div' );
  // document.body.appendChild( container );
  container = document.getElementById("main-stage");

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 4, 4000 );

  // camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
  // camera.position.z = 500;

  scene = new THREE.Scene();
  geometry = new THREE.Geometry();

  sprite = THREE.ImageUtils.loadTexture( "/img/particle.png" );

    for ( i = 0; i < 4000; i++ ) {
      vertex = new THREE.Vector3();
      vertex.x = i*-2 ;
      vertex.y = i*-2;
      vertex.z =  i*-3;
      geometry.vertices.push( vertex );
      //change color of particles
      colors[ i ] = new THREE.Color( 0xffffff );
          //colors[ i ] = new THREE.Color( Math.random() * 200 / 180, 1, 1.5);
          //colors[i].setHSL( ( vertex.x + 1000 ) / 2000, 0.8, 0.6 )
          //colors[ i ]= new THREE.Color(0xffffff)
              // colors[ i ]= new THREE.Color(0xff0000)
      material = new THREE.PointCloudMaterial( {size: i/i+150, map: sprite, vertexColors: THREE.VertexColors,blending: THREE.AdditiveBlending , transparent: true } );
    }

    geometry.colors = colors;

    // change color of material used
    //material.color.setHSL( 100, 0.5, 0.8 );
    //material.color.setHSL( 100, 0.5, 0.8 );
    particles = new THREE.PointCloud( geometry, material );
    particles.sortParticles = true;

    scene.add( particles );

    renderer = new THREE.WebGLRenderer( {alpha:true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocumentTouchMove, false );

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

var cmnt = 0;
function onDocumentMouseMove( event ) {

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;

  cnt++;
  if(cnt > 5){
    cnt = 0;
    cmnt += 1;
  }
//particles moving with mouse

//change comments on mouse move

  if(cmnt > comments.length-1){
    cmnt = 0;
    document.getElementById('comments').innerHTML = comments[cmnt];
  }
    document.getElementById('comments').innerHTML = comments[cmnt];
}

function onDocumentTouchStart( event ) {

  if ( event.touches.length == 1 ) {
    event.preventDefault();
    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
  }
}

function onDocumentTouchMove( event ) {

  if ( event.touches.length == 1 ) {
    event.preventDefault();
    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
  }
}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  var time = Date.now() * 0.00005;
  var clock = new THREE.Clock();
  var delta = clock.getDelta();

//particles move randomly

//particles move randomly
  for(var i = 0; i<4000; i++){
    particles.geometry.vertices[i].x = 1000 * Math.cos( time + i );
    if(particles.geometry.vertices[i].x < windowHalfX-600){
      colors[i] = new THREE.Color( 0xffffff );
      colors[i].setHSL(1, 0.8, 0.6);
      geometry.colors = colors;
      }
    if(particles.geometry.vertices[i].x > (windowHalfX+100)){
      colors[ i ] = new THREE.Color( 0xffffff );
      colors[i].setHSL(1, 0.5, 0.6);
      material = new THREE.PointCloudMaterial( { size: 50, map: sprite, vertexColors: THREE.VertexColors,blending: THREE.AdditiveBlending , transparent: true } );
        geometry.colors = colors;
    }
    else{
      colors[ i ] = new THREE.Color( 0xffffff );
      colors[i].setHSL(1, 1, 1);
      geometry.colors = colors;
    }
    particles.geometry.vertices[i].y = 1000 * Math.sin( time + i * 1.1 );
    particles.geometry.verticesNeedUpdate = true;
  }

//particles moving with mouse
  for(var k = 0; k < 1000; k++){
    if(particles.geometry.vertices[k].x > windowHalfX+600){
      colors[k] = new THREE.Color( 0xffffff );
      colors[k].setHSL(0.1, 0.8, 0.6);
      geometry.colors = colors;
    }
    if(particles.geometry.vertices[k].x < windowHalfX-800){
      colors[k] = new THREE.Color( 0xffffff );
      colors[k].setHSL(0.1, 0.5, 0.8);
      geometry.colors = colors;
    }
    particles.geometry.vertices[k].x += ( mouseX/2  ) * 0.2;
    particles.geometry.vertices[k].y += ( -mouseY/2 ) * 0.2;
  }
  for(var k = 1000; k < 2000; k++){
    if(particles.geometry.vertices[k].x < windowHalfX-1000){
        colors[k] = new THREE.Color( 0xffffff );
        colors[k].setHSL(0.1, 0.5, 0.8);
        geometry.colors = colors;
      }
    if(particles.geometry.vertices[k].x > windowHalfX-200){
        colors[k] = new THREE.Color( 0xffffff );
        colors[k].setHSL(1, 0.5, 0.6);
        geometry.colors = colors;
    }
    particles.geometry.vertices[k].x += ( mouseX/2  ) * 0.1;
    particles.geometry.vertices[k].y += ( -mouseY/2 ) * 0.1;
  }
  for(var k = 2000; k < 4000; k++){
    if(particles.geometry.vertices[k].x < windowHalfX-1500){
      colors[k] = new THREE.Color( 0xffffff );
      colors[k].setHSL(0.1, 0.5, 0.8);
      geometry.colors = colors;
    }
    if(particles.geometry.vertices[k].x > windowHalfX+900){
      colors[k] = new THREE.Color( 0xffffff );
      colors[k].setHSL(1, 0.5, 0.6);
      geometry.colors = colors;
    }
    particles.geometry.vertices[k].x += camera.position.x;
    particles.geometry.vertices[k].y += camera.position.y;
  }

  camera.lookAt( scene.position );
  h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
  //material.color.setHSL( 0.5, 0.5, 0.5 );
  renderer.render( scene, camera );
  camera.lookAt( scene.position );
  h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
        //material.color.setHSL( 0.5, 0.5, 0.5 );
}
