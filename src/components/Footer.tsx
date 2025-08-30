import { Twitter, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import owlLogo from '@/assets/owl-coin-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/owl_coins?s=21' },
    { name: 'Telegram', icon: MessageCircle, href: 'https://t.me/+YovWDkEBDLJkZWNk' }
  ];

  return (
    <footer className="bg-card/50 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={owlLogo} 
                alt="Owl Coin" 
                className="w-12 h-12 rounded-full animate-floating"
              />
              <span className="asimovian-regular text-2xl glow-text">
                OWL COIN
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              The fairest cryptocurrency where transparency meets community power. 
              No rug pulls, no hidden tricks - just pure meme-powered growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon size={16} />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="asimovian-regular text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="asimovian-regular text-lg font-semibold mb-6">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest hoot updates and exclusive content
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="your@email.com"
                className="bg-background/50 border-border"
              />
              <Button 
                className="w-full bg-gradient-primary text-primary-foreground border-0 btn-glow pixelify-sans-tagline"
                size="sm"
                onClick={() => window.open('https://t.me/+YovWDkEBDLJkZWNk', '_blank')}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center space-y-4">
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <strong>Disclaimer:</strong> Cryptocurrency investments carry high risk. 
              This is not financial advice. Do your own research before investing. 
              Owl Coin is a meme token created for entertainment and community building purposes.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Owl Coin. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                  Audit Report <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    </footer>
  );
};

export default Footer;