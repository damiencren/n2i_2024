import Image from "next/image";

const Header = () => {
    return (
        <header className="flex h-full justify-between items-center justify-center w-full border-foreground">
            <div className="w-1/3">
                <Image src={"/logo.png"} alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-between w-1/3">
                <a href="#coeur">Coeur</a>
                <a href="#poumons">Poumons</a>
                <a href="#bacteries">Bactéries</a>
                <a href="#peau">Peau</a>
            </div>
            <div className="flex w-1/3 justify-end mr-2">
                <p>Team CrêpeRiz</p>
            </div>
        </header>
    );
};

export default Header;