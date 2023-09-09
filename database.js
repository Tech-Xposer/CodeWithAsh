const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'codewithash'
})
connection.connect((err)=>{
    if(err) throw err
    console.log('Database Connected Successfully');
})


module.exports = connection