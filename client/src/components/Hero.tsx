import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Ocean background with waves animation */}
        <motion.div 
          className="absolute bottom-0 left-0 w-[200%] h-16 bg-light-blue/30"
          animate={{ x: [0, '-50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[200%] h-10 bg-light-blue/20"
          animate={{ x: [0, '-50%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[200%] h-6 bg-light-blue/10"
          animate={{ x: [0, '-50%'] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear", delay: 4 }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm md:text-base uppercase tracking-wider mb-2 font-heading font-semibold">
              <span className="text-primary">Merchant Navy Engineer</span> 
              <i className="fas fa-arrow-right text-accent mx-2"></i> 
              <span className="text-accent">Product Leader</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              From navigating oceans to navigating 
              <span className="text-accent"> user journeys</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary/80">
              I charted a new course as a Product Manager, building solutions that empower millions. Building products that matter. Learning, leading, and leaving an impact at every step.
            </p>
            <motion.a 
              href="#journey" 
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition"
              whileHover={{ y: -5 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#journey');
              }}
            >
              Explore My Journey <i className="fas fa-ship ml-2"></i>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-64 md:h-96 relative">
              <motion.div 
                className="w-full h-full overflow-hidden rounded-lg shadow-lg relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 800 600" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="800" height="600" fill="#e0f7fa" />
                  
                  {/* Ocean */}
                  <path d="M0,400 C100,360 200,440 300,400 C400,360 500,440 600,400 C700,360 800,440 800,400 L800,600 L0,600 Z" fill="#1a3a5f" opacity="0.2" />
                  
                  {/* Ship */}
                  <g transform="translate(400, 350)">
                    <path d="M-100,0 L100,0 L80,-50 L-80,-50 Z" fill="#34495e" />
                    <rect x="-20" y="-120" width="40" height="70" fill="#7f8c8d" />
                    <path d="M-20,-50 L20,-50 L20,-120 L-20,-120 Z" fill="#34495e" />
                    <path d="M20,-100 L80,-100 L80,-90 L20,-90 Z" fill="#e74c3c" />
                  </g>
                  
                  {/* Compass */}
                  <g transform="translate(700, 100)">
                    <circle cx="0" cy="0" r="40" fill="white" stroke="#1a3a5f" strokeWidth="2" />
                    <path d="M0,-30 L10,0 L0,30 L-10,0 Z" fill="#e74c3c" transform="rotate(45)" />
                    <path d="M0,-30 L10,0 L0,30 L-10,0 Z" fill="#34495e" transform="rotate(225)" />
                    <circle cx="0" cy="0" r="5" fill="#1a3a5f" />
                  </g>
                </svg>
              </motion.div>
              <div className="absolute bottom-0 right-0 m-4 bg-primary/80 text-white p-3 rounded-lg backdrop-blur-sm">
                <span className="font-handwritten text-lg">Set sail with my story</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
