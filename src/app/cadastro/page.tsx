"use client"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye } from "react-icons/hi2";
import { HiEyeSlash } from "react-icons/hi2";

export default function Cadastro(){

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data: any) => {
        console.log("Dados enviados:", data);
        alert("Formulário enviado com sucesso!");
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    
    return (
        <div className="max-w-md mx-auto h-full mt-16 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center mb-4">Cadastro Grenn Goal</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nome:
                    </label>
                    <input id="name" 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        {...register("name", { required: "O nome é obrigatório", minLength: 3 })} placeholder="Nome..."
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message?.toString()}</p>}
                </div>
        
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input id="email" type="email"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      {...register("email", {required: "O email é obrigatório", 
                        pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Por favor, insira um email válido",},
                      })} placeholder="example@gmail.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>}
                </div>
                    
                <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha:</label>
                    <input id="password" type={showPassword ? "text" : "password"}
                      {...register("password", {required: "A senha é obrigatória", minLength: {value: 6, message: "A senha deve ter pelo menos 6 caracteres",}})} placeholder="Senha..."
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 flex items-center text-black mt-5">{showPassword ? <HiEyeSlash/> : <HiEye/>}</button>
                    {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message?.toString()}</p>)}
                </div>
                    
              <button type="submit" 
              className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition mb-3">
                Enviar
              </button>
            </form>
            <div className="flex justify-between">
                <Link href={'/'} className="text-cyan-700 hover:underline">Voltar</Link>
                <Link href={'/login'} className="text-cyan-700 hover:underline">Login</Link>
            </div>
        </div>
    );
}