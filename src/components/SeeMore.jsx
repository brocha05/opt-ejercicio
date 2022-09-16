import React from 'react'

export const SeeMore = ({image}) => {
  return (
    <div className="see-more">
        <a href="##" className="see-all">Ver toda la información</a>
        <img src={image} alt="" className="right-arrow"/>
    </div>
  )
}
