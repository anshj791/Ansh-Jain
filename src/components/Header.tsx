import React, { useState, useEffect } from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <Briefcase className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <FolderOpen className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-4 w-4 text-neutral-500" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past the hero section
      const heroSection = document.getElementById('hero') || document.querySelector('.hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroHeight * 0.8); // Show when 80% of hero is scrolled
      } else {
        // Fallback: show after scrolling 100vh
        setIsVisible(window.scrollY > window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

  return <FloatingNav navItems={navItems} />;
};

export default Header;