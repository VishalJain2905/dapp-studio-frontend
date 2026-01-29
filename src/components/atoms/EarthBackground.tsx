import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function EarthBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    
    // Start camera far away for entrance animation
    camera.position.set(0, 0.5, 12);
    const targetCameraZ = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const sunLight = new THREE.DirectionalLight('#ffffff', 2.5);
    sunLight.position.set(2, 0.5, 1.5);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    // Create Earth with a beautiful gradient material (no external textures)
    const sphereGeometry = new THREE.SphereGeometry(1, 128, 128);
    
    // High quality Earth shader
    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        sunDirection: { value: new THREE.Vector3(2, 0.5, 1.5).normalize() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 sunDirection;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        
        // Improved noise functions
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          
          i = mod289(i);
          vec4 p = permute(permute(permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0));
                  
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        float fbm(vec3 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for(int i = 0; i < 6; i++) {
            value += amplitude * snoise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }
        
        void main() {
          vec3 spherePos = normalize(vWorldNormal) * 2.0;
          
          // Continental shapes
          float continent = fbm(spherePos * 1.2 + vec3(0.5, 0.2, 0.8));
          float detail = fbm(spherePos * 4.0) * 0.3;
          float landMask = smoothstep(-0.05, 0.15, continent + detail);
          
          // Ocean - beautiful deep blue gradient
          vec3 deepOcean = vec3(0.0, 0.03, 0.12);
          vec3 midOcean = vec3(0.0, 0.08, 0.22);
          vec3 shallowOcean = vec3(0.02, 0.18, 0.35);
          
          float oceanDepth = smoothstep(-0.4, 0.0, continent);
          vec3 oceanColor = mix(deepOcean, midOcean, oceanDepth);
          oceanColor = mix(oceanColor, shallowOcean, smoothstep(-0.1, 0.05, continent));
          
          // Land - natural earth tones
          float biome = fbm(spherePos * 3.0);
          float elevation = fbm(spherePos * 5.0);
          float latitude = abs(vWorldNormal.y);
          
          vec3 tropicalForest = vec3(0.02, 0.18, 0.04);
          vec3 temperateForest = vec3(0.04, 0.22, 0.06);
          vec3 grassland = vec3(0.15, 0.28, 0.08);
          vec3 desert = vec3(0.55, 0.45, 0.30);
          vec3 mountain = vec3(0.35, 0.30, 0.25);
          vec3 snow = vec3(0.92, 0.94, 0.96);
          
          // Mix biomes based on latitude and noise
          vec3 landColor = mix(tropicalForest, temperateForest, smoothstep(0.0, 0.3, latitude));
          landColor = mix(landColor, grassland, smoothstep(0.25, 0.5, biome));
          landColor = mix(landColor, desert, smoothstep(0.55, 0.75, biome) * (1.0 - latitude * 0.8));
          landColor = mix(landColor, mountain, smoothstep(0.35, 0.55, elevation));
          landColor = mix(landColor, snow, smoothstep(0.7, 0.85, latitude));
          landColor = mix(landColor, snow, smoothstep(0.55, 0.75, elevation) * 0.6);
          
          // Combine ocean and land
          vec3 surfaceColor = mix(oceanColor, landColor, landMask);
          
          // Lighting
          float sunDot = dot(vNormal, sunDirection);
          float dayStrength = smoothstep(-0.15, 0.4, sunDot);
          
          // Night side - city lights
          vec3 nightColor = vec3(0.002, 0.003, 0.008);
          float cities = step(0.6, fbm(spherePos * 12.0)) * landMask;
          nightColor += vec3(1.0, 0.85, 0.5) * cities * 0.4;
          
          // Mix day and night
          vec3 earthColor = mix(nightColor, surfaceColor, dayStrength);
          
          // Clouds
          float cloudBase = fbm(spherePos * 2.0 + vec3(time * 0.015, 0.0, 0.0));
          float cloudDetail = fbm(spherePos * 6.0 + vec3(time * 0.02, 0.0, 0.0)) * 0.4;
          float clouds = smoothstep(0.1, 0.45, cloudBase + cloudDetail);
          earthColor = mix(earthColor, vec3(0.95, 0.97, 1.0), clouds * dayStrength * 0.65);
          
          // Atmosphere fresnel
          vec3 viewDir = normalize(-vPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.5);
          
          vec3 atmosphereDay = vec3(0.3, 0.6, 1.0);
          vec3 atmosphereTwilight = vec3(0.8, 0.35, 0.1);
          vec3 atmosphereColor = mix(atmosphereTwilight, atmosphereDay, smoothstep(-0.2, 0.6, sunDot));
          
          float atmosphereMix = fresnel * smoothstep(-0.3, 0.5, sunDot) * 0.7;
          earthColor = mix(earthColor, atmosphereColor, atmosphereMix);
          
          // Rim light
          earthColor += atmosphereColor * fresnel * 0.25;
          
          // Ocean specular
          vec3 reflectDir = reflect(-sunDirection, vNormal);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), 48.0);
          earthColor += vec3(1.0, 0.95, 0.9) * spec * (1.0 - landMask) * dayStrength * 0.6;
          
          // Subtle terminator glow
          float terminator = 1.0 - abs(sunDot);
          terminator = pow(terminator, 4.0) * 0.15;
          earthColor += atmosphereTwilight * terminator;
          
          gl_FragColor = vec4(earthColor, 1.0);
        }
      `,
    });

    const earth = new THREE.Mesh(sphereGeometry, earthMaterial);
    scene.add(earth);

    // Atmosphere glow shell
    const atmosphereGeometry = new THREE.SphereGeometry(1.025, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        sunDirection: { value: new THREE.Vector3(2, 0.5, 1.5).normalize() },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 sunDirection;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 4.0);
          
          float sunDot = dot(vNormal, sunDirection);
          float alpha = fresnel * smoothstep(-0.4, 0.8, sunDot);
          alpha = pow(alpha, 2.0) * 0.6;
          
          vec3 dayColor = vec3(0.4, 0.7, 1.0);
          vec3 twilightColor = vec3(0.9, 0.4, 0.1);
          vec3 atmosphereColor = mix(twilightColor, dayColor, smoothstep(-0.1, 0.5, sunDot));
          
          gl_FragColor = vec4(atmosphereColor, alpha);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 4000;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = 25 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      sizes[i] = Math.random() * 0.8 + 0.2;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.06,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    let animationId: number;
    const clock = new THREE.Clock();
    let entranceComplete = false;
    const entranceDuration = 2.5;
    
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Entrance animation
      if (!entranceComplete) {
        const progress = Math.min(elapsedTime / entranceDuration, 1);
        const eased = easeOutExpo(progress);
        camera.position.z = 12 - (12 - targetCameraZ) * eased;
        
        // Rotate during entrance
        earth.rotation.y = eased * Math.PI * 0.3;
        
        if (progress >= 1) {
          entranceComplete = true;
        }
      } else {
        // Slow rotation
        earth.rotation.y += 0.001;
      }
      
      atmosphere.rotation.y = earth.rotation.y;
      
      // Update time uniform
      earthMaterial.uniforms.time.value = elapsedTime;
      
      // Rotate stars slowly
      stars.rotation.y = elapsedTime * 0.003;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      sphereGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
      }}
    />
  );
}
