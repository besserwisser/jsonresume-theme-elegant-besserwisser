module.exports = {
  yearOnly(dateString) {
    return dateString.substring(dateString.length - 4, dateString.length)
  }
}