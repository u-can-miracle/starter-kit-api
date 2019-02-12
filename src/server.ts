import * as express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("Awesome! We're live debugging this!")
})

process.on('uncaughtException', (err) => {
  console.log('Oops! err: ', err) //TODO change to winston
})

app.listen(3001, function(){
  console.log(`Listening at port: 3001`)
})
