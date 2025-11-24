import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950/90 border-t border-purple-900/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Team Bharadwaj</h3>
            <p className="text-gray-400 mb-4">
              A premier SAE collegiate club pushing the boundaries of RC aircraft design and engineering excellence.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, color: '#22d3ee' }}
                href="https://www.instagram.com/teambharadwaj"
                className="text-gray-400"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#22d3ee' }}
                href="https://www.linkedin.com/company/team-bharadwajaero/"
                className="text-gray-400"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Competitions
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white mb-4">
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                Contact Us
              </Link>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 text-cyan-400 mt-1" />
                <span>MKSSS’s Cummins College of Engineering for Women,<br /> Karvenagar, Pune – 411052</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                <a href="mailto:teambharadwaj.aero@cumminscollege.in" className="hover:text-cyan-400 transition-colors">
                  teambharadwaj.aero@cumminscollege.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                <a href="tel:+911234567890" className="hover:text-cyan-400 transition-colors">
                  +91 89837 80805
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-purple-900/30 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Team Bharadwaj. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}