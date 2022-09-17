import { Item } from "./Item"

export const OptionTravel = () => {
  return (
    <div className="options-travel">
        <div className="head">
            <h2>Elige tu nuevo destino</h2>
            <button className="btn-travel">X</button>
        </div>
        <div className="options">
            <Item destiny="Los Angeles" abbr="LAX"/>
            <Item destiny="Orlando" abbr="MCO"/>
            <Item destiny="San Francisco" abbr="SFO"/>
            <Item destiny="Houston" abbr="IAH"/>
            <Item destiny="Montreal" abbr="YUL"/>
        </div>
    </div>
  )
}
