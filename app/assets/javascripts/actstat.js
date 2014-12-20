var container, stats;
var camera, scene, renderer, particles, geometry, material, i, h, color, sprite, size;
var mouseX = 0, mouseY = 0;
var colors = new Array();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var cnt = 0;
var comments = new Array();

comments [0] = "914 unaccompanied children and transition age youth are living on the streets.";
comments [1] = "Around 2,200 public school students lack permanent homes.";
comments [2] = "The homeless street and shelter count was 6,436 in 2013.";
comments [3] = "An estimated 15,901 people are living with HIV/AIDS.";
comments [4] = "Federal agents confiscated $2 million in cash from 10 Asian massage parlors during a San Francisco raid.";
comments [5] = "There are at least 90 massage parlors where sex is for sale.";
comments [6] = "43 of the nation's under-performing schools are in the Bay Area.";
comments [7] = "65.5 percent of black students and 68.4 percent of Latino students graduated high school last year.";
comments [8] = "82% of high school students overall graduated last year.";
comments [9] = "11% of the homeless population is comprised of veterans.";
comments [10] = "175 homeless families remain on a wait-list for housing.";
comments [11] = "Of the people living on the street, 32% report alcohol abuse and 31% drug use.";
comments [12] = "More than half of children from homeless families have never lived in a permanent home.";
comments [13] = "The share of Latinos, Asian/Pacific Islanders, and people aged 25-29 years among new HIV diagnoses has increased.";
comments [14] = "Since the beginning of the epidemic, the city has lost 19,992 people to HIV/AIDS.";
comments [15] = "Up to 25% of the city’s homeless population consists of families with children.";
comments [16] = "On average a homeless child is 3 years behind in school.";
comments [17] = "Homeless children are twice as likely to repeat a grade in school.";
comments [18] = "Homeless children experience developmental delays at four times the rate of other children.";
comments [19] = "Nearly 70% of homeless children suffer from chronic illness.";

var links = new Array();
links [0] = '/nonprofit/index'
links [1] = '/nonprofit/index'
links [2] = '/nonprofit/index'
links [3] = '/nonprofit/index'
links [4] = '/nonprofit/index'
links [5] = '/nonprofit/index'
links [6] = '/nonprofit/index'
links [7] = '/nonprofit/index'
links [8] = '/nonprofit/index'
links [9] = '/nonprofit/index'
links [10] = '/nonprofit/index'
links [11] = '/nonprofit/index'
links [12] = '/nonprofit/index'
links [13] = '/nonprofit/index'
links [14] = '/nonprofit/index'
links [15] = '/nonprofit/index'
links [16] = '/nonprofit/index'
links [17] = '/nonprofit/index'
links [18] = '/nonprofit/index'
links [19] = '/nonprofit/index'

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
var lnk = 0;
var link  = 0;
var new_link;
function onDocumentMouseMove( event ) {

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;

  lnk++;
    if(lnk > 5){
      lnk = 0;
      link += 1;
    }
    new_link = links[link];
    //particles moving with mouse
    //change comments on mouse move

    if(link > links.length-1){
      lnk = 0;
    }

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

$(document).ready(function () {
  $('#main-stage').click(function(){
    var win = window.open(new_link, '_blank');
    if(win){
      //Browser has allowed it to be opened
      win.focus();
    }
  });
});

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
