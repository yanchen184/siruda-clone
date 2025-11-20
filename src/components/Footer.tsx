import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Line',
      icon: '💬',
      url: 'https://page.line.me/125laozp?openQrModal=true',
      color: 'hover:bg-green-500'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://www.facebook.com/sirudaTAIWAN',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://www.instagram.com/sirudagaskets/',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://www.youtube.com/@siruda3921',
      color: 'hover:bg-red-600'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:info@siruda.com',
      color: 'hover:bg-gray-600'
    }
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Social Icons - Floating */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full bg-dark-light flex items-center justify-center text-white shadow-lg transition-all duration-300 ${social.color}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.name}
          >
            <span className="text-xl">{social.icon}</span>
          </motion.a>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-primary font-bold text-2xl mb-4">SIRUDA</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Performance Gaskets
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">聯絡資訊</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a href="tel:+886-3-434-3838" className="hover:text-primary transition-colors">
                  TEL: +886-3-434-3838
                </a>
              </p>
              <p>
                <a href="tel:+886-3-434-5656" className="hover:text-primary transition-colors">
                  FAX: +886-3-434-5656
                </a>
              </p>
              <p>
                <a href="mailto:ingtien@ingtien.com.tw" className="hover:text-primary transition-colors">
                  E-mail: ingtien@ingtien.com.tw
                </a>
              </p>
              <p>
                <a
                  href="https://goo.gl/maps/gLHip6rX1NJYV12s7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  320桃園市中壢區合圳北路二段285號
                </a>
              </p>
            </div>
          </div>

          {/* Global Representatives */}
          <div>
            <h4 className="font-bold mb-4 text-lg">獨家代理</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a href="http://www.siruda.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  英國
                </a>
              </p>
              <p>
                <a href="https://siruda.com.au/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  澳大利亞
                </a>
              </p>
              <p>
                <a href="http://www.siruda.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  俄羅斯
                </a>
              </p>
              <p>泰國 / 馬來西亞</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">快速連結</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a href="#about" className="hover:text-primary transition-colors">
                  關於 SIRUDA
                </a>
              </p>
              <p>
                <a href="#features" className="hover:text-primary transition-colors">
                  產品特色
                </a>
              </p>
              <p>
                <a href="#news" className="hover:text-primary transition-colors">
                  最新消息
                </a>
              </p>
              <p>
                <a href="#support" className="hover:text-primary transition-colors">
                  支援與服務
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p className="mb-4 md:mb-0">
              © 2024 SIRUDA Performance Gaskets. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#sitemap" className="hover:text-primary transition-colors">
                網站地圖
              </a>
              <a href="#privacy" className="hover:text-primary transition-colors">
                隱私政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
