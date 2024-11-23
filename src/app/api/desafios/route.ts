import { NextResponse } from "next/server";

export async function GET() {
    try {
        // URL da API externa que será requisitada
        const response = await fetch('http://localhost:8080/greengoalproject_war/api/desafio/localizar-todos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Tratamento de erro na resposta da API
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status} - ${response.statusText}`);
        }

        // Parse dos dados recebidos da API externa
        const desafios = await response.json();

        // Retorno no formato esperado pelo Next.js
        return NextResponse.json(desafios);

    } catch (error) {
        // Captura de erros na requisição e retorno de mensagem de erro
        console.error('Erro na requisição externa:', error);
        return NextResponse.json({ error: 'Falha ao obter produtos externos' }, { status: 500 });
    }
}
