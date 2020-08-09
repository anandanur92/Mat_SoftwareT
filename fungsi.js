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

 exports.login = function(req, res) {
    
    var username = req.query.username;
    var password = req.query.password;

    connection.query('SELECT * FROM user where username = ? and password = ?',
    [ username,password ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            if(rows.length>0) {
                response.ok(rows, "Success Login", res)
            }
            else {
                response.failure(rows, "Login Failed", res)
            }
            
        }
    });
};
