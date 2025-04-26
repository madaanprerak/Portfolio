import { useState } from 'react';
import { motion } from 'framer-motion';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-primary text-white">
              <h3 className="text-2xl font-heading font-bold mb-6">Get In Touch</h3>
              <p className="mb-8">Interested in discussing product strategies, career transitions, or just want to connect? Drop me a message!</p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-accent"></i>
                  </div>
                  <span>madanprerak@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <i className="fab fa-linkedin-in text-accent"></i>
                  </div>
                  <span>linkedin.com/in/madanprerak</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-accent"></i>
                  </div>
                  <span>+91 965-018-8896</span>
                </motion.div>
              </div>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-semibold text-primary/80 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-semibold text-primary/80 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-semibold text-primary/80 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <motion.button 
                  type="submit" 
                  className="bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition w-full flex justify-center items-center"
                  whileHover={{ y: -5 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending <i className="fas fa-spinner fa-spin ml-2"></i></>
                  ) : (
                    <>Send Message <i className="fas fa-paper-plane ml-2"></i></>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
