var fs = require('fs');
var SQL = require(__dirname + '/node_modules/sql.js/js/sql');
var filebuffer = fs.readFileSync(__dirname + '/test.db');

// Load the db
var db = new SQL.Database(filebuffer);
function dbAccess(){
    var result = db.exec("SELECT * from User");
    return result;
}

module.exports=dbAccess;