import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Footer() {
  const socialLinks = [
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/madanprerak' },
    { icon: 'fab fa-medium', href: '#' }
  ];

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 5 }}
            >
              <i className="fas fa-anchor text-accent mr-2"></i>
              <span className="font-heading font-bold text-lg">Prerak Madan Voyage</span>
            </motion.div>
            <p className="mt-2 text-sm text-white/70">From Navigating Oceans to Navigating User Journeys</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/80 transition"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Prerak Madan Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
