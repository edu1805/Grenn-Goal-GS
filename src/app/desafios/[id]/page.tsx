"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

type DesafioProps = {
    id: number;
    nome: string;
    descricao: string;
    desafioCompleto: number;
    dataCriacao: string;
    dataConclusao: string | null;
    usuarioId: number;
};

export default function EditarDesafio() {
    const [desafio, setDesafio] = useState<DesafioProps>({
        id: 0,
        nome: '',
        descricao: '',
        desafioCompleto: 0,
        dataCriacao: '',
        dataConclusao: null,
        usuarioId: 0,
    });

    const router = useRouter();
    const params = useParams(); // Captura os parâmetros da URL
    const id = Number(params.id); // Obtém o ID do desafio

    // Busca os dados do desafio ao carregar a página
    useEffect(() => {
        async function fetchDesafio() {
            try {
                const response = await fetch(`/api/desafios/${id}`);

                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados do desafio.');
                }

                const data = await response.json();
                setDesafio(data); // Atualiza o estado com os dados do desafio
                console.log(data);
                
            } catch (error) {
                console.error('Erro ao carregar desafio:', error);
            }
        }

        fetchDesafio();
    }, [id]);

    // Atualiza o estado quando o usuário edita os campos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDesafio({ ...desafio, [name]: value });
    };

    // Envia os dados atualizados para a API
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const cabecalho = {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(desafio),
            };

            const response = await fetch(`/api/desafios/${id}`, cabecalho);

            if (response.ok) {
                alert('Desafio atualizado com sucesso!');
                console.log(desafio);
                router.push('/desafios'); // Redireciona para a página de lista
            } else {
                alert('Erro ao atualizar o desafio!');
                console.log(desafio);
                
                console.error(await response.text());
            }
        } catch (error) {
            console.error('Erro ao atualizar o desafio:', error);
        }
    };

    return (
        <main className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Editar Desafio</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-4"
            >
                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={desafio.nome}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                        Descrição
                    </label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={desafio.descricao}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="desafioCompleto" className="block text-sm font-medium text-gray-700">
                        Status do Desafio (1 para Completo, 0 para Incompleto)
                    </label>
                    <input
                        type="number"
                        id="desafioCompleto"
                        name="desafioCompleto"
                        value={desafio.desafioCompleto}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        min={0}
                        max={1}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                    Atualizar
                </button>
                <Link href={'/desafios'} className="ml-6 text-blue-500">voltar</Link>
            </form>
        </main>
    );
}
