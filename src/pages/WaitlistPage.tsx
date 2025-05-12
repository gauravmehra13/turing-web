import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Rocket, Users, Lock, CheckCircle } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";

type WaitlistFormValues = {
  email: string;
  name: string;
  company: string;
  role: string;
};

export default function WaitlistPage() {
  const [formValues, setFormValues] = useState<WaitlistFormValues>({
    email: "",
    name: "",
    company: "",
    role: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputField =
    "w-full bg-dark-400 border border-primary-800/50 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all duration-300";

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Early Access",
      description:
        "Be among the first to experience our revolutionary platform",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Priority Support",
      description: "Get dedicated support and onboarding assistance",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Exclusive Benefits",
      description:
        "Access special features and pricing available only to waitlist members",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Join the Waitlist"
        subtitle="Be the first to experience the future of AI-powered security analysis."
      />

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Waitlist Form */}
            <motion.div
              className="card-glass p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    Reserve Your Spot
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className={inputField}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                        className={inputField}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formValues.company}
                        onChange={handleChange}
                        className={inputField}
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formValues.role}
                        onChange={handleChange}
                        className={`${inputField} appearance-none pr-10`}
                      >
                        <option value="">Select your role</option>
                        <option value="developer">Developer</option>
                        <option value="security_engineer">
                          Security Engineer
                        </option>
                        <option value="engineering_manager">
                          Engineering Manager
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <motion.div
                      className="flex justify-end"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        disabled={isSubmitting}
                        className="px-8"
                        icon={<Mail className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        {isSubmitting ? "Joining..." : "Join Waitlist"}
                      </Button>
                    </motion.div>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-block p-3 rounded-full bg-primary-500/20 text-primary-500 mb-6">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">You're In!</h2>
                  <p className="text-gray-300 mb-8">
                    Thank you for joining our waitlist. We'll notify you as soon
                    as we're ready to welcome you aboard!
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Features */}
            <div className="space-y-8">
              <div className="card-glass p-8">
                <h3 className="text-xl font-semibold mb-6">
                  Waitlist Benefits
                </h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-primary-500">{feature.icon}</div>
                      <div>
                        <h4 className="font-medium mb-1">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="card-glass p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    <span>Exclusive early access to our platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    <span>Regular updates on our progress</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    <span>Special founding member benefits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    <span>Direct access to our founding team</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
