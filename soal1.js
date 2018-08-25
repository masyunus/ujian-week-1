function drawThreeColsBox(height){
    var tigaAngka = [1,2,3] ;
    for(var i = 0; i < height; i++){
      if(i == 0){
      var urutan = String(tigaAngka[0]) +' ' + String(tigaAngka[1]) + ' ' +  String(tigaAngka[2]);
      } else {
      tigaAngka[0] = tigaAngka[0] + 3;
      tigaAngka[1] = tigaAngka[1] + 3;
      tigaAngka[2] = tigaAngka[2] + 3;
      var urutan = String(tigaAngka[0]) +' ' + String(tigaAngka[1]) + ' ' +  String(tigaAngka[2]);
      }
      console.log(urutan);
    }
    console.log();
  }
drawThreeColsBox(3)
drawThreeColsBox(5)
drawThreeColsBox(1)