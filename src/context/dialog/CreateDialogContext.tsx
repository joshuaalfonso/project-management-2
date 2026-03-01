import React, { createContext, useContext, useState } from "react";

export function createDialogContext<T>() {
  
  type DialogContextType = {
    open: string;
    setOpen: (open: string) => void;
    selectedItem: T | null;
    setSelectedItem: (item: T | null) => void;
    detailOpen: boolean;
    setDetailOpen: (item: boolean) => void
    selectedId: number | undefined;
    setSelectedId: (item: number) => void
  };

  const DialogContext = createContext<DialogContextType | undefined>(undefined);

  const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState('');
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    const [detailOpen, setDetailOpen] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number | undefined>();

    return (
      <DialogContext.Provider
        value={{ 
          open, 
          setOpen, 
          selectedItem, 
          setSelectedItem,
          detailOpen,
          setDetailOpen,
          selectedId,
          setSelectedId
        }}
      >
        {children}
      </DialogContext.Provider>
    );
  };

  const useDialog = () => {
    const ctx = useContext(DialogContext);
    if (!ctx) {
      throw new Error("useDialog must be used inside DialogProvider");
    }
    return ctx;
  };

  return { DialogProvider, useDialog };
}
