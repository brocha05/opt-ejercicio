import image1 from "./assets/images/img-1.jpg"
import image2 from "./assets/images/img-2.png"
import group from "./assets/images/group.svg"
import arrows from "./assets/images/arrows.svg"
import right from "./assets/images/right-arrow.svg"

export const App = () => {
  return (
    <>
      <main className="container">
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Busca tu próximo destino"/>
        </div>

        <div className="card">
          <img src= {image1} alt="" />
          <div className="content">
            <h2 className="title">Reserva tu vuelo nacional desde $1,753 MXN</h2>
            <p className="caption">Vuelo redondo, saliendo de la Ciudad de México. Impuestos incluidos</p>
            <button className="btn">Reservar</button>
          </div>
        </div>
        <hr />
        
        <h2>Información para tu viaje</h2>
        <div className="card">
          <img src= {image2} alt="" />
          <h2>Requisitos de viaje por país</h2>
          <p>Utiliza nuestra nueva herramienta para consultar los destinos a los que puedes viajar
            y obtener detalles sobre los requisitos de entrada. <a href="##">Conoce más</a>
          </p>
        </div>

        <div className="rules">
          <div>
          <img src={group} alt="" /> 
          <span>Reglas de equipaje</span>
          </div>
          <button>Ver</button>
        </div>

        <div className="cancel-change">
          <div>
          <img src={arrows} alt="" /> 
          <span>Cancelar/cambiar mi vuelo</span>
          </div>
          <button>Ver</button>
        </div>

        <div className="see-more">
          <a href="##">Ver toda la información</a>
          <img src={right} alt="" />
        </div>
      </main>  
    </>
  )
}
