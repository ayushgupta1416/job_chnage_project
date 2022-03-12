const mongoose = require('mongoose')


const connectDatabase = () =>{

mongoose.connect("mongodb+srv://ayush1998:ayush1998@newclusterdatabase.lo5fm.mongodb.net/newClusterDatabase?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true}).then((data) =>{
    console.log(`database connected: ${data.connection.host}`)
    }).catch((err) =>{
    console.log(err)
    })
}


module.exports = connectDatabase