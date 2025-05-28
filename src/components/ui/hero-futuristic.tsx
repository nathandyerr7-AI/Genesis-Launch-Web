'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

const TEXTUREMAP = { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop' };
const DEPTHMAP = { src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop' };

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.Material & { opacity?: number };
      if ('opacity' in material) {
        material.opacity = THREE.MathUtils.lerp(
          material.opacity,
          visible ? 1 : 0,
          0.07
        );
      }
    }
  });

  const scaleFactor = 0.40;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={rawMap} transparent opacity={0} />
    </mesh>
  );
};

export const HeroFuturistic = () => {
  const titleWords = 'Build Your Dreams'.split(' ');
  const subtitle = 'AI-powered creativity for the next generation.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-svh">
      <div className="h-svh uppercase items-center w-full absolute z-60 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'fade-in' : ''}
                style={{ animationDelay: `${index * 0.13 + (delays[index] || 0)}s`, opacity: index < visibleWords ? undefined : 0 }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{ animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`, opacity: subtitleVisible ? undefined : 0 }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <button
        className="explore-btn absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center opacity-0 animate-fade-in"
        style={{ animationDelay: '2.2s' }}
      >
        Scroll to explore
        <span className="explore-arrow mt-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg animate-bounce">
            <path d="M11 5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 12L11 17L16 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <Canvas flat>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;