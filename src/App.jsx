import image1 from "./assets/images/img-1.png"
import image2 from "./assets/images/img-2.png"
import group from "./assets/images/group.svg"
import arrows from "./assets/images/arrows.svg"
import right from "./assets/images/right-arrow.svg"

export const App = () => {
  return (
    <>
      <main className="container">
        <div className="first-section">
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Busca tu próximo destino"/>
          </div>

          <div className="card">
            <img src= {image1} alt="" className="card-img"/>
            <div className="content">
              <h2 className="title">Reserva tu vuelo nacional desde $1753 MXN</h2>
              <p className="caption">Vuelo redondo, saliendo de la Ciudad de México. Impuestos incluidos</p>
              <button className="btn">RESERVAR</button>
            </div>
          </div>
        </div>

        <div className="second-section">
          <h2 className="title-second">Información para tu viaje</h2>
          <div className="card-second">
            <img src= {image2} alt="" className="card-img"/>
            <div className="content-second">
              <h2 className="title-second-card">Requisitos de viaje por país</h2>
              <p className="caption-second">Utiliza nuestra nueva herramienta para consultar los destinos a los que puedes viajar
                y obtener detalles sobre los requisitos de entrada. <a href="##" className="caption-second link">Conoce más</a>
              </p>
            </div>
          </div>

          <div className="rules">
            <div className="rules-left">
              <img src={group} alt="" /> 
              <p className="the-rules">Reglas de equipaje</p>
            </div>
            <button className="btn-secundary">Ver</button>
          </div>

          <div className="cancel-change m-b">
            <div className="cancel-left">
              <img src={arrows} alt="" /> 
              <p className="cancel-text">Cancelar/cambiar mi vuelo</p>
            </div>
            <button className="btn-secundary">Ver</button>
          </div>

          <div className="see-more">
            <a href="##" className="see-all">Ver toda la información</a>
            <img src={right} alt="" />
          </div>
        </div>
        
      </main>  
    </>
  )
}
