import express from 'express'
import cors from 'cors'
import connectDB from './DB/connjection.js'
import  userRouter from './routes/user.route.js'

const app = express()
const port = process.env.PORT||3000
//const port =3000
//const baseUrl='/api/v1'
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)


app.use('*', (req, res) => res.send('In-valid Routing'))
connectDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



    // fs.createReadStream("./assets/test2_senior.csv")
    //       .pipe(parse({ delimiter: ",", from_line: 2 }))
    //       .on("data", function (row) {
    //         if (row[0]==ImageName){
    //            const cordanites= row.slice(1, 3);
    //            console.log( cordanites)
    //         }
            
    //       })
    //       .on("error", function (error) {
    //         console.log(error.message);
    //       })