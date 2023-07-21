import usa from "../assets/usa.svg";
import canada from "../assets/canada.svg";
import mexico from "../assets/mexico.svg";
import logo from "../assets/logocopadomundo26.svg";
import ny from "../assets/ny.png";
import toronto from "../assets/toronto.png";
import cidadedomexico from "../assets/cidadedomexico.png";
// import bg from "../assets/bg-black.png";

export default function Home() {
    return(
        <section className="font-black mt-6">
            <div>
                <img src={logo} className="mx-auto w-32"></img>
            </div>
                <div className=" mx-auto w-fit text-5xl text-gray-800 rounded-md mt-12 font-thin">
                    <h1>A COPA DO MUNDO DE 2026 SERÁ NOS PAÍSES:</h1>
                </div>
                    <div className="flex flex-col md:flex-row justify-center items-center text-6xl text-center font-serif pt-4 text-gray-800">
                        <span className="bg-gray-900 text-gray-300">ESTADOS UNIDOS</span>,
                        <span className="bg-red-500"> CANADÁ</span>,
                        <span className="bg-green-500">MÉXICO.</span>
                    </div>
            <div className="flex flex-col md:flex-row mt-32 gap-20 mx-auto justify-center items-center">
                <div className="">
                    <div>
                        <img src={ny}></img>
                    </div>
                        <div className="">
                            <h1 className="text-center font-semibold pt-2 text-lg text-gray-800">Noya York - Estados Unidos</h1>
                        </div>
                            <div>
                                <img className="pt-2 mx-auto w-20 h-20 rounded-lg" src={usa}></img>
                            </div>
                </div>
                <div className="">
                    <div>
                        <img src={toronto}></img>
                    </div>
                        <div>
                            <h1 className="text-center font-semibold pt-2 text-lg text-gray-800">Toronto - Canadá</h1>
                        </div>
                            <div>
                                <img className="pt-2 mx-auto w-20 h-20 rounded-lg" src={canada}></img>
                            </div>
                </div>
                <div className="">
                    <div>
                        <img src={cidadedomexico}></img>
                    </div>
                        <div>
                            <h1 className="text-center font-semibold pt-2 text-lg text-gray-800">Catedral - Cidade do México</h1>
                        </div>
                            <div>
                                <img className="pt-2 mx-auto w-20 h-20 rounded-lg" src={mexico}></img>
                            </div>
                </div>
            </div>
        </section>
    )
}