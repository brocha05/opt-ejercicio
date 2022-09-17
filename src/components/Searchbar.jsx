import {travel, travelBlur} from '../helpers/travelOption'

export const Searchbar = () => {
  return (
    <div className="search-container">
        <input 
        type="text"
        className="search-bar"
        placeholder="Busca tu próximo destino"
        onFocus={(e) => travel()}
        onBlur={(e) => travelBlur()}
        />
    </div>
  )
}
