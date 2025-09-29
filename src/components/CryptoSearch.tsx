import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, TrendingDown, Star, Eye, BarChart3 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CryptoSearchResult {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  rank: number;
  image?: string;
  isFavorite?: boolean;
}

const CryptoSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<CryptoSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Mock crypto data - in real app, this would come from an API
  const mockCryptos: CryptoSearchResult[] = [
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 67845.32,
      change24h: 2.4,
      volume24h: 28500000000,
      marketCap: 1320000000000,
      rank: 1,
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      price: 3821.45,
      change24h: -1.2,
      volume24h: 15200000000,
      marketCap: 459000000000,
      rank: 2,
    },
    {
      id: 'binancecoin',
      symbol: 'BNB',
      name: 'BNB',
      price: 645.78,
      change24h: 3.8,
      volume24h: 2100000000,
      marketCap: 94500000000,
      rank: 3,
    },
    {
      id: 'solana',
      symbol: 'SOL',
      name: 'Solana',
      price: 198.45,
      change24h: 5.2,
      volume24h: 3400000000,
      marketCap: 91200000000,
      rank: 4,
    },
    {
      id: 'cardano',
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.67,
      change24h: -2.1,
      volume24h: 890000000,
      marketCap: 23400000000,
      rank: 5,
    },
    {
      id: 'polkadot',
      symbol: 'DOT',
      name: 'Polkadot',
      price: 8.45,
      change24h: 1.8,
      volume24h: 340000000,
      marketCap: 11200000000,
      rank: 6,
    },
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        const filtered = mockCryptos.filter(
          crypto =>
            crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults(mockCryptos.slice(0, 6)); // Show top 6 by default
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const formatNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <section id="markets" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient">Cryptocurrency Markets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Search and track thousands of cryptocurrencies with real-time data and advanced analytics.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search cryptocurrencies by name or symbol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-card/50 border-border/50 focus:bg-card transition-all duration-300 rounded-xl"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {loading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-1/3"></div>
                    <div className="h-3 bg-muted rounded w-1/4"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-20"></div>
                    <div className="h-3 bg-muted rounded w-16"></div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            results.map((crypto, index) => (
              <Card
                key={crypto.id}
                className="card-crypto p-6 hover-scale animate-flip-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="font-bold text-primary-foreground text-lg">
                          {crypto.symbol[0]}
                        </span>
                      </div>
                      <Badge variant="outline" className="absolute -top-1 -right-1 text-xs px-1">
                        #{crypto.rank}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{crypto.symbol}</h3>
                      <p className="text-sm text-muted-foreground">{crypto.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFavorite(crypto.id)}
                      className="hover-rotate"
                    >
                      <Star
                        className={`w-4 h-4 ${favorites.has(crypto.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                      />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover-rotate">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <p className="text-2xl font-bold">
                      ${crypto.price.toLocaleString(undefined, { 
                        minimumFractionDigits: crypto.price < 1 ? 4 : 2, 
                        maximumFractionDigits: crypto.price < 1 ? 4 : 2 
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">24h Change</p>
                    <div className="flex items-center space-x-2">
                      {crypto.change24h > 0 ? (
                        <TrendingUp className="w-4 h-4 text-success" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-danger" />
                      )}
                      <p
                        className={`text-lg font-semibold ${crypto.change24h > 0 ? 'text-success' : 'text-danger'}`}
                      >
                        {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Market Cap</p>
                    <p className="text-lg font-semibold text-accent">
                      {formatNumber(crypto.marketCap)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Volume 24h</p>
                    <p className="text-lg font-semibold text-muted-foreground">
                      {formatNumber(crypto.volume24h)}
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-4 morph-btn">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </Card>
            ))
          )}
        </div>

        {results.length === 0 && !loading && searchQuery && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No cryptocurrencies found</h3>
            <p className="text-muted-foreground">Try searching with a different term or symbol.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CryptoSearch;