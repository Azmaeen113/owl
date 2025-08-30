import SparkleEffect from '@/components/SparkleEffect';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import CommunitySection from '@/components/CommunitySection';
import RoadmapSection from '@/components/RoadmapSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sparkle Cursor Effect */}
      <SparkleEffect />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <RoadmapSection />
        <CommunitySection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
