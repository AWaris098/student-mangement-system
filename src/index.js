const express = require('express');
require('./db/mongoose');
const app = express();
const session = require('express-session')
const bodyParser = require('body-parser')

const passport = require('passport')
const courseRouter = require('./routes/courses')
const departmentRouter = require('./routes/departments')
// require('./config/passport')(passport);


// Use Routes

app.use(courseRouter)
app.use(departmentRouter)
//  Express session

app.set('trust proxy', 1)
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json())

// Passport middleware

app.use(passport.initialize())
app.use(passport.session())



const port = process.env.Port || 3001


app.listen(port, () => {
    console.log(`port listning up on port ${port}`)
})