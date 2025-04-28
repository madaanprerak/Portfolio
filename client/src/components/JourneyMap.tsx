import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { journeyData } from '@/lib/journeyData';
import { useJourneyNavigation } from '@/hooks/use-journey-navigation';

export default function JourneyMap() {
  const [isMobile, setIsMobile] = useState(false);
  const { openCheckpointModal } = useModal();
  const { currentCheckpoint, setCurrentCheckpoint, prevCheckpoint, nextCheckpoint } = useJourneyNavigation();
  const journeyPathRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Calculate ship position
  const shipPosition = `${16 + (currentCheckpoint / (journeyData.length - 1)) * 68}%`;
  
  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            My Product Journey Map
          </motion.h2>
          <motion.p 
            className="text-lg text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Follow the path that took me from engineering on the high seas to building digital products that impact millions
          </motion.p>
        </div>
      </div>

      {/* Mobile Journey (Vertical) */}
      {isMobile && (
        <div className="md:hidden block px-4">
          {journeyData.map((point, index) => (
            <motion.div 
              key={point.id} 
              className="journey-point relative mb-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {index < journeyData.length - 1 && (
                <div className="absolute left-4 top-0 h-full border-l-2 border-dashed border-primary/30"></div>
              )}
              <div className="flex items-start">
                <motion.div 
                  className={`${point.current ? 'bg-accent animate-pulse' : 'bg-primary'} text-white rounded-full w-10 h-10 flex items-center justify-center z-10`}
                  whileHover={{ scale: 1.1 }}
                >
                  <i className={`fas ${point.icon}`}></i>
                </motion.div>
                <div className="ml-6">
                  <h3 className="text-xl font-heading font-bold mb-2">{point.location}</h3>
                  <div className="text-sm text-primary/70 mb-3">
                    <span className="font-bold">{point.subtitle}</span>
                    {point.title.includes('—') && (
                      <>
                        <br />
                        {point.title.split('—')[1].trim()}
                      </>
                    )}
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <p className="text-primary/80 mb-3">
                      {point.shortDescription}
                    </p>
                    <motion.button 
                      className="text-accent font-semibold flex items-center text-sm"
                      whileHover={{ x: 5 }}
                      onClick={() => openCheckpointModal(point.id)}
                    >
                      Explore this chapter <i className="fas fa-chevron-right ml-1"></i>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Desktop Journey (Horizontal) */}
      {!isMobile && (
        <div className="hidden md:block relative">
          <div className="journey-path-container overflow-x-auto pb-10">
            <div ref={journeyPathRef} className="journey-path min-w-[200vw] relative px-10 py-20">
              {/* Journey path */}
              <div className="absolute left-16 right-16 top-1/2 transform -translate-y-1/2 border-2 border-dashed border-primary/30 z-0"></div>
              
              {/* Journey Ship (animated with scroll) */}
              
              <motion.div 
                className="absolute top-1/2 transform -translate-y-1/2 z-20 w-16 h-16"
                initial={{ left: "16%" }}
                animate={{ left: shipPosition }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,40 L52,40 L47,25 L17,25 Z" fill="#34495e" />
                    <path d="M27,15 L37,15 L37,25 L27,25 Z" fill="#2c3e50" />
                    <path d="M37,20 L47,20 L47,25 L37,25 Z" fill="#e74c3c" />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Checkpoints */}
              <div className="grid grid-cols-7 gap-4 relative z-10">
                {journeyData.map((checkpoint, index) => (
                  <div key={checkpoint.id} className="checkpoint-card">
                    <div className="h-64 flex flex-col items-center">
                      <motion.div 
                        className={`mb-2 w-12 h-12 rounded-full ${checkpoint.current ? 'bg-accent' : 'bg-primary'} flex items-center justify-center text-white hover:scale-110 transition cursor-pointer z-10 ${checkpoint.current ? 'animate-pulse' : ''}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => {
                          setCurrentCheckpoint(index);
                          openCheckpointModal(checkpoint.id);
                        }}
                      >
                        <i className={`fas ${checkpoint.icon}`}></i>
                      </motion.div>
                      <div className="text-center mt-2 mb-4">
                        <h3 className="font-heading font-semibold text-lg">

                            {checkpoint.title.includes('—') && (
                              <>
                                <br />
                                {checkpoint.title.split('—')[1].trim()}
                              </>
                            )}
                          </h3>
                        <p className="text-xs text-primary/70">
                          <span className="font-bold">{checkpoint.subtitle}</span>
                          <>
                            <br/>
                            {checkpoint.location}
                          </>
                        </p>
                      </div>
                      <motion.div 
                        className="bg-white p-3 rounded-lg shadow-md w-full mt-auto"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      >
                        <p className="text-xs text-primary/80">{checkpoint.tooltip}</p>
                      </motion.div>
                      
                      {/* Micro-interactions */}
                      {checkpoint.decoration && (
                        <motion.div 
                          className={`absolute -bottom-${checkpoint.decoration.position.y} ${checkpoint.decoration.position.x}-${checkpoint.decoration.position.offset} text-${checkpoint.decoration.size} text-primary/60 ${checkpoint.decoration.animation}`}
                          animate={checkpoint.decoration.animate}
                          transition={{ repeat: Infinity, duration: checkpoint.decoration.duration || 3 }}
                        >
                          <i className={`fas ${checkpoint.decoration.icon}`}></i>
                        </motion.div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-4 gap-3">
            <motion.button 
              id="prevCheckpoint" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
              whileHover={{ x: -5 }}
              onClick={prevCheckpoint}
              disabled={currentCheckpoint === 0}
            >
              <i className="fas fa-arrow-left mr-2"></i> Previous
            </motion.button>
            <motion.button 
              id="nextCheckpoint" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
              whileHover={{ x: 5 }}
              onClick={nextCheckpoint}
              disabled={currentCheckpoint === journeyData.length - 1}
            >
              Next <i className="fas fa-arrow-right ml-2"></i>
            </motion.button>
          </div>
        </div>
      )}
    </section>
  );
}
