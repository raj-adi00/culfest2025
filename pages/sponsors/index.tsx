import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Globe, 
  ChevronLeft 
} from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Type definitions
interface Sponsor {
  name: string;
  tier: 'Diamond' | 'Platinum' | 'Gold';
  logo: string;
  description: string;
}

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

interface SponsorCardProps {
  sponsor: Sponsor;
  index: number;
}

interface MousePosition {
  x: number;
  y: number;
}

interface ScrollContainers {
  Diamond: React.RefObject<HTMLDivElement>;
  Platinum: React.RefObject<HTMLDivElement>;
  Gold: React.RefObject<HTMLDivElement>;
}

// Particle Background Component
const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            opacity: Math.random() * 0.8 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1 + Math.random() * 0.3, 1],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {i % 3 === 0 ? (
            <motion.div 
              className="relative"
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star 
                className="h-4 w-4 text-white/70 stroke-[1.5] opacity-100" 
                fill="currentColor"
              />
              <Star 
                className="h-3 w-3 text-white/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" 
                fill="currentColor"
              />
            </motion.div>
          ) : (
            <div className="h-1.5 w-1.5 bg-white/50 rounded-full" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Scroll Button Component
const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick, disabled }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-sm ${
      direction === 'left' ? 'left-4' : 'right-4'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-800/80'}`}
    disabled={disabled}
  >
    {direction === 'left' ? (
      <ChevronLeft className="h-6 w-6" />
    ) : (
      <ChevronRight className="h-6 w-6" />
    )}
  </motion.button>
);

// Sponsor Card Component
const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
      }}
      whileHover={{ scale: 1.02 }}
      className="relative min-w-[300px] md:min-w-[400px]"
    >
      <Card className="group bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border-zinc-700/50 backdrop-blur-sm overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="pb-2">
          <motion.div
            initial={false}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge variant="outline" className="bg-zinc-900/50 space-x-2">
              <Sparkles className="h-3 w-3" />
              <span>{sponsor.tier}</span>
            </Badge>
          </motion.div>

          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: [0, 5, -5, 3, -3, 0],
              boxShadow: '0 0 20px rgba(255,255,255,0.2)'
            }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
            className="relative w-full h-48 rounded-xl overflow-hidden flex items-center justify-center"
          >
            <img 
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </CardHeader>

        <CardContent className="mt-4">
          <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
          <p className="text-zinc-400 mb-6">{sponsor.description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn relative w-full px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-600 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 transition-colors"
          >
            <span className="relative flex items-center justify-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Visit Website</span>
              <motion.div
                className="absolute right-2"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </span>
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Sponsors Page Component
const SponsorsPage: React.FC = () => {
   const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
   const spotlightRef = useRef<HTMLDivElement>(null);
   
   const scrollContainers: ScrollContainers = {
     Diamond: useRef<HTMLDivElement>(null),
     Platinum: useRef<HTMLDivElement>(null),
     Gold: useRef<HTMLDivElement>(null),
   };
 
   const sponsors: Sponsor[] = [
     {
       name: "TechVision",
       tier: "Diamond",
       logo: "/api/placeholder/100/100",
       description: "Leading the future of technology innovation",
     },
    {
      name: "InnovateCorp",
      tier: "Diamond",
      logo: "/api/placeholder/100/100",
      description: "Pioneering breakthrough technologies",
    },
    {
      name: "Future Labs",
      tier: "Platinum",
      logo: "/api/placeholder/100/100",
      description: "Building tomorrow's solutions today",
    },
    {
      name: "NextGen Systems",
      tier: "Platinum",
      logo: "/api/placeholder/100/100",
      description: "Shaping the next generation of tech",
    },
    {
      name: "GlobalTech",
      tier: "Gold",
      logo: "/api/placeholder/100/100",
      description: "Empowering digital transformation",
    },
    {
      name: "TechNova",
      tier: "Gold",
      logo: "/api/placeholder/100/100",
      description: "Innovating at the speed of light",
    },
    {
      name: "TechVision",
      tier: "Diamond",
      logo: "/api/placeholder/100/100",
      description: "Leading the future of technology innovation",
    },
   {
     name: "InnovateCorp",
     tier: "Diamond",
     logo: "/api/placeholder/100/100",
     description: "Pioneering breakthrough technologies",
   },
   {
     name: "Future Labs",
     tier: "Platinum",
     logo: "/api/placeholder/100/100",
     description: "Building tomorrow's solutions today",
   },
   {
     name: "NextGen Systems",
     tier: "Platinum",
     logo: "/api/placeholder/100/100",
     description: "Shaping the next generation of tech",
   },
   {
     name: "GlobalTech",
     tier: "Gold",
     logo: "/api/placeholder/100/100",
     description: "Empowering digital transformation",
   },
   {
     name: "TechNova",
     tier: "Gold",
     logo: "/api/placeholder/100/100",
     description: "Innovating at the speed of light",
   },
  ];

  // Group sponsors by tier
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
   if (!acc[sponsor.tier]) {
     acc[sponsor.tier] = [];
   }
   acc[sponsor.tier].push(sponsor);
   return acc;
 }, {} as Record<string, Sponsor[]>);

 const tierOrder: Sponsor['tier'][] = ['Diamond', 'Platinum', 'Gold'];

 const handleScroll = (tier: Sponsor['tier'], direction: 'left' | 'right') => {
   const container = scrollContainers[tier].current;
   if (container) {
     const scrollAmount = 400;
     const newScrollPosition = direction === 'left' 
       ? container.scrollLeft - scrollAmount 
       : container.scrollLeft + scrollAmount;
     
     container.scrollTo({
       left: newScrollPosition,
       behavior: 'smooth'
     });
   }
 };

 const canScroll = (tier: Sponsor['tier'], direction: 'left' | 'right'): boolean => {
   const container = scrollContainers[tier].current;
   if (!container) return false;
   
   if (direction === 'left') {
     return container.scrollLeft > 0;
   } else {
     return container.scrollLeft < (container.scrollWidth - container.clientWidth);
   }
 };

 useEffect(() => {
   const handleMouseMove = (e: MouseEvent) => {
     if (spotlightRef.current) {
       const rect = spotlightRef.current.getBoundingClientRect();
       setMousePosition({
         x: e.clientX - rect.left,
         y: e.clientY - rect.top,
       });
     }
   };

   window.addEventListener('mousemove', handleMouseMove);
   return () => window.removeEventListener('mousemove', handleMouseMove);
 }, []);

 return (
   <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
     <ParticleBackground />
      
      {/* Hero Section with Spotlight */}
      <div 
        ref={spotlightRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3 
            }}
            className="flex justify-center gap-2 mb-6"
          >
            <Badge className="bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-zinc-700/50 backdrop-blur-sm">
              Our Sponsors
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-zinc-500"
          >
            Premium Partners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-zinc-400 max-w-xl mx-auto mb-8"
          >
            Join forces with industry leaders shaping the future of technology
          </motion.p>
        </motion.div>
      </div>

      {/* Tiered Sponsors Section */}
<div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
  {tierOrder.map((tier) => (
    <div key={tier} className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        {tier} Sponsors
      </motion.h2>
      
      <div className="relative">
        <ScrollButton
          direction="left"
          onClick={() => handleScroll(tier, 'left')}
          disabled={!canScroll(tier, 'left')}
        />
        
        <div
          ref={scrollContainers[tier]}
          className="overflow-x-hidden"
          style={{ 
            WebkitOverflowScrolling: 'touch', 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
        >
          <div className="flex gap-8 pb-8 scroll-smooth">
            {groupedSponsors[tier]?.map((sponsor, index) => (
              <div key={`${sponsor.name}-${index}`} className="snap-center">
                <SponsorCard sponsor={sponsor} index={index} />
              </div>
            ))}
          </div>
        </div>

        <ScrollButton
          direction="right"
          onClick={() => handleScroll(tier, 'right')}
          disabled={!canScroll(tier, 'right')}
        />
      </div>
    </div>
  ))}
</div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/80 z-50"
      >
        <ChevronRight className="h-6 w-6 rotate-[-90deg]" />
      </motion.button>
    </div>
  );
};

export default SponsorsPage;