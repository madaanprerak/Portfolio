import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full">
          {/* Ocean background with waves animation */}
          <motion.div 
            className="absolute bottom-0 left-0 w-[200%] h-24 bg-white/20"
            animate={{ x: [0, '-50%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[200%] h-16 bg-white/10"
            animate={{ x: [0, '-50%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear", delay: 3 }}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The Lighthouse Ahead 🗼
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Where I'm sailing next in my product leadership journey
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">My Product Philosophy</h3>
              <p className="mb-4">I believe the best products arise at the intersection of business goals, user needs, and technological possibilities. Throughout my journey, I've focused on building solutions that are:</p>
              <ul className="space-y-2">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>User-centered at their core, solving real pain points</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Data-informed yet empathy-driven</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Scalable while maintaining quality</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Inclusive and accessible across diverse contexts</span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">Where I'm Heading</h3>
              <p className="mb-4">My career vision is to build user-centric, impactful, tech-driven products at a global scale. I'm particularly interested in:</p>
              <ul className="space-y-2">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <i className="fas fa-star text-accent mt-1 mr-3"></i>
                  <span>Leading product teams that solve meaningful problems</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <i className="fas fa-star text-accent mt-1 mr-3"></i>
                  <span>Leveraging AI to create more human-centered experiences</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <i className="fas fa-star text-accent mt-1 mr-3"></i>
                  <span>Building products that bridge technological divides</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <i className="fas fa-star text-accent mt-1 mr-3"></i>
                  <span>Mentoring the next generation of product managers</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-96 relative flex items-center justify-center">
              <svg 
                viewBox="0 0 400 500" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sky background */}
                <rect width="400" height="500" fill="#0d2538" />
                
                {/* Stars */}
                {Array.from({ length: 50 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={Math.random() * 400}
                    cy={Math.random() * 300}
                    r={Math.random() * 1.5}
                    fill="white"
                    opacity={Math.random() * 0.8 + 0.2}
                  />
                ))}
                
                {/* Ocean */}
                <path d="M0,300 C80,280 160,310 240,290 C320,270 400,300 400,290 L400,500 L0,500 Z" fill="#1a3a5f" />
                
                {/* Lighthouse */}
                <g transform="translate(200, 250)">
                  <rect x="-30" y="0" width="60" height="150" fill="#ecf0f1" />
                  <rect x="-40" y="150" width="80" height="20" fill="#ecf0f1" />
                  <rect x="-20" y="-40" width="40" height="40" fill="#e74c3c" />
                  <path d="M-20,-40 L20,-40 L0,-70 Z" fill="#34495e" />
                  
                  {/* Light beam */}
                  <motion.g
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <path d="M0,-40 L-150,50 L-100,50 Z" fill="white" opacity="0.1" />
                    <path d="M0,-40 L150,100 L100,100 Z" fill="white" opacity="0.1" />
                  </motion.g>
                </g>
                
                {/* Rocks */}
                <path d="M100,400 Q130,380 150,400 Q170,380 200,400 Q230,380 250,400 L250,500 L100,500 Z" fill="#34495e" />
                <path d="M300,450 Q320,430 340,450 Q360,430 380,450 L380,500 L300,500 Z" fill="#34495e" />
              </svg>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <span className="font-handwritten text-2xl">A journey fueled by purpose — with much more ahead</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
