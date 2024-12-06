"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { ArrowBigDown } from "lucide-react";

const HeroSection = () => {
    const [hoveredImage, setHoveredImage] = useState("/earth/base.png");

    const buttons = [
        { href: "#coeur", text: "Coeur", image: "/earth/coeur.png" },
        { href: "#poumons", text: "Poumons", image: "/earth/poumons.png" },
        { href: "#bacteries", text: "Bactéries", image: "/earth/bacteries.png" },
        { href: "#peau", text: "Peau", image: "/earth/peau.png" },
    ]

    return (
        <section className="flex flex-col w-full h-[700px] bg-[url('/bg_body.png')] bg-center pt-20">
            <div className="flex md:px-40 px-10 h-3/4 gap-10">
                <div className="flex flex-col w-2/3 justify-center gap-4">
                    <h1 className="text-6xl font-extrabold">Vous vous ressemblez comme deux gouttes d'eau !</h1>
                    <p className="text-xl text-justify">Tout comme votre cœur pompe le sang, les courants marins font circuler la chaleur et les nutriments à travers la planète. Vos poumons échangent les gaz vitaux, tout comme l’océan absorbe le CO₂ et libère l’oxygène. Même les micro-organismes marins rappellent le rôle essentiel des bactéries dans notre corps.</p>
                    <p className="text-xl font-bold">Explore les différentes sections pour en apprendre plus !</p>
                    <div className="flex flex-wrap gap-2">
                        {buttons.map((button, index) => (
                            <a key={index} href={button.href} onMouseEnter={() => setHoveredImage(button.image)} onMouseLeave={() => setHoveredImage("/earth/base.png")}>
                                <Button size={"lg"} key={index}>{button.text}</Button>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 flex justify-center items-center">
                    <Image src={hoveredImage} className="h-full object-contain" alt="Hero" width={400} height={400} />
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <p className="text-xl font-bold">Plongez pour en savoir plus</p>
                <ArrowBigDown/>
            </div>
            <Image className='w-full h-1/4 object-cover' src="/wave.svg" alt="wave" width={400} height={200} />
        </section>
    );
};

export default HeroSection;