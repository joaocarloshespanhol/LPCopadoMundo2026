import Logo from "../../assets/logos/logotipo-cabecalho.svg";

export default function NavBar () {

    return(
        <nav>
            <div className="flex absolute right-0 z-10 top-0 w-full h-16 origin-top-right bg-black justify-around">
                <img src={Logo} alt=""></img>
                <ul className="flex justify-center items-center text-white font-semibold gap-10 cursor-pointer text-sm">
                    <p>Home</p>
                    <p>Copa de 2026</p>
                    <p>Faltam Quantos Dias</p>
                    <p>Estádios</p>
                    <p>Abertura</p>
                </ul>
            </div>
        </nav>
    )
}