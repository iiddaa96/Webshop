"use client"

import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { CustomerInfo } from "../ui/PaymentSection";

// Define the type for context value
interface PaymentContextType {
  customer: CustomerInfo;
  setCustomer: Dispatch<SetStateAction<CustomerInfo>>
}

// Create a context for payment data
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Custom hook to access payment data
export const useCustomer = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};

// Payment context provider component
export const PaymentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    lastname:"",
    address: "",
    zip: 0,
    city: "",
    email: "",
    phone: "",
  });

  const value: PaymentContextType = {
    customer,
    setCustomer,
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};