import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { nome, tipo, potencia, horasUsoDiarias, quantidade } = await request.json();
        const residenciaId = 5
        
        const novoEletrodomestico = {
            nome,
            tipo,
            potencia,
            horasUsoDiarias,
            quantidade,
            residenciaId
        };

        const apiResponse = await fetch("http://localhost:8080/greengoalproject_war/api/eletrodomestico", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoEletrodomestico),
        });

        if (!apiResponse.ok) {
            console.log(`Erro na API: ${apiResponse.statusText}`);
            return NextResponse.json(
                { message: `Erro ao cadastrar elétrodomestico: ${apiResponse.statusText}` },
                { status: apiResponse.status }
            );
        }

        const createdEletro = await apiResponse.json();

        return NextResponse.json(createdEletro);
    } catch (error) {
        console.error("Erro ao cadastrar elétrodomestico:", error);

        return NextResponse.json(
            { message: "Erro ao cadastrar residência" },
            { status: 500 }
        );
    }
}
