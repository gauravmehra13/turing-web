import { Link } from "react-router-dom";
import { Github as GitHub, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "/TuringMind-Logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Blog", path: "/blog" },
      { label: "Press", path: "/press" },
    ],
    services: [
      { label: "Business Logic Map", path: "/services/business-logic-map" },
      { label: "CVE & CWE Analysis", path: "/services/cve-cwe-analysis" },
      { label: "Threat Modeling", path: "/services/threat-modeling" },
      { label: "Endpoint Analysis", path: "/services/endpoint-analysis" },
      { label: "Security Scanning", path: "/services/security-scanning" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Cookie Policy", path: "/cookies" },
    ],
  };

  return (
    <footer className="bg-dark-600 border-t border-primary-900/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Turing Mind Logo" className="w-6 h-6" />
              <div className="text-lg font-bold">
                <span className="gradient-text">Turing</span>
                <span>mind</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming application security with AI-powered analysis, threat
              modeling, and vulnerability detection.
            </p>
            <div className="flex space-x-4">
              {[GitHub, Twitter, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, color: "#8b5cf6" }}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Turingmind. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
            >
              Change Region
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
            >
              English
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
