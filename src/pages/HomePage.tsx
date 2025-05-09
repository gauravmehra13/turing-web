import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Network,
  ExternalLink,
  CalendarCheck2,
  CheckCircle,
  BrainCircuit,
  Workflow,
  ShieldAlert,
  Scan,
} from "lucide-react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import githubLogo from "/src/assets/images/integrations/github.png";
import jiraLogo from "/src/assets/images/integrations/jira.png";
import semgrepLogo from "/src/assets/images/integrations/semgrep.png";
import snykLogo from "/src/assets/images/integrations/snyk.png";
import grypeLogo from "/src/assets/images/integrations/grype.png";
import checkovLogo from "/src/assets/images/integrations/checkov.png";

export default function HomePage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  const counters = [
    { label: "Vulnerabilities Detected", value: "500K+" },
    { label: "Languages Supported", value: "150+" },
    { label: "Monthly Scans", value: "300K+" },
    { label: "Customer Satisfaction", value: "99%" },
  ];

  const features = [
    {
      icon: <BrainCircuit className="w-10 h-10" />,
      title: "AI-Powered Code Insights",
      description:
        "Get instant security analysis and recommendations through conversational AI for your entire codebase.",
      link: "/code-analysis",
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Business Logic Map",
      description:
        "Visualize and understand the complete logic flow of your applications to identify security gaps.",
      link: "/services/business-logic-map",
    },
    {
      icon: <ShieldAlert className="w-10 h-10" />,
      title: "Threat Modeling",
      description:
        "Proactive identification of potential security threats through advanced modeling techniques.",
      link: "/services/threat-modeling",
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Endpoint Analysis",
      description:
        "Secure your API endpoints with comprehensive vulnerability assessment and remediation.",
      link: "/services/endpoint-analysis",
    },
    {
      icon: <Scan className="w-10 h-10" />,
      title: "Security Scanning",
      description:
        "Automated security scanning to detect and prioritize vulnerabilities in your codebase.",
      link: "/services/security-scanning",
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "False Positive Analysis",
      description:
        "Comprehensive analysis of Common Vulnerabilities and Exposures to protect against known threats.",
      link: "/services/cve-cwe-analysis",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/80 to-dark-500"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Secure Apps with <br className="hidden sm:block" />
              <span className="gradient-text">AI-Powered Analysis</span> */}
              PhD. Level AI Product
              <br className="hidden sm:block" />
              <span className="gradient-text">Security Expert</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              24/7 PhD Level AI Intelligence that Clears Vulnerability Backlog
              created by Semgrep, Snyk, Veracode, SonarQube, Coverity & more
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Start Free Trial
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                icon={<CalendarCheck2 className="w-5 h-5" />}
                iconPosition="left"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </div>

          {/* Animated Abstract Security Graphics */}
          <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-dark-400/50 backdrop-blur-sm border border-primary-500/20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Animated Security Elements */}
                  <motion.div
                    className="absolute left-1/4 top-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-500/10 border border-primary-500/30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute right-1/4 bottom-1/3 w-20 h-20 md:w-32 md:h-32 rounded-full bg-secondary-500/10 border border-secondary-500/30"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute left-1/3 bottom-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-700/15 border border-primary-700/30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />

                  {/* Center Shield */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="relative"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-dark-500/80 flex items-center justify-center border border-primary-500/40 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                        <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-primary-500" />
                      </div>

                      {/* Pulsing Ring */}
                      <motion.div
                        className="absolute -inset-4 md:-inset-6 rounded-full"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(139,92,246,0)",
                            "0 0 0 3px rgba(139,92,246,0.3)",
                            "0 0 0 6px rgba(139,92,246,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Connecting Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M25,25 L50,50"
                      stroke="#8b5cf6"
                      strokeWidth="0.3"
                      strokeDasharray="5,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.path
                      d="M75,65 L50,50"
                      stroke="#8b5cf6"
                      strokeWidth="0.3"
                      strokeDasharray="5,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <motion.path
                      d="M33,75 L50,50"
                      stroke="#8b5cf6"
                      strokeWidth="0.3"
                      strokeDasharray="5,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 bg-dark-600 border-y border-primary-900/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold gradient-text"
                  initial={{ scale: 0.8 }}
                  animate={statsInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive{" "}
              <span className="gradient-text">Security Solutions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our advanced platform offers end-to-end application security with
              intelligent analysis and continuous protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index} className="block">
                <Card
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                >
                  <div className="mt-4 flex items-center text-primary-400">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-dark-600 border-y border-primary-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Seamless <span className="gradient-text">Integrations</span>{" "}
                with Your Workflow
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Turingmind integrates with your existing tools and workflows,
                enhancing your security posture without disrupting development.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {[
                  { name: "GitHub", logo: githubLogo },
                  { name: "Jira", logo: jiraLogo },
                  { name: "Semgrep", logo: semgrepLogo },
                  { name: "Snyk", logo: snykLogo },
                  { name: "Grype", logo: grypeLogo },
                  { name: "Checkov", logo: checkovLogo },
                ].map((tool, index) => (
                  <div key={index} className="flex items-center">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-5 h-5 mr-2"
                    />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  icon={<ExternalLink className="w-4 h-4" />}
                  iconPosition="right"
                  href="/integrations"
                >
                  Explore All Integrations
                </Button>
              </motion.div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-dark-400/60 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 relative">
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {[
                        { name: "GitHub", logo: githubLogo },
                        { name: "Jira", logo: jiraLogo },
                        { name: "Semgrep", logo: semgrepLogo },
                        { name: "Snyk", logo: snykLogo },
                        { name: "Grype", logo: grypeLogo },
                        { name: "Checkov", logo: checkovLogo },
                      ].map((tool, index) => (
                        <motion.div
                          key={index}
                          className="aspect-square rounded-lg bg-dark-300 flex items-center justify-center p-4 border border-primary-500/10"
                          whileHover={{
                            y: -5,
                            boxShadow:
                              "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                        >
                          <div className="text-center">
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="w-10 h-10 mx-auto mb-2"
                            />
                            <div className="text-sm font-medium">
                              {tool.name}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Background Elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-500/10 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sudoviz and Turingmind Info Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Software, <span className="gradient-text">Simplified</span>
            </h2>
            <p className="text-xl text-gray-300">
              Build, secure, and scale your applications with confidence.
              TuringMind and Sudoviz work together to empower developers and
              AppSec teams with intelligent tools for code exploration, security
              analysis, and proactive threat defense.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-300 mb-8">
                From deep code insights to automated vulnerability management,
                our platform streamlines your workflow and strengthens your
                security posture.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Explore Your Codebase with Ease",
                    description:
                      "TuringMind lets you navigate your repository's file structure, functions, and commits, giving you a clear view of your code's DNA. Ask specific questions about your codebase and get precise answers instantly.",
                    icon: <BrainCircuit className="w-8 h-8 text-primary-400" />,
                  },
                  {
                    title: "Catch Vulnerabilities Early",
                    description:
                      "Sudoviz's powerful code scanning, integrated with tools like Semgrep and Snyk, flags issues in real-time, so developers can fix them before they reach production.",
                    icon: <ShieldAlert className="w-8 h-8 text-primary-400" />,
                  },
                  {
                    title: "Proactive Threat Defense",
                    description:
                      "Sudoviz's threat modeling and endpoint analysis help AppSec teams identify risks and harden applications against attacks.",
                    icon: <ShieldCheck className="w-8 h-8 text-primary-400" />,
                  },
                  {
                    title: "Preserve Tribal Knowledge",
                    description:
                      "TuringMind captures critical insights about your organization's environments, repositories, and projects, ensuring knowledge stays accessible and actionable.",
                    icon: <Network className="w-8 h-8 text-primary-400" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="shrink-0 bg-dark-400/60 p-3 rounded-lg border border-primary-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                {/* Main illustration */}
                <div className="relative z-10 bg-dark-400/60 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                  <div className="aspect-square relative">
                    {/* Code visualization elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Connected nodes visualization */}
                        <motion.path
                          d="M20,50 Q50,20 80,50"
                          stroke="url(#gradient1)"
                          strokeWidth="0.5"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                        />
                        <motion.path
                          d="M20,50 Q50,80 80,50"
                          stroke="url(#gradient2)"
                          strokeWidth="0.5"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                        />

                        {/* Nodes */}
                        {[
                          { cx: 20, cy: 50, color: "#8b5cf6" },
                          { cx: 50, cy: 20, color: "#8b5cf6" },
                          { cx: 80, cy: 50, color: "#8b5cf6" },
                          { cx: 50, cy: 80, color: "#8b5cf6" },
                          { cx: 35, cy: 35, color: "#ec4899" },
                          { cx: 65, cy: 35, color: "#ec4899" },
                          { cx: 35, cy: 65, color: "#ec4899" },
                          { cx: 65, cy: 65, color: "#ec4899" },
                        ].map((node, index) => (
                          <motion.circle
                            key={index}
                            cx={node.cx}
                            cy={node.cy}
                            r="3"
                            fill={node.color}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                          />
                        ))}

                        {/* Additional connecting lines */}
                        {[
                          "M35,35 L50,20",
                          "M65,35 L50,20",
                          "M35,65 L20,50",
                          "M35,65 L50,80",
                          "M65,65 L80,50",
                          "M65,65 L50,80",
                          "M35,35 L20,50",
                          "M65,35 L80,50",
                        ].map((path, index) => (
                          <motion.path
                            key={index}
                            d={path}
                            stroke="#8b5cf6"
                            strokeWidth="0.3"
                            strokeDasharray="2,2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.6 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.8 + index * 0.05,
                            }}
                          />
                        ))}

                        {/* Gradients for paths */}
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Central shield icon */}
                      <motion.div
                        className="absolute"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          className="bg-dark-500/90 p-6 rounded-full border border-primary-500/40 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ShieldCheck className="w-12 h-12 text-primary-500" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative blurs */}
                <motion.div
                  className="absolute -top-5 -right-5 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-600 border-y border-primary-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by <span className="gradient-text">Security Leaders</span>
            </h2>
            <p className="text-xl text-gray-300">
              See what our customers have to say about their experience with
              TuringMind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "TuringMind AI has revolutionized our development process. It’s like having a senior developer and a security expert on our team 24/7.",
                author: "Mandeep",
                position: "HR",
                company: "Vite",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
              },
              {
                quote:
                  "The ability to instantly identify vulnerabilities and understand the impact of changes has saved us countless hours and significantly improved our security posture.",
                author: "Nagaraj Kuppuswamy",
                position: "VP of Engineering",
                company: "Beaconer",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative z-10 h-full">
                  <div className="bg-dark-400/60 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 h-full">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>

                    <div className="mb-6">
                      <p className="text-lg text-gray-300 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full border-2 border-primary-500/30"
                          src={testimonial.image}
                          alt={testimonial.author}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.position}
                        </div>
                        <div className="text-sm text-primary-400">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-500/10 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Secure Your Applications with{" "}
              <span className="gradient-text">Turingmind</span>?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Start your free trial today and discover how our AI-powered
              security solutions can transform your application security.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                Schedule Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
