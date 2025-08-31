import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Lock, Users, Gift, TrendingUp, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TokenomicsSection = () => {
  const data = [
    { name: 'LP (Locked)', value: 50, color: '#FF6B9D', icon: Lock },
    { name: 'Team', value: 10, color: '#4ECDC4', icon: Users },
    { name: 'Airdrops', value: 5, color: '#45B7D1', icon: Gift },
    { name: 'Marketing', value: 15, color: '#96CEB4', icon: Megaphone },
    { name: 'Community Growth', value: 20, color: '#FFEAA7', icon: TrendingUp }
  ];

  const keyPoints = [
    { text: "LP Locked - No Rug Pulls", emoji: "✅" },
    { text: "Only 10% Team Allocation", emoji: "✅" },
    { text: "20% Dedicated to Community Building", emoji: "✅" },
    { text: "Full Transparency", emoji: "✅" }
  ];

  const renderCustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0];
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg transform scale-110 transition-transform duration-200">
          <p className="font-semibold">{data.name}</p>
          <p className="text-primary">{data.value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="asimovian-regular text-4xl md:text-5xl font-bold mb-6 glow-text">
            Tokenomics
          </h2>
          <p className="asimovian-regular text-2xl text-primary mb-4">
            $OWL – The Plan is Set
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our tokenomics are designed with fairness and community growth in mind. 
            No hidden allocations, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Section */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-sm border-border group">
              <CardHeader>
                <CardTitle className="asimovian-regular text-2xl text-center">
                  Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                        className="transition-all duration-300 group-hover:scale-105"
                      >
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            className="transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                            style={{
                              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                            }}
                          />
                        ))}
                      </Pie>
                      <Tooltip content={renderCustomTooltip} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Distribution Details */}
            <div className="space-y-4">
              {data.map((item, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-3 shadow-lg"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 text-primary mr-2" />
                          <span className="font-semibold">{item.name}</span>
                        </div>
                      </div>
                      <span className="asimovian-regular text-xl font-bold text-primary">
                        {item.value}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Points */}
            <Card className="bg-gradient-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="asimovian-regular text-xl">
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <span className="elegant-check mr-3">✓</span>
                    <span className="text-foreground">{point.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="asimovian-regular text-2xl mb-4 text-primary">
                Ensuring Long-term Success
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With 50% of tokens locked in liquidity and a strong focus on community building, 
                Owl Coin is designed for sustainable growth. Our transparent approach ensures that 
                every holder can trust in the project's longevity and fair distribution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TokenomicsSection;