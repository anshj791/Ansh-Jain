import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Header = () => {
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

  return <FloatingNav navItems={navItems} />;
};

export default Header;