import metas from "../../images/meta.png"
import objetivo from "/src/images/objetivo.png"
import Image from "next/image";
import previsao from "/src/images/analise-de-previsao.png"
import grafico1 from "/src/images/grafico-consumo.png"
import grafico2 from "/src/images/grafico-2.png"
import Link from "next/link";
import integrante1 from "/src/images/integrante1.jpeg"
import integrante2 from "../../images/integrante2.jpg"
import integrante3 from "/src/images/integrante3.jpg"

export default function Sessao2(){

    return(
        <section >
            <div className="m-auto w-3/5 pt-7 mb-4">
                <p>O GreenGoal é uma plataforma gamificada que incentiva o consumo consciente de energia, ajudando você a economizar na conta de luz enquanto contribui para o meio ambiente. Defina metas, participe de desafios, acumule pontos e acompanhe seu impacto ambiental. Com relatórios interativos e um sistema de recompensas, o GreenGoal transforma a economia de energia em uma experiência divertida e motivadora. Junte-se a nós e faça a diferença!</p>
            </div>

            <div className="flex justify-around mb-10 mt-10">
                <Link href={'/desafios'} className="bg-gradient-to-b from-[#4A9500] to-[#9FEF50] w-fit p-5 px-8 rounded-xl hover:underline">
                    <Image src={objetivo} alt="daily challenges" className="mb-3"/>
                    <p>Daily Challenges</p>
                </Link>

                <Link href={'/desafios'} className="bg-gradient-to-b from-[#4A9500] to-[#9FEF50] w-auto p-5 px-10 rounded-xl items-center hover:underline">
                    <Image src={metas} alt="daily challenges" layout="responsive" className="mb-3 mt-5"/>
                    <p className="text-center mt-8">Metas</p>
                </Link>

                <Link href={'/previsao'} className="bg-gradient-to-b from-[#4A9500] to-[#9FEF50] w-fit p-5 px-8 rounded-xl hover:underline">
                    <Image src={previsao} alt="daily challenges" className="mb-3"/>
                    <p>Previsão de gastos</p>
                </Link>
            </div>

            <div className="m-5 grid grid-cols-2">
                <div>
                    <Image src={grafico1} alt="grafico de consumo" layout="responsive"/>
                </div>

                <div className="m-auto">
                    <Image src={grafico2} alt="grafico de energia" layout="responsive"/>
                </div>
            </div>

            <div className="ml-14 mt-16">
                <h3 className="font-semibold text-3xl text-center ">Integrantes </h3>
                <div className="flex">
                    <div className="text-end">
                        <Image src={integrante2} height={200} width={200} alt="integrante" className="border rounded-full text-end"/>
                    </div>
                    <div className="mt-10 ml-6">
                        <p>Nome: Eduardo do Nascimento Barriviera</p>
                        <p>Turma: 1TDSPJ</p>
                        <p>rm: 555309</p>
                        <p>GitHub: <a href="https://github.com/edu1805" target="_blank" className="text-blue-600 underline ">https://github.com/edu1805</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/eduardo-barriviera-697173314" target="_blank" className="text-blue-600 underline ">https://www.linkedin.com/in/eduardo-barriviera-697173314</a></p>
                        
                    </div>
                </div>

                <div className="flex mt-10  w-full mx-auto">
                    <div className="text-end">
                        <Image src={integrante1} height={90} width={200} alt="integrante" className="border rounded-full text-end"/>
                    </div>
                    <div className="mt-20 ml-6">
                        <p>Nome: Rafael Macoto Magualhães Seo</p>
                        <p>Turma: 1TDSPJ</p>
                        <p>rm: 554992</p>
                        <p>GitHub: <a href="https://github.com/RafaMacoto/RafaMacoto" target="_blank" className="text-blue-600 underline ">https://github.com/RafaMacoto/RafaMacoto</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/rafael-macoto-b09537279/" target="_blank" className="text-blue-600 underline ">https://www.linkedin.com/in/rafael-macoto-b09537279/</a></p>
                        
                    </div>
                </div>

                <div className="flex mt-10">
                    <div className="text-end">
                        <Image src={integrante3} height={200} width={200} alt="integrante" className="border rounded-full text-end"/>
                    </div>
                    <div className="mt-7 ml-6">
                        <p>Nome: Bruno Assis Violim</p>
                        <p>Turma: 1TDSPJ</p>
                        <p>rm: 558154</p>
                        <p>GitHub: <a href="https://github.com/assis20" target="_blank" className="text-blue-600 underline ">https://github.com/assis20</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/bruno-assis-violim-b76349222" target="_blank" className="text-blue-600 underline ">https://www.linkedin.com/in/bruno-assis-violim-b76349222</a></p>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}