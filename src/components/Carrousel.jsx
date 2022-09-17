import { Card } from "./Card"
import image3 from "../assets/images/img-3.png"
import image4 from "../assets/images/img-4.png"
import image1 from "../assets/images/img-1.png"
import {btn1, btn2, btn3} from "../helpers/carrousel.js"

export const Carrousel = () => {
  return (
    <div class="carrousel">
        <div class="grande">
            <Card image={image4} title="¡Viajar te rejuvenece!" description="Con el nuevo tratamiento de Aeroméxico verte joven nunca fue tan fácil. Prepárate para el Hot Sale!"/>  
            <Card image={image1} title="Reserva tu vuelo nacional desde $1753 MXN" description="Vuelo redondo, saliendo de la Ciudad de México. Impuestos incluidos"/>  
            <Card image={image3} title="Gana una experiencia inolvidable en la playa" description="Usa tu Tarjeta Santander Aeroméxico del 9 al 31 de mayo y participa"/>  
        </div>

        <ul class="puntos">
            <li class="punto" onClick={btn1}></li>
            <li class="punto activo" onClick={btn2} ></li>
            <li class="punto" onClick={btn3}></li>
        </ul>
    </div>
  )
}
