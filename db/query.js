const pg = require('./knex');

function getPatch() {
  return pg('patch');
}

function updateRow(obj){
  let string = "";
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
  getPatch,
  updateRow
}
