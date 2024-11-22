import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { consumoMedioMensal, precoMedioEnergia, tipoResidencia, numeroPessoas } = await request.json();
        const usuarioId = 22

        // Cria o objeto da residência
        const novaResidencia = {
            consumoMedioMensal,
            precoMedioEnergia,
            tipoResidencia,
            numeroPessoas,
            usuarioId
        };

        // Faz a requisição para a API externa
        const apiResponse = await fetch("http://localhost:8080/greengoalproject_war/api/residencia", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novaResidencia),
        });

        // Verifica se a requisição foi bem-sucedida
        if (!apiResponse.ok) {
            console.log(`Erro na API: ${apiResponse.statusText}`);
            return NextResponse.json(
                { message: `Erro ao cadastrar residência: ${apiResponse.statusText}` },
                { status: apiResponse.status }
            );
        }

        // Obtém o corpo da resposta da API externa
        const createdResidencia = await apiResponse.json();

        // Retorna o resultado para o cliente
        return NextResponse.json(createdResidencia);
    } catch (error) {
        console.error("Erro ao cadastrar residência:", error);

        return NextResponse.json(
            { message: "Erro ao cadastrar residência" },
            { status: 500 }
        );
    }
}
