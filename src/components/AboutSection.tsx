import { Shield, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import earlyOwls from '@/assets/early-owls.png';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Community Driven",
      description: "Also community driven yes, but every decision is not made by community"
    },
    {
      icon: Shield,
      title: "Liquidity Pool Locked",
      description: "Complete transparency with locked LP to prevent rug pulls"
    },
    {
      icon: Target,
      title: "Fair Distribution",
      description: "No hidden allocations - everything is transparent and fair"
    },
    {
      icon: TrendingUp,
      title: "Meme-Powered Growth",
      description: "Growing through the power of memes and community engagement"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="asimovian-regular text-4xl md:text-5xl font-bold mb-6 glow-text">
              Why Owl Coin?
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I decided to launch this coin because I was tired of all the rug pulls and unfair projects out there. 
                I wanted to create something that's transparent and fair for everyone, fully driven by community power.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                No hidden traps, no tricks – just memes, fun, and growth together. 
                Join our community of wise owls and be part of something genuinely fair.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 mr-3">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="asimovian-regular text-lg font-semibold">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={earlyOwls} 
                alt="Early Owls Catch the Biggest Worms"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl transform scale-110"></div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 text-4xl animate-floating opacity-60">⭐</div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-floating opacity-60" style={{ animationDelay: '1s' }}>✨</div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default AboutSection;