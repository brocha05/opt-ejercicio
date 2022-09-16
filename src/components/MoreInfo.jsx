
export const MoreInfo = ({image, text}) => {
  return (
    <div className="rules">
        <div className="rules-left">
            <img src={image} alt="" /> 
            <p className="the-rules">{text}</p>
        </div>
        <button className="btn-secundary">Ver</button>
    </div>
  )
}
