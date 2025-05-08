import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  BookOpen, 
  Calendar, 
  ChevronDown, 
  Send 
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  reason: string;
};

export default function ContactPage() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    reason: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  
  const contactInfo = [
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: 'Email', 
      content: 'contact@turingmind.com',
      link: 'mailto:contact@turingmind.com'
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: 'Phone', 
      content: '+1 (888) 123-4567',
      link: 'tel:+18881234567'
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: 'Office', 
      content: '123 Tech Blvd, San Francisco, CA 94107',
      link: 'https://maps.google.com'
    },
  ];
  
  const inputField = "w-full bg-dark-400 border border-primary-800/50 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all duration-300";
  
  return (
    <div>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team to learn more about how we can help secure your applications."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                className="card-glass p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
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
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
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
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            className={inputField}
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
                          Reason for Contact <span className="text-primary-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="reason"
                            name="reason"
                            value={formValues.reason}
                            onChange={handleChange}
                            required
                            className={`${inputField} appearance-none pr-10`}
                          >
                            <option value="" disabled>Select a reason</option>
                            <option value="demo">Request a Demo</option>
                            <option value="pricing">Pricing Information</option>
                            <option value="support">Technical Support</option>
                            <option value="partnership">Partnership Opportunities</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject <span className="text-primary-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formValues.subject}
                          onChange={handleChange}
                          required
                          className={inputField}
                          placeholder="How can we help?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message <span className="text-primary-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formValues.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={inputField}
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>
                      
                      <motion.div 
                        className="flex justify-end"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="px-8"
                          icon={isSubmitting ? null : <Send className="w-4 h-4" />}
                          iconPosition="right"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
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
                      <MessageSquare className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
                    <p className="text-gray-300 mb-8">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="secondary"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="mr-4 text-primary-500">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-1">{item.title}</h4>
                          <a 
                            href={item.link} 
                            className="text-white hover:text-primary-400 transition-colors"
                          >
                            {item.content}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
                  <div className="space-y-4">
                    <a href="/resources" className="flex items-center p-3 bg-dark-400 rounded-lg hover:bg-dark-300 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-500">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div onClick={() => window.open('https://docs.turingmind.com', '_blank')}>
                        <h4 className="font-medium">Documentation</h4>
                        <p className="text-sm text-gray-400">Browse our technical resources</p>
                      </div>
                    </a>
                    
                    <a href="/schedule-demo" className="flex items-center p-3 bg-dark-400 rounded-lg hover:bg-dark-300 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-500">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Schedule a Demo</h4>
                        <p className="text-sm text-gray-400">See our platform in action</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM ET</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday:</span>
                      <span>10:00 AM - 2:00 PM ET</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-xl overflow-hidden h-[400px] relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-dark-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-gray-400">123 Tech Blvd, San Francisco, CA 94107</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-dark-600 border-y border-primary-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Find quick answers to common questions about our services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I get started with Turingmind?",
                  answer: "Getting started with Turingmind is quick and easy. After signing up, you can connect your repositories and start scanning for vulnerabilities within minutes. Our onboarding process guides you through the setup, and our team is available to help with any questions."
                },
                {
                  question: "Do you offer custom security solutions?",
                  answer: "Yes, we offer customized security solutions tailored to your specific needs. Our team can work with you to develop custom rules, integrations, and workflows that align with your security requirements and development processes."
                },
                {
                  question: "How does your pricing work?",
                  answer: "We offer flexible pricing plans based on your organization's size and needs. Our plans start with a free tier for small teams and scale up to enterprise solutions with advanced features. Contact our sales team for detailed pricing information."
                },
                {
                  question: "What level of support do you provide?",
                  answer: "We provide comprehensive support through multiple channels, including email, chat, and phone. Our team of security experts is available to help with implementation, troubleshooting, and strategic security planning."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="card-glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}