import axios from "axios"
import { useContext, useState } from "react"
import { Button, FormWrapper, Icon, Input, Title } from "./styles"
import iconSearch from '../../assets/search.png'
import { WeatherContext } from "../../core/WeatherContext"


export const CitySearch = () => {
    const [citySearch, setCitySearch] = useState("")
    const weatherContext = useContext(WeatherContext)


    const handleSubmit = (e) => {
        e.preventDefault()


        axios.get('/geo/1.0/direct?', {
            params: {
                q: citySearch,
                lang: 'pt_br',
                appid: "8d1104ad895fdb351658ff5a27cd5d47",

            }
        })
            .then((response) => {
                let lat = response.data[0].lat
                let lon = response.data[0].lon
                let city = response.data[0].name

                weatherContext.setCity(city)

                axios.get('/data/2.5/onecall?', {
                    params: {
                        lat: lat,
                        lon: lon,
                        lang: 'pt_br',
                        appid: "8d1104ad895fdb351658ff5a27cd5d47",
                        units: "metric",
                    }
                })
                    .then((response) => {
                        console.log('searchData', response.data)
                        weatherContext.setSearchData(response.data)
                        weatherContext.setSelectedData(undefined)
                        weatherContext.setSelectedCardIndex()
                        
                    })
            })
    }
    return (
        <div className="wrapper">
            <Title>
                <h2>Seja bem Vindo</h2>
                <h2><span>Selecione uma cidade</span></h2>
            </Title>
            <FormWrapper searchIcon="../..assets/search.png" onSubmit={handleSubmit}>
                <Input placeholder='Pesquisar por cidade' value={citySearch} onChange={(e) => setCitySearch(e.target.value)} />
                <Button type="submit">
                    <Icon src={iconSearch} alt="search-icon" />
                </Button>
            </FormWrapper>
        </div>
    )
}