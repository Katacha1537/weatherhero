import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

function Headerinfo() {
  const [ weather, setWeather ] = useState([])
  const [ city_url, setCity_url ] = useState('Primavera')

  const url = 'http://api.openweathermap.org/data/2.5/weather?q='
  const appid = '&units=metric&appid=ce913429e8f12e1cbf44e5daf488b229'

  useEffect(() => {
    function loadApi(){
      fetch(url+city_url+appid)
      .then((r)=> r.json())
      .then((json)=>{
        setWeather(json)
      })
    }
    loadApi()   
  },[])
  
  async function handleFindCity(e){
    e.preventDefault()
  }

  return (
    <>
      <div  className="temp">
        <h2>{weather.main.temp}</h2>
        <p>{weather.name}</p>
      </div>
      <form>
        <input 
          type="text"
          value={city_url}
          placeholder="Cidade"
          onChange = {event => setCity_url(event.target.value)}
        />
        <button onClick={handleFindCity} type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
      </form>

      <div className="weather">
        <div className="Min">
          <h2>Max</h2>
          <p>12º</p>
        </div>
        <div className="Max">
          <h2>Max</h2>
          <p>14º</p>
        </div>
      </div>
    </>
  )
}

export default Headerinfo