
const TEMPLATE_FORMAT = {
    year: ["YYYY","YY",],
    month: ["MM", "M"],
    day: ["DD","D"]
}
const TEMPLATE_DELIMITER = ['/','-','']



export function format(date, template) {
    if(!(date instanceof Date) || isNaN(date)) throw new Error("Invalid date provided");
    // check if 
}
