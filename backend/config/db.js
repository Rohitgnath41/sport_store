import mysql from 'mysql2'

export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sports'
})

export default db