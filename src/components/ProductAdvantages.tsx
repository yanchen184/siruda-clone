import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProductAdvantages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const advantages = [
    {
      number: '1',
      title: '單獨切割不鏽鋼層，精度高',
      image: 'https://www.siruda.com/storage/system/index/Product_icon1.png',
    },
    {
      number: '2',
      title: '用丁腈橡膠層對0.20mm的鋼層進行額外塗層',
      image: 'https://www.siruda.com/storage/system/index/Product_icon2.png',
    },
    {
      number: '3',
      title: '表面橡膠塗層可提供 0.025mm ~ 0.10mm 製作服務',
      image: 'https://www.siruda.com/storage/system/index/Product_icon3.png',
    },
    {
      number: '4',
      title: '精确的公差值',
      image: 'https://www.siruda.com/storage/system/index/Product_icon4.png',
    },
    {
      number: '5',
      title: '多種墊片厚度選擇，以選擇所需的壓縮比',
      image: 'https://www.siruda.com/storage/system/index/Product_icon5.png',
    },
    {
      number: '6',
      title: '燃燒室結構設計選擇多樣化',
      image: 'https://www.siruda.com/storage/system/index/Product_icon6.png',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h4
            className="text-primary text-sm font-medium mb-2 tracking-wider uppercase"
            initial={{ opacity: 0, scale: 2, x: -200 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            產品優勢
          </motion.h4>
          <motion.h3
            className="section-title"
            initial={{ opacity: 0, x: -200 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            技術領域
          </motion.h3>
        </motion.div>

        {/* Product Banner */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: 400, scale: 2 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src="https://www.siruda.com/storage/system/index/ProductAdvantages.png"
            alt="Product Advantages"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.number}
              className="group"
              initial={{ opacity: 0, x: -200, scale: 1.2 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={advantage.image}
                    alt={advantage.title}
                    className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {advantage.number}
                  </div>
                </div>
                {/* Title */}
                <p className="text-dark text-center font-medium leading-relaxed">
                  {advantage.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <a href="#features" className="btn-primary">
            看更多 &gt;
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductAdvantages;
