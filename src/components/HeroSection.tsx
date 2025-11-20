import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0.4,
        duration: 2,
        ease: 'power2.inOut',
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.siruda.com/storage/system/video/index-siruda_2.mp4"
            type="video/mp4"
          />
        </video>
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/30"
        ></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-heading text-white mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              SIRUDA
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Performance Gaskets
            </motion.p>
            <motion.p
              className="text-lg text-white/80 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              專業引擎墊片製造商，致力於提供最高品質的密封解決方案
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <a href="#about" className="btn-primary inline-block">
                了解更多
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
