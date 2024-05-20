const express = require('express')
const dotenv = require('dotenv')
const cors  = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()
app.use(bodyParser.json())
app.use(cors())

app.use("/", (req, res) => {
    res.json({
        status: "Hello from backend.",
        code: 200
    })
})

app.listen(() => app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)))
