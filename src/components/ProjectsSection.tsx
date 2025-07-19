import { ExternalLink, Github, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ecommerceProject from '@/assets/project-ecommerce.jpg';
import mobileAppProject from '@/assets/project-mobile-app.jpg';
import saasProject from '@/assets/project-saas.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Clean admin interface with data visualization and analytics',
      image: ecommerceProject,
      tech: ['React', 'TailwindCSS', 'Chart.js', 'TypeScript'],
      links: {
        live: 'https://demo.example.com',
        github: 'https://github.com/panth/ecommerce-dashboard',
        case: '#'
      }
    },
    {
      id: 2,
      title: 'Mobile App Landing',
      description: 'Conversion-focused landing page with modern animations',
      image: mobileAppProject,
      tech: ['HTML', 'TailwindCSS', 'GSAP', 'JavaScript'],
      links: {
        live: 'https://app-landing.example.com',
        figma: 'https://figma.com/design/app-landing',
        github: 'https://github.com/panth/app-landing'
      }
    },
    {
      id: 3,
      title: 'SaaS Web Application',
      description: 'Full-stack application with modern UI and seamless UX',
      image: saasProject,
      tech: ['Next.js', 'TailwindCSS', 'Supabase', 'Framer Motion'],
      links: {
        live: 'https://saas-app.example.com',
        github: 'https://github.com/panth/saas-app',
        case: '#'
      }
    }
  ];

  const handleLinkClick = (url: string) => {
    if (url === '#') {
      // For case studies or unavailable links
      alert('Case study coming soon!');
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-animate" data-delay="0.2s">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-animate" data-delay="0.4s">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and thoughtful design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card-elegant card-hover text-animate group"
              data-delay={`${0.2 + index * 0.2}s`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white"
                      onClick={() => handleLinkClick(project.links.live)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      onClick={() => handleLinkClick(project.links.github)}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs"
                    onClick={() => handleLinkClick(project.links.live)}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs"
                    onClick={() => handleLinkClick(project.links.github)}
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  
                  {project.links.case && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => handleLinkClick(project.links.case)}
                    >
                      <FileText className="w-3 h-3 mr-1" />
                      Case
                    </Button>
                  )}
                  
                  {project.links.figma && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => handleLinkClick(project.links.figma)}
                    >
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148z"/>
                      </svg>
                      Figma
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;