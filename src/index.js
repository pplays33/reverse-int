module.exports = function reverse (n) {
  let numSrt = String(n).split('').reverse().join('');;
  return numSrt.replace("-","");
}
