import React, { useState } from "react";

export default function FormularioEletrodomesticos() {
  const [eletrodomestico, setEletrodomestico] = useState({
    nome: "",
    tipo: "",
    potencia: 0,
    horasUsoDiarias: 0,
    quantidade: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEletrodomestico({
      ...eletrodomestico,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const residenciaId = 5

    try {
      const response = await fetch("/api/eletrodomestico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...eletrodomestico,
          residenciaId,
        }),
      });

      if (response.ok) {
        alert("Eletrodoméstico salvo com sucesso!");
        console.log(eletrodomestico, residenciaId);
        
        setEletrodomestico({
          nome: "",
          tipo: "",
          potencia: 0,
          horasUsoDiarias: 0,
          quantidade: 0,
        });
      } else {
        alert("Erro ao salvar os dados.");
        console.error("Erro ao enviar dados:", response.statusText);
      }
    } catch (error) {
      alert("Erro ao conectar à API.");
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold mt-5">Eletrodoméstico</h2>
      <div className="grid grid-cols-4 gap-x-4 items-end">
        <div>
          <label className="block font-medium text-black">Nome:</label>
          <input
            type="text"
            name="nome"
            value={eletrodomestico.nome}
            onChange={handleChange}
            placeholder="Ex: Brastemp"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-black">Tipo:</label>
          <input
            type="text"
            name="tipo"
            value={eletrodomestico.tipo}
            onChange={handleChange}
            placeholder="Ex: Geladeira"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-black">Potência (W):</label>
          <input
            type="number"
            name="potencia"
            value={eletrodomestico.potencia}
            onChange={handleChange}
            placeholder="Ex: 150"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-black">Horas por dia:</label>
          <input
            type="number"
            name="horasUsoDiarias"
            value={eletrodomestico.horasUsoDiarias}
            step={0.5}
            onChange={handleChange}
            placeholder="Ex: 5"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-black">Quantidade:</label>
          <input
            type="number"
            name="quantidade"
            value={eletrodomestico.quantidade}
            onChange={handleChange}
            placeholder="Ex: 1"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
