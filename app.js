const express = require('express')
const multer = require("multer");
const app = express()
const port = 3000 

// mongoose연결 

const connect = require('./schemas')
connect()

app.use(express.static('public'))
app.use(express.static("uploads"));

//body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const upload = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    },
  });

const userRouter = require('./routers/users')
const boardRouter = require('./routers/boards')
const detailRouter = require('./routers/detail')
// const profileRouter = require('./routers/profile')

app.use('/user', [userRouter])
app.use('/board', [boardRouter])
app.use('/detail', [detailRouter])
// app.use('/profile', [profileRouter])


//ejs setting 
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('auth')
})

app.get('/signUp', (req, res)=> {
    res.render('signUp')
})

app.get('/board', (req, res)=> {
    res.render('boards')
})

app.get('/detail', (req, res)=> { 
    res.render('detail')
})


app.get('/profile', (req, res)=>{
    res.sendFile(`${__dirname}/public/profile.html`)
})

app.patch("/action", upload.single("profileImage"), (req, res)=>{
    console.dir(req.body)
})

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})
