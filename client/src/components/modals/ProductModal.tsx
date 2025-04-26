import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { productData } from '@/lib/productData';

interface ProductModalProps {
  id: string;
}

export default function ProductModal({ id }: ProductModalProps) {
  const { closeProductModal } = useModal();
  const product = productData.find(p => p.id === id);
  
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProductModal(id);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [id, closeProductModal]);
  
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto flex items-center justify-center">
        <motion.div 
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => closeProductModal(id)}
        />
        
        <motion.div 
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 m-4"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="sticky top-0 bg-primary text-white p-6 flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold">{product.name}</h3>
              <p className="text-sm text-white/80">{product.company}</p>
            </div>
            <button 
              onClick={() => closeProductModal(id)} 
              className="text-white hover:text-accent transition"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">
                {product.category}
              </span>
              {product.tags?.map((tag, index) => (
                <span key={index} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-heading font-semibold mb-4">Overview</h4>
                <p className="text-primary/80 mb-4">{product.longDescription || product.description}</p>
                
                <div className="mt-6">
                  <h5 className="text-lg font-heading font-semibold mb-3">Key Features</h5>
                  <ul className="space-y-2">
                    {product.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check text-success mt-1 mr-3"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-heading font-semibold mb-4">The Challenge</h4>
                <div className="bg-primary/5 p-4 rounded-lg mb-6">
                  <h5 className="font-semibold mb-2">Pain Points Addressed:</h5>
                  <ul className="space-y-2">
                    {product.painPoints?.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-exclamation-circle text-error mt-1 mr-2"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h4 className="text-xl font-heading font-semibold mb-4">Results & Impact</h4>
                <ul className="space-y-3">
                  {product.achievements?.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-trophy text-accent mt-1 mr-3"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {product.approach && (
              <div className="mb-8">
                <h4 className="text-xl font-heading font-semibold mb-4">Approach & Methodology</h4>
                <p className="text-primary/80 mb-4">{product.approach}</p>
                
                {product.process && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {product.process.map((step, index) => (
                      <div key={index} className="bg-light-blue p-4 rounded-lg">
                        <div className="mb-2 font-semibold flex items-center">
                          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mr-2 text-xs">
                            {index + 1}
                          </span>
                          {step.title}
                        </div>
                        <p className="text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {product.learnings && (
              <div className="bg-light-blue p-6 rounded-lg">
                <h4 className="text-xl font-heading font-semibold mb-3">Key Learnings</h4>
                <p>"{product.learnings}"</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
