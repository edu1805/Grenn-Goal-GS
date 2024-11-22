"use client"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Cabecalho from "@/components/Cabecalho";
import FormularioEletrodomesticos from "@/components/FormularioEletrodomestico";

export default function Previsao() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [totalCost, setTotalCost] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        consumoMedioMensal: 0,
        precoMedioEnergia: 0,
        tipoResidencia: "",
        numeroPessoas: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }
    const selectHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };
  

    const calculateTotalCost = () => {
        const { consumoMedioMensal, precoMedioEnergia } = formData;
        const total = consumoMedioMensal * precoMedioEnergia;
        setTotalCost(total);
    };

    const onSubmit: SubmitHandler<any> = (data) => {
        setFormData(data);
        calculateTotalCost();
    };

    const handleReset = () => {
        reset();
        setTotalCost(null);
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/residencia", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Dados salvos com sucesso!");
                reset();
            } else {
                alert("Erro ao salvar os dados.");
                console.log(formData);
                
            }
        } catch (error) {
            console.error("Erro ao salvar os dados:", error);
            alert("Erro ao conectar com a API.");
        }
    };

    return (
        <main className="mb-10">
            <Cabecalho />
            <h2 className="text-center text-2xl mt-8">
              Preencha o formulário abaixo para prever seu consumo de energia e descobrir o impacto de mudanças nos hábitos.</h2>
            <div className="max-w-5xl mx-auto bg-gray-400 p-6 rounded-md shadow-md mt-5">
                <h3 className="text-xl font-semibold mb-3">Informações básicas</h3>

                <form onSubmit={handleSave} className="grid grid-cols-2 gap-x-6">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="consumoMedioMensal" className="block font-medium text-black">
                              Consumo Médio Mensal (KWh):</label>
                            <input 
                                id="consumoMedioMensal" 
                                type="number" 
                                placeholder="Ex: 4000kwh"
                                {...register("consumoMedioMensal", { required: "O consumo é obrigatório", min: { 
                                  value: 0, message: "O consumo deve ser um valor maior que 0" } })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={handleChange} 
                                value={formData.consumoMedioMensal}
                            />
                            {errors.consumoMedioMensal && <p className="text-red-500 text-sm mt-1">
                              {errors.consumoMedioMensal.message?.toString()}</p>}
                        </div>

                        <div>
                            <label htmlFor="precoMedioEnergia" className="block font-medium text-black">Preço Médio de Energia (R$):</label>
                            <input 
                                id="precoMedioEnergia" 
                                type="number" 
                                step="0.01" 
                                placeholder="Ex: 300,00 R$"
                                {...register("precoMedioEnergia", { required: "O preço é obrigatório", min: { 
                                  value: 0, message: "O preço deve ser um valor maior que 0" } })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={handleChange} 
                                value={formData.precoMedioEnergia}
                            />
                            {errors.precoMedioEnergia && <p className="text-red-500 text-sm mt-1">{errors.precoMedioEnergia.message?.toString()}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="mb-3">
                            <label htmlFor="tipoResidencia" className="block font-medium text-black">Tipo de Residência:</label>
                            <select 
                                id="tipoResidencia" 
                                {...register("tipoResidencia", { required: "Selecione o tipo de residência" })}
                                className="mt-1 block w-full p-2 h-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={selectHandleChange} 
                                value={formData.tipoResidencia}
                            >
                                <option value="" disabled>Selecione o tipo de residência</option>
                                <option value="Casa">Casa</option>
                                <option value="Apartamento">Apartamento</option>
                                <option value="Comercial">Comercial</option>
                            </select>
                            {errors.tipoResidencia && <p className="text-red-500 text-sm mt-1">
                              {errors.tipoResidencia.message?.toString()}</p>}
                        </div>

                        <div>
                            <label htmlFor="numeroPessoas" className="block font-medium text-black">
                              Número de Pessoas na Residência:</label>
                            <input 
                                id="numeroPessoas" 
                                type="number" 
                                placeholder="Ex: 4"
                                {...register("numeroPessoas", { required: "O número de pessoas é obrigatório", min: { 
                                  value: 1, message: "Deve haver pelo menos 1 pessoa na residência" } })}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                onChange={handleChange} 
                                value={formData.numeroPessoas}
                            />
                            {errors.numeroPessoas && <p className="text-red-500 text-sm mt-1">
                              {errors.numeroPessoas.message?.toString()}</p>}
                        </div>
                    </div>
                    <div></div>

                    <div className="text-end">
                        <button 
                            type="submit" 
                            className="bg-blue-500 w-fit px-4 py-2 mt-4 text-white font-semibold 
                            rounded-md hover:bg-blue-600 transition"
                        >
                            Salvar
                        </button>
                    </div>

                </form>
                <FormularioEletrodomesticos />

                {totalCost !== null && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h3 className="font-semibold">Custo Total Estimado:</h3>
                        <p>R$ {totalCost.toFixed(2)}</p>
                    </div>
                )}

            </div>
        </main>
    );
}
