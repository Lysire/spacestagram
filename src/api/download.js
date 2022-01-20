import getDateRange from '../helpers/dates'

import axios from 'axios';

// date configurations
const duration = 9
let offset = 1
let [start, end] = getDateRange(offset, duration)

// nasa api configurations
const url = 'https://api.nasa.gov/planetary/apod'
let params = {
    api_key: "DEMO_KEY",
    thumbs: true,
    start_date: start,
    end_date: end,
}

async function getFromNasaApi(callback) {
    let response = (await axios.get(url, {params: params}))

    // don't do anything if requested resp not obtained
    if (response.status != 200) {
        callback(null)
        return
    }

    const dateId = params['end_date']
    let result = response.data

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

    // update dates
    offset += (duration + 1)
    const [start, end] = getDateRange(offset, duration)
    params['start_date'] = start
    params['end_date'] = end

    callback(dateId, result)
}

export default getFromNasaApi