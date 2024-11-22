"use client";

import React, { createContext, useContext, useState } from "react";

type CadastroData = {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
}

type CadastroContextType = {
    formData: CadastroData;
    setFormData: (data: CadastroData) => void;
}

const CadastroContext = createContext<CadastroContextType | undefined>({} as CadastroContextType);

const CadastroProvider= ({children}:{children:React.ReactNode }) => {

    const [formData, setFormData] = useState<CadastroData>({
      nome: "",
      cpf: "",
      email: "",
      senha: "",
    })

    return (
        <CadastroContext.Provider value={{ formData, setFormData }}>
          {children}
        </CadastroContext.Provider>
    )
}

export {CadastroProvider, CadastroContext}

export const useCadastro = ()=>  {
    const context = useContext(CadastroContext);
    return context
}
  