export const dateConvert = (unixDate, option)=>{
    let date = new Date(unixDate * 1000)
    let weekDay = date.getDay()
    let day = date.getUTCDate()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let month = date.getMonth()
    const formatedMonth = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

    if(option === "fulldate"){
        return (`${hour > 9 ? hour : "0"+hour}:${minutes > 9 ? minutes : "0"+minutes} ${formatedMonth[month]} ${day}`)
    }
    if(option === "cardsInfo"){
        return (`${hour > 9 ? hour : "0"+hour}:${minutes > 9 ? minutes : "0"+minutes}`)
    }
    

    switch (weekDay) {
        case 0:
            return("SEG")
        case 1:
            return("TER")
        case 2:
            return("QUA")
        case 3:
            return("QUI")
        case 4:
            return("SEX")
        case 5:
            return("SAB")
        case 6:
            return("DOM")
        default:
            break;
    }

}