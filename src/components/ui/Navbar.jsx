import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Me", path: "/about" },
    { id: "work", label: "Work", path: "/work" },
    { id: "contact", label: "Contact Me", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`flex items-center justify-center px-4 py-2 rounded-full backdrop-blur-lg ${
          isScrolled
            ? "bg-black/75 shadow-lg shadow-amber-500/20"
            : "bg-black/30"
        } border border-white/10 transition-all duration-300`}
      >
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveSection(item.id)}
            >
              <motion.button
                className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;