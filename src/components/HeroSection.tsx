import { Button } from '@/components/ui/button';
import { Copy, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import owlLogo from '@/assets/owl-coin-logo.png';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);

  const contractAddress = "5smUoKGJx89N7uFk8nXMJHB9JSWZuCMPpfdfvFcjuNfm"; // Real contract address

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src="/energy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }}></div>

      <div className="container mx-auto px-4 text-center relative" style={{ zIndex: 2 }}>
        {/* Main Logo */}
        <div className="mb-8">
          <img 
            src={owlLogo} 
            alt="Owl Coin"
            className="w-32 h-32 mx-auto rounded-full animate-floating owl-eyes-glow mb-6 object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Main Headlines */}
        <h1 className="asimovian-regular text-5xl md:text-7xl font-bold mb-6 glow-text text-white">
          OWL COIN
        </h1>
        <h2 className="asimovian-regular text-3xl md:text-4xl text-primary mb-4">
          Where Fairness Takes Flight
        </h2>
        <p className="asimovian-regular text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
          "The earliest owls will catch the biggest worms"
        </p>

        {/* Description */}
        <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the fairest crypto community where transparency meets fun. 
          No rug pulls, no hidden tricks - just pure meme-powered growth and community spirit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground border-0 btn-glow pixelify-sans-tagline text-lg px-8 py-4"
          >
            <ExternalLink className="mr-2" size={20} />
            Buy Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-glow pixelify-sans-tagline text-lg px-8 py-4"
            onClick={() => window.open('https://t.me/+YovWDkEBDLJkZWNk', '_blank')}
          >
            Join Community
          </Button>
        </div>

        {/* Contract Address */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto border border-border">
          <p className="text-sm text-muted-foreground mb-2">Contract Address:</p>
          <div className="flex items-center justify-between bg-muted rounded-md p-3">
            <span className="font-mono text-sm truncate">{contractAddress}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(contractAddress)}
              className="ml-2 hover:text-primary"
            >
              <Copy size={16} />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;