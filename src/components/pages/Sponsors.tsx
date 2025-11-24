import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Handshake, TrendingUp, Users, Award, Target, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../img/ImageWithFallback';
import solidworks from '@/assets/solidworks.png';
import ansys from '@/assets/ansys.png';
import cummins from '@/assets/cummins.png';

export function Sponsors() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Brand Visibility',
      description: 'Logo placement on aircraft, team apparel, social media, and competition materials reaching thousands of engineering students and industry professionals.',
    },
    {
      icon: Users,
      title: 'Talent Pipeline',
      description: 'Direct access to our talented pool of engineering students for internships and recruitment.',
    },
    {
      icon: Award,
      title: 'Innovation Partnership',
      description: 'Collaborate with us on cutting-edge RC aircraft projects and be associated with award-winning engineering excellence.',
    },
    {
      icon: Target,
      title: 'CSR Impact',
      description: 'Support STEM education and inspire the next generation of engineers through hands-on learning experiences.',
    },
  ];

  const currentSponsors = [
  { name: 'SolidWorks', image: solidworks, category: 'Software' },
  { name: 'Ansys', image: ansys, category: 'Software' },
  { name: 'Cummins', image: cummins, category: 'Monetary' },
];


  const achievements = [
    { stat: '3+', label: 'Awards Won' },
    { stat: '900+', label: 'Social Reach' },
    { stat: '10+', label: 'Competitions' },
    { stat: '30+', label: 'Team Members' },
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
            Partner With Us
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
            Join us in our journey to excellence. Your support helps us push the boundaries of innovation and inspire the next generation of aerospace engineers.
          </motion.p>
        </motion.div>

        {/* Why Sponsor Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl text-white">Why Sponsor Team Bharadwaj?</h2>
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-slate-900/70 to-purple-900/30 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-magenta-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-5xl text-cyan-400 mb-3"
                >
                  {achievement.stat}
                </motion.div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Sponsors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Handshake className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl text-white">Our Sponsors</h2>
            <Handshake className="w-8 h-8 text-cyan-400" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 flex items-center justify-center aspect-square"
              >
                <ImageWithFallback
  src={sponsor.image}
  alt={sponsor.name}
  className="w-32 h-32 object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity"
/>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-magenta-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Handshake className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl text-white mb-6">Ready to Partner?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of industry leaders supporting aerospace innovation. Let's discuss how we can create a mutually beneficial partnership.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-lg flex items-center gap-2 mx-auto"
            >
              Contact Us for Sponsorship
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
