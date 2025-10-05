<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Centered 3D Logo</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: radial-gradient(circle at center, #003366 0%, #001a33 100%);
    }
    canvas {
      display: block;
    }
  </style>
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/js/controls/OrbitControls.js"></script>

  <script>
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x66ccff, 1.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00ffff, 1.5);
    pointLight.position.set(3, 3, 5);
    scene.add(pointLight);

    // Controls (optional)
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Cube parameters (larger cube)
    const cubeSize = 3; // increased from 2
    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00aaff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Node spheres
    const nodeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    const positions = [
      [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1],
      [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1]
    ];

    positions.forEach(pos => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(pos[0] * 1.5, pos[1] * 1.5, pos[2] * 1.5);
      scene.add(node);
    });

    // Edges
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x00ccff });
    const edges = [
      [0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],
      [4,5],[4,6],[5,7],[6,7]
    ];

    edges.forEach(pair => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...positions[pair[0]].map(p => p * 1.5)),
        new THREE.Vector3(...positions[pair[1]].map(p => p * 1.5))
      ]);
      const line = new THREE.Line(geometry, edgeMaterial);
      scene.add(line);
    });

    // Animate
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.004;
      cube.rotation.y += 0.004;
      scene.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Responsive
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  </script>
</body>
</html>
