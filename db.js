const mysql = require('mysql');
const connection = mysql.createConnection('mysql://livingtech_gabriel:parola2001@livingtech.ro/livingtech_ExtremeDB');

connection.connect((err)=>{
if(err){
    console.error("an error occured: "+err);
    return;
}
console.log("Mysql db connected succesfully")

});

module.exports={connection};