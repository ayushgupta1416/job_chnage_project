const app = require("./app")
const dotenv = require("dotenv")
const connectDatabse = require("./config/database")

dotenv.config({path: "backend/config/config.env"})

connectDatabse()



app.listen(process.env.PORT, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}`)
})