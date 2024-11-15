import logo from "../images/logo.png"
import Image from "next/image"
import { MdOutlineHome } from "react-icons/md";
import { CgBolt } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import Link from "next/link";

export default function Cabecalho(){

    return(
        <header className= 'bg-[url(/src/images/imagem_fundo.png)]'>
            <div className="flex items-center justify-between bg-green-400/60 pr-4 pl-4">
                <Image src={logo} alt="logo grenn goal" width={100} height={100}/>

                <div className="flex w-4/12 justify-between">
                    <div>
                        <Link href={'/'} className="flex hover:bg-green-600/50 p-2 rounded-full">Home <MdOutlineHome className="mt-1"/></Link>
                    </div>
                    <div>
                        <Link href={'/desafios'} className="flex hover:bg-green-600/50 p-2 rounded-full">Metas e Desafios <CgBolt className="mt-1"/></Link>
                    </div>
                </div>

                <div className="mr-4">
                    <div>
                        <Link href={'/login'} className="flex hover:bg-green-600/50 p-2 rounded-full">login <MdOutlineLogin className="mt-1"/></Link> 
                    </div>
                </div>
            </div>
        </header>
    )
}