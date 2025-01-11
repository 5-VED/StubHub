import express from "express"

// Importing Routers
import { signupRouter } from "./routes/signup"
import { signinRouter } from "./routes/signin"
import { currentUserRouter } from "./routes/current-user"

// Import Error Handaler
import { errorHandler } from "./middlewares/error-handler"

//Import Cookie Session
import cookieSession from 'cookie-session'
import mongoose from "mongoose"

const app = express()
app.set('trust proxy', true)
app.use(express.json())
app.use(cookieSession({
    signed: false,
    secure: true
}))
app.use(signupRouter)
app.use(signinRouter)
app.use(currentUserRouter)

app.use(errorHandler)

const start = async () => {
    // console.log(process.env.JWT_KEY)
    // if (!process.env.JWT_KEY) {
    //   throw new Error('JWT_KEY must be defined');
    // }
  
    try {
      await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  
      console.log('Connected to MongoDb');
    } catch (err) {
      console.error(err);
    }
  
    app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  };

  start()