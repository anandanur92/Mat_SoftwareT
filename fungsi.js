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

exports.register = function(req, res) {
    
    var username = req.body.username;
    var fullName = req.body.fullname;
    var password = req.body.password;
    var email = req.body.email;
    var location = req.body.location;
    var createdAt = Date.now();
    var updatedAt = Date.now();
    connection.query('INSERT INTO user (username,fullName, email,password,location,createdAt,updatedAt) values (?,?,?,?,?,?,?)',
    [ username,fullName,email,password,location,createdAt,updatedAt ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success add User!", res)
        }
    });
};
