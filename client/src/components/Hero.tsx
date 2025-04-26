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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm md:text-base uppercase tracking-wider mb-2 font-heading font-semibold">
              <span className="text-primary">Merchant Navy Engineer to Product Leadership</span>
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
        </div>
      </div>
    </section>
  );
}
