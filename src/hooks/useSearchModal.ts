// import { create } from 'zustand';

import { useState } from 'react';

// interface SearchModalStore {
//   isOpen: boolean;
//   onOpen: () => void;
//   onClose: () => void;
// }

// const useSearchModal = create<SearchModalStore>((set) => ({
//   isOpen: false,
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false })
// }));

const useSearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return [isOpen, setIsOpen];
};

export default useSearchModal;
