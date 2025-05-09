import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart,
  Network,
  Search,
  Zap,
  CheckCircle,
  ArrowRight,
  BrainCircuit,
  ArrowRightLeft,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

type ServiceData = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  description: string[];
  benefits: string[];
  features: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
};

export default function ServiceDetailPage() {
  const { service } = useParams<{ service: string }>();

  const serviceData: Record<string, ServiceData> = {
    "ai-chat": {
      title: "Codebase Chat",
      subtitle:
        "Interact with your repository to explore structure, review security, and analyze code logic using AI-powered chat.",
      icon: <BrainCircuit className="w-12 h-12" />,
      description: [
        "Clone your repository and start asking questions—our LLM-powered tool understands your codebase and responds with contextual answers.",
        "Whether you're reviewing code for security, exploring complex logic, or searching across your entire repo, this tool gives you the control and depth you need.",
        "You can customize your experience by selecting different personas (e.g. security engineer, developer) and adjusting verbosity levels to control the detail of each response.",
      ],
      benefits: [
        "Chat-based exploration of files, functions, and commits.",
        "Security reviews tailored to your code’s actual context.",
        "Understand logic flows through interactive control flow analysis.",
        "Uncover hidden patterns, bugs, or vulnerabilities with deep search.",
        "Fine-tune responses by adjusting verbosity and persona settings.",
      ],
      features: [
        {
          title: "Codebase Exploration",
          description:
            "Ask questions about file structure, function logic, commit history, and more—all within your cloned repository.",
          icon: <Network className="w-8 h-8" />,
        },
        {
          title: "Security Reviews",
          description:
            "Run conversational security assessments to detect risks, hardcoded secrets, and insecure patterns.",
          icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
          title: "Control Flow Analysis",
          description:
            "Trace how data and logic flow through your code to better understand complex execution paths.",
          icon: <ArrowRightLeft className="w-8 h-8" />,
        },
        {
          title: "Deep Search Mode",
          description:
            "Search deeply across your repo with context-aware queries to find references, edge cases, and hidden issues.",
          icon: <Zap className="w-8 h-8" />,
        },
        {
          title: "Customizable Responses",
          description:
            "Choose from different personas and control verbosity to match your workflow and level of detail needed.",
          icon: <BrainCircuit className="w-8 h-8" />,
        },
      ],
    },
    "business-logic-map": {
      title: "Business Logic Map",
      subtitle:
        "Visualize and understand your application's complete logic flow to identify security vulnerabilities.",
      icon: <BarChart className="w-12 h-12" />,
      description: [
        "Our Business Logic Mapping service creates a comprehensive visual representation of your application's logic flow, helping you identify potential security vulnerabilities and logic flaws that traditional scanning tools might miss.",
        "By analyzing how different components of your application interact with each other, we can pinpoint where security controls might be bypassed or where business rules could be manipulated by attackers.",
      ],
      benefits: [
        "Identify logic flaws that automated scanners miss",
        "Visualize complete application workflows and data flows",
        "Understand security implications of business decisions",
        "Detect potential authorization bypass vulnerabilities",
        "Map integration points and third-party connections",
      ],
      features: [
        {
          title: "Visual Flow Mapping",
          description:
            "Interactive diagrams showing complete application logic with security annotations.",
          icon: <Network className="w-8 h-8" />,
        },
        {
          title: "Logic Flaw Detection",
          description:
            "Advanced analysis to identify inconsistencies and security gaps in business rules.",
          icon: <Search className="w-8 h-8" />,
        },
        {
          title: "Access Control Verification",
          description:
            "Thorough examination of authorization mechanisms across all application paths.",
          icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
          title: "Integration Security Analysis",
          description:
            "Security assessment of all external system integrations and data exchange points.",
          icon: <Zap className="w-8 h-8" />,
        },
      ],
    },
    "vulnerability-management": {
      title: "Vulnerability Management",
      subtitle:
        "Comprehensive analysis of vulnerabilities and exposures to protect against known threats.",
      icon: <ShieldCheck className="w-12 h-12" />,
      description: [
        "Our CVE & CWE Analysis service provides comprehensive identification and assessment of Common Vulnerabilities and Exposures (CVEs) and Common Weakness Enumeration (CWEs) in your applications and dependencies.",
        "We combine automated scanning with expert analysis to identify vulnerable components, assess their impact, and provide clear remediation strategies tailored to your environment.",
      ],
      benefits: [
        "Early detection of known vulnerabilities",
        "Prioritized remediation recommendations",
        "Reduced risk of exploitation",
        "Compliance with security standards",
        "Continuous monitoring for new vulnerabilities",
      ],
      features: [
        {
          title: "Dependency Scanning",
          description:
            "Automatic detection of vulnerable third-party components and libraries.",
          icon: <Search className="w-8 h-8" />,
        },
        {
          title: "Vulnerability Prioritization",
          description:
            "Risk-based prioritization of findings based on exploitability and impact.",
          icon: <BarChart className="w-8 h-8" />,
        },
        {
          title: "Custom Remediation Guidance",
          description:
            "Specific, actionable steps to address each vulnerability in your environment.",
          icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
          title: "Continuous Monitoring",
          description:
            "Real-time alerts for new vulnerabilities affecting your technology stack.",
          icon: <Zap className="w-8 h-8" />,
        },
      ],
    },
    "threat-modeling": {
      title: "Threat Modeling",
      subtitle:
        "Proactive identification of potential security threats through advanced modeling techniques.",
      icon: <Network className="w-12 h-12" />,
      description: [
        "Our Threat Modeling service helps you proactively identify and address potential security threats using advanced modeling and simulation techniques tailored to your application architecture.",
        "We apply proven methodologies like STRIDE to systematically analyze potential attack vectors, assess risks, and develop effective mitigation strategies before attackers can exploit vulnerabilities.",
      ],
      benefits: [
        "Proactive security approach that prevents breaches",
        "Comprehensive view of potential attack vectors",
        "Prioritized security improvements based on risk",
        "Integration with development lifecycle",
        "Reduced security-related rework costs",
      ],
      features: [
        {
          title: "STRIDE Methodology",
          description:
            "Systematic analysis covering spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.",
          icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
          title: "Attack Tree Analysis",
          description:
            "Visual modeling of attack paths to identify complex multi-step attack scenarios.",
          icon: <Network className="w-8 h-8" />,
        },
        {
          title: "Risk Assessment Matrix",
          description:
            "Quantified risk scoring to prioritize mitigation efforts based on impact and likelihood.",
          icon: <BarChart className="w-8 h-8" />,
        },
        {
          title: "Mitigation Strategy Development",
          description:
            "Concrete security controls and architecture recommendations to address identified threats.",
          icon: <Zap className="w-8 h-8" />,
        },
      ],
    },
    "endpoint-analysis": {
      title: "Endpoint Analysis",
      subtitle:
        "Secure your API endpoints with comprehensive vulnerability assessment and remediation.",
      icon: <Search className="w-12 h-12" />,
      description: [
        "Our Endpoint Analysis service focuses on securing your API endpoints by conducting thorough security assessments of request handling, authentication, authorization, and data validation mechanisms.",
        "We identify vulnerabilities like injection flaws, broken authentication, improper access controls, and data leakage that could compromise your API security and provide remediation guidance.",
      ],
      benefits: [
        "Comprehensive API security assessment",
        "Identification of authentication and authorization flaws",
        "Detection of injection vulnerabilities",
        "Prevention of sensitive data exposure",
        "Secure API design recommendations",
      ],
      features: [
        {
          title: "API Security Testing",
          description:
            "Comprehensive testing of all endpoints for common vulnerabilities and implementation flaws.",
          icon: <Search className="w-8 h-8" />,
        },
        {
          title: "Authentication Analysis",
          description:
            "Thorough assessment of identity verification mechanisms and session management.",
          icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
          title: "Access Control Verification",
          description:
            "Testing of authorization models to ensure proper resource protection.",
          icon: <Network className="w-8 h-8" />,
        },
        {
          title: "Data Validation Assessment",
          description:
            "Analysis of input validation controls to prevent injection attacks and data corruption.",
          icon: <Zap className="w-8 h-8" />,
        },
      ],
    },
    "security-scanning": {
      title: "Security Scanning",
      subtitle:
        "Automated security scanning to detect and prioritize vulnerabilities in your codebase.",
      icon: <Zap className="w-12 h-12" />,
      description: [
        "Our Security Scanning service provides comprehensive automated analysis of your codebase, dependencies, and configurations to identify security vulnerabilities before they can be exploited.",
        "We combine multiple scanning techniques with expert review to deliver accurate, actionable results with minimal false positives, helping you remediate issues efficiently.",
      ],
      benefits: [
        "Early detection of security vulnerabilities",
        "Reduced manual security review effort",
        "Integration with development workflows",
        "Compliance with security standards",
        "Continuous security throughout development",
      ],
      features: [
        {
          title: "Static Application Security Testing",
          description:
            "Code analysis to find security flaws without execution, including injection, XSS, and authorization issues.",
          icon: <Search className="w-8 h-8" />,
        },
        {
          title: "Dependency Vulnerability Scanning",
          description:
            "Comprehensive analysis of third-party components to identify known security issues.",
          icon: <Network className="w-8 h-8" />,
        },
        {
          title: "Configuration Analysis",
          description:
            "Review of application and infrastructure configurations for security weaknesses.",
          icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
          title: "Compliance Verification",
          description:
            "Automated checks against security standards like OWASP Top 10, PCI DSS, and HIPAA.",
          icon: <BarChart className="w-8 h-8" />,
        },
      ],
    },
  };

  const currentService = service ? serviceData[service] : null;

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Button href="/services">View All Services</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={currentService.title}
        subtitle={currentService.subtitle}
      />

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-12">
                  {currentService.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 text-lg mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="card-glass p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="text-primary-500 mb-4">
                          {feature.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Initial Assessment",
                        description:
                          "We analyze your application architecture, technology stack, and security requirements to tailor our approach.",
                      },
                      {
                        title: "Comprehensive Analysis",
                        description:
                          "Our experts conduct thorough security analysis using specialized tools and methodologies.",
                      },
                      {
                        title: "Detailed Reporting",
                        description:
                          "You receive a comprehensive report with findings, risk assessments, and visualizations.",
                      },
                      {
                        title: "Remediation Guidance",
                        description:
                          "We provide actionable recommendations and support for addressing identified security issues.",
                      },
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="mr-4 pt-1">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-500 font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  title="Key Benefits"
                  glassEffect={true}
                  hoverEffect={false}
                  className="mb-8"
                >
                  <ul className="mt-4 space-y-3">
                    {currentService.benefits.map((benefit, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card
                  title="Ready to secure your application?"
                  glassEffect={true}
                  hoverEffect={false}
                  className="mb-8"
                >
                  <p className="mt-4 mb-6 text-gray-300">
                    Schedule a consultation with our security experts to discuss
                    your specific needs.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="primary"
                      fullWidth
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Get Started
                    </Button>
                    <Button variant="secondary" fullWidth>
                      Learn More
                    </Button>
                  </div>
                </Card>

                <Card
                  title="Related Services"
                  glassEffect={true}
                  hoverEffect={false}
                >
                  <ul className="mt-4 space-y-4">
                    {Object.entries(serviceData)
                      .filter(([key]) => key !== service)
                      .slice(0, 3)
                      .map(([key, relatedService]) => (
                        <li key={key}>
                          <a
                            href={`/services/${key}`}
                            className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                          >
                            <div className="text-primary-500 mr-3">
                              {relatedService.icon}
                            </div>
                            <span>{relatedService.title}</span>
                          </a>
                        </li>
                      ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-600 border-y border-primary-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to strengthen your{" "}
              <span className="gradient-text">application security</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team of security experts is here to help you protect your
              applications from threats.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button variant="secondary">Contact Sales</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
