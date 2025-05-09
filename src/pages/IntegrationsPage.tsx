import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/common/PageHeader";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import {
  Github as GitHub,
  Figma,
  Slack,
  Filter,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import githubLogo from "/src/assets/images/integrations/github.png";
import jiraLogo from "/src/assets/images/integrations/jira.png";
import semgrepLogo from "/src/assets/images/integrations/semgrep.png";
import snykLogo from "/src/assets/images/integrations/snyk.png";
import grypeLogo from "/src/assets/images/integrations/grype.png";
import checkovLogo from "/src/assets/images/integrations/checkov.png";
import gitlabLogo from "/src/assets/images/integrations/gitlab.png";

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Integrations" },
    { id: "cicd", name: "CI/CD" },
    { id: "scanners", name: "Security Scanners" },
    { id: "ticketing", name: "Ticketing Systems" },
  ];

  const integrations = [
    {
      id: "github",
      name: "GitHub",
      description:
        "Seamlessly integrate security testing into your GitHub repositories and workflows.",
      category: "cicd",
      icon: <img src={githubLogo} alt="GitHub Logo" className="w-10 h-10" />,
      popular: true,
      features: [
        "Automatic scanning on pull requests",
        "Security insights in code reviews",
        "Customizable security policies",
        "Integration with GitHub Actions",
      ],
    },
    {
      id: "jira",
      name: "Jira",
      description:
        "Automatically create and track security issues in your Jira projects.",
      category: "ticketing",
      icon: <img src={jiraLogo} alt="Jira Logo" className="w-10 h-10" />,
      popular: true,
      features: [
        "Automatic issue creation from findings",
        "Customizable issue templates",
        "Two-way synchronization",
        "Status tracking and reporting",
      ],
    },
    {
      id: "semgrep",
      name: "Semgrep",
      description:
        "Enhance code scanning with Semgrep's powerful static analysis engine.",
      category: "scanners",
      icon: <img src={semgrepLogo} alt="Semgrep Logo" className="w-10 h-10" />,
      popular: false,
      features: [
        "Custom rule integration",
        "Language-specific scanning",
        "Tunable detection sensitivity",
        "False positive management",
      ],
    },
    {
      id: "snyk",
      name: "Snyk",
      description:
        "Combine Turingmind insights with Snyk's dependency vulnerability detection.",
      category: "scanners",
      icon: <img src={snykLogo} alt="Snyk Logo" className="w-10 h-10" />,
      popular: true,
      features: [
        "Comprehensive vulnerability detection",
        "License compliance scanning",
        "Remediation recommendations",
        "Prioritized security alerts",
      ],
    },
    {
      id: "grype",
      name: "Grype",
      description:
        "Integrate container vulnerability scanning into your security pipeline.",
      category: "scanners",
      icon: <img src={grypeLogo} alt="Grype Logo" className="w-10 h-10" />,
      popular: false,
      features: [
        "Container image scanning",
        "SBOM generation and analysis",
        "Policy-based evaluation",
        "CI/CD pipeline integration",
      ],
    },
    {
      id: "checkov",
      name: "Checkov",
      description:
        "Scan infrastructure as code for security and compliance issues.",
      category: "scanners",
      icon: <img src={checkovLogo} alt="Checkov Logo" className="w-10 h-10" />,
      popular: false,
      features: [
        "IaC security scanning",
        "Compliance policy enforcement",
        "Misconfigurations detection",
        "Multi-framework support",
      ],
    },

    {
      id: "gitlab",
      name: "GitLab",
      description:
        "Enhance your GitLab DevSecOps pipeline with Turingmind security insights.",
      category: "cicd",
      icon: <img src={gitlabLogo} alt="GitLab Logo" className="w-10 h-10" />,
      popular: false,
      features: [
        "Pipeline integration",
        "Merge request scanning",
        "Security dashboard integration",
        "Custom security policies",
      ],
    },
  ];

  const filteredIntegrations =
    selectedCategory === "all"
      ? integrations
      : integrations.filter(
          (integration) => integration.category === selectedCategory
        );

  return (
    <div>
      <PageHeader
        title="Integrations"
        subtitle="Connect Turingmind with your existing tools and workflows to streamline your security operations."
      />

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          <motion.div
            className="mb-12 overflow-x-auto pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-primary-500 text-white"
                      : "bg-dark-400 text-gray-300 hover:bg-dark-300"
                  }`}
                >
                  {category.id === "all" && (
                    <Filter className="w-4 h-4 inline mr-2" />
                  )}
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Popular Integrations */}
          {selectedCategory === "all" && (
            <div className="mb-16">
              <motion.h2
                className="text-2xl font-semibold mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Popular Integrations
              </motion.h2>

              <motion.p
                className="text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                These integrations can be configured through our CLI tool or
                API. For detailed setup instructions, click "Learn More" on any
                integration.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations
                  .filter((integration) => integration.popular)
                  .map((integration, index) => (
                    <motion.div
                      key={integration.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <Card
                        title={integration.name}
                        description={integration.description}
                        icon={integration.icon}
                      >
                        <div className="mt-4 pt-4 border-t border-primary-900/30">
                          <Button
                            variant="outline"
                            size="sm"
                            icon={<ArrowRight className="w-4 h-4" />}
                            iconPosition="right"
                            fullWidth
                            onClick={() =>
                              window.open(
                                `/docs/integrations/${integration.id}`,
                                "_blank"
                              )
                            }
                          >
                            Learn More
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* All/Filtered Integrations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-8">
              {selectedCategory === "all"
                ? "All Integrations"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
                >
                  <div className="card-glass p-6 h-full flex flex-col">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 text-primary-500">
                        {integration.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {integration.name}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {selectedCategory === "all" && (
                            <span className="inline-block bg-dark-300 px-2 py-0.5 rounded text-xs mr-2">
                              {categories
                                .find((c) => c.id === integration.category)
                                ?.name.replace(" Systems", "")
                                .replace(" Providers", "")}
                            </span>
                          )}
                          {integration.popular && (
                            <span className="inline-block bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded text-xs">
                              Popular
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">
                      {integration.description}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-sm text-gray-400 mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {integration.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 space-y-3">
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<ArrowRight className="w-4 h-4" />}
                          iconPosition="right"
                          fullWidth
                          onClick={() =>
                            window.open(
                              `/docs/integrations/${integration.id}`,
                              "_blank"
                            )
                          }
                        >
                          View Documentation
                        </Button>
                        <p className="text-xs text-gray-400 text-center">
                          Configure via CLI or API
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-dark-600 border-y border-primary-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How <span className="gradient-text">Integrations</span> Work
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our seamless integration process ensures you can quickly connect
              your tools and start enhancing your security posture.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Connect",
                description:
                  "Set up the integration through our simple configuration interface with guided step-by-step instructions.",
                icon: <Network className="w-10 h-10" />,
              },
              {
                title: "Configure",
                description:
                  "Customize security policies, scanning schedules, and notification preferences to meet your specific needs.",
                icon: <Settings className="w-10 h-10" />,
              },
              {
                title: "Collaborate",
                description:
                  "Share security findings across your organization with actionable insights and remediation guidance.",
                icon: <Users className="w-10 h-10" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-glass p-8 h-full">
                  <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mb-6 text-primary-500">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-dark-400 to-dark-500 border border-primary-500/20 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div
                className="md:w-2/3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Need a Custom Integration?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Our team can build custom integrations for your specific tools
                  and workflows, ensuring seamless security operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button>Request Custom Integration</Button>
                  <Button variant="secondary">Contact Sales</Button>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-full w-32 h-32 md:w-48 md:h-48 bg-primary-500/10 flex items-center justify-center mx-auto relative">
                  <Code className="w-16 h-16 md:w-24 md:h-24 text-primary-500" />

                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(139,92,246,0)",
                        "0 0 0 10px rgba(139,92,246,0.1)",
                        "0 0 0 20px rgba(139,92,246,0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Import additional icons used in the page
function Network(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function Settings(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Code(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
