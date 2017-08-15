console.log("js connected")

$(document).ready(function(){
  var quilt = $("#quilt");
  var patch = $("#patch");
  var quiltDB = [];
  var selectedPatchDB = [];
  const colorArr = ["A","B","C","D","P","F","G","H","I", "J", "K", "L", "M", "N", "O", "E", "Q", "R"];
  var sectionModel = document.getElementById('sectionModel');
  var sectionId = 1;
  var SelectedColor = "rgb(255, 255, 255)";
  var selectedSection = 0;

  //get call of quilt database and initilize the quilt
  $.get('/quilt').then(function(data) {
    quiltDB = unpack(data);
    fillQuilt(quiltDB);
    fillPallette(colorArr);
  })

  //display the selected patch in the modal window and set the sected array
  quilt.click(function(event) {
    selectedSection = event.target.parentElement
    if(selectedSection.className === "section") {
      sectionId = selectedSection.id;
      $("#sectionId").text(+sectionId +1)
      sectionModel.style.display = 'flex';
      patch.empty();
      selectedPatchDB = copyPatch(quiltDB[selectedSection.id])
      SelectedColor = "rgb(255, 255, 255)";
      changeSelectedColor(SelectedColor);
      fillPatch(quiltDB[selectedSection.id])
    }
  })

  //hide the modal window
  $('#closeModalBtn').click(function(){
    sectionModel.style.display = 'none';
  })

  //reset the patch display and reset the selected array
  $('#undoBtn').click(function() {
    selectedPatchDB = copyPatch(quiltDB[selectedSection.id]);
    patch.empty();
    fillPatch(quiltDB[selectedSection.id])
  })

  //change the selected color
  $('#colorPalette').click(function(event) {
    SelectedColor = event.target.style.backgroundColor;
    changeSelectedColor(SelectedColor);
  })

  //change color of pallete pixel and change the selected array
  patch.click(function(event) {
    event.target.style.backgroundColor = SelectedColor;
    let row = event.target.getAttribute("row");
    let char = event.target.getAttribute("char");
    selectedPatchDB[row][char] = getChar(SelectedColor);
  })

  //submit the edited patch to the database
  $('#sumbitPatch').click(function() {
    let dbId = +selectedSection.id +1
    let packagedData = pack(selectedPatchDB);
    PostObjectToUrl('/updatePatch/' + dbId, {packagedData})
  })

})

  //post the current selectedArr to the database
  function PostObjectToUrl(url, obj){

        var json, form, input;
        json = JSON.stringify(obj);

        form = document.createElement("form");
        form.method = "post";
        form.action = url;
        input = document.createElement("input");
        input.setAttribute("name", "json");
        input.setAttribute("value", json);
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
  }

  function fillQuilt(quiltArr) {
    for(let id in quiltArr){
      let tempSection = document.createElement('div');
      tempSection.className = "section";
      tempSection.id = id;
      tempSection.text = id;
      quilt.append(tempSection);
      for(let row = 0; row < quiltArr[id].length; row++) {
        for(let char = 0; char < quiltArr[id][row].length; char++) {
          let tempPixel = document.createElement('div');
          tempPixel.className = "pixel";
          tempPixel.id = id + "_" + row + "_" + char;
          tempPixel.style.backgroundColor = getColor(quiltArr[id][row][char]);
          tempSection.append(tempPixel);
        }

      }
    }
  }

  function fillPatch(patchArr) {
    for (let row = 1; row < patchArr.length; row++) {
      for (let char = 0; char < patchArr[row].length; char++) {
        let tempPixel = document.createElement('div');
        tempPixel.className = "patchPixel";
        tempPixel.id = row + "_" + char;
        tempPixel.setAttribute("row", row);
        tempPixel.setAttribute("char", char);
        tempPixel.style.backgroundColor = getColor(patchArr[row][char])
        patch.append(tempPixel);
      }
    }
  }

  function fillPallette(colors) {
    var palette = $('#colorPalette');
    for(let arrPos = 0; arrPos < colors.length; arrPos++) {
      let tempColor = document.createElement('div');
      tempColor.className = "palettePixel";
      tempColor.style.backgroundColor = getColor(colors[arrPos]);
      palette.append(tempColor);
    }
  }

  function changeSelectedColor(color) {
    $('#selectedColor').empty();
    let tempColor = document.createElement('div');
    tempColor.className = "selectedPixel";
    tempColor.style.backgroundColor = color;
    $('#selectedColor').append(tempColor);
  }

  function copyPatch(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      tempArr[i] = [];
      for(let n = 0; n < arr[i].length; n++) {
        tempArr[i][n] = arr[i][n];
      }
    }
    return tempArr;
  }

  function unpack(data){
    let tempArr = [];
    let tempRow;
    for (let patch = 0; patch < data.length; patch ++) {
      tempArr[patch] = [];
      tempRow = 0;
      for (let row in data[patch]) {
        tempArr[patch][tempRow] = [];
        for (let char = 0; char < data[patch][row].length; char++) {
          tempArr[patch][tempRow][char] = data[patch][row].charAt(char);
        }
        tempRow++
      }
    }
    return tempArr;
  }

  function pack(data) {
    let tempObj = {
      row_1: data[1].join(''),
      row_2: data[2].join(''),
      row_3: data[3].join(''),
      row_4: data[4].join(''),
      row_5: data[5].join(''),
      row_6: data[6].join(''),
      row_7: data[7].join(''),
      row_8: data[8].join(''),
      row_9: data[9].join(''),
      row_10: data[10].join(''),
      row_11: data[11].join(''),
      row_12: data[12].join(''),
      row_13: data[13].join(''),
      row_14: data[14].join(''),
      row_15: data[15].join(''),
      row_16: data[16].join(''),
      row_17: data[17].join(''),
      row_18: data[18].join(''),
      row_19: data[19].join(''),
      row_20: data[20].join(''),
      row_21: data[21].join(''),
      row_22: data[22].join(''),
      row_23: data[23].join(''),
      row_24: data[24].join(''),
      row_25: data[25].join(''),
      row_26: data[26].join(''),
      row_27: data[27].join(''),
      row_28: data[28].join(''),
      row_29: data[29].join(''),
      row_30: data[30].join(''),
      row_31: data[31].join(''),
      row_32: data[32].join('')
    }
    return tempObj
  }

  //return color from character
