import { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import panthAvatar from '@/assets/panth-avatar.jpg';
import panthAvatarIllustrated from '@/assets/panth-avatar-illustrated.jpg';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=11LR-SPHBPsibWtfDAM3zyVDMLs8LkKbf';
    link.download = 'PanthBhatt_CV.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-mesh relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full float-animation" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-lg rotate-45 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-purple-secondary/10 rounded-full float-animation" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary/10 rounded-lg rotate-12 float-animation" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar with Morph Effect */}
          <div className="mb-8 bounce-in">
            <div 
              className="relative mx-auto w-32 h-32 cursor-pointer group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={panthAvatarIllustrated}
                alt="Panth Bhatt - Illustrated Avatar"
                className={`avatar-hero absolute inset-0 transition-all duration-500 ${
                  isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
              <img
                src={panthAvatar}
                alt="Panth Bhatt - Real Photo"
                className={`avatar-hero absolute inset-0 transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />
              <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                isHovered ? 'border-primary shadow-glow' : 'border-transparent'
              }`} />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-animate in-view" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Panth Bhatt
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-neutral-800 text-animate in-view" style={{ animationDelay: '0.4s' }}>
            Creative Frontend Designer
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-animate in-view" style={{ animationDelay: '0.6s' }}>
            Designer who loves crafting clean and beautiful UI using HTML, TailwindCSS & React Native.
          </p>

          {/* CTA Button */}
          <div className="text-animate in-view" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={downloadCV}
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-animate in-view"
          style={{ animationDelay: '1s' }}
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;