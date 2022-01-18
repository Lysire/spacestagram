const dateFormat = 'YYYY-MM-DD'
let dayjs = require('dayjs')

// returns a new date range of given length starting
// from offset days ago
function getDateRange(offset, length) {
    const end_date = dayjs().subtract(offset, 'days').format(dateFormat);
    const start_date = dayjs().subtract(offset + length, 'days').format(dateFormat);
    return [start_date, end_date];
} 

export default getDateRange