import image2 from "./assets/images/img-2.png"
import group from "./assets/images/group.svg"
import arrows from "./assets/images/arrows.svg"
import right from "./assets/images/right-arrow.svg"
import { Searchbar } from "./components/Searchbar"
import { InfoTravel } from "./components/InfoTravel"
import { MoreInfo } from "./components/MoreInfo"
import { SeeMore } from "./components/SeeMore"
import { Carrousel} from "./components/Carrousel"
import { OptionTravel } from "./components/OptionTravel"

export const App = () => {
  return (
    <>
      <main className="container">
        <div className="opacity">
          <div className="first-section">
            <Searchbar/>
            <Carrousel/>
          </div>

          <div className="second-section">
            <InfoTravel image={image2}/>
            <MoreInfo image={group} text="Reglas de equipaje"/>
            <MoreInfo image={arrows} text="Cancelar/cambiar mi vuelo"/>
            <SeeMore image={right}/>          
          </div>
        </div>
          <OptionTravel/>
      </main>  
    </>
  )
}
