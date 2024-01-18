const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname, '../../assets')
const viewsPath = path.join(__dirname, '../../templates/views')
const partialPath = path.join(__dirname, '../../templates/partials')

// setup handlebars for engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// setup static director to serve
app.use(express.static(publicDirPath))
app.use(express.urlencoded({ extended: false }));

app.get('', (req, res) => {
    res.render('index')
})

app.get('/adminclick', (req, res) => {
    res.render('admin/adminclick')
})

app.get('/adminsignup', (req, res) => {
    res.render('admin/adminsignup')
})

app.get('/adminlogin', (req, res) => {
    res.render('admin/adminlogin')
})

app.post('/adminlogin', (req, res) => {
    res.render('admin/adminbase')
})

app.post('/adminsignup', (req, res) => {
    res.render('admin/adminlogin')
})

app.get('/teacherclick', (req, res) => {
    res.render('teacher/teacher_card')
})

app.get('/studentclick', (req, res) => {
    res.render('student/student_card')
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
})