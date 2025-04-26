import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ModalContextType {
  checkpointModals: Record<string, boolean>;
  productModals: Record<string, boolean>;
  openCheckpointModal: (id: string) => void;
  closeCheckpointModal: (id: string) => void;
  openProductModal: (id: string) => void;
  closeProductModal: (id: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [checkpointModals, setCheckpointModals] = useState<Record<string, boolean>>({});
  const [productModals, setProductModals] = useState<Record<string, boolean>>({});

  const openCheckpointModal = useCallback((id: string) => {
    setCheckpointModals(prev => ({ ...prev, [id]: true }));
  }, []);

  const closeCheckpointModal = useCallback((id: string) => {
    setCheckpointModals(prev => ({ ...prev, [id]: false }));
  }, []);

  const openProductModal = useCallback((id: string) => {
    setProductModals(prev => ({ ...prev, [id]: true }));
  }, []);

  const closeProductModal = useCallback((id: string) => {
    setProductModals(prev => ({ ...prev, [id]: false }));
  }, []);

  return (
    <ModalContext.Provider value={{
      checkpointModals,
      productModals,
      openCheckpointModal,
      closeCheckpointModal,
      openProductModal,
      closeProductModal
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
