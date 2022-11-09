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
// const  esperar = () => {
//  conexion.query('SELECT * from product', function(error, results, fields){
//     if(error) throw error;

// });
//   conexion.query('SELECT * from category', function(error, results, fields){
//     if(error) throw error;
//      results.forEach(r => { category.push(r);});
//      console.log('que trol' + category)
//      module.exports = { category}
//     // setTimeout( () => { results.push(category),5000})
// });}


// // function greet() {
// //     console.log('Hello world');
   //console.log(product + 'solito')
// // }

// // setTimeout(greet, 3000);
// // console.log ('This message is shown first');
//  esperar();
// setTimeout( () => { console.log(product + ' llenate'),100000})
//setTimeout(()=>{console.log(product + 'async'),300000})
module.exports = {
product, category
};