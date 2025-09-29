import React, { useState, useEffect } from 'react';
import { Wallet, TrendingUp, TrendingDown, Plus, Minus, BarChart3, PieChart, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PortfolioAsset {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  avgPrice: number;
  currentPrice: number;
  value: number;
  pnl: number;
  pnlPercentage: number;
  allocation: number;
}

const Portfolio = () => {
  const [portfolioAssets, setPortfolioAssets] = useState<PortfolioAsset[]>([
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.5,
      avgPrice: 65000,
      currentPrice: 67845.32,
      value: 33922.66,
      pnl: 1422.66,
      pnlPercentage: 4.38,
      allocation: 55.2,
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 5,
      avgPrice: 3500,
      currentPrice: 3821.45,
      value: 19107.25,
      pnl: 1607.25,
      pnlPercentage: 9.18,
      allocation: 31.1,
    },
    {
      id: 'solana',
      symbol: 'SOL',
      name: 'Solana',
      amount: 25,
      avgPrice: 180,
      currentPrice: 198.45,
      value: 4961.25,
      pnl: 461.25,
      pnlPercentage: 10.25,
      allocation: 8.1,
    },
    {
      id: 'cardano',
      symbol: 'ADA',
      name: 'Cardano',
      amount: 5000,
      avgPrice: 0.75,
      currentPrice: 0.67,
      value: 3350,
      pnl: -400,
      pnlPercentage: -10.67,
      allocation: 5.6,
    },
  ]);

  const [totalValue, setTotalValue] = useState(0);
  const [totalPnL, setTotalPnL] = useState(0);
  const [totalPnLPercentage, setTotalPnLPercentage] = useState(0);

  useEffect(() => {
    const total = portfolioAssets.reduce((sum, asset) => sum + asset.value, 0);
    const totalPnLValue = portfolioAssets.reduce((sum, asset) => sum + asset.pnl, 0);
    
    setTotalValue(total);
    setTotalPnL(totalPnLValue);
    setTotalPnLPercentage((totalPnLValue / (total - totalPnLValue)) * 100);
  }, [portfolioAssets]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const getPnLColor = (pnl: number) => {
    return pnl >= 0 ? 'text-success' : 'text-danger';
  };

  const getGradientColor = (allocation: number) => {
    if (allocation > 40) return 'bg-gradient-primary';
    if (allocation > 20) return 'bg-gradient-success';
    if (allocation > 10) return 'bg-gradient-crypto';
    return 'bg-gradient-danger';
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient">Your Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Track your cryptocurrency investments with advanced analytics and real-time profit/loss calculations.
          </p>
        </div>

        {/* Portfolio Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="card-crypto animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <Wallet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient mb-1">
                {formatCurrency(totalValue)}
              </div>
              <div className="flex items-center space-x-2">
                {totalPnL >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-danger" />
                )}
                <p className={`text-xs ${getPnLColor(totalPnL)}`}>
                  {totalPnL >= 0 ? '+' : ''}{formatCurrency(totalPnL)} ({totalPnLPercentage.toFixed(2)}%)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-crypto animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assets</CardTitle>
              <PieChart className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent mb-1">
                {portfolioAssets.length}
              </div>
              <p className="text-xs text-muted-foreground">
                Diversified across {portfolioAssets.length} cryptocurrencies
              </p>
            </CardContent>
          </Card>

          <Card className="card-crypto animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Performer</CardTitle>
              <BarChart3 className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success mb-1">
                {portfolioAssets.reduce((best, current) => 
                  current.pnlPercentage > best.pnlPercentage ? current : best
                ).symbol}
              </div>
              <p className="text-xs text-success">
                +{portfolioAssets.reduce((best, current) => 
                  current.pnlPercentage > best.pnlPercentage ? current : best
                ).pnlPercentage.toFixed(2)}%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Assets */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Holdings</h3>
            <Button className="morph-btn">
              <Plus className="w-4 h-4 mr-2" />
              Add Asset
            </Button>
          </div>

          <div className="grid gap-4">
            {portfolioAssets.map((asset, index) => (
              <Card 
                key={asset.id} 
                className="card-crypto animate-slide-in-left hover-scale" 
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="font-bold text-primary-foreground">
                          {asset.symbol[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{asset.symbol}</h4>
                        <p className="text-sm text-muted-foreground">{asset.name}</p>
                      </div>
                    </div>

                    <Badge variant="outline" className={getGradientColor(asset.allocation)}>
                      {asset.allocation.toFixed(1)}%
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Amount</p>
                      <p className="font-semibold">{asset.amount.toLocaleString()}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Avg Price</p>
                      <p className="font-semibold">{formatCurrency(asset.avgPrice)}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Current Price</p>
                      <p className="font-semibold">{formatCurrency(asset.currentPrice)}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Value</p>
                      <p className="font-bold text-lg">{formatCurrency(asset.value)}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">P&L</p>
                      <div className="flex items-center space-x-1">
                        {asset.pnl >= 0 ? (
                          <TrendingUp className="w-4 h-4 text-success" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-danger" />
                        )}
                        <div>
                          <p className={`font-semibold ${getPnLColor(asset.pnl)}`}>
                            {asset.pnl >= 0 ? '+' : ''}{formatCurrency(asset.pnl)}
                          </p>
                          <p className={`text-sm ${getPnLColor(asset.pnl)}`}>
                            ({asset.pnlPercentage.toFixed(2)}%)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Plus className="w-4 h-4 mr-2" />
                      Buy More
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Minus className="w-4 h-4 mr-2" />
                      Sell
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;