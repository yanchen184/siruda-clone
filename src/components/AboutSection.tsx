import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && bgRef.current) {
      gsap.to(bgRef.current, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.out',
      });
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden" id="about">
      {/* Skewed Background */}
      <div className="absolute top-0 left-0 h-full w-0 bg-light-gray -z-10">
        <div ref={bgRef} className="h-full w-0 skew-bg bg-light-gray"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h4
              className="text-primary text-sm font-medium mb-2 tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              關於印田實業
            </motion.h4>
            <motion.h3
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              密封配方
            </motion.h3>
            <motion.div
              className="space-y-4 text-dark-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p>
                印田實業過去在一般民用與保修用途所銷售之墊片產品，在市場以及同業間有著良好的口碑與高品質的產品與服務，對於新產品的開發、技術及材料的研究與應用也不遺餘力，針對提高性能目的市場所推出的品牌 SIRUDA，可說是印田實業投入以最高的生產技術、材料、結構設計等自我要求所生產的高水準產品。
              </p>
              <p>
                事實上，自2011以來，SIRUDA通過國內外許多正規賽事以及日本D1&俄羅斯RDS等嚴格的考驗，其品質相比海外其他知名品牌的產品也不惶多讓，並且對於國內市場的服務也比國外品牌更全面，更能聽到各位使用者的心聲與需求，尤其在新產品的合作與開發，更是讓各方充滿期待與驚喜。
              </p>
              <p className="font-semibold text-dark">
                合理的產品價位，最高水準的品質，可靠且有效的使用體驗，全面且專業的相關服務，未來也是以世界級一流的品牌價值為目標，繼續與各位一同前進。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <a href="#about" className="btn-primary">
                看更多 &gt;
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://www.siruda.com/storage/system/index/about-bg.jpg"
                alt="About SIRUDA"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
