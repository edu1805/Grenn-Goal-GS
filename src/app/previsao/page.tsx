"use client"
import Cabecalho from "@/components/Cabecalho";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useState } from "react";

interface FormData {
    consumoMedioMensal: number;
    price: number;
    residenceType: string;
    peopleCount: number;
  }

export default function Previsao(){

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [totalCost, setTotalCost] = useState<number | null>(null);

    const calculateTotalCost = (data:FormData) => {
        const { consumoMedioMensal, price, residenceType, peopleCount } = data;
    
        // Cálculo simples (pode ser modificado conforme necessário)
        const total= consumoMedioMensal * price;
        setTotalCost(total);
    };

    const onSubmit: SubmitHandler<FormData> = (data:FormData) => {
        calculateTotalCost(data);
    };

    const handleReset = () => {
      reset(); // Reseta os valores do formulário
      setTotalCost(null); // Limpa o estado do custo total
    };

    return(
        <main>
            <Cabecalho/>
            <h2 className="text-center text-2xl mt-8">Preencha o formulário abaixo para prever seu consumo de energia e descobrir o impacto de mudanças nos hábitos.</h2>
            <div className="max-w-5xl mx-auto bg-gray-400 p-6 rounded-md shadow-md mt-5">
                <h3 className="text-xl font-semibold mb-3">Informações básicas</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-x-6">
                  <div>
                    <div className="mb-3">
                      <label htmlFor="consumoMedioMensal" className="block font-medium text-black">Consumo Médio Mensal (KWh):</label>
                      <input id="consumoMedioMensal" type="number" placeholder="Ex: 4000kwh"
                        {...register("consumoMedioMensal", {required: "O consumo é obrigatório", min: {value: 0, message: "O consumo deve ser um valor maior que 0",}})}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.consumoMedioMensal && (<p className="text-red-500 text-sm mt-1">{errors.consumoMedioMensal.message?.toString()}</p>)}
                    </div>

                    <div>
                      <label htmlFor="price" className="block font-medium text-black">Preço Médio de Energia (R$):</label>
                      <input id="price" type="number" step="0.01" placeholder="Ex: 300,00 R$"
                        {...register("price", {required: "O preço é obrigatório", min: {value: 0, message: "O preço deve ser um valor maior que 0",}})}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.price && (<p className="text-red-500 text-sm mt-1">{errors.price.message?.toString()}</p>)}
                    </div>
                  </div>

                  <div className="mt-0">
                    <div className="mb-3 mt-0">
                      <label htmlFor="residenceType" className="block font-medium text-black">Tipo de Residência:</label>
                      <select id="residenceType" {...register("residenceType", { required: "Selecione o tipo de residência" })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="" disabled>Selecione o tipo de residência</option>
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="comercial">Comercial</option>
                      </select>
                      {errors.residenceType && (<p className="text-red-500 text-sm mt-1">{errors.residenceType.message?.toString()}</p>)}
                    </div>

                    <div>
                      <label htmlFor="peopleCount" className="block font-medium text-black">Número de Pessoas na Residência:</label>
                      <input id="peopleCount" type="number" placeholder="Ex: 4"
                        {...register("peopleCount", {required: "O número de pessoas é obrigatório",
                          min: {value: 1, message: "Deve haver pelo menos 1 pessoa na residência",}})}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.peopleCount && (<p className="text-red-500 text-sm mt-1">{errors.peopleCount.message?.toString()}</p>)}
                    </div>
                  </div>
                  
                  <div className="flex">
                    <button type="submit"
                      className="w-full bg-blue-500 text-white font-semibold p-2 py-2 mt-3 rounded-md hover:bg-blue-600 transition"
                    >Calcular Custo</button>
                  </div>

                  <div className="text-end">
                    <button type="button" onClick={handleReset} className="bg-gray-500 w-fit px-4 py-2 mt-4 text-white font-semibold rounded-md hover:bg-gray-600 transition ">Limpar</button>
                  </div>

                </form>
                {totalCost !== null && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h3 className="font-semibold">Custo Total Estimado:</h3>
                        <p>R$ {totalCost.toFixed(2)}</p>
                    </div>
                )}

            </div>
        </main>
    )
}