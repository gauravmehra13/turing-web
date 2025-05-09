import { motion } from "framer-motion";
import PageHeader from "../components/common/PageHeader";
import { Users, Rocket, Heart } from "lucide-react";
import teamImage1 from "/src/assets/images/company/1.jpg";
import teamImage3 from "/src/assets/images/company/3.avif";
const Company = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="Who We Are"
        subtitle="Empowering Developers Through AI"
      />

      {/* Who We Are Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            {/* Content Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-300 leading-relaxed">
                We're passionate about revolutionizing the way developers work
                through the power of artificial intelligence. Founded on the
                belief that syntax shouldn't be a barrier to building production
                grade secure apps, we're committed to empowering developers of
                all levels with cutting-edge AI-driven solutions. Our Journey
                began with vision to simplify complex code security analysis
                tasks using AI reasoning. We ended up building something way
                more powerful.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Top Row - 2 Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="relative overflow-hidden rounded-2xl h-[300px] md:h-[400px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-dark-400 border border-primary-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
                    <img
                      src={teamImage1}
                      alt="Team Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-2xl h-[300px] md:h-[400px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="absolute inset-0 bg-dark-400 border border-primary-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-transparent" />
                    <img
                      src="/src/assets/images/company/2.jpg"
                      alt="Team Image 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row - 3 Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div
                  className="relative overflow-hidden rounded-2xl h-[250px] md:h-[300px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-dark-400 border border-primary-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
                    <img
                      src={teamImage3}
                      alt="Team Image 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-2xl h-[250px] md:h-[300px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute inset-0 bg-dark-400 border border-primary-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-transparent" />
                    <img
                      src="/src/assets/images/company/4.jpg"
                      alt="Team Image 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-2xl h-[250px] md:h-[300px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="absolute inset-0 bg-dark-400 border border-primary-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
                    <img
                      src="/src/assets/images/company/5.jpg"
                      alt="Team Image 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Our Mission Section */}
          <section className="mb-24">
            <div className="card-glass p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <h3 className="text-xl text-primary-400 mb-6">
                  Be the best code intelligence platform for developers
                </h3>
                <p className="text-lg text-gray-300">
                  We're committed to empowering developers of all levels with
                  cutting-edge AI-driven solutions. Journey began with vision to
                  simplify coding.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                We believe in fostering a culture of collaboration and respect,
                where every team member contributes to the collective success of
                our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Collaboration",
                  description:
                    "We thrive on good collaboration. It's the heartbeat of our success, where diverse minds converge to create solutions that transcend expectations.",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Transparency",
                  description:
                    "We believe in open and honest communication, ensuring clarity in every interaction. From our processes to our partnerships, transparency.",
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Execution",
                  description:
                    "We celebrate the doers as a catalyst for progress. We encourage and recognize the proactive spirit of such leaders that propels us forward.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass p-8 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6 text-primary-500">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Company;
