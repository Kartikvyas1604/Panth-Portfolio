import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import panthAvatar from '@/assets/panth-avatar.jpg';

const AboutSection = () => {
  const skills = [
    { name: 'HTML/CSS', icon: Code, color: 'text-orange-500' },
    { name: 'TailwindCSS', icon: Palette, color: 'text-cyan-500' },
    { name: 'React Native', icon: Smartphone, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Zap, color: 'text-yellow-500' },
  ];

  const handleWorkTogether = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="text-animate" data-delay="0.2s">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 scale-105" />
              <img
                src={panthAvatar}
                alt="Panth Bhatt - About Photo"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="text-animate" data-delay="0.4s">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Panth
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A passionate creative frontend designer with a love for crafting beautiful, 
                  user-centered digital experiences. I specialize in turning complex ideas 
                  into clean, intuitive interfaces that users love to interact with.
                </p>
                
                <p>
                  When I'm not designing or coding, you'll find me exploring new design trends, 
                  experimenting with the latest web technologies, or enjoying a good cup of coffee 
                  while sketching out my next creative project.
                </p>
                
                <p>
                  I believe great design is not just about how something looks, but how it works 
                  and how it makes people feel. Every pixel has a purpose.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="text-animate" data-delay="0.6s">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-animate" data-delay="0.8s">
              <Button 
                onClick={handleWorkTogether}
                variant="outline" 
                className="btn-secondary group"
              >
                <span className="group-hover:scale-105 transition-transform">
                  Let's work together
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;