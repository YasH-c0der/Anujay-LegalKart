import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo and Social Media */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/src/assets/images/logo.png"
                alt="LegalKart"
                className="h-10 filter brightness-0 invert"
              />
            </Link>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition duration-300"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition duration-300"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Sections */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/property" className="hover:text-secondary transition duration-300">Property</Link></li>
              <li><Link to="/startup" className="hover:text-secondary transition duration-300">Startup</Link></li>
              <li><Link to="/documentation" className="hover:text-secondary transition duration-300">Documentation</Link></li>
              <li><Link to="/citation" className="hover:text-secondary transition duration-300">Citation</Link></li>
              <li><Link to="/find-lawyer" className="hover:text-secondary transition duration-300">Find Lawyer</Link></li>
              <li><Link to="/talk-to-lawyer" className="hover:text-secondary transition duration-300">Talk to Lawyer</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FaPhone size={14} />
                <span>+91-8448234234</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope size={14} />
                <span>info@legalkart.com</span>
              </li>
              <li className="mt-4">
                <Link to="/workshops" className="hover:text-secondary transition duration-300">Workshops</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition duration-300">About</Link></li>
              <li><Link to="/contact-us" className="hover:text-secondary transition duration-300">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-secondary transition duration-300">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-secondary transition duration-300">Partners</Link></li>
              <li><Link to="/advisors" className="hover:text-secondary transition duration-300">Advisors</Link></li>
              <li><Link to="/blogs" className="hover:text-secondary transition duration-300">Blogs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-secondary transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-secondary transition duration-300">Terms of Use</Link></li>
              <li><Link to="/refund-policy" className="hover:text-secondary transition duration-300">Refund Policy</Link></li>
              <li><Link to="/legalkart-user-terms" className="hover:text-secondary transition duration-300">LegalKart User Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Talk to Lawyer CTA */}
        <div className="text-center mb-10">
          <Link
            to="/contact-us"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary-dark transition duration-300"
          >
            Contact Us Now
          </Link>
        </div>

        {/* Services Links */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <h5 className="text-sm font-medium mb-4">Talk to Lawyer</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div>
              <ul className="text-xs space-y-2">
                <li><Link to="/consult-top-criminal-lawyers" className="hover:text-secondary transition duration-300">Consult Top Criminal Lawyers Online | Consult Expert Criminal Lawyer in India</Link></li>
                <li><Link to="/consult-top-divorce-lawyers" className="hover:text-secondary transition duration-300">Consult Top Divorce Lawyers | Consult Expert Divorce Lawyer in India</Link></li>
                <li><Link to="/consult-property-lawyers" className="hover:text-secondary transition duration-300">Consult Property Lawyers | Consult Expert Property Lawyer in India</Link></li>
              </ul>
            </div>
            <div>
              <ul className="text-xs space-y-2">
                <li><Link to="/consult-employment-lawyers" className="hover:text-secondary transition duration-300">Consult Employment Lawyers | Consult Expert Employment Lawyer in India</Link></li>
                <li><Link to="/consult-corporate-lawyers" className="hover:text-secondary transition duration-300">Consult Corporate Lawyers | Consult Expert Corporate Lawyer in India</Link></li>
                <li><Link to="/consult-family-lawyers" className="hover:text-secondary transition duration-300">Consult Family Lawyers | Consult Expert Family Lawyer in India</Link></li>
              </ul>
            </div>
            <div>
              <ul className="text-xs space-y-2">
                <li><Link to="/online-legal-advice" className="hover:text-secondary transition duration-300">Online Legal Advice | Online Legal Consultation | Online Legal Services in India</Link></li>
                <li><Link to="/legal-consultation-bengaluru" className="hover:text-secondary transition duration-300">Online Legal Consultation in Bengaluru</Link></li>
                <li><Link to="/legal-consultation-mumbai" className="hover:text-secondary transition duration-300">Online Legal Consultation in Mumbai</Link></li>
              </ul>
            </div>
            <div>
              <ul className="text-xs space-y-2">
                <li><Link to="/legal-consultation-chennai" className="hover:text-secondary transition duration-300">Online Legal Consultation in Chennai</Link></li>
                <li><Link to="/legal-consultation-hyderabad" className="hover:text-secondary transition duration-300">Online Legal Consultation in Hyderabad</Link></li>
                <li><Link to="/legal-consultation-delhi" className="hover:text-secondary transition duration-300">Online Legal Consultation in Delhi</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs">
          <p>© 2024 JT it Back Office Technologies Pvt. Ltd. | All Rights Reserved</p>
          <p className="mt-2 text-gray-400 text-[10px]">
            Disclaimer: Please note that LegalKart is not a law firm and does not practice of offer of advice as a lawyer.
            JT it Back Office Technologies Pvt. Ltd. is a technology company and provider of an online legal consultation platform enabling users to consult with independent third-party lawyers and independent professionals registered on LegalKart platform.
            All services and services are offered by independent lawyers and independent professionals registered on LegalKart. JT it Back Office Technologies Pvt. Ltd. is not responsible for the quality, nature and deliverables, of consultations and additional through LegalKart registered on between users and independent professionals registered on LegalKart is not responsible.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
