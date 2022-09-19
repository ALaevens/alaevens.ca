export function datesArrToString(dates) {
    let chunks = [];
    for (let i = 0; i < dates.length; i+=2) {
      chunks.push(dates.slice(i, i+2).join(" - "))
    }
    return chunks.join(", ")
}