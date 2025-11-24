import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['MKSSS’s Cummins College of Engineering for Women, Karvenagar', 'Pune – 411052'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['teambharadwaj.aero@cumminscollege.in'],
      color: 'from-purple-500 to-magenta-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 89837 80805', '+91 97640 88505'],
      color: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl text-white mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have questions or want to collaborate? We'd love to hear from you. Reach out to us and let's start a conversation.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-slate-900/70 to-purple-900/30 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm text-center"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h3 className="text-2xl text-white mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/70 to-purple-900/30 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-gray-300 mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="How can we help?"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-300 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors h-32 resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Map/Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-900/70 to-purple-900/30 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm h-full flex flex-col justify-center">
              <h2 className="text-3xl text-white mb-6">Visit Us</h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-white mb-2">Campus Location</h3>
                    <p className="text-gray-300">
                      MKSSS’s Cummins College of Engineering for Women,<br /> Karvenagar, Pune – 411052
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-white mb-2">Email Us</h3>
                    <p className="text-gray-300 break-all">
                      teambharadwaj.aero@cumminscollege.in
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <Phone className="w-6 h-6 text-magenta-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">
                      Captain: +91 89837 80805<br />
                      Vice Captain: +91 97640 88505
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-6 bg-cyan-900/20 border border-cyan-500/30 rounded-lg"
              >
                <h3 className="text-xl text-cyan-400 mb-3">Working Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday and Sunday: Closed
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FAQ or Additional Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-magenta-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl text-white mb-6">Looking for Something Specific?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 rounded-lg"
            >
              <h3 className="text-xl text-cyan-400 mb-3">Join Our Team</h3>
              <p className="text-gray-300">
                Interested in becoming a member? Check our recruitment periods or reach out directly.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 rounded-lg"
            >
              <h3 className="text-xl text-purple-400 mb-3">Sponsorship</h3>
              <p className="text-gray-300">
                Want to support innovation? Contact our sponsorship team for partnership opportunities.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 rounded-lg"
            >
              <h3 className="text-xl text-magenta-400 mb-3">Media Inquiries</h3>
              <p className="text-gray-300">
                Press and media representatives can reach us for interviews and feature stories.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}