export const Card = ({image, title, description}) => {
  return (
    <div className="card">
        <img src= {image} alt="" className="card-img"/>
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="caption">{description}</p>
            <button className="btn">RESERVAR</button>
        </div>
    </div>
  )
}
