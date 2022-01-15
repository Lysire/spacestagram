import axios from 'axios';

// api configurations
const url = 'https://api.nasa.gov/planetary/apod'
const params = {
    api_key: "DEMO_KEY",
    thumbs: true,
    start_date: "2022-1-9",
    end_date: "2022-1-14",
}

async function getFromApi(callback) {
    let result = (await axios.get(url, {params: params})).data
    // put single object into array
    if (Object.prototype.toString.call(result) === "[object Object]") {
        result = [result]
    }
    result.reverse() // latest ones first
    // process for viewing on photo card
    result.forEach((item, idx) => {
        let changed;
        if (item['media_type'] == 'video') {
            changed = (({explanation, thumbnail_url, date, title}) => ({desc:explanation, src:thumbnail_url, date, title}))(item)
        } else {
            changed = (({explanation, url, date, title}) => ({desc:explanation, src:url, date, title}))(item)
        }
        result[idx] = changed
    })
    callback(result)
}

export default {
    getFromApi
}