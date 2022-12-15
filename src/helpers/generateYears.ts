import moment from "moment"


export const generateYears = (): number[] => {

    
    let initialYear = moment().year()

    const lastYear = initialYear + 10
    const years = []
    for (let i = initialYear; i < lastYear; i++) {
        
        years.push(i)
        
    }
    return years
}