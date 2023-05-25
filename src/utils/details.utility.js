export function convertToHour(min) {
  let hours = Math.floor(min / 60)
  let minutes = min % 60

  return min ? `${hours}:${minutes}min` : 'unknow'
}
export function convertDateFromApi(date) {
  if (date) {
    let year = date.split('-')
    return year[0]
  } else {
    return 'unknow'
  }
}
