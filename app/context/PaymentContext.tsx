"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { CustomerInfo } from "../ui/PaymentSection";

/**
 *  Definiera typen för context-värdena
 */
interface PaymentContextType {
  customer: CustomerInfo;
  setCustomer: Dispatch<SetStateAction<CustomerInfo>>;
}

/**
 * Skapa en kontext för betalningsdata
 */
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

/**
 * Anpassad hook för att få åtkomst till betalningsdata.
 * @returns {PaymentContextType} Betalningskontexttyp.
 * @throws {Error} Kastar ett fel om hooken inte används inom en PaymentProvider.
 */
export const useCustomer = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};

/**
 * Providerkomponent för betalningskontexten.
 * @param {Object} props - Props för komponenten.
 * @param {ReactNode} props.children - Barnkomponenterna som ska omslutas av kontexten.
 * @returns {JSX.Element} Providerkomponenten för PaymentContext.
 */
export const PaymentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [customer, setCustomer] = useState<CustomerInfo>({
    fullname: "",
    street: "",
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
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};
