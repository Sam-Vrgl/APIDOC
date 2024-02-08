import express, { NextFunction, Request, Response } from "express"
import { API_KEY } from "./constants/config"
import { PlayerController } from "./controllers/playerController"
import { errorHandler } from "./midllewares/errorHandlers"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { swaggerOptions } from "./swaggerOptions"

import dotenv from "dotenv"
dotenv.config()

const app = express()
const playerController = new PlayerController(API_KEY)
console.log(__dirname)

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000


app.get(    
  "/player/summary/:player_id",
  async (req: Request, res: Response, next: NextFunction) => {
    await playerController.getPlayer(req, res, next)
  }
)

const swaggerSpec = swaggerJSDoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Le server est en cours d'execution sur le port ${PORT}`)
})
