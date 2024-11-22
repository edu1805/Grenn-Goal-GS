import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const { residenciaId, eletrodomesticos } = await request.json();

        if (!residenciaId || !eletrodomesticos || !Array.isArray(eletrodomesticos)) {
            return NextResponse.json(
              { message: "Dados inválidos. Verifique residenciaId e eletrodomesticos." },
              { status: 400 }
            );
        }

        const results = [];
        for (const eletro of eletrodomesticos) {
            const newEletro = { ...eletro, residenciaId };
        
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
            results.push(createdEletro);
        }
        return NextResponse.json(results);
    }catch (error) {
        console.error("Erro ao salvar elétrodomestico", error);

        return NextResponse.json(
            { message: "Erro ao salvar elétrodomestico"},
            { status: 500 }
        );
    }
}