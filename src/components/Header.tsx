import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'SIRUDA',
      submenu: [
        { title: '關於 SIRUDA', href: '#about' },
        { title: '品牌故事', href: '#story' },
      ]
    },
    {
      title: '核心技術',
      submenu: [
        { title: '產品特色', href: '#features' },
        { title: '密封解決方案', href: '#solutions' },
        { title: '品質管控', href: '#quality' },
      ]
    },
    {
      title: '產品',
      submenu: [
        { title: '汽缸床墊片', href: '#headgasket' },
        { title: '排氣歧管墊片', href: '#exhaust' },
        { title: '進氣歧管墊片', href: '#intake' },
      ]
    },
    { title: '新品資訊', href: '#news' },
    { title: '活動與訊息', href: '#events' },
    { title: '支援與服務', href: '#support' },
    { title: '全球據點', href: '#global' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-light shadow-lg' : 'bg-light/95'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#home" className="flex items-center">
              <div className="text-primary font-bold text-2xl">
                SIRUDA
              </div>
              <div className="ml-2 text-xs text-dark-light">
                Performance Gaskets
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a
                  href={item.href || '#'}
                  className="nav-link text-sm font-medium py-2 block"
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.title}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-dark hover:bg-light-gray hover:text-primary transition-colors"
                      >
                        {subitem.title}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <button className="text-dark hover:text-primary transition-colors">TW</button>
              <span className="text-dark-light">/</span>
              <button className="text-dark-light hover:text-primary transition-colors">JP</button>
              <span className="text-dark-light">/</span>
              <button className="text-dark-light hover:text-primary transition-colors">EN</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden bg-white border-t border-gray-200 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto px-4 py-4">
          {menuItems.map((item) => (
            <div key={item.title} className="mb-4">
              <a
                href={item.href || '#'}
                className="text-dark font-medium block py-2"
              >
                {item.title}
              </a>
              {item.submenu && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.title}
                      href={subitem.href}
                      className="text-sm text-dark-light hover:text-primary block py-1"
                    >
                      {subitem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
