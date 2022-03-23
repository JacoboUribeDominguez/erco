const express = require('express')
const app = express();
const cors = require('cors')

app.set('port', process.env.PORT || 3005)

app.use(cors())

app.use('/countries', require('./Routes/Countries'))
app.use('/states', require('./Routes/States'))
app.use('/cities', require('./Routes/Cities'))

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})