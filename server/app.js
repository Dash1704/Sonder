//import modules

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Import routes
const testRouter = require('./routes/test')
const userRouter = require('./routes/users');


//app
const app = express();

//db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("DB CONNECTED")).catch(err => console.log("DB CONNECTION ERROR", err));

//middleware
app.use(morgan('dev'));
app.use(cors({origin: true, credentials: true}));
app.use(express.json())

//routes
app.use("/", testRouter)
app.use("/users", userRouter);


// const testRoutes =require('./routes/test');
// app.use("/", testRoutes)

//port
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () => console.log(`Server is running on ${port}`))