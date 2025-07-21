import { ExternalLink } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'Behance',
      url: 'https://behance.net/panthbhatt',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 4.5h3.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5H8v2.5h2c2.21 0 4 1.79 4 4s-1.79 4-4 4H6.5V4.5zm1.5 1.5V10h2c1.1 0 2-.9 2-2s-.9-2-2-2H8zm0 7v4.5h1.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5H8zm7-3h4v1h-4v-1z"/>
        </svg>
      ),
      color: 'hover:text-blue-600',
      description: 'Design Portfolio'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/panthbhatt',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.825 2.246 4.113 2.289 6.61-.687-.146-1.509-.292-2.465-.292-2.184 0-4.276.292-6.131.877-.438-.877-1.168-2.013-1.898-3.15 2.465-1.168 4.422-2.306 6.205-4.045zM12 2.044c2.013 0 3.881.584 5.448 1.606-1.606 1.606-3.418 2.597-5.593 3.618C10.69 5.302 9.376 3.873 8.208 2.19 9.376 2.044 10.688 2.044 12 2.044zM6.017 3.15c1.168 1.606 2.465 3.035 3.91 4.276-1.168.584-2.628 1.168-4.276 1.314C5.505 6.748 5.651 4.88 6.017 3.15zM2.044 12c0-.146 0-.292.146-.438 2.013.146 4.276-.146 6.289-.877.584 1.022 1.168 2.184 1.752 3.326-2.465 1.168-4.567 2.744-6.18 4.567C2.628 16.568 2.044 14.409 2.044 12zm2.597 6.289c1.314-1.606 3.126-2.89 5.302-3.91.877 2.013 1.606 4.13 2.013 6.289-1.314.584-2.744.877-4.276.877-1.168 0-2.19-.146-3.035-.584zm7.568.877c-.438-2.013-1.022-3.91-1.752-5.739 1.752-.584 3.618-.877 5.593-.877.877 0 1.752.146 2.465.292-.584 3.326-2.744 6.131-6.131 7.152z"/>
        </svg>
      ),
      color: 'hover:text-pink-500',
      description: 'Creative Shots'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/panthbhatt',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-gray-700',
      description: 'Code & Projects'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/panthbhatt',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-700',
      description: 'Network'
        },
        {
      name: 'Instagram',
      url: 'https://instagram.com/panthbhatt.design',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:text-pink-600',
      description: 'Design Process'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-animate" data-delay="0.2s">
            My Digital{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Presence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-animate" data-delay="0.4s">
            Connect with me across different platforms to see my work, process, and thoughts on design.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className="text-animate group cursor-pointer"
              data-delay={`${0.2 + index * 0.1}s`}
              onClick={() => handleSocialClick(social.url)}
            >
              <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-card hover:bg-muted/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-sm hover:shadow-elegant">
                {/* Icon Container */}
                <div className={`text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${social.color}`}>
                  {social.icon}
                </div>
                
                {/* Social Name */}
                <div className="text-center">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {social.description}
                  </p>
                </div>

                {/* External Link Indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 text-animate" data-delay="1s">
          <p className="text-muted-foreground mb-4">
            ✨ Follow me for design inspiration, coding tips, and behind-the-scenes content
          </p>
          <div className="flex justify-center gap-2 text-sm">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">👨‍🎨 Designer</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">💻 Developer</span>
            <span className="bg-purple-secondary/10 text-purple-secondary px-3 py-1 rounded-full">🎯 Creative</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;