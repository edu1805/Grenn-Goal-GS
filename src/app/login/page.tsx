"use client"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye } from "react-icons/hi2";
import { HiEyeSlash } from "react-icons/hi2";

export default function Login(){

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

    return(
        <div className="max-w-md mx-auto h-full mt-16 p-6 bg-white shadow-md rounded-md">
            
        </div>
    )
}