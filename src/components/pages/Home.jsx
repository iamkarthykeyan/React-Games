import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Loader';
import Castle from '../pages/../../models/Castle'
import Plane from '../pages/../../models/Plane'
import Sky from '../pages/../../models/Sky'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustCastleScreenSize = () => {
    let screenScale = null;
    let screenPosition = [5, -28, -110];
    let rotation = [0.15, 5.75, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [0.9, 0.9, 0.9];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0, 0, 0];
      screenPosition = [0, 0, 0];
    } else {
      screenScale = [0, 0, 0];
      screenPosition = [0, 0, 0];
    }
    return [screenScale, screenPosition];
  };

  const [castleScale, castlePosition, castleRotation] = adjustCastleScreenSize();
  const [planeScale, planePosition] = adjustPlaneScreenSize();

  return (
    <section className='w-full h-screen'>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ position: [0, -0.10, 3.55] }}
        style={{ position:'fixed' }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 2, 4]} intensity={2} />
          <ambientLight intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Sky />
          <Castle
            position={castlePosition}
            scale={castleScale}
            rotation={castleRotation}
            setIsRotating={setIsRotating}
          />
          <Plane
            planeScale={planeScale}
            planePosition={planePosition}
            isRotating={isRotating}
            rotation={[0.2, -105.3, 0]}
            position={[-0.1, 1.25, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;