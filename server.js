const express = require('express')

const dbConnect = require('./config');
const  bodyParser = require('body-parser');
const app = express()
const PORT = '3000' || process.env.PORT;


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
}) 

app.get('/portfolio', (req, res) => {
    res.sendFile('sitemap')
}) 

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/sitemap.xml',(req,res) =>{
	res.sendFile('sitemap.xml')
	console.log('sitemap sent successfully')
})

app.get('/', (_, res) => {
    res.render('index')
})

app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.post('/contact',async (req,res)=>{   
    let data = await dbConnect('contact');
    let result = await data.insertOne(req.body);
    res.render('thanks')

    
})

app.get('/resume',(req,res)=>{
    res.render('resume')
})



app.get('/blogs',async (req,res)=>{  
    let data = await dbConnect('blogs');
    data = await data.find().toArray();
    res.render('maintenance')
})

app.get('*', (req, res) => {
    res.send(`<h1>404, Oops Page Not Found</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server Started Successfully on http://localhost:${PORT}`)
}) 
