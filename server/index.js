const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css',(req,res) => {
  res.sendFile(path.join(__dirname, '../styles.css'))
})
app.get('/img',(req,res) => {
  res.sendFile(path.join(__dirname, '../img'))
})

// app.use(express.static("web-hosting"))


const port = process.env.PORT || 4005

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
})