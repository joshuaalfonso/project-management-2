import React, { createContext, useContext, useState } from "react";

export function createDialogContext<T>() {
  
  type DialogContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    selectedItem: T | null;
    setSelectedItem: (item: T | null) => void;
  };

  const DialogContext = createContext<DialogContextType | undefined>(undefined);

  const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    return (
      <DialogContext.Provider
        value={{ open, setOpen, selectedItem, setSelectedItem }}
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
