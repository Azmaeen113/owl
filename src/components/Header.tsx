import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Twitter } from 'lucide-react';
import owlLogo from '@/assets/owl-coin-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={owlLogo} 
              alt="Owl Coin Logo" 
              className="w-10 h-10 rounded-full animate-floating owl-eyes-glow"
            />
            <span className="asimovian-regular text-xl glow-text">
              OWL COIN
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://x.com/owl_coins?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-gradient-primary text-primary-foreground border-0 btn-glow pixelify-sans-tagline"
            >
              Join Now!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-primary transition-colors">Community</a>
              <div className="flex items-center justify-between pt-4">
                <a 
                  href="https://x.com/owl_coins?s=21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gradient-primary text-primary-foreground border-0 btn-glow pixelify-sans-tagline"
                >
                  Join Now!
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;