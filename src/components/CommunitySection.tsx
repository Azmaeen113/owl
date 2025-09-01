import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, MessageCircle, Users, Star } from 'lucide-react';
import owlCommunity from '@/assets/owl-community.png';

const CommunitySection = () => {
  const communityStats = [
    { label: 'Community Members', value: 'Growing', icon: Users },
    { label: 'Active Community', value: '24/7', icon: MessageCircle },
    { label: 'Community Rating', value: 'Amazing', icon: Star }
  ];

  const socialLinks = [
    {
      name: 'Twitter/X',
      url: 'https://x.com/owl_coins?s=21',
      icon: Twitter,
      description: 'Follow us for the latest updates and memes',
      members: 'Join our community'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/+YovWDkEBDLJkZWNk',
      icon: MessageCircle,
      description: 'Join our active community chat',
      members: 'Join our community'
    }
  ];

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="asimovian-regular text-4xl md:text-5xl font-bold mb-6 glow-text">
            Join the Owl Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow wise owls, share memes, and help shape the future of our community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Community Image */}
          <div className="relative">
            <img 
              src={owlCommunity} 
              alt="Owl Community"
              className="w-full h-auto rounded-2xl shadow-elegant animate-floating"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-xl"></div>
          </div>

          {/* Community Stats & Links */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {communityStats.map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="asimovian-regular text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <social.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="asimovian-regular text-lg font-semibold">
                            {social.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {social.description}
                          </p>
                          <p className="text-xs text-primary font-medium mt-1">
                            {social.members}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-glow"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        Join
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Community Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-primary/10 border-primary/30 text-center">
            <CardHeader>
              <CardTitle className="asimovian-regular text-xl text-primary">
                Active Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                24/7 active chat with helpful members always ready to answer questions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary/10 border-primary/30 text-center">
            <CardHeader>
              <CardTitle className="asimovian-regular text-xl text-primary">
                Meme Creators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Creative community constantly producing viral owl memes and content
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary/10 border-primary/30 text-center">
            <CardHeader>
              <CardTitle className="asimovian-regular text-xl text-primary">
                Diamond Hoots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Strong holders who believe in the long-term vision of fairness
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="asimovian-regular text-2xl mb-4 text-primary">
                Ready to Spread Your Wings?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of wise owls building the fairest crypto community together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground border-0 btn-glow pixelify-sans-tagline"
                  onClick={() => window.open('https://t.me/+YovWDkEBDLJkZWNk', '_blank')}
                >
                  Join Telegram
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-glow pixelify-sans-tagline"
                  onClick={() => window.open('https://x.com/owl_coins?s=21', '_blank')}
                >
                  Follow on X
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
    </section>
  );
};

export default CommunitySection;