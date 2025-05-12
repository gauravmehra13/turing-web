import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import DevelopersPage from "./pages/DevelopersPage";
import AppsecPage from "./pages/AppSecPage";
import PricingPage from "./pages/Pricing";
import CompanyPage from "./pages/Company";
import WaitlistPage from "./pages/WaitlistPage";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:service" element={<ServiceDetailPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="developers" element={<DevelopersPage />} />
          <Route path="appsec" element={<AppsecPage />} />
          <Route path="solutions/developers" element={<DevelopersPage />} />
          <Route path="solutions/appsec" element={<AppsecPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="join-waitlist" element={<WaitlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
