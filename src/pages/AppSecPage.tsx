import { motion } from 'framer-motion';
import { Shield, Database, Lock, Target, BarChart, BookOpen } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function AppSecPage() {
  return (
    <div>
      <PageHeader
        title="Fortify Your Applications with Precision"
        subtitle="Equip your team with powerful tools to assess risks, model threats, and manage vulnerabilities, ensuring your applications are secure from design to deployment."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Business Logic Inventory Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-3xl" />
              <div className="relative bg-dark-400/50 backdrop-blur-sm rounded-xl p-12 border border-primary-500/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">
                      Know Your Application <span className="gradient-text">Inside Out</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                      Sudoviz's business logic inventory details every endpoint, dependency, and service in your repository. This comprehensive view helps you spot attack surfaces and align security with development goals.
                    </p>
                    <Button
                      icon={<Database className="w-5 h-5" />}
                    >
                      Generate Inventory
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['Endpoints', 'Dependencies', 'Services', 'Attack Surfaces'].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-dark-300 p-6 rounded-lg border border-primary-500/20"
                      >
                        <h3 className="font-semibold mb-2">{item}</h3>
                        <div className="text-3xl font-bold text-primary-500">
                          {Math.floor(Math.random() * 100)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Endpoint Analysis Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Harden Endpoints, <span className="gradient-text">Stop Attacks</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Sudoviz analyzes endpoints to uncover risks and provides tailored recommendations to lock them down.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Risk Assessment",
                  description: "Automated security analysis of all endpoints"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Tailored Fixes",
                  description: "Precise guidance for securing vulnerabilities"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Continuous Monitoring",
                  description: "Real-time threat detection and alerts"
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Threat Modeling Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="card-glass p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Anticipate Threats with <span className="gradient-text">Confidence</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Sudoviz's threat modeling tools—featuring sequence diagrams and threat matrices—enable you to map attack paths and prioritize defenses.
                  </p>
                  <Button
                    variant="secondary"
                    icon={<Target className="w-5 h-5" />}
                  >
                    Create Threat Model
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-lg bg-dark-300 p-8 border border-primary-500/20">
                    {/* Animated Threat Matrix Visualization */}
                    <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-primary-500/10 rounded"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Streamline <span className="gradient-text">Vulnerability Management</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Sudoviz's false positive analysis prioritizes vulnerabilities, filters noise, and delivers compliance-ready reports with confidence scores.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Critical", value: "12", color: "red" },
                { label: "High", value: "28", color: "orange" },
                { label: "Medium", value: "45", color: "yellow" },
                { label: "Low", value: "89", color: "green" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass p-6"
                >
                  <div className="text-4xl font-bold mb-2 gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tribal Knowledge Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-dark-400 to-dark-500 rounded-xl p-12 border border-primary-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Leverage <span className="gradient-text">Tribal Knowledge</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    TuringMind captures and organizes critical insights about your organization's environments, repositories, and projects. Preserve institutional knowledge to streamline onboarding, audits, and security reviews.
                  </p>
                  <Button
                    icon={<BookOpen className="w-5 h-5" />}
                  >
                    Explore Knowledge Base
                  </Button>
                </div>
                <div className="space-y-4">
                  {[
                    "Environment Configurations",
                    "Security Policies",
                    "Best Practices",
                    "Incident Response Plans"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-dark-300 p-4 rounded-lg border border-primary-500/20 flex items-center"
                    >
                      <BookOpen className="w-5 h-5 text-primary-500 mr-3" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}