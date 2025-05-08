import { motion } from "framer-motion";
import { Code, Search, Shield, MessageSquare, Zap } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";

export default function DevelopersPage() {
  return (
    <div>
      <PageHeader
        title="Code Smarter, Ship Securely"
        subtitle="Tools that keep up with your pace. Explore your codebase, catch security issues, and fix vulnerabilities—all while keeping your workflow smooth and efficient."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Code Navigation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Navigate Your Code{" "}
                  <span className="gradient-text">Like a Pro</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  TuringMind's codebase exploration lets you dive into your
                  repository's file structure, functions, and commits with ease.
                  Need to understand a function's role or track a commit's
                  impact? Ask specific questions via LLM-powered chat and get
                  instant, accurate answers.
                </p>
                <Button icon={<Code className="w-5 h-5" />}>
                  Start Exploring Now
                </Button>
              </div>
              <div className="relative">
                <div className="card-glass p-8 relative z-10">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-dark-300 p-4 rounded-lg border border-primary-500/20"
                      >
                        <div className="h-4 w-3/4 bg-primary-500/20 rounded" />
                        <div className="mt-2 h-3 w-1/2 bg-primary-500/10 rounded" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl -z-10" />
              </div>
            </div>
          </motion.div>

          {/* Real-time Scanning Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="card-glass p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="gradient-text">Scan and Secure</span> in Real
                  Time
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Sudoviz's advanced code scanning—powered by our proprietary
                  engine and integrations with Semgrep and Snyk—spots
                  vulnerabilities right in your IDE.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Search className="w-8 h-8" />,
                    title: "Instant Detection",
                    description: "Catch vulnerabilities as you code",
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Clear Actions",
                    description: "Get actionable fix recommendations",
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Seamless Flow",
                    description: "Stay in your development workflow",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4 text-primary-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vulnerability Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="bg-gradient-to-r from-dark-400 to-dark-500 rounded-xl p-12 border border-primary-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Fix Vulnerabilities with{" "}
                    <span className="gradient-text">Confidence</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Sudoviz's CWE/CVE analysis cuts through the clutter, ranking
                    issues and filtering false positives with confidence scores.
                    Get developer-friendly remediation steps to resolve risks
                    fast and keep your codebase bulletproof.
                  </p>
                  <Button
                    variant="secondary"
                    icon={<Shield className="w-5 h-5" />}
                  >
                    Open Dashboard
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-dark-300 p-6 rounded-lg border border-primary-500/20"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-500/20 mb-4" />
                      <div className="h-4 w-3/4 bg-primary-500/20 rounded mb-2" />
                      <div className="h-3 w-1/2 bg-primary-500/10 rounded" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* LLM-powered Chat Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Ask, Learn, <span className="gradient-text">Build</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                TuringMind's LLM-powered chat and deep search let you query your
                codebase directly—whether it's about a specific function,
                commit, or security concern.
              </p>
            </div>

            <div className="card-glass p-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary-500" />
                </div>
                <div className="flex-grow">
                  <div className="bg-dark-300 p-4 rounded-lg">
                    <p className="text-gray-300">
                      Ask about any part of your codebase:
                    </p>
                    <div className="mt-2 font-mono text-sm bg-dark-400 p-2 rounded">
                      "What security implications does this function have?"
                    </div>
                  </div>
                </div>
              </div>

              <Button fullWidth icon={<MessageSquare className="w-5 h-5" />}>
                Try It Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
