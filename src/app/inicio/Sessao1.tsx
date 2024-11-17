import Link from "next/link";
import { FaCheckSquare } from "react-icons/fa";
import logo from "../../images/logo.png"
import Image from "next/image";

export default function Sessao1(){

    return(
        <section className="bg-[url(/src/images/imagem_fundo.png)] bg-green-500 p-6 grid grid-cols-2">
            <div className="w-1/2 bg-[#EAF5E9] p-6 ml-20 h-fit mt-11 rounded-xl">
                <p className="mb-6 text-start">Junte-se ao GreenGoal e transforme suas metas de economia de energia em conquistas reais. Economize na conta de luz enquanto contribui para um futuro mais sustentável!</p>
                <div className="w-fit m-auto">
                    <Link href={'/cadastro'} className="text-white py-2 px-12 bg-[#448108] rounded-full hover:underline">
                    Juntar-se</Link>
                </div>
            </div>

            <div className="bg-[#EAF5E9] p-3 rounded-xl">
                <h1 className="text-center text-2xl mb-2">Metas de Energia Sustentável </h1>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="w-fit">Desligar os aparelhos da casa ao sair</p>
                        <div className="flex mb-3">
                            <div className="bg-gradient-to-r from-[#58FA0E] to-[#276401] w-1/2 rounded-full px-1">
                                <p className="ml-2">100%</p> 
                            </div>
                            <FaCheckSquare className="mt-1 ml-3"/>
                        </div>

                        <p>Limite o banho quente a no máximo 5 minutos</p>
                        <div className="flex mb-3">
                            <div className="bg-gradient-to-r from-[#58FA0E] to-[#276401] w-1/2 rounded-full px-1">
                                <p className="ml-2">100%</p> 
                            </div>
                            <FaCheckSquare className="mt-1 ml-3"/>
                        </div>

                        <p>Cozinhe com a tampa na panela</p>
                        <div className="flex mb-3">
                            <div className="bg-gradient-to-r from-[#58FA0E] to-[#276401] w-1/2 rounded-full px-1">
                                <p className="ml-2">100%</p> 
                            </div>
                            <FaCheckSquare className="mt-1 ml-3"/>
                        </div>

                        <p>Desligue a luz ao sair do cômodo</p>
                        <div className="flex mb-3">
                            <div className="bg-gradient-to-r from-[#58FA0E] to-[#276401] w-1/2 rounded-full px-1">
                                <p className="ml-2">100%</p> 
                            </div>
                            <FaCheckSquare className="mt-1 ml-3"/>
                        </div>
                    </div>

                    <Image src={logo} alt="logo green goal" width={250} height={250} className="m-auto"/>
                    
                </div>
                
            </div>

        </section>
    )
}