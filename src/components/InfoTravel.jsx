export const InfoTravel = ({image}) => {
  return (
    <>
    <h2 className="title-second">Información para tu viaje</h2>
    <div className="card-second">
        <img src= {image} alt="" className="card-img2"/>
        <div className="content-second">
            <h2 className="title-second-card">Requisitos de viaje por país</h2>
            <p className="caption-second">Utiliza nuestra nueva herramienta para consultar los destinos a los que puedes viajar
            y obtener detalles sobre los requisitos de entrada. <a href="##" className="caption-second link">Conoce más</a>
            </p>
        </div>
    </div>
    </>
  )
}
