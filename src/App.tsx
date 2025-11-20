import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductAdvantages from './components/ProductAdvantages';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 版本號和建置資訊
    console.log('🚗 SIRUDA Clone Website');
    console.log('📦 Version: 1.0.0');
    console.log('📅 Build Date:', new Date().toISOString());
    console.log('🚀 Deployed via GitHub Actions');
    console.log('⚡ Powered by React + TypeScript + Vite + Tailwind CSS');
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductAdvantages />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
