import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    try {
        const body = await request.json(); // Obter os dados do corpo da requisição

        // Configurar a requisição para a API externa
        const response = await fetch(`http://localhost:8080/greengoalproject_war/api/desafio/localizar-todos/${params.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        // Verificar se a requisição foi bem-sucedida
        if (response.ok) {
            const data = await response.json();
            return NextResponse.json({ msg: 'Desafio atualizado com sucesso', data });
        } else {
            const error = await response.text(); // Obter mensagem de erro da API
            return NextResponse.json({ msg: `Erro ao atualizar desafio: ${error}` }, { status: response.status });
        }
    } catch (error) {
        return NextResponse.json({ msg: `Erro ao processar a requisição: ${error}` }, { status: 500 });
    }
}



export async function GET(request: Request) {
    const id = 8; // ID fixo

    try {
        // URL da API externa que contém os desafios
        const apiUrl = `http://localhost:8080/greengoalproject_war/api/desafio`;

        // Faz a chamada à API externa
        const response = await fetch(apiUrl);

        // Verifica se a resposta da API foi bem-sucedida
        if (!response.ok) {
            return NextResponse.json(
                { error: 'Erro ao buscar desafio na API externa' },
                { status: response.status }
            );
        }

        // Processa o dado retornado pela API
        const desafio = await response.json();

        // Retorna o desafio encontrado
        return NextResponse.json(desafio[0]);
    } catch (error) {
        console.error('Erro ao buscar desafio na API externa:', error);
        return NextResponse.json(
            { error: 'Erro ao processar a requisição' },
            { status: 500 }
        );
    }
}