function getColor(char){
  switch(char){
    case "A":
      return "rgb(36, 122, 35)"
      break;
    case "B":
      return "rgb(48, 191, 46)"
      break;
    case "C":
      return "rgb(38, 158, 140)"
      break;
    case "D":
      return "rgb(32, 89, 136)"
      break;
    case "P":
      return "rgb(55, 171, 228)"
      break;
    case "F":
      return "rgb(131, 0, 220)"
      break;
    case "G":
      return "rgb(172, 15, 95)"
      break;
    case "H":
      return "rgb(244, 38, 24)"
      break;
    case "I":
      return "rgb(233, 103, 29)"
      break;
    case "J":
      return "rgb(242, 146, 33)"
      break;
    case "K":
      return "rgb(255, 120, 233)"
      break;
    case "L":
      return "rgb(255, 205, 148)"
      break;
    case "M":
      return "rgb(240, 238, 77)"
      break;
    case "N":
      return "rgb(139,69,19)"
      break;
    case "O":
      return "rgb(255, 255, 255)"
      break;
    case "E":
      return "rgb(212, 212, 212)"
      break;
    case "Q":
      return "rgb(134, 134, 134)"
      break;
    case "R":
      return "rgb(0, 0, 0)"
      break;
    default:
      return "rgb(255, 255, 255)";
  }
}

function getChar(color){
  switch(color){
    case "rgb(36, 122, 35)":
      return "A"
      break;
    case "rgb(48, 191, 46)":
      return "B"
      break;
    case "rgb(38, 158, 140)":
      return "C"
      break;
    case "rgb(32, 89, 136)":
      return "D"
      break;
    case "rgb(55, 171, 228)":
      return "P"
      break;
    case "rgb(131, 0, 220)":
      return "F"
      break;
    case "rgb(172, 15, 95)":
      return "G"
      break;
    case "rgb(244, 38, 24)":
      return "H"
      break;
    case "rgb(233, 103, 29)":
      return "I"
      break;
    case "rgb(242, 146, 33)":
      return "J"
      break;
    case "rgb(255, 120, 233)":
      return "K"
      break;
    case "rgb(255, 205, 148)":
      return "L"
      break;
    case "rgb(240, 238, 77)":
      return "M"
      break;
    case "rgb(139,69,19)":
      return "N"
      break;
    case "rgb(255, 255, 255)":
      return "O"
      break;
    case "rgb(212, 212, 212)":
      return "E"
      break;
    case "rgb(134, 134, 134)":
      return "Q"
      break;
    case "rgb(0, 0, 0)":
      return "R"
      break;
    default:
      return "O";
  }
}
