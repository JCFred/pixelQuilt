const pg = require('./knex');

function getQuilt() {
  return pg('patch').orderBy('id', 'asc');
}

function updatePatch(obj) {
  let patchId = obj.id
  console.log(patchId)
  let temp = JSON.parse(obj.data.json)
  let data = temp.packagedData
  console.log(patchId)
  return pg('patch').where('id', patchId).update({
    'row_1': data.row_1,
    'row_2': data.row_2,
    'row_3': data.row_3,
    'row_4': data.row_4,
    'row_5': data.row_5,
    'row_6': data.row_6,
    'row_7': data.row_7,
    'row_8': data.row_8,
    'row_9': data.row_9,
    'row_10': data.row_10,
    'row_11': data.row_11,
    'row_12': data.row_12,
    'row_13': data.row_13,
    'row_14': data.row_14,
    'row_15': data.row_15,
    'row_16': data.row_16,
    'row_17': data.row_17,
    'row_18': data.row_18,
    'row_19': data.row_19,
    'row_20': data.row_20,
    'row_21': data.row_21,
    'row_22': data.row_22,
    'row_23': data.row_23,
    'row_24': data.row_24,
    'row_25': data.row_25,
    'row_26': data.row_26,
    'row_27': data.row_27,
    'row_28': data.row_28,
    'row_29': data.row_29,
    'row_30': data.row_30,
    'row_32': data.row_31,
    'row_32': data.row_32
  })
}

function updatePatchPostman(obj) {
  let patchId = obj.id
  console.log(obj)
  let data = obj.data.json
  console.log("data:")
  console.log(data)
  return pg('patch').where('id', patchId).update({
    'row_1': data.row_1,
    'row_2': data.row_2,
    'row_3': data.row_3,
    'row_4': data.row_4,
    'row_5': data.row_5,
    'row_6': data.row_6,
    'row_7': data.row_7,
    'row_8': data.row_8,
    'row_9': data.row_9,
    'row_10': data.row_10,
    'row_11': data.row_11,
    'row_12': data.row_12,
    'row_13': data.row_13,
    'row_14': data.row_14,
    'row_15': data.row_15,
    'row_16': data.row_16,
    'row_17': data.row_17,
    'row_18': data.row_18,
    'row_19': data.row_19,
    'row_20': data.row_20,
    'row_21': data.row_21,
    'row_22': data.row_22,
    'row_23': data.row_23,
    'row_24': data.row_24,
    'row_25': data.row_25,
    'row_26': data.row_26,
    'row_27': data.row_27,
    'row_28': data.row_28,
    'row_29': data.row_29,
    'row_30': data.row_30,
    'row_32': data.row_31,
    'row_32': data.row_32
  })
}

function updateRow(obj){
  let string = "";
  console.log(obj);
  for(let key in obj){
    console.log(key)
    console.log(obj[key])
    if (obj[key].length > 1) {
      string = obj[key];
    }
  }
  console.log(string);
  return pg('patch').update({
    row_0: string
  })
}

module.exports = {
  getQuilt,
  updatePatch,
  updatePatchPostman
}
