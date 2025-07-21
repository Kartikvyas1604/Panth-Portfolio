import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rich-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Back to Top Button */}
          <div>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              className="group bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full px-6 py-3"
            >
              <ArrowUp className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Back to Top
            </Button>
          </div>

          {/* Copyright and Branding */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <span>© 2025 Panth Bhatt</span>
            </div>
          </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div>
              Panth Bhatt - Creative Frontend Designer
            </div>
            <div className="flex gap-6">
              <a 
                href="#about" 
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;