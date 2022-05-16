const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/student-magmt-sys', {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=> console.log('Succesfully connect mongodDB server....'))
.catch(err => console.error('Error occur connecting mongoDB server..', err));