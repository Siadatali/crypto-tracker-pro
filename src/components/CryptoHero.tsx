import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CryptoHero = () => {
  const [marketStats, setMarketStats] = useState({
    totalMarketCap: 2450000000000,
    dayChange: 2.4,
    btcDominance: 48.2,
    activeCoins: 10847,
  });

  const [cryptoData, setCryptoData] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 67845.32, change: 2.4, isPositive: true },
    { symbol: 'ETH', name: 'Ethereum', price: 3821.45, change: -1.2, isPositive: false },
    { symbol: 'BNB', name: 'BNB', price: 645.78, change: 3.8, isPositive: true },
  ]);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prev => prev.map(crypto => ({
        ...crypto,
        price: crypto.price + (Math.random() - 0.5) * 100,
        change: (Math.random() - 0.5) * 10,
        isPositive: Math.random() > 0.5,
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-success rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-crypto rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient bg-gradient-crypto">Track Crypto</span><br />
            <span className="text-foreground">Like a Pro</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Advanced cryptocurrency analytics platform with real-time data, 
            portfolio tracking, and professional-grade market insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="morph-btn text-lg px-8 py-4">
              <Activity className="w-5 h-5 mr-2" />
              Start Tracking
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 glass">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
          <Card className="card-crypto p-6 text-center hover-scale">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Market Cap</p>
            <p className="text-xl font-bold text-gradient">{formatNumber(marketStats.totalMarketCap)}</p>
          </Card>
          
          <Card className="card-crypto p-6 text-center hover-scale">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">24h Change</p>
            <p className="text-xl font-bold text-success">+{marketStats.dayChange}%</p>
          </Card>
          
          <Card className="card-crypto p-6 text-center hover-scale">
            <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">BTC Dominance</p>
            <p className="text-xl font-bold text-gradient">{marketStats.btcDominance}%</p>
          </Card>
          
          <Card className="card-crypto p-6 text-center hover-scale">
            <BarChart3 className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Active Coins</p>
            <p className="text-xl font-bold text-accent">{marketStats.activeCoins.toLocaleString()}</p>
          </Card>
        </div>

        {/* Live Price Ticker */}
        <div className="animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Live Prices</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {cryptoData.map((crypto, index) => (
              <Card key={crypto.symbol} className="card-crypto p-6 hover-rotate pulse-crypto" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary-foreground">{crypto.symbol[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{crypto.symbol}</h4>
                      <p className="text-sm text-muted-foreground">{crypto.name}</p>
                    </div>
                  </div>
                  {crypto.isPositive ? (
                    <TrendingUp className="w-6 h-6 text-success" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-danger" />
                  )}
                </div>
                
                <div className="space-y-2">
                  <p className="text-2xl font-bold">${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p className={`text-sm font-medium ${crypto.isPositive ? 'text-success' : 'text-danger'}`}>
                    {crypto.isPositive ? '+' : ''}{crypto.change.toFixed(2)}%
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoHero;