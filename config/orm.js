var connection = require("./connection.js");

var orm = {

  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      cb (result);
    });
  },

	insertOne: function(table, cols, vals, cb) {

	var queryString = "INSERT INTO " + table;

	queryString += " (";
	queryString += cols.toString();
	queryString += ") ";
	queryString += "VALUES (";
	queryString += printQuestionMarks(vals.length);
	queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb (result);
    });
  },

  updateOne: function(burgerID, cb) {

    connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}], function(err, result) {
        if (err) throw err;
        cb (result);
      });
  }

};


module.exports = orm;