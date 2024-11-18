"use client"
import Cabecalho from "@/components/Cabecalho";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useState } from "react";

interface FormData {
    consumption: number;
    price: number;
    residenceType: string;
    peopleCount: number;
  }

export default function Previsao(){

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [totalCost, setTotalCost] = useState<number | null>(null);

    const calculateTotalCost = (data:FormData) => {
        const { consumption, price, residenceType, peopleCount } = data;
    
        // Cálculo simples (pode ser modificado conforme necessário)
        const total= consumption * price;
        setTotalCost(total);
    };

    const onSubmit: SubmitHandler<FormData> = (data:FormData) => {
        calculateTotalCost(data);
    };

    return(
        <main>
            <Cabecalho/>
            <h2 className="text-center text-2xl mt-8">Preencha o formulário abaixo para prever seu consumo de energia e descobrir o impacto de mudanças nos hábitos.</h2>
            <div className="max-w-lg mx-auto bg-gray-400 p-6 rounded-md shadow-md mt-5">
                <h3>informações básicas</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Campo Consumo Médio Mensal (KWh) */}
                    <div>
                      <label htmlFor="consumption" className="block text-sm font-medium text-gray-700">
                        Consumo Médio Mensal (KWh):
                      </label>
                      <input
                        id="consumption"
                        type="number"
                        {...register("consumption", {
                          required: "O consumo é obrigatório",
                          min: {
                            value: 0,
                            message: "O consumo deve ser um valor maior que 0",
                          },
                        })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.consumption && (
                        <p className="text-red-500 text-sm mt-1">{errors.consumption.message?.toString()}</p>
                      )}
                    </div>
                  
                    {/* Campo Preço Médio de Energia */}
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Preço Médio de Energia (R$ por KWh):
                      </label>
                      <input
                        id="price"
                        type="number"
                        step="0.01"
                        {...register("price", {
                          required: "O preço é obrigatório",
                          min: {
                            value: 0,
                            message: "O preço deve ser um valor maior que 0",
                          },
                        })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.price && (
                        <p className="text-red-500 text-sm mt-1">{errors.price.message?.toString()}</p>
                      )}
                    </div>
                  
                    {/* Campo Tipo de Residência */}
                    <div>
                      <label htmlFor="residenceType" className="block text-sm font-medium text-gray-700">
                        Tipo de Residência:
                      </label>
                      <select
                        id="residenceType"
                        {...register("residenceType", { required: "Selecione o tipo de residência" })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Selecione</option>
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="comercial">Comercial</option>
                      </select>
                      {errors.residenceType && (
                        <p className="text-red-500 text-sm mt-1">{errors.residenceType.message?.toString()}</p>
                      )}
                    </div>
                  
                    {/* Campo Número de Pessoas na Residência */}
                    <div>
                      <label htmlFor="peopleCount" className="block text-sm font-medium text-gray-700">
                        Número de Pessoas na Residência:
                      </label>
                      <input
                        id="peopleCount"
                        type="number"
                        {...register("peopleCount", {
                          required: "O número de pessoas é obrigatório",
                          min: {
                            value: 1,
                            message: "Deve haver pelo menos 1 pessoa na residência",
                          },
                        })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.peopleCount && (
                        <p className="text-red-500 text-sm mt-1">{errors.peopleCount.message?.toString()}</p>
                      )}
                    </div>
                  
                    {/* Botão de Envio */}
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition"
                    >
                      Calcular Custo
                    </button>
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