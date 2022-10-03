import { ContainerCard } from "./style"
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'
import { GiWaterDrop } from 'react-icons/gi'
import { FiWind } from 'react-icons/fi'

export const Card = (props) =>{

    let date = props.hour;
    let editDate = date.substr(10)

    return(
        <ContainerCard>
            <div className="title-city-your">
                <h4>{props.city}</h4>
                <h4>{editDate}</h4>
            </div>

            <div className="image-title-climate">
                <img 
                    className="imageClimate"
                    src={props.imageClimate} 
                    alt="imagem do clima"
                />
                <h4>{props.climate}</h4>
            </div>

            <div className="all-info-climate">
                <div className="info">
                    {props.btnActive === "#064789" ?
                        <div className="icon-title">
                            <FiWind size={17}/>
                            <h4>{props.wind_km}km/h</h4>
                        </div>
                        :
                        <div className="icon-title">
                            <FiWind size={17}/>
                            <h4>{props.wind_mile}mph</h4>
                        </div>
                    }
                    <div className="icon-title">
                        <GiWaterDrop size={17}/>
                        <h4>{props.humidity}%</h4>
                    </div>
                    <div className="icon-title">
                        <TbWorldLatitude size={17}/>
                        <h4>{props.latitude}°</h4>
                    </div>
                    <div className="icon-title">                        
                        <TbWorldLongitude size={17}/>
                        <h4>{props.longitude}°</h4>
                    </div>
                </div>
                {props.btnActive === "#064789" ?
                    <h4 className="temperature">{props.temp_c}°</h4>
                    :
                    <h4 className="temperature">{props.temp_f}°</h4>
                }
            </div>
        </ContainerCard>
    )
}