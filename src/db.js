const mysql = require('mysql');
const product = [];
const category = [];
const conexion = mysql.createPool({
    connectionLimit : 10,
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user:'bsale_test',
    password:'bsale_test',
    database: 'bsale_test',
   
})

conexion.getConnection(
    function(error, connection){
        if(error){
            throw error;
    }else {
        console.log('CONECTADO')
    }
    connection.query('SELECT * from product', function(error,results){
        if(error) throw error;
        //console.log(results)
      let string = JSON.stringify(results)
      //console.log('string ' + string)
      let json = JSON.parse(string)
      //console.log(json + 'jsno')
     product.push(json)
    })
    connection.query('SELECT * from category', function(error,results){
        if(error) throw error;
        let string = JSON.stringify(results)
        //console.log('string ' + string)
        let json = JSON.parse(string)
        //console.log(json + 'jsno')
       category.push(json)
    })
    //console.log(result + 'dentro de conection')
    connection.release();
    }
);

module.exports = {
product, category
};