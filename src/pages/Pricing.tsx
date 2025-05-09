import { motion } from "framer-motion";
import { Check, X, ArrowRight, Code, Zap, Building } from "lucide-react";
import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (monthlyPrice: number) => {
    const annualPrice = monthlyPrice * 0.8; // 20% discount for annual
    return isAnnual ? `$${Math.round(annualPrice)}` : `$${monthlyPrice}`;
  };

  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      price: getPrice(30),
      description: "Ideal for small projects and individual developers",
      features: [
        "Process up to 25 MB of code repos",
        "ChatGPT (GPT-4) Access",
        "Integrate with GitHub and ChatGPT",
        "Code Reviews & Insights",
        "Code Reasoning & Analysis History",
      ],
      notIncluded: [
        "Advanced code reviews",
        "Security checks",
        "Priority support",
      ],
      icon: <Code className="w-8 h-8" />,
      popular: false,
    },
    {
      name: "Pro",
      price: getPrice(100),
      description: "For growing teams and complex projects",
      features: [
        "Process up to 60 MB of code per repo",
        "Advanced code reviews and dependency analysis",
        "Security checks: SAST, SCA, and IaC scans",
        "Enhanced code analysis with detailed reasoning",
        "Priority email and chat support (12h response)",
      ],
      notIncluded: [
        "Custom vulnerability triage",
        "Advanced insights with tailor",
      ],
      icon: <Zap className="w-8 h-8" />,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Talk to Us",
      description: "Designed for large organizations",
      features: [
        "Process up to 100 MB of code per repo",
        "Deep code understanding with custom vulnerability triage",
        "Full security suite with alert triaging",
        "Advanced insights with tailor",
        "Dedicated support team",
      ],
      notIncluded: [],
      icon: <Building className="w-8 h-8" />,
      popular: false,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that best fits your security needs"
      />

      <section className="py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-12">
            <span
              className={`mr-3 ${
                !isAnnual ? "text-primary-500 font-semibold" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <div
              className="relative w-16 h-8 flex items-center bg-gray-800 rounded-full p-1 cursor-pointer"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <motion.div
                className="w-6 h-6 bg-primary-500 rounded-full"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span
              className={`ml-3 ${
                isAnnual ? "text-primary-500 font-semibold" : "text-gray-400"
              }`}
            >
              Annual
              <span className="ml-1 text-sm text-primary-500">(Save 20%)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${
                  plan.popular ? "transform md:-translate-y-4" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/20 text-white px-6 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`card-glass p-8 h-full backdrop-blur-sm ${
                    plan.popular
                      ? "border-2 border-primary-500 shadow-xl shadow-primary-500/10"
                      : ""
                  }`}
                >
                  <div className="text-primary-500 mb-4">{plan.icon}</div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Talk to Us" && (
                      <span className="text-gray-400 ml-2">/month</span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6">{plan.description}</p>

                  <Button
                    onClick={() => navigate("/contact")}
                    variant={plan.popular ? "primary" : "secondary"}
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {plan.price === "Talk to Us"
                      ? "Contact Sales"
                      : "Get Started"}
                  </Button>

                  <div className="mt-8">
                    <div className="text-sm font-medium mb-4">
                      What's included:
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-gray-500"
                        >
                          <X className="w-5 h-5 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-gray-300">
                Find answers to common questions about our pricing and plans
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "How do I know which plan is right for me?",
                  a: "Choose based on your team size and security needs. The Starter plan works well for small teams, Professional for growing organizations, and Enterprise for large companies needing complete coverage.",
                },
                {
                  q: "Can I change plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
                },
                {
                  q: "Do you offer a free trial?",
                  a: "Yes, we offer a 14-day free trial on our Professional plan so you can experience our full feature set before committing.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, and for Enterprise plans, we can arrange alternative payment methods including wire transfers and purchase orders.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="card-glass p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
