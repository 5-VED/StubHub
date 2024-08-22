import express from "express"

// Importing Routers
import { signupRouter } from "./router/signup"
import { signinRouter } from "./router/signin"
import { currentUsersRouter } from "./router/current-users"

// Import Error Handaler
import { errorHandaler } from "./middleware/error-handaler"

const app = express()
app.use(express.json())

app.use(signupRouter)
app.use(signinRouter)
app.use(currentUsersRouter)

app.use(errorHandaler)

app.listen(3000, () => {
    console.log("Auth Service listeninig on port 3000")
})