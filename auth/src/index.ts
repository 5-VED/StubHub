import express from "express"

// Importing Routers
import { signupRouter } from "./routes/signup"
import { signinRouter } from "./routes/signin"
import { currentUserRouter } from "./routes/current-user"

// Import Error Handaler
import { errorHandler } from "./middlewares/error-handler"

const app = express()
app.use(express.json())

app.use(signupRouter)
app.use(signinRouter)
app.use(currentUserRouter)

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Auth Service listeninig on port 3000")
})