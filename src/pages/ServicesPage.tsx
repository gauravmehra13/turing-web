import { motion } from "framer-motion";
import {
  BarChart,
  ShieldCheck,
  Network,
  Search,
  Zap,
  ArrowRight,
  BrainCircuit,
  Scan,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import Card from "../components/common/Card";

export default function ServicesPage() {
  const services = [
    {
      icon: <BrainCircuit className="w-10 h-10" />,
      title: "Codebase Chat",
      description:
        "Clone your repo and chat with our AI to explore files, analyze flow, and run security reviews.",
      features: [
        "Ask about files, functions, and commits",
        "Run security-focused code reviews",
        "Analyze control and data flow",
        "Use deep search to surface hidden issues",
      ],
      link: "/services/ai-chat",
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Business Logic Map",
      description:
        "Create a comprehensive map of your application's business logic to identify potential security vulnerabilities and logic flaws.",
      features: [
        "Visual representation of application flow",
        "Logic flaw detection",
        "Security gap identification",
        "Integration point analysis",
      ],
      link: "/services/business-logic-map",
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Threat Modeling",
      description:
        "Proactively identify and address potential security threats with advanced modeling and simulation techniques.",
      features: [
        "STRIDE methodology implementation",
        "Attack vector simulation",
        "Risk assessment and prioritization",
        "Mitigation strategy development",
      ],
      link: "/services/threat-modeling",
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Endpoint Analysis",
      description:
        "Secure your API endpoints with comprehensive vulnerability assessment and remediation strategies.",
      features: [
        "API security testing",
        "Input validation analysis",
        "Authentication verification",
        "Data leakage detection",
      ],
      link: "/services/endpoint-analysis",
    },
    {
      icon: <Scan className="w-10 h-10" />,
      title: "Security Scanning",
      description:
        "Automatically detect vulnerabilities with comprehensive scanning of your codebase, dependencies, and configurations.",
      features: [
        "Code security analysis",
        "Dependency vulnerability scanning",
        "Configuration error detection",
        "Compliance verification",
      ],
      link: "/services/security-scanning",
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Vulnerability Management",
      description:
        "Identify and mitigate common vulnerabilities and exposures with comprehensive analysis and remediation strategies.",
      features: [
        "Real-time vulnerability detection",
        "Severity classification",
        "Remediation guidance",
        "False positive reduction",
      ],
      link: "/services/vulnerability-management",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div>
      <PageHeader
        title="Our Security Services"
        subtitle="Comprehensive application security solutions powered by advanced AI analysis and expert insights."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Link to={service.link} className="block h-full">
                  <Card
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    className="p-8 h-full"
                  >
                    <div className="mb-6">
                      <ul className="space-y-2 mt-5">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <div className="text-primary-500 mr-2 mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-primary-500 hover:text-primary-400 transition-colors">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-24">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Security <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                We follow a thorough methodology to ensure your applications are
                secure at every stage of development.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-900/50 transform -translate-x-1/2 hidden md:block"></div>

              {/* Process Steps */}
              <div className="space-y-12 md:space-y-0 relative">
                {[
                  {
                    title: "Assessment",
                    description:
                      "Comprehensive evaluation of your application architecture, codebase, and security practices.",
                    icon: <Search className="w-6 h-6" />,
                  },
                  {
                    title: "Analysis",
                    description:
                      "Deep dive into potential vulnerabilities using AI-powered tools and expert security review.",
                    icon: <BarChart className="w-6 h-6" />,
                  },
                  {
                    title: "Remediation",
                    description:
                      "Clear guidance and support for fixing identified security issues with prioritized action plans.",
                    icon: <ShieldCheck className="w-6 h-6" />,
                  },
                  {
                    title: "Monitoring",
                    description:
                      "Continuous security monitoring to catch new vulnerabilities as they emerge.",
                    icon: <Zap className="w-6 h-6" />,
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
                      <div
                        className={`w-full max-w-md ${
                          index % 2 === 1 ? "md:text-left" : "md:text-right"
                        }`}
                      >
                        <h3 className="text-2xl font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-dark-300 border-2 border-primary-500 flex items-center justify-center text-primary-500">
                        {step.icon}
                      </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-start md:pl-12">
                      <div className="w-full max-w-md opacity-0 md:opacity-100"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
