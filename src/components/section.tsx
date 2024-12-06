import Image from "next/image";
import { title } from "process";

const Section = ({title, desc, fonct1, fonct2, src, id, sens, color }: { title: string; desc: string; fonct1: string; fonct2: string; src: string; id: string; sens: boolean; color: string }) => {

    return (
        <section id={id}  style={{backgroundColor: color}} className={`flex flex-col w-full h-[500px] text-background`}>
            <div className={`flex md:px-40 px-10 h-full ${sens ? 'flex-row-reverse' : 'flex-row'} gap-20`}>
                <div className="flex flex-col w-2/3 justify-center gap-6">
                    <h1 className=" text-4xl font-bold ">{title}</h1>
                    <p className="text-md">{desc}</p>
                    <ul className="list-disc pl-5 text-md">
                        <li><b>Fonctionnement sain</b> : {fonct1}</li>
                        <li><b>Dysfonctionnement</b> : {fonct2}</li>
                    </ul>
                </div>
                <div className="flex w-1/3 items-center">
                    <Image src={src} className="rounded-2xl" alt={`Image de ${src}`} width={400} height={400} />
                </div>
            </div>
        </section>
    );
};

export default Section;