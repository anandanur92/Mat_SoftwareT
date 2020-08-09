exports.getAll = function(req, res) {
    
    connection.query('SELECT * FROM diagnosa',
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success Get Diagnosa", res)
        }
    });
};
