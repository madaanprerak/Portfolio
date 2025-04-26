import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JourneyMap from '@/components/JourneyMap';
import Products from '@/components/Products';
import Skills from '@/components/Skills';
import Vision from '@/components/Vision';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CheckpointModal from '@/components/modals/CheckpointModal';
import ProductModal from '@/components/modals/ProductModal';
import { useModal } from '@/context/ModalContext';

export default function Home() {
  const { checkpointModals, productModals } = useModal();

  useEffect(() => {
    // Scroll to hash if it exists in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-secondary text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <JourneyMap />
      <Products />
      <Skills />
      <Vision />
      <Contact />
      <Footer />
      
      {/* Modals */}
      {Object.entries(checkpointModals).map(([id, isOpen]) => (
        isOpen && <CheckpointModal key={id} id={id} />
      ))}
      
      {Object.entries(productModals).map(([id, isOpen]) => (
        isOpen && <ProductModal key={id} id={id} />
      ))}
    </div>
  );
}
