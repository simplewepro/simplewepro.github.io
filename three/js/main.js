window.onload = function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	var canvas = document.getElementById('canvas')
	

	var mouseX = 0, mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	var camera, scene, renderer;
	canvas.setAttribute('width', width)
	canvas.setAttribute('height', height)
	

	var renderer = new THREE.WebGLRenderer({canvas: canvas});
	renderer.setClearColor(0xFFFFFF);
	
	var scene = new THREE.Scene();
	
	var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
	camera.position.z = 1800;
	
	var light = new THREE.AmbientLight(0xffffff);
	scene.add(light);
	
	var geometry = new THREE.CubeGeometry(200, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.2 * Math.PI;
	mesh.position.set(20, 180, -400);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(220, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.2 * Math.PI;
	mesh.position.set(360, 80, -100);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(140, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.84 * Math.PI;
	mesh.position.set(600, 140, -200);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(340, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.7 * Math.PI;
	mesh.position.set(900, 120, -300);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(140, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.7 * Math.PI;
	mesh.position.set(400, -80, 300);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(140, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.6 * Math.PI;
	mesh.position.set(300, -180, -300);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(140, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.57 * Math.PI;
	mesh.position.set(150, -400, -500);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(160, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.65 * Math.PI;
	mesh.position.set(-600, 400, -400);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(160, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.8 * Math.PI;
	mesh.position.set(-900, 160, -460);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(160, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.7 * Math.PI;
	mesh.position.set(-560, 200, -100);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(160, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.26 * Math.PI;
	mesh.position.set(-720, -150, -200);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(120, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.7 * Math.PI;
	mesh.position.set(-50, -140, -220);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(50, 20, 20, 1,1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.2 * Math.PI;
	mesh.position.set(-200, 40, 0);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(130, 20, 20, 1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.15 * Math.PI;
	mesh.position.set(-200, 400, -20);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(50, 20, 20, 1,1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.2 * Math.PI;
	mesh.position.set(280, 300, -500);
	scene.add(mesh);

	var geometry = new THREE.CubeGeometry(20, 20, 20, 1,1, 1);
	var material = new THREE.MeshBasicMaterial({color: 0x000000});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = 0.7 * Math.PI;
	mesh.position.set(220, 480, -300);
	scene.add(mesh);


	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	//
	window.addEventListener( 'resize', onWindowResize, false );
	
	animate();

	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}
	function animate() {
		requestAnimationFrame( animate );
		render();
	}
	function onDocumentMouseMove( event ) {
		mouseX = ( event.clientX - windowHalfX );
		mouseY = ( event.clientY - windowHalfY );
	}
	function render() {
		camera.position.x += ( - mouseX - camera.position.x ) * 0.1;
		camera.position.y += ( mouseY - camera.position.y ) * 0.1;
		camera.lookAt( scene.position );
		renderer.render( scene, camera );
	}
}