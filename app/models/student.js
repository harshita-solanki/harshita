var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    student: {
        rollno: String,
        fname: String,
        lname: String
    }
});
module.exports = mongoose.model('Student', studentSchema);
