import moment from "jalali-moment";

// format a date to 'YYYY-MM-DD' string
const birthDateFormat = (date) => moment(date).format('YYYY-MM-DD')

export {birthDateFormat}