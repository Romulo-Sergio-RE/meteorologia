import { useState } from "react"
import { Container } from "./style"
import { AiOutlineSearch } from 'react-icons/ai'
import { Card } from "../../components/card"

export const HomePage = () =>{
    const [city, setCity] = useState("")
    const [dataApi, setDataApi] = useState(null)
    const [colorBtnActive, setBtnActive] = useState("#427AA1")
    const [colorBtnNoActive, setBtnNoActive] = useState("#427AA1")
    const [unitOpen, setUnitOpen] = useState(false)
    const editColorBtnC = ()=>{
        setBtnActive("#064789")
        setBtnNoActive("#427AA1")
    }
    const editColorBtnF = ()=>{
        setBtnActive("#427AA1")
        setBtnNoActive("#064789")
    }
    const handleSubmit = ()=>{
        fetch(`http://api.weatherapi.com/v1/current.json?key=e76e75c1abd64638863115714222809&q=${city}&lang=pt`) 
            .then((reponse)=>{
                if(reponse.status === 200){
                    return reponse.json()
                }
            })
            .then((data)=>{setDataApi(data)})
        setCity("")
        setBtnActive("red")
        setUnitOpen(true)
    }
    return(
        <Container btnColorC={colorBtnActive} btnColorF={colorBtnNoActive}>
           <h1 className="title">Previsão do Tempo</h1>
           <div className="container-search">
                <label className="label-search">Digite o nome da cidade:</label>
                <div className="input-btn-search">
                    <AiOutlineSearch className="icon-search" size={20}/>
                    <input 
                        className="input-search"
                        type="text"
                        placeholder="Ex: Fortaleza"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className="btn-search" onClick={handleSubmit}>Pesquisar</button>
                </div>
           </div>

            {dataApi ? 
                <>
                    {unitOpen?
                        <div className="btn-temperature">
                            <button onClick={editColorBtnC} className="temperature-c">°C</button>
                            <button onClick={editColorBtnF} className="temperature-f">°F</button>
                        </div>
                        :null
                    }
                    <Card 
                        climate={dataApi.current.condition.text}
                        wind_km={dataApi.current.wind_kph}
                        wind_mile={dataApi.current.wind_mph}
                        hour={dataApi.location.localtime}
                        city={dataApi.location.name}
                        latitude={dataApi.location.lat}
                        longitude={dataApi.location.lon}
                        temp_c={dataApi.current.temp_c}
                        temp_f={dataApi.current.temp_f}
                        humidity={dataApi.current.humidity}
                        imageClimate={dataApi.current.condition.icon}
                        btnActive={colorBtnActive}
                    />
                </>
                :null
            }
        </Container>
    )
}