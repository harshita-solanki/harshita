var Student = require('../app/models/Student');
var fs = require('fs');
module.exports = function(app, server) {

    app.get('/', function(request, response) {
        response.render('index.html');
    });

    app.get('/register', function(request, response) {
        response.render('register.html', {
            message: request.flash('Registration Error')
        });
    });

    app.post('/register', function(req, res) {
        var newStudent = new Student();
        newStudent.rollno = req.body.rollno;
        newStudent.fname = req.body.fname;
        newStudent.lname = req.body.lname;
        process.nextTick(function() {
            newStudent.save(function(err, result) {
                if (err)
                    throw err;
                res.writeHead(200, {
                    'content-type': 'text/html'
                });
                fs.readFile('./views/success.html', null, function(err, data) {
                    if (err) {
                        res.writeHead(404);
                        res.write('File not found');
                    } else {
                        res.write(data);
                    }
                    res.end();
                });
            });
        });
    });
};
