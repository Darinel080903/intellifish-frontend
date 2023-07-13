import Navbar from "../containers/Navbar/Navbar";
import SecondaryCard from "../containers/SecondaryCard/SecondaryCard";
import Gota from "../assets/svg/gota.svg"
import Flujo from "../assets/svg/flujo.svg"
import TemperaturaImage from "../assets/svg/temperatura-image.svg"

function Fishbowl(params) {
    return(
        <>
            <Navbar></Navbar>
            <div className="bg-sky-600 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <SecondaryCard
                            title='Temperatura'
                            image={TemperaturaImage}
                            text='10°C'
                        >
                        </SecondaryCard>
                        <SecondaryCard
                            title='PH del Agua'
                            image={Gota}
                            text='7'
                        >
                        </SecondaryCard>
                        <SecondaryCard
                            title='Flujo del Agua'
                            image={Flujo}
                            text='Q = 8'
                        >
                        </SecondaryCard>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fishbowl;