import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, Phone } from "lucide-react";
import Button from "../components/common/Button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <span className="text-8xl md:text-9xl font-bold gradient-text">
              404
            </span>
            <motion.div
              className="absolute -inset-8 rounded-full opacity-30"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(139,92,246,0)",
                  "0 0 0 20px rgba(139,92,246,0.1)",
                  "0 0 0 40px rgba(139,92,246,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            onClick={() => navigate("/")}
            icon={<Home className="w-5 h-5" />}
          >
            Back to Home
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            variant="secondary"
            icon={<Phone className="w-5 h-5" />}
            iconPosition="left"
          >
            Contact Support
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
