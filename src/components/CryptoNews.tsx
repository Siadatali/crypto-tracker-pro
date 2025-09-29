import React, { useState } from 'react';
import { ExternalLink, Clock, TrendingUp, Bitcoin, Zap, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: 'bitcoin' | 'ethereum' | 'defi' | 'regulation' | 'market' | 'technology';
  timestamp: string;
  readTime: string;
  impact: 'high' | 'medium' | 'low';
  url: string;
}

const CryptoNews = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Bitcoin Reaches New All-Time High as Institutional Adoption Surges',
      summary: 'Major corporations continue to add Bitcoin to their treasury reserves, driving unprecedented institutional demand and pushing prices to historic levels.',
      category: 'bitcoin',
      timestamp: '2 hours ago',
      readTime: '3 min read',
      impact: 'high',
      url: '#',
    },
    {
      id: '2',
      title: 'Ethereum 2.0 Staking Rewards Attract $50B in Locked Value',
      summary: 'The Ethereum network sees massive growth in staking participation as validators earn attractive yields on their ETH holdings.',
      category: 'ethereum',
      timestamp: '4 hours ago',
      readTime: '4 min read',
      impact: 'high',
      url: '#',
    },
    {
      id: '3',
      title: 'DeFi Protocol Launches Revolutionary Cross-Chain Bridge',
      summary: 'New decentralized finance protocol enables seamless asset transfers between major blockchain networks, reducing fees and increasing accessibility.',
      category: 'defi',
      timestamp: '6 hours ago',
      readTime: '5 min read',
      impact: 'medium',
      url: '#',
    },
    {
      id: '4',
      title: 'Central Bank Digital Currencies Gain Momentum Globally',
      summary: 'Multiple countries announce pilot programs for digital versions of their national currencies, marking a significant shift in monetary policy.',
      category: 'regulation',
      timestamp: '8 hours ago',
      readTime: '6 min read',
      impact: 'high',
      url: '#',
    },
    {
      id: '5',
      title: 'Crypto Market Cap Surpasses $3 Trillion Milestone',
      summary: 'The total cryptocurrency market capitalization reaches historic heights amid growing mainstream adoption and institutional investment.',
      category: 'market',
      timestamp: '12 hours ago',
      readTime: '2 min read',
      impact: 'high',
      url: '#',
    },
    {
      id: '6',
      title: 'Layer 2 Solutions Show 300% Growth in Transaction Volume',
      summary: 'Scaling solutions for Ethereum demonstrate massive adoption as users seek faster and cheaper transaction alternatives.',
      category: 'technology',
      timestamp: '1 day ago',
      readTime: '4 min read',
      impact: 'medium',
      url: '#',
    },
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: Globe },
    { id: 'bitcoin', name: 'Bitcoin', icon: Bitcoin },
    { id: 'ethereum', name: 'Ethereum', icon: Zap },
    { id: 'defi', name: 'DeFi', icon: TrendingUp },
    { id: 'regulation', name: 'Regulation', icon: Globe },
    { id: 'market', name: 'Market', icon: TrendingUp },
    { id: 'technology', name: 'Technology', icon: Zap },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      bitcoin: 'bg-gradient-primary',
      ethereum: 'bg-gradient-success',
      defi: 'bg-gradient-crypto',
      regulation: 'bg-gradient-danger',
      market: 'bg-gradient-primary',
      technology: 'bg-gradient-success',
    };
    return colors[category as keyof typeof colors] || 'bg-muted';
  };

  const getImpactColor = (impact: string) => {
    const colors = {
      high: 'border-danger text-danger',
      medium: 'border-primary text-primary',
      low: 'border-success text-success',
    };
    return colors[impact as keyof typeof colors];
  };

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <section id="news" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient">Crypto News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest cryptocurrency news, market analysis, and industry developments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="morph-btn"
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredNews.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-crypto hover-scale animate-flip-in group cursor-pointer"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant="outline" 
                    className={`${getCategoryColor(item.category)} text-white border-none`}
                  >
                    {item.category.toUpperCase()}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={getImpactColor(item.impact)}
                  >
                    {item.impact.toUpperCase()} IMPACT
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {item.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{item.timestamp}</span>
                  </div>
                  <span>{item.readTime}</span>
                </div>
                <Button className="w-full morph-btn group">
                  Read Full Article
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="morph-btn animate-bounce-in">
            Load More News
          </Button>
        </div>

        {/* Market Pulse */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in">
            <span className="text-gradient">Market Pulse</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-crypto animate-scale-in hover-rotate" style={{ animationDelay: '1.2s' }}>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Bullish Sentiment</h4>
                <p className="text-3xl font-bold text-success mb-2">78%</p>
                <p className="text-sm text-muted-foreground">
                  Market sentiment remains strongly bullish across major cryptocurrencies.
                </p>
              </CardContent>
            </Card>

            <Card className="card-crypto animate-scale-in hover-rotate" style={{ animationDelay: '1.3s' }}>
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Network Activity</h4>
                <p className="text-3xl font-bold text-primary mb-2">↑ 24%</p>
                <p className="text-sm text-muted-foreground">
                  On-chain activity shows significant increase in the last 24 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="card-crypto animate-scale-in hover-rotate" style={{ animationDelay: '1.4s' }}>
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Global Adoption</h4>
                <p className="text-3xl font-bold text-accent mb-2">156</p>
                <p className="text-sm text-muted-foreground">
                  Countries with active cryptocurrency regulations and adoption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoNews;