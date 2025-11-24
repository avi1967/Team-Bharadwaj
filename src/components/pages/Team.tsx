import { motion } from 'motion/react';
import { Users, Award } from 'lucide-react';
import { ImageWithFallback } from '../img/ImageWithFallback';
import Avisha from '@/assets/Avisha.png';
import Aditi from '@/assets/Aaditi.png';
import Neeraja from '@/assets/Neeraja.png';
import Janhavi from '@/assets/Janhavi.png';
import Bhavya from '@/assets/Bhavya.png';
import Diva from '@/assets/Diva.png';
import Nupur from '@/assets/Nupur.png';
import Rutuja from '@/assets/Rutuja.png';
import Ilvika from '@/assets/Ilvika.png';
import Gargi from '@/assets/Gargi.png';
import Pari from '@/assets/Pari.png';
import Shreeya from '@/assets/Shreeya.png';
import Nandini from '@/assets/Nandini.png';
import Piya from '@/assets/Piya.png';
import Amitoj from '@/assets/Amitoj.png';
import Sara from '@/assets/Sara.png';

interface TeamMember {
  name: string;
  designation: string;
  year: string;
  department: string;
  category: 'leadership' | 'heads' | 'avionics' | 'fuselage' | 'wings-airfoil' | 'stabilizers' | 'wings-planform';
  image: string;
}

export function Team() {
  const teamMembers: TeamMember[] = [
  // Leadership
  { name: 'Amitoj Panesar', designation: 'Captain', year: '3rd Year', department: 'Instrumentation and Control Engineering', category: 'leadership', image: Amitoj },
  { name: 'Sara Dange', designation: 'Vice Captain', year: '3rd Year', department: 'Electronics and Telecommunication Engineering', category: 'leadership', image: Sara },

  // Heads
  //{ name: 'Archita Jha', designation: 'Avionics Head', year: '3rd Year', department: 'Electronics Engineering', category: 'heads', image: Aditi },
  { name: 'Shreeya Chavan', designation: 'Design Head', year: '3rd Year', department: 'Computer Engineering', category: 'heads', image: Shreeya },
  { name: 'Nandini Sawale', designation: 'Manufacturing Head', year: '3rd Year', department: 'Mechanical Engineering', category: 'heads', image: Nandini },
  { name: 'Piya Shrivastava', designation: 'CFD Head', year: '3rd Year', department: 'Mechanical Engineering', category: 'heads', image: Piya },
  { name: 'Avisha Moghe', designation: 'Website Developer', year: '2nd Year', department: 'Computer Engineering', category: 'heads', image: Avisha },
  { name: 'Rutuja Gaikwad', designation: 'Sponsorships Head', year: '2nd Year', department: 'Mechanical Engineering', category: 'heads', image: Rutuja },
  { name: 'Ilvika Pimpley', designation: 'Social Media & Graphics Head', year: '2nd Year', department: 'Mechanical Engineering', category: 'heads', image: Ilvika },
  { name: 'Gargi Kajave', designation: 'Treasurer', year: '2nd Year', department: 'Computer Engineering', category: 'heads', image: Gargi },
  { name: 'Pari Sisode', designation: 'Treasurer', year: '2nd Year', department: 'Mechanical Engineering', category: 'heads', image: Pari },

  // Avionics Team
  { name: 'Avisha Moghe', designation: 'Avionics Team', year: '2nd Year', department: 'Computer Engineering', category: 'avionics', image: Avisha },
  { name: 'Aaditi Shankarshetti', designation: 'Avionics Team', year: '2nd Year', department: 'Mechanical Engineering', category: 'avionics', image: Aditi },
  { name: 'Neeraja Mehta', designation: 'Avionics Team', year: '2nd Year', department: 'Instrumentation and Control Engineering', category: 'avionics', image: Neeraja },

  // Fuselage Team
  { name: 'Janhavi Athalye', designation: 'Fuselage Team', year: '2nd Year', department: 'Computer Engineering', category: 'fuselage', image: Janhavi },

  // Wings Airfoil Team
  { name: 'Bhavya Khandelwal', designation: 'Wings Airfoil Team', year: '2nd Year', department: 'Electronics and Telecommunication Engineering', category: 'wings-airfoil', image: Bhavya },

  // Stabilizers Team
  { name: 'Diva Malhotra', designation: 'Stabilizers Team', year: '2nd Year', department: 'Mechanical Engineering', category: 'stabilizers', image: Diva },

  // Wings Planform Team
  { name: 'Nupur Choure', designation: 'Wings Planform Team', year: '3rd Year', department: 'Mechanical Engineering', category: 'wings-planform', image: Nupur },
];


  const leadership = teamMembers.filter(m => m.category === 'leadership');
  const heads = teamMembers.filter(m => m.category === 'heads');
  
  const teams = [
    { name: 'Avionics', category: 'avionics', color: 'from-cyan-500 to-blue-600' },
    { name: 'Fuselage', category: 'fuselage', color: 'from-purple-500 to-magenta-600' },
    { name: 'Wings Airfoil', category: 'wings-airfoil', color: 'from-blue-500 to-purple-600' },
    { name: 'Stabilizers', category: 'stabilizers', color: 'from-magenta-500 to-pink-600' },
    { name: 'Wings Planform', category: 'wings-planform', color: 'from-cyan-600 to-purple-500' },
  ];

  const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="bg-gradient-to-br from-slate-900/70 to-purple-900/30 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mb-4 relative overflow-hidden rounded-lg"
      >
        <ImageWithFallback
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end justify-center pb-4"
        >
          <span className="text-white text-sm px-4 py-2 bg-cyan-500/80 rounded-full">
            {member.year}
          </span>
        </motion.div>
      </motion.div>
      
      <div className="text-center">
        <h3 className="text-xl text-white mb-2">{member.name}</h3>
        <p className="text-cyan-400 mb-2">{member.designation}</p>
        <p className="text-gray-400 text-sm">{member.department}</p>
      </div>
    </motion.div>
  );

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
            Meet the Team
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
            Our diverse team of passionate engineers and innovators working together to push the boundaries of RC aircraft design.
          </motion.p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl text-white text-center mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Heads Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl text-white">Heads</h2>
            <Award className="w-8 h-8 text-purple-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {heads.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Team Members by Department */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Users className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl text-white">Team Members</h2>
            <Users className="w-8 h-8 text-cyan-400" />
          </div>

          <div className="space-y-16">
            {teams.map((team, teamIndex) => {
              const members = teamMembers.filter(m => m.category === team.category);
              
              return (
                <motion.div
                  key={team.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: teamIndex * 0.1 }}
                >
                  {/* Team Header Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${team.color} rounded-2xl p-8 mb-8 text-center shadow-lg shadow-purple-500/20`}
                  >
                    <h3 className="text-3xl text-white">{team.name}</h3>
                  </motion.div>

                  {/* Team Members Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                      <TeamCard key={index} member={member} index={index} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Culture Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-magenta-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl text-white mb-6">Our Team Culture</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We foster a collaborative environment where innovation thrives, skills are developed, and friendships are forged. Every member brings unique expertise that contributes to our collective success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
              { title: 'Collaboration', description: 'Working together towards common goals' },
              { title: 'Excellence', description: 'Striving for the highest standards' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl text-cyan-400 mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
