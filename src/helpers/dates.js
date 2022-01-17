// returns function that calculates the new date 
// ranges given a certain length
const dateCalculatorGetter = (length) => {
    let date_ptr = new Date();

    return () => {
        const start_date = (date_ptr.getDate() - length).split("T")[0]
        const end_date = date_ptr.toISOString().split("T")[0]
        console.log(start_date)
        console.log(end_date)
        date_ptr.setDate(date_ptr.getDate() - (length + 1)) // update ptr
        console.log(date_ptr.toDateString())
        return [start_date, end_date]
    }
}

export default {
    dateCalculatorGetter
}