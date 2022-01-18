// api for getting from storage
const getFromStorage = () => {
    let val = sessionStorage.getItem("likes")
    if (val) {
        return JSON.parse(val)
    } else {
        return []
    }
}

export default getFromStorage