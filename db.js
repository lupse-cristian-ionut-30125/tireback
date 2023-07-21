const mysql = require("mysql");
const connection = mysql.createConnection(
  "mysql://extremeparts_gabriel:parola2001@extreme-parts.com/extremeparts_ExtremeDB"
);

connection.connect((err) => {
  if (err) {
    console.error("an error occured: " + err);
    return;
  }
  console.log("Mysql db connected succesfully");
});

module.exports = { connection };
