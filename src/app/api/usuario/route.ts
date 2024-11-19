import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const { nome, cpf, email, senha } = await request.json();

        const newUser = {nome, cpf, email, senha};

        const apiResponse = await fetch("http://localhost:8080/greengoalproject_war/api/usuario",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser),
            }
        )

        if (!apiResponse.ok) {
            console.log(`Erro na API: ${apiResponse.statusText}`);
        }
        const createdUser = await apiResponse.json();

        return NextResponse.json(createdUser);
    }catch (error) {
        console.error("Erro ao criar usuário:", error);

        return NextResponse.json(
            { message: "Erro ao criar usuário"},
            { status: 500 }
        );
    }
}