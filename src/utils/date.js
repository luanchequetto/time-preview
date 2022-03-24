import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateConvert = (unixDate, option) => {
  let date = new Date(unixDate * 1000);

  if (option === "fulldate") {
    return format(date, 'HH:mm MMM', { locale: ptBR })

  }
  if (option === "cardsInfo") {
    return format(date, 'HH:mm', { locale: ptBR })
  }
  if (option === "weekdayfull") {
    const weekDay = format(date, 'EEEE', { locale: ptBR })
    let capitalized = weekDay[0].toUpperCase() + weekDay.substring(1)
    return capitalized
  }

  return format(date, 'EEEEEE', { locale: ptBR }).toUpperCase()
};
