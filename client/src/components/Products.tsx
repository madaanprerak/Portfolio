import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { productData } from '@/lib/productData';

export default function Products() {
  const { openProductModal } = useModal();

  return (
    <section id="products" className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Products That Set Sail 🚀
          </motion.h2>
          <motion.p 
            className="text-lg text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore the solutions I've built to solve real-world problems
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center relative overflow-hidden">
                <i className={`fas ${product.icon} text-6xl text-primary/30`}></i>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="p-4 text-white">
                    <p className="font-heading font-semibold">{product.company}</p>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-heading font-bold">{product.name}</h3>
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <p className="text-primary/80 mb-4">{product.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <i className="fas fa-exclamation-circle text-error mt-1 mr-2"></i>
                    <p className="text-sm text-primary/70">{product.painPoint}</p>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <p className="text-sm text-primary/70">{product.achievement}</p>
                  </div>
                </div>
                <motion.button 
                  className="text-accent font-heading font-semibold text-sm flex items-center"
                  whileHover={{ x: 5 }}
                  onClick={() => openProductModal(product.id)}
                >
                  View Case Study <i className="fas fa-arrow-right ml-2"></i>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
