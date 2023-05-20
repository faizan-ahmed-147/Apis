const mongoose = require("mongoose")


const connectToMongo = async()=>{
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.DATABASE) 
        console.log('DATABASE connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}


module.exports = connectToMongo