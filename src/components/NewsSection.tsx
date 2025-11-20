import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const NewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const newsItems = [
    {
      date: '2022-03-08',
      title: 'SIRUDA_引擎墊片安裝_開箱文',
      image: 'https://www.siruda.com/storage/system/news/photo/Unboxing.png',
      excerpt: 'SIRUDA 一向秉持專業及最高的品質要求作為生產引擎墊片的指導原則。SIRUDA 亦是專為改裝而設計的專用引擎墊片,強調的就是絕佳的密封技術,讓您不僅更可安心安裝在您的愛車,更能讓引擎發揮最佳效能。透過引擎墊片開箱安裝影片，讓粉絲們更清楚產品細節。SIRUDA 所生產的每一款墊片也都會是您最佳的選擇。',
      link: '#'
    },
    {
      date: '2022-10-07',
      title: 'SIRUDA_2022 UCRA華盟拉力賽_澎湖站賽事',
      image: 'https://www.siruda.com/storage/system/news/photo/221007.jpg',
      excerpt: '澎湖天氣晴，參賽的車手們帶著熱血沸騰的決心，來參加2022年度華盟拉力的錦標賽事，在崎嶇的賽道中，需全程灌注，車與人共為一體，展現精湛的技術，讓觀眾看得不亦樂乎，十分過癮! 今年度SIRUDA也以品牌冠名贊助車隊,感謝車手們熱情的支持。',
      link: '#'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-light-gray" id="news">
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            活動與訊息
          </motion.h4>
          <motion.h3
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            最新消息
          </motion.h3>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-dark mb-4 hover:text-primary transition-colors">
                  <a href={item.link}>{item.title}</a>
                </h4>
                <p className="text-dark-light leading-relaxed mb-6 line-clamp-4">
                  {item.excerpt}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  看更多
                  <span className="ml-2">&gt;</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
