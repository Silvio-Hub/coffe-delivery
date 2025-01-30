import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface FormData {
  zipCode: string;
  street: string;
  residentialNumber: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

export interface FormErrors {
  zipCode: string;
  street: string;
  residentialNumber: string;
  district: string;
  city: string;
  uf: string;
}

export const FormContext = createContext({
  formData: {
    zipCode: "",
    street: "",
    residentialNumber: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  } as FormData,
  formErrors: {
    zipCode: "",
    street: "",
    residentialNumber: "",
    district: "",
    city: "",
    uf: "",
  } as FormErrors,
  paymentMethod: "",
  setFormData: (() => {}) as Dispatch<SetStateAction<FormData>>,
  setFormErrors: (() => {}) as Dispatch<SetStateAction<FormErrors>>,
  setPaymentMethod: (() => {}) as Dispatch<SetStateAction<string>>,
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    zipCode: "",
    street: "",
    residentialNumber: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    zipCode: "",
    street: "",
    residentialNumber: "",
    district: "",
    city: "",
    uf: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <FormContext.Provider
      value={{
        formData,
        formErrors,
        paymentMethod,
        setFormData,
        setFormErrors,
        setPaymentMethod,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
