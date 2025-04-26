import { motion } from 'framer-motion';

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Join My Voyage
          </motion.h2>
          <motion.p 
            className="text-lg text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let's connect and discuss product leadership, career transitions, or potential opportunities
          </motion.p>
        </div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-xl max-w-4xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 bg-primary text-white text-center">
            <h3 className="text-2xl font-heading font-bold mb-6">Get In Touch</h3>
            <p className="mb-8">Interested in discussing product strategies, career transitions, or just want to connect? Reach out through one of these channels!</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <motion.a 
                href="mailto:madanprerak@gmail.com"
                className="flex items-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-accent"></i>
                </div>
                <span>madanprerak@gmail.com</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/madanprerak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i className="fab fa-linkedin-in text-accent"></i>
                </div>
                <span>linkedin.com/in/madanprerak</span>
              </motion.a>
              <motion.div 
                className="flex items-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-accent"></i>
                </div>
                <span>+91 965-018-8896</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
