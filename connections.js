var mysql = require('mysql')
// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: "root",
//     host: "root",
//     database: "Rocket_Elevator_Information_System_development",
//     password: "Rolens123@",
//     port: "5432"
//   });
// const schema = "myschema";
// var pgSchemas = [];

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rolens123@",
    database: "Rocket_Elevator_Information_System_development"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("Show tables", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    console.log("we are connected to mysql")
    });
    con.query("Select * from addresses", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      console.log("Addresses table")
    });
  });   

