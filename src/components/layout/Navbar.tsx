import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "/TuringMind-Logo.png";

type NavbarProps = {
  scrollY: number;
};

export default function Navbar({ scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setShowSolutions(false);
    setShowMobileSolutions(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".solutions-trigger") &&
        !target.closest(".solutions-menu")
      ) {
        setShowSolutions(false);
      }
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: "/services", label: "Services" },
    { path: "/integrations", label: "Integrations" },
    { path: "/about", label: "Company" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrollY > 50 ? "bg-dark-500/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={logo}
                alt="TuringMind Logo"
                className="w-8 h-8 transition-transform"
              />
              <motion.div
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(139,92,246,0)",
                    "0 0 10px rgba(139,92,246,0.5)",
                    "0 0 0px rgba(139,92,246,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="text-xl font-bold">
              <span className="gradient-text">Turing</span>
              <span>mind</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                className="solutions-trigger nav-link flex items-center space-x-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSolutions(!showSolutions);
                }}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showSolutions ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showSolutions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="solutions-menu absolute left-0 mt-2 w-64 bg-dark-400/95 backdrop-blur-md rounded-lg shadow-lg border border-primary-500/20 overflow-hidden"
                  >
                    <div className="p-2">
                      <Link
                        to="/solutions/developers"
                        className="block px-4 py-3 rounded-lg hover:bg-primary-500/10 transition-colors"
                      >
                        <div className="font-medium mb-1">For Developers</div>
                        <div className="text-sm text-gray-400">
                          Tools and insights for secure development
                        </div>
                      </Link>
                      <Link
                        to="/solutions/appsec"
                        className="block px-4 py-3 rounded-lg hover:bg-primary-500/10 transition-colors"
                      >
                        <div className="font-medium mb-1">For AppSec</div>
                        <div className="text-sm text-gray-400">
                          Enterprise security management
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
              </NavLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Demo
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary-400" />
              ) : (
                <Menu className="w-6 h-6 text-primary-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-400/95 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                    className="w-full py-2 px-4 flex items-center justify-between"
                  >
                    <span
                      className={
                        showMobileSolutions
                          ? "text-primary-500 font-medium"
                          : "text-white"
                      }
                    >
                      Solutions
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        showMobileSolutions ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {showMobileSolutions && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <Link
                          to="/solutions/developers"
                          className="block py-2 px-8 text-gray-300 hover:text-primary-400"
                        >
                          For Developers
                        </Link>
                        <Link
                          to="/solutions/appsec"
                          className="block py-2 px-8 text-gray-300 hover:text-primary-400"
                        >
                          For AppSec
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-2 px-4 ${
                          isActive
                            ? "text-primary-500 font-medium"
                            : "text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                  className="pt-2"
                >
                  <button className="w-full btn-primary">Get Demo</button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
