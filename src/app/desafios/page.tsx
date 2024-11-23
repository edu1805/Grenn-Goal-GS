"use client"
import Cabecalho from "@/components/Cabecalho";
import Link from "next/link";
import { useEffect, useState } from "react";

type DesafioProps ={
    id: number;
    nome: string;
    descricao: string;
    desafioCompleto: number;
    dataCriacao: string;
    dataConclusao: string;
    usuarioId: number
}

export default function Desafios(){

    const [lista, setLista] = useState<DesafioProps[]>([])

    useEffect(() => {
        async function fetchDesafios() {
            try {
                const response = await fetch('/api/desafios', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Erro ao buscar desafios');
                }

                const data = await response.json();
                setLista(data)
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        }

        fetchDesafios();
    }, []); 

    return (
        <main >
            <Cabecalho />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
                <div className="w-full max-w-2xl mt-6">
                <p className="text-xl font-semibold text-center mb-4">Desafios</p>

                <ul className="space-y-2">
                    {lista.length > 0 ? (
                    lista.map((desafio) => (
                        <li key={desafio.id} className="bg-white shadow-sm rounded-md p-3 hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-medium text-gray-800">{desafio.nome}</h3>
                        <p className="text-sm text-gray-500">{desafio.descricao}</p>
                        <Link href={`/desafios/${desafio.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-semibold underline mt-2 block">Editar</Link>
                    </li>
                    ))) : (
                    <p className="text-center text-gray-500">Carregando desafios...</p>
                )}
                </ul>
            </div>
            </div>
    
            
</main>
    )
}