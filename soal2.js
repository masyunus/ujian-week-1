// PSEUDOCODE

// CREATE FUNCTION 
// GIVE PARAMETER(arr)
// SAVE arrBaru with value []
// SAVE hasilPertama with value 0

// START LOOPING ARRAY 

// CREATE RULES FOR with (var i = 0; i < arr.length; i++)
// IF "i" == 0
//  SAVE "hasilKedua" with array[i] + 0 + array[i + 1]
//  arrBaru.push(hasilKedua)
//  IF "hasilKedua" MODULUS 2 > 0
//  hasilPertama += hasilKedua 

// ELSE IF "i" (arr.length == (i + 1))
//  SAVE "hasilKedua" with array[i] + array[i -1] + 0
//  arrBaru.push(hasilKedua)
//  IF "hasilKedua" MODULUS 2 > 0
//  hasilPertama += hasilKedua

// ELSE 
//  SAVE "hasilKedua" with array[i] + array[i - 1] + array [i + 1] 
//  arrBaru.push(hasilKedua)
//  IF "hasilKedua" MODULUS 2 > 0
//  hasilPertama += hasilKedua

// RETURN hasilPertama

function numberCruncher(arr){
	var arrBaru = []
	var hasilPertama = 0
	for (var i = 0; i < arr.length; i++){
		if (i == 0){
			let hasilKedua = arr[i] + 0 + arr[i + 1]
			arrBaru.push(hasilKedua)
			if (hasilKedua % 2 > 0){
				hasilPertama += hasilKedua
			}
		}else if (arr.length == (i + 1)){
			let hasilKedua = arr[i] + arr[i - 1] + 0
			arrBaru.push(hasilKedua)
			if (hasilKedua % 2 > 0){
				hasilPertama += hasilKedua
			}
		}else{
			let hasilKedua = arr[i] + arr[i - 1] + arr[i + 1]
			arrBaru.push(hasilKedua)
			if (hasilKedua % 2 > 0){
				hasilPertama += hasilKedua
			}	
		}
	}
	return hasilPertama
} 
console.log(numberCruncher([2,5,1,3]))
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3]))
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3]))