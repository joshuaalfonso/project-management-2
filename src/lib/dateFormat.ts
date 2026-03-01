
import { differenceInDays, format } from 'date-fns';




export const DateDisplay = (date: string) => {

    if (date) {
        return format( new Date(date), 'dd/MM/yyyy' )
    } else {
        return null
    }

}



export const DateDifferenceDisplay = (date: string) => {

    if (date) {

        const start = new Date();
        const end = new Date(date); 

        return differenceInDays(end, start)
    } else {
        return null
    }

}