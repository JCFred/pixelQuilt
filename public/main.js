console.log("js connected")

$(document).ready(function(){
  var quilt = $("#quilt");

  $.get('/data').then(function(data){
    // for (let row in data[0]){
    //   console.log(data[0][row])
    // }

    var patch = unpack(data);
    console.log(patch);
    fillQuilt(patch);

  })

  function fillQuilt(patch) {
    for(let y = 1; y < patch.length; y++){
      for(let x = 0; x < patch[y].length; x++) {
        let tempPixel = document.createElement('div');
        tempPixel.className = "pixel";
        tempPixel.id = y + "_" + (x+1);
        tempPixel.style.backgroundColor = getColor(patch[y][x]);
        quilt.append(tempPixel);
      }
    }
  }

  function unpack(data){
    let tempArr = [];
    let rowNum = 0;
    for(let row in data[0]){
      tempArr[rowNum] = [];
      for (var i = 0; i < data[0][row].length; i++) {
        tempArr[rowNum][i] = data[0][row].charAt(i);
      }
      rowNum++
    }
    return tempArr;
  }

  //return color from character
function getColor(char){
  switch(char){
    case "G":
      return "rgb(37, 156, 35)"
      break;
    case "Y":
      return "rgb(240, 238, 77)"
      break;
    case "R":
      return "rgb(244, 38, 24)"
      break;
    case "B":
      return "rgb(55, 171, 228)"
      break;
    case "V":
      return "rgb(131, 1, 201)"
      break;
    case "O":
      return "rgb(242, 146, 33)"
      break;
    case "W":
      return "rgb(255, 255, 255)"
      break;
    case "E":
      return "rgb(152, 152, 152)"
      break;
    case "L":
      return "rgb(0, 0, 0)"
      break;
    default:
      return "rgb(255, 255, 255)";
  }
}

})
