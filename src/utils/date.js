export const dateConvert = (unixDate, option)=>{
    let date = new Date(unixDate * 1000)
    let weekDay = date.getDay()
    let day = date.getUTCDate()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let month = date.getMonth()
    const formatedMonth = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    
    let data = Date.now()
    let dateNow = new Date(data * 1000)

    if(option === "fulldate"){
        return (`${hour > 9 ? hour : "0"+hour}:${minutes > 9 ? minutes : "0"+minutes} ${formatedMonth[month]} ${day}`)
    }
    if(option === "cardsInfo"){
        return (`${hour > 9 ? hour : "0"+hour}:${minutes > 9 ? minutes : "0"+minutes}`)
    }
    if(option === "weekdayfull"){

        console.log(dateNow )
        console.log(dateNow.getDay(), weekDay )
        switch (weekDay) {
            case 0:
                return("Domingo")
            case 1:
                return("Segunda-Feira")
            case 2:
                return("Terça-Feira")
            case 3:
                return("Quarta-Feira")
            case 4:
                return("Quinta-Feira")
            case 5:
                return("Sexta-Feira")
            case 6:
                return("Sábado")
            
            default:
                return("Hoje");
        }
    }


    switch (weekDay) {
        case 0:
            return("DOM")
        case 1:
            return("SEG")
        case 2:
            return("TER")
        case 3:
            return("QUA")
        case 4:
            return("QUI")
        case 5:
            return("SEX")
        case 6:
            return("SAB")
        
        default:
            break;
    }

}