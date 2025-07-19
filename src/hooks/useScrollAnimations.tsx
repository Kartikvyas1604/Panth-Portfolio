import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimations = () => {
  useEffect(() => {
    // Animate elements with .text-animate class
    const animateElements = gsap.utils.toArray('.text-animate')
    
    animateElements.forEach((element: any, index) => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        }
      )
    })

    // Animate project cards
    const projectCards = gsap.utils.toArray('.project-card')
    
    projectCards.forEach((card: any, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.2,
        }
      )
    })

    // Animate skill cards
    const skillCards = gsap.utils.toArray('.skill-card')
    
    skillCards.forEach((card: any, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        }
      )
    })

    // Hero section animations
    const heroElements = {
      avatar: '.hero-avatar',
      title: '.hero-title',
      subtitle: '.hero-subtitle',
      description: '.hero-description',
      button: '.hero-button',
    }

    Object.entries(heroElements).forEach(([key, selector], index) => {
      const element = document.querySelector(selector)
      if (element) {
        gsap.fromTo(element,
          {
            opacity: 0,
            y: key === 'avatar' ? -30 : 30,
            scale: key === 'avatar' ? 0.8 : 1,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.2,
          }
        )
      }
    })

    // Parallax background elements
    const bgElements = gsap.utils.toArray('.parallax-element')
    
    bgElements.forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    // Refresh ScrollTrigger
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}