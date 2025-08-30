import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Users, TrendingUp, Target, Check } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      name: "The Hatching",
      status: "completed",
      icon: Rocket,
      items: [
        "Token Launch & Smart Contract Deployment",
        "Initial Community Building",
        "Liquidity Pool Creation & Lock",
        "Website & Social Media Launch"
      ]
    },
    {
      phase: "Phase 2", 
      name: "First Flight",
      status: "current",
      icon: Users,
      items: [
        "Marketing Campaign Launch",
        "Community Partnerships",
        "Influencer Collaborations",
        "Meme Contest & Community Events"
      ]
    },
    {
      phase: "Phase 3",
      name: "Soaring High", 
      status: "upcoming",
      icon: TrendingUp,
      items: [
        "DEX Listings (PancakeSwap, Uniswap)",
        "CoinGecko & CoinMarketCap Listings",
        "Advanced Trading Features",
        "Community Governance Implementation"
      ]
    },
    {
      phase: "Phase 4",
      name: "To the Moon Nest",
      status: "future",
      icon: Target,
      items: [
        "Major CEX Listings",
        "Cross-Chain Bridge Development",
        "NFT Collection Launch",
        "Owl Coin Ecosystem Expansion"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-500/10';
      case 'current':
        return 'border-primary bg-primary/10';
      case 'upcoming':
        return 'border-secondary bg-secondary/10';
      default:
        return 'border-muted bg-muted/10';
    }
  };

  const getStatusIcon = (status: string) => {
    return status === 'completed' ? Check : null;
  };

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="asimovian-regular text-4xl md:text-5xl font-bold mb-6 glow-text">
            Flight Plan to the Moon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our journey from a small hatchling to soaring with the eagles. 
            Each phase brings us closer to becoming the fairest coin in the sky.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-muted rounded-full hidden lg:block"></div>

          <div className="space-y-16">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8 gap-6`}>
                {/* Phase Content */}
                <div className={`lg:w-1/2 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                  <Card className={`${getStatusColor(phase.status)} backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                    <CardHeader>
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                        <div className={`p-3 rounded-full ${getStatusColor(phase.status)}`}>
                          <phase.icon className="w-6 h-6" />
                        </div>
                        {getStatusIcon(phase.status) && (
                          <Check className="w-6 h-6 text-green-500" />
                        )}
                      </div>
                      <CardTitle className="asimovian-regular text-2xl">
                        {phase.phase}: {phase.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-left">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center relative z-10">
                  <div className={`w-16 h-16 rounded-full ${getStatusColor(phase.status)} border-4 flex items-center justify-center`}>
                    <phase.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="asimovian-regular text-2xl mb-4 text-primary">
                Join Us on This Journey
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every great flight starts with a strong foundation. With your support, 
                we'll soar to new heights while maintaining our core values of fairness, 
                transparency, and community-first approach.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-lg">
                  <span className="text-primary font-semibold">✅ Fair Launch</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-lg">
                  <span className="text-primary font-semibold">✅ Locked Liquidity</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-lg">
                  <span className="text-primary font-semibold">✅ Community Driven</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-lg">
                  <span className="text-primary font-semibold">✅ No Rug Pulls</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default RoadmapSection;