import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { journeyData } from '@/lib/journeyData';

interface CheckpointModalProps {
  id: string;
}

export default function CheckpointModal({ id }: CheckpointModalProps) {
  const { closeCheckpointModal } = useModal();
  const checkpoint = journeyData.find(point => point.id === id);
  
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCheckpointModal(id);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [id, closeCheckpointModal]);
  
  if (!checkpoint) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto flex items-center justify-center">
        <motion.div 
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => closeCheckpointModal(id)}
        />
        
        <motion.div 
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 m-4"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="sticky top-0 bg-primary text-white p-6 flex justify-between items-center">
            <h3 className="text-2xl font-heading font-bold">{checkpoint.title}</h3>
            <button 
              onClick={() => closeCheckpointModal(id)} 
              className="text-white hover:text-accent transition"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="p-6">
            {checkpoint.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {checkpoint.tags.map((tag, index) => (
                  <span key={index} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {checkpoint.quote && (
              <blockquote className="bg-primary/5 p-4 rounded-lg italic mb-8 border-l-4 border-primary">
                "{checkpoint.quote}"
              </blockquote>
            )}
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {checkpoint.painPoints && (
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-4">Pain Points Solved</h4>
                  <ul className="space-y-3">
                    {checkpoint.painPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-success mt-1 mr-3"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {checkpoint.achievements && (
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {checkpoint.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-trophy text-accent mt-1 mr-3"></i>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {checkpoint.learnings && (
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-4">Key Learnings</h4>
                  <ul className="space-y-3">
                    {checkpoint.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-lightbulb text-accent mt-1 mr-3"></i>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {checkpoint.inspirations && (
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-4">Inspirations</h4>
                  <ul className="space-y-3">
                    {checkpoint.inspirations.map((inspiration, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-star text-accent mt-1 mr-3"></i>
                        <span>{inspiration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {checkpoint.conclusion && (
              <div className="bg-light-blue p-6 rounded-lg">
                <h4 className="text-xl font-heading font-semibold mb-3">Learning Experience</h4>
                <p>"{checkpoint.conclusion}"</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
