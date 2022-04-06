const app = require('../app')

//port
const port = process.env.PORT || 8080;

//listener
app.listen(port, () => console.log(`Server is running on ${port}`))
