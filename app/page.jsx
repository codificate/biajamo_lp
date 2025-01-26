'use client'
import { useEffect, useRef } from 'react';
import { projects } from '../data';
import { useScroll, useTransform, motion } from 'framer-motion';
import Card from './components/Card';
import styles from './page.module.scss';
import Lenis from 'lenis'

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const range = [0, 1];
  const targetScale = 1.05;

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <div ref={ref} className={styles.main}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card
                    key={i}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={range}
                    targetScale={targetScale}
                  />
        })
      }
    </div>
  );
};

export default Home;
