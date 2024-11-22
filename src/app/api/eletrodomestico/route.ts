import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const { nome, tipo, potencia, horasPorDia, quantidade } = await request.json();

        const newEletro = {nome, tipo, potencia, horasPorDia, quantidade};

        const apiResponse = await fetch("http://localhost:8080/greengoalproject_war/api/eletrodomestico",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newEletro),
            }
        )

        if (!apiResponse.ok) {
            console.log(`Erro na API: ${apiResponse.statusText}`);
        }
        const createdEletro = await apiResponse.json();

        return NextResponse.json(createdEletro);
    }catch (error) {
        console.error("Erro ao salvar elétrodomestico", error);

        return NextResponse.json(
            { message: "Erro ao salvar elétrodomestico"},
            { status: 500 }
        );
    }
}