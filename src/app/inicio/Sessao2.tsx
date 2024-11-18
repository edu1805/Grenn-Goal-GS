import metas from "../../images/meta.png"
import objetivo from "/src/images/objetivo.png"
import Image from "next/image";
import previsao from "/src/images/analise-de-previsao.png"
import grafico1 from "/src/images/grafico-consumo.png"
import grafico2 from "/src/images/grafico-2.png"
import Link from "next/link";

export default function Sessao2(){

    return(
        <section >
            <div className="m-auto w-3/5 pt-7 mb-4">
                <p>O GreenGoal é uma plataforma gamificada que incentiva o consumo consciente de energia, ajudando você a economizar na conta de luz enquanto contribui para o meio ambiente. Defina metas, participe de desafios, acumule pontos e acompanhe seu impacto ambiental. Com relatórios interativos e um sistema de recompensas, o GreenGoal transforma a economia de energia em uma experiência divertida e motivadora. Junte-se a nós e faça a diferença!</p>
            </div>

            <div className="flex justify-around mb-10 mt-10">
                <button className="bg-gradient-to-b from-[#4A9500] to-[#9FEF50] w-fit p-5 px-8 rounded-xl hover:underline">
                    <Image src={objetivo} alt="daily challenges" className="mb-3"/>
                    <p>Daily Challenges</p>
                </button>

                <button className="bg-gradient-to-b from-[#4A9500] to-[#9FEF50] w-auto p-5 px-10 rounded-xl items-center hover:underline">
                    <Image src={metas} alt="daily challenges" layout="responsive" className="mb-3 mt-5"/>
                    <p className="text-center mt-8">Metas</p>
                </button>

                <Link href={'/previsao'} className="bg-gradient-to-b from-[#4A9500] to-[#9FEF50] w-fit p-5 px-8 rounded-xl hover:underline">
                    <Image src={previsao} alt="daily challenges" className="mb-3"/>
                    <p>Previsão de gastos</p>
                </Link>
            </div>

            <div className="m-5 grid grid-cols-2">
                <div>
                    <Image src={grafico1} alt="grafico de consumo"/>
                </div>

                <div className="m-auto">
                    <Image src={grafico2} alt="grafico de energia"/>
                </div>
            </div>
        </section>
    )
}