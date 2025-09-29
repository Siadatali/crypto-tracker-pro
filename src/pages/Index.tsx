import CryptoNavigation from '@/components/CryptoNavigation';
import CryptoHero from '@/components/CryptoHero';
import CryptoSearch from '@/components/CryptoSearch';
import Portfolio from '@/components/Portfolio';
import CryptoNews from '@/components/CryptoNews';
import CryptoFooter from '@/components/CryptoFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CryptoNavigation />
      <CryptoHero />
      <CryptoSearch />
      <Portfolio />
      <CryptoNews />
      <CryptoFooter />
    </div>
  );
};

export default Index;
