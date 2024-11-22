
import React, { useEffect, useState } from "react";


export default function FormularioEletrodomesticos() {

  const [residenciaId, setResidenciaId] = useState<string | null>(null); 

  const [eletrodomesticos, setEletrodomesticos] = useState([{ 
    nome: "", 
    tipo: "", 
    potencia: 0, 
    horasPorDia: 0, 
    quantidade: 0 
  }])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
  
    // Atualiza apenas o item correspondente no array
    setEletrodomesticos((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  }

  const adicionarEletrodomestico = () => {
    setEletrodomesticos([
      ...eletrodomesticos,
      { nome: "", tipo: "", potencia: 0, horasPorDia: 0, quantidade: 0 },
    ]);
  }

  useEffect(() => {
    // Função para buscar o residenciaId
    const fetchResidenciaId = async () => {
      try {
        const response = await fetch("/api/residencia")
        if (response.ok) {
          const data = await response.json()
          setResidenciaId(data.id)
          console.log(data);
        } else {
          console.error("Erro ao buscar residenciaId:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao conectar na API de residencia:", error);
      }
    };

    fetchResidenciaId();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!residenciaId) {
      alert("Preencha as informações básicas antes.");
      return;
    }

    try{
        const response = await fetch("/api/eletrodomestico", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({residenciaId, eletrodomesticos}),
        })

        if(response.ok){
            console.log("Dados enviados:", {eletrodomesticos, residenciaId});
            alert("Dados salvos");
        }else{
            alert("Erro ao salvar dados")
            console.log(eletrodomesticos, residenciaId);
            console.error("Erro ao enviar dados:", response.statusText);  
        }
    }catch (error){
        alert("Erro ao conectar na API")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <hr className="mt-7"/>
      <h2 className="text-xl font-semibold mt-5">Eletrodomésticos</h2>
      {eletrodomesticos.map((eletrodomesticos, index) => (
        <div key={index} className="grid grid-cols-4 gap-x-4 items-end">
          <div>
            <label className="block font-medium text-black">Nome:</label>
            <input type="text" name="nome" value={eletrodomesticos.nome} onChange={(e) => handleChange(e, index)} 
              placeholder="Ex: Brastemp"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-black">Tipo:</label>
              <input type="text" name="tipo" value={eletrodomesticos.tipo} onChange={(e) => handleChange(e, index)}
                placeholder="Ex: Geladeira"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
          </div>

          <div>
            <label className="block font-medium text-black">Potência (W):</label>
            <input type="number" name="potencia" value={eletrodomesticos.potencia} onChange={(e) => handleChange(e, index)}
              placeholder="Ex: 150"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-black">Horas por dia:</label>
            <input type="number" name="horasPorDia" value={eletrodomesticos.horasPorDia} step={0.5} 
              onChange={(e) => handleChange(e, index)} placeholder="Ex: 5"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-black mt-4">Quantidade:</label>
            <input type="number" name="quantidade" value={eletrodomesticos.quantidade} 
              onChange={(e) => handleChange(e, index)} placeholder="Ex: 1"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button type="button" onClick={adicionarEletrodomestico}
          className="bg-green-500 px-4 py-2 text-white font-semibold rounded-md hover:bg-green-600 transition">
          Adicionar Eletrodoméstico
        </button>
        <button type="submit" className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-md hover:bg-blue-600 transition">
          Salvar</button>
      </div>
    </form>
  );
};

