"use client"

import { FC, ReactNode, createContext, useContext, useState } from "react";

// Define the type for form data
interface FormData {
  name: string;
  address: string;
  zip: string;
  city: string;
  email: string;
  phone: string;
}

// Define the type for context value
interface PaymentContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

// Create a context for payment data
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Custom hook to access payment data
export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};

// Payment context provider component
export const PaymentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
  });

  // Function to update form data
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData });
  };

  const value: PaymentContextType = {
    formData,
    updateFormData,
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};