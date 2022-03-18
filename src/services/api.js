import axios from "axios";


export const cityData = async (citySearch, units) => {

    try {
        const cityInformation = await axios.get("/geo/1.0/direct?", {
            params: {
                q: citySearch,
                lang: "pt_br",
                appid: "8d1104ad895fdb351658ff5a27cd5d47",
            },
        })
        try {
            const response = await axios.get("/data/2.5/onecall?", {
                params: {
                    lat: cityInformation.data[0].lat,
                    lon: cityInformation.data[0].lon,
                    lang: "pt_br",
                    appid: "8d1104ad895fdb351658ff5a27cd5d47",
                    units: units
                },
            })
            let fullResponse = {
                city: cityInformation.data[0].name,
                data: response.data
            }
            return fullResponse
        } catch (error) {
            alert("Houve um erro ao pesquisar os dados da cidade selecionada, por favor, tente mais tarde.")
        }
    }
    catch (error) {
        alert("Houve um erro ao pesquisar os dados, por favor, tente mais tarde.")
    }
}

