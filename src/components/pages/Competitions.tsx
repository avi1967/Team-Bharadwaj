import { motion } from 'motion/react';
import { Trophy, Award, Target, Calendar, MapPin, Medal, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../img/ImageWithFallback';
import { useEffect, useState, useRef } from 'react';
import boeingLocal from "@/assets/Boeing2025(2).png";
import boeing2 from "@/assets/Boeing2025(3).png";
import WS2025 from "@/assets/SAEWorkshop(1).png";
import WS20252 from "@/assets/SAEWorkshop2025(2).png";
import WS20253 from "@/assets/SAEWorkshop2025(3).png";
import SAE2024 from "@/assets/SAEDDC2024(1).png";
import SAE20242 from "@/assets/SAEDDC2024(2).png";
import SAE2023 from "@/assets/SAEDDC2023.png";
import SAE20232 from "@/assets/SAEDDC2023(2).png";
import SAE20233 from "@/assets/SAEDDC2023(3).png";
import techfest from "@/assets/IITBTechfest2024.png";
import techfest2 from "@/assets/IITBTechfest2024(2).png";
import boeingmarch from "@/assets/BoeingMarch2025(1).png";
import boeingmarch2 from "@/assets/BoeingMarch2025(2).png";
import WS2025Jan from "@/assets/SAEDDCWorkshop2024(1).png";
import WS20252Jan from "@/assets/SAEDDCWorkshop2024(2).png";
import step1 from "@/assets/1.png";
import step2 from "@/assets/2.png";
import step3 from "@/assets/3.png";
import step4 from "@/assets/4.png";
import step5 from "@/assets/5.png";

export function Competitions() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the most recent competition (rightmost) on mount
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = timelineRef.current.scrollWidth;
    }
  }, []);

  const timelineEvents = [
    {
      date: '2019',
      event: 'SAE DDC',
      award: 'AIR 6 Overall and AIR 2 for Best Technical Presentation',
      location: 'Chennai, India',
      description: '',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      ],
    },

    {
      date: '2020',
      event: 'SAE DDC',
      award: 'AIR 3 Overall and AIR 2 for Best Technical Presentation',
      location: 'Chennai, India',
      description: 'Achieved top ranks despite challenges posed by the pandemic.',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      ],
    },

    {
      date: '2021',
      event: 'SAE DDC',
      award: 'AIR 1 for Best Technical Presentation and AIR 12 Overall ',
      location: 'Chennai, India',
      description: 'Excelled in virtual presentations and design reviews.',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      ],
    },

    {
      date: '2021',
      event: "BIT Techfest's Smart Drone Challenge",
      award: 'AIR 1',
      location: '',
      description: 'Secured first place among many teams with an innovative design.',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      ],
    },

    {
      date: '2022',
      event: 'Udaan Drone Ideation' ,
      award: 'First Runner-up',
      location: '',
      description: 'Recognized for innovative drone concepts addressing real-world challenges.',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      ],
    },

    {
      date: '2023',
      event: 'SAE DDC',
      award: 'AIR 2 for Best Aerodynamic Analysis (CFD) and AIR 12 overall',
      location: 'Chennai, India',
      description: 'Received recognition for innovative wing design and structural optimization.',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      ],
    },
    {
      date: '2024',
      event: 'SAE DDC',
      award: 'All India Rank 3 in Overall Performance – Micro Class , All India Rank 3 in Best CFD Analysis, All India Rank 12 in Overall Performance – Regular Class',
      location: 'Chennai, India',
      description: 'Demonstrated exceptional teamwork and manufacturing excellence.',
      images: [
        SAE2023,
        SAE20232,
        SAE20233,
      ],
    },
    {
      date: 'December 2024',
      event: 'IIT Bombay Techfest',
      award: '',
      location: 'IIT Bombay',
      description: 'Competed against 300+ teams showcasing our latest RC aircraft design and innovations.',
      images: [
        techfest,
        techfest2,
      ],
    },
    {
      date: '2024',
      event: 'SAE DDC Workshop',
      award: '',
      location: 'Chennai, India',
      description: 'Participated in a hands-on workshop focusing on advanced aeromodelling techniques.',
      images: [
        WS2025Jan,
        WS20252Jan,
      ],
    },

    {
      date: 'March 2025',
      event: 'Boeing Aeromodelling Competition',
      award: 'Semi Finalist',
      location: 'IIT Bombay',
      description: 'Cleared the qualifier round and advanced to the main competition round.',
      images: [
        boeingmarch,
        boeingmarch2,
      ],
    },
    {
      date: 'March 2025',
      event: 'SAE DDC',
      award: '',
      location: 'Chennai, India',
      description: 'Successfully cleared the preliminary design review and advanced to the next competition phase.',
      images: [
        SAE2024,
        SAE20242,
      ],
    },
    {
      date: 'August 2025',
      event: 'SAE DDC Workshop',
      award: '',
      location: 'Pratyusha College of Engineering, Thiruvallur',
      description: 'Manufactured and tested a demo aircraft as part of a hands-on workshop conducted by SAE India.',
      images: [
        WS2025,
        WS20252,
        WS20253,
      ],
    },
    {
      date: 'November 2025',
      event: 'Boeing Aermodelling Competition',
      award: 'Semi Finalist',
      location: 'IIT Gandhinagar',
      description: 'Cleared the qualifier round and lifted 6 golfballs in the main round.',
      images: [
        boeingLocal,
      ],
    },
  ];

  const cyclePhases = [
    { 
      event: 'Conceptual Design Phase', 
      icon: Target,
      description: 'Initial brainstorming, concept sketches, and preliminary design analysis.',
      images: [
        step1,
      ],
    },
    { 
      event: 'Detailed Design & Simulation', 
      icon: Calendar,
      description: 'CAD modeling, CFD analysis, and structural simulations.',
      images: [
        step2,
      ],
    },
    { 
      event: 'Manufacturing & Assembly', 
      icon: Trophy,
      description: 'Precision fabrication, component manufacturing, and aircraft assembly.',
      images: [
        step3,
      ],
    },
    { 
      event: 'Testing & Optimization', 
      icon: Award,
      description: 'Ground tests, flight trials, and performance optimization.',
      images: [
        step4,
      ],
    },
    { 
      event: 'Competition Season', 
      icon: Medal,
      description: 'Final preparations, travel, and competition participation.',
      images: [
        step5,
      ],
    },
  ];

  const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [images.length]);

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="relative group">
        <div className="relative h-48 overflow-hidden rounded-lg">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageWithFallback
              src={images[currentIndex]}
              alt="Competition"
              className="w-full h-48 object-cover"
            />
          </motion.div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-500"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-500"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-cyan-400 w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

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
            Our Competitions
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
            We compete at the highest level in prestigious national aeromodelling competitions, consistently pushing the boundaries of innovation and excellence.
          </motion.p>
        </motion.div>

        {/* Competition History Timeline - Horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl text-white text-center mb-4">Competition History</h2>
          <p className="text-gray-400 text-center mb-12">Our journey through prestigious competitions</p>
          
          <div 
            ref={timelineRef}
            className="relative overflow-x-auto pb-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="relative inline-flex gap-10 px-8 min-w-full">
              {/* Continuous horizontal line */}
              <div className="absolute top-[52px] left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500" />
              
              {timelineEvents.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center" style={{ minWidth: '320px' }}>
                  {/* Date label above */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4 text-cyan-400 text-center whitespace-nowrap"
                  >
                    {item.date}
                  </motion.div>

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.3 }}
                    className="relative z-10"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 border-4 border-slate-950 shadow-lg shadow-cyan-500/50" />
                  </motion.div>

                  {/* Competition Card below */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="mt-8 w-80 bg-gradient-to-br from-slate-900/90 to-purple-900/40 border border-purple-500/30 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl"
                  >
                    <ImageCarousel images={item.images} />
                    
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg text-white">{item.event}</h3>
                        <Trophy className="w-5 h-5 text-yellow-400 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-purple-400 mb-2">{item.award}</p>
                      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Competition Cycle - Vertical */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl text-white text-center mb-4">Competition Cycle</h2>
          <p className="text-gray-400 text-center mb-12">Our development process from concept to competition</p>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-magenta-500" />

            <div className="space-y-24">
              {cyclePhases.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-1 bg-gradient-to-br from-slate-900/90 to-purple-900/40 border border-purple-500/30 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl"
                  >
                    <ImageCarousel images={item.images} />
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50"
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-xl text-white">{item.event}</h3>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 border-4 border-slate-950 shadow-lg shadow-purple-500/50 flex-shrink-0"
                  />

                  {/* Spacer for other side */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-magenta-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl text-white mb-8">Competition Legacy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Awards Won' },
              { value: '8', label: 'Competitions' },
              { value: '5', label: 'Years Active' },
              { value: '100%', label: 'Dedication' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}