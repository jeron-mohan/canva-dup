const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

dotenv.config()


if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin:'http://localhost:5174',
        credentials:true
    }))
} else {
    app.use(cors({
        credentials:true
    }))
}

if(process.env.NODE_ENV === 'prod'){
app.use(express.static(path.join(__dirname,"./frontend-canva/dist")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./","fromtend-canva","dist","index.html"))
})
}


const dbConnect = async() =>{
    try {
        if (process.env.NODE_ENV === 'local') {
            await mongoose.connect(process.env.LOCAL_DB_URI)
            console.log("Local db connected");
        } else {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log("prod db connected");
            
        }
    } catch (error) {
        console.log("DB connect failed");
    }
}
 
dbConnect()



const PORT = process.env.PORT
app.listen(PORT,() => console.log(`server is running on port ${PORT}...`))