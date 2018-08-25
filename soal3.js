function digitsGrouper(arr){
  var array = []
  for (var i = 1; i <= 4; i++) {
    let arrayBaru = []
    for (var a = 0; a < arr.length; a++) {
      let ubahString = String(arr[a])
      if (i == ubahString.length) {
        arrayBaru.push(arr[a])
      }
    }
    array.push(arrayBaru)
  }
  return array
}
console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456]));
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654]));
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555]));
console.log(digitsGrouper([]));
console.log(digitsGrouper([0, 00, 000, 0000]));