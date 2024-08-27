import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { Html } from '@react-three/drei';
import './Castle.css';
import castleScene from '../assets/3d/skycastle.glb';

const Castle = ({ isRotating, setIsRotating, ...props }) => {
  const castle = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(castleScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      castle.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      castle.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      castle.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <>
      <a.group ref={castle} {...props}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.lambert2SG} />
        </group>
      </a.group>
    </>
  );
};

useGLTF.preload('/skycastle.glb');

export default Castle;






// import React, { useRef, useEffect } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame, useThree } from '@react-three/fiber';
// import { a } from '@react-spring/three';
// import { Html } from '@react-three/drei';
// import './Castle.css';
// import castleScene from '../assets/3d/skycastle.glb';

// const Castle = ({ isRotating, setIsRotating, ...props }) => {
//   const castle = useRef();
//   const { gl, viewport, camera } = useThree();
//   const { nodes, materials } = useGLTF(castleScene);
//   const lastX = useRef(0);
//   const rotationSpeed = useRef(0);
//   const dampingFactor = 0.95;

//   const handlePointerDown = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     setIsRotating(true);
//     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//     lastX.current = clientX;
//   };

//   const handlePointerUp = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     setIsRotating(false);
//   };

//   const handlePointerMove = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     if (isRotating) {
//       const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//       const delta = (clientX - lastX.current) / viewport.width;
//       castle.current.rotation.y += delta * 0.01 * Math.PI;
//       lastX.current = clientX;
//       rotationSpeed.current = delta * 0.01 * Math.PI;
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowLeft') {
//       if (!isRotating) setIsRotating(true);
//       castle.current.rotation.y += 0.01 * Math.PI;
//     } else if (e.key === 'ArrowRight') {
//       if (!isRotating) setIsRotating(true);
//       castle.current.rotation.y -= 0.01 * Math.PI;
//     }
//   };

//   const handleKeyUp = (e) => {
//     if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
//       setIsRotating(false);
//     }
//   };

//   useFrame(() => {
//     if (!isRotating) {
//       rotationSpeed.current *= dampingFactor;
//       if (Math.abs(rotationSpeed.current) < 0.001) {
//         rotationSpeed.current = 0;
//       }
//       castle.current.rotation.y += rotationSpeed.current;
//     }
//   });

//   useEffect(() => {
//     const canvas = gl.domElement;
//     canvas.addEventListener('pointerdown', handlePointerDown);
//     canvas.addEventListener('pointerup', handlePointerUp);
//     canvas.addEventListener('pointermove', handlePointerMove);
//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);
//     return () => {
//       canvas.removeEventListener('pointerdown', handlePointerDown);
//       canvas.removeEventListener('pointerup', handlePointerUp);
//       canvas.removeEventListener('pointermove', handlePointerMove);
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

//   const cameraPositions = [
//     { x: 0, y: -2, z: 5 },
//     { x: 0, y: 0, z: -4 },
//     { x: 0, y: 5, z: -10 },
//     { x: -10, y: 5, z: 0 },
//     { x: 0, y: 10, z: 0 },
//   ];

//   const moveToPosition = (index) => {
//     const { x, y, z } = cameraPositions[index];
//     camera.position.set(x, y, z);
//   };

//   return (
//     <>
//       <a.group ref={castle} {...props}>
//         <group rotation={[-Math.PI / 2, 0, 0]}>
//           <mesh geometry={nodes.Object_2.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_3.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_4.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_5.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_6.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_7.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_8.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_9.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_10.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_11.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_12.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_13.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_14.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_15.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_16.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_17.geometry} material={materials.lambert2SG} />
//           <mesh geometry={nodes.Object_18.geometry} material={materials.lambert2SG} />
//         </group>
//       </a.group>
//       <Html>
//         <div className="annotation-cards">
//           {cameraPositions.map((_, index) => (
//             <div key={index} className="annotation-card">
//               <h3>Annotation {index + 1}</h3>
//               <button onClick={() => moveToPosition(index)}>Go to Position</button>
//             </div>
//           ))}
//         </div>
//       </Html>
//     </>
//   );
// };

// useGLTF.preload('/skycastle.glb');

// export default Castle;

