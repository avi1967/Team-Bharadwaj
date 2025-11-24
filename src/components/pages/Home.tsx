import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Target, Zap, ArrowRight } from 'lucide-react';

export function Home() {
  const stats = [
    { label: 'Competitions ', value: '10+', icon: Trophy },
    { label: 'Team Members', value: '31', icon: Users },
    { label: 'Years Active', value: '5+', icon: Target },
    { label: 'Projects Completed', value: '10+', icon: Zap },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-slate-950" />
        
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <motion.h1
                className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-500 mb-6"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Team Bharadwaj
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 mx-auto max-w-md"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-4xl text-white mb-12 italic"
            >
              "For most, sky is the limit. For us, it is home."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Pioneering RC aircraft design and engineering excellence through innovation, precision, and passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/team">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg flex items-center gap-2"
                >
                  Meet Our Team
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/sponsors">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(192, 38, 211, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-magenta-600 text-white rounded-lg"
                >
                  Become a Sponsor
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="text-4xl text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-white mb-8"
            >
              Who We Are
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-6"
            >
              Team Bharadwaj is a premier SAE collegiate club dedicated to pushing the boundaries of RC aircraft design and engineering. We participate in prestigious competitions including SAE DDC, IIT Bombay Techfest, and Boeing Aeromodelling Competition.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Our multidisciplinary team combines expertise in aerodynamics, avionics, manufacturing, and design to create innovative solutions that soar above the competition.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-magenta-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl text-white mb-6">Join The Flight</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to soar with Team Bharadwaj? Connect with us to explore opportunities, collaborate, or support our mission to conquer the skies!
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-lg"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
