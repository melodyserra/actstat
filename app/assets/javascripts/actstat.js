var container, stats;
var camera, scene, renderer, particles, geometry, material, i, h, color, sprite, size;
var mouseX = 0, mouseY = 0;
var colors = new Array();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var cnt = 0;
var comments = new Array();

comments [0] = "The Golden Gate is the world's widest bridge";
comments [1] = 'comment';
comments [2] = 'comment';
comments [3] = 'comment';
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

var vertex;

function init() {

    $('#center').mouseenter(function(){
        $('#center p').stop().fadeOut(200),
        $('#center img').stop().fadeIn(200);
    });
    $('#center').mouseleave(function(){
      $('#center p').fadeIn(200),
      $('#center img').fadeOut(200);
    });

  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
  camera.position.z = 500;

  scene = new THREE.Scene();
  geometry = new THREE.Geometry();

  sprite = THREE.ImageUtils.loadTexture( "/img/particle.png" );

  for ( i = 0; i < 6000; i ++ ) {

    vertex = new THREE.Vector3();
    vertex.x = 8000 * Math.random() - 4000;
    vertex.y = 2000 * Math.random() - 1000;
    vertex.z = 3000 * Math.random() - 1500;

    geometry.vertices.push( vertex );

    colors[ i ] = new THREE.Color( 0xffffff );
    // colors[ i ].setHSL( ( vertex.x + 500 ) / 2000, 1, 0.5 );
    colors[ i ] = new THREE.Color( Math.random() * 200 / 180, 1, 1.5);

    material = new THREE.PointCloudMaterial( { size: i*1.02-i, map: sprite, vertexColors: THREE.VertexColors,blending: THREE.AdditiveBlending, transparent: true });

  }

  geometry.colors = colors;

  // material = new THREE.PointCloudMaterial( { size: 100, map: sprite, vertexColors: THREE.VertexColors, transparent: true } );
  // material.color.setHSL( 0.005, 0.2, 0.7 );

  // material.color.setHSL( .8, 0.51, 0.43 );

  particles = new THREE.PointCloud( geometry, material );
  particles.sortParticles = true;

  scene.add( particles );

  //
  // renderer = new THREE.WebGLRenderer( { clearAlpha: 1 } );
  renderer = new THREE.WebGLRenderer( { alpha: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  //

  //

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.addEventListener( 'touchmove', onDocumentTouchMove, false );

  //

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
  if(cnt > 5)
  {
    cnt = 0;
    cmnt += 1;
  }

  if(cmnt > comments.length-1)
  {

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

//

function animate() {

  requestAnimationFrame( animate );

  render();

}

function render() {

  var time = Date.now() * 0.00005;

    for(var i = 0; i<6000; i++){
      particles.geometry.vertices[i].x = 1000 * Math.cos( time + i );
      particles.geometry.vertices[i].y = 1000 * Math.sin( time + i * 1.1 );
      particles.geometry.verticesNeedUpdate = true;
    }

//particles moving with mouse
    for(var k = 0; k < 2000; k++) {
      particles.geometry.vertices[k].x += ( mouseX/2  ) * 0.2;

      particles.geometry.vertices[k].y += ( -mouseY/2 ) * 0.2;
    }

    for(var k = 2000; k < 4000; k++){
      particles.geometry.vertices[k].x += ( mouseX/2  ) * 0.1;

      particles.geometry.vertices[k].y += ( -mouseY/2 ) * 0.1;
    }

    for(var k = 4000; k < 6000; k++){
      particles.geometry.vertices[k].x += camera.position.x

      particles.geometry.vertices[k].y += camera.position.y;
    }

    camera.lookAt( scene.position );

    h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
    //material.color.setHSL( 0.5, 0.5, 0.5 );

    renderer.render( scene, camera );


    camera.lookAt( scene.position );

    h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
    //material.color.setHSL( 0.5, 0.5, 0.5 );

    renderer.render( scene, camera );

}

//   camera.position.x += ( -mouseX - camera.position.x ) * 0.05;

//   camera.position.y += (  mouseY - camera.position.y ) * 0.05;


//   for ( var p = 0, pl = particles.length; p < pl; p ++ ) {

//       var sphere = particles[ p ];
//       alert(sphere );

//       sphere.position.x = 5000 * Math.cos( timer + p );
//       sphere.position.y = 5000 * Math.sin( timer + p * 1.1 );

//   }


//   camera.lookAt( scene.position );

//     h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
//     //material.color.setHSL( 0.5, 0.5, 0.5 );

//     renderer.render( scene, camera );

// }


