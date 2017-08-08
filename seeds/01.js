exports.seed = function(knex, Promise) {
  // Deletes ALL existinE entries
  return knex('patch').del()
    .then(function () {
      // Inserts seed entries
      return knex('patch').insert([
        {
          row_0:"WEWEWEWEWEWEWEWE",
          row_1:"EWEWEWEWEWEWEWEW",
          row_2:"WEWEWEWEWEWEWEWE",
          row_3:"EWEWEWEWEWEWEWEW",
          row_4:"WEWEWEWEWEWEWEWE",
          row_5:"EWEWEWEWEWEWEWEW",
          row_6:"WEWEWEWEWEWEWEWE",
          row_7:"EWEWEWEWEWEWEWEW",
          row_8:"WEWEWEWEWEWEWEWE",
          row_9:"EWEWEWEWEWEWEWEW",
          row_10:"WEWEWEWEWEWEWEWE",
          row_11:"EWEWEWEWEWEWEWEW",
          row_12:"WEWEWEWEWEWEWEWE",
          row_13:"EWEWEWEWEWEWEWEW",
          row_14:"WEWEWEWEWEWEWEWE",
          row_15:"EWEWEWEWEWEWEWEW"
        }
      ])
    })
}
