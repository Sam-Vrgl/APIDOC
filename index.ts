import express from "express";
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { swaggerOptions } from "./swaggerOptions"

// const port: number = process.env.PORT;
// const apiKey: any = process.env.TRACKMANIA_API_KEY;
const port: number = 3000;
const app = express();

/**
 * @swagger
 * tags:
 * name: Weather
 * description: Opérations liées à la météo
 * 
 */

/**
 *
 * @swagger
 * /player/summary/{playerID}:
 *   get:
 *     summary: Récupérer les informations d'un joueur
 *     description: "'''''''''"
 *     tags: [Trackmania]
 *     parameters:
 *       - in: path
 *         name: playerID
 *         required: true
 *         description: ID du joueur
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès, retourne les informations du joueur.
 *       400:
 *         Description: Erreur lors de la récupération des informations.
 */

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://trackmania.p.rapidapi.com/player/summary',
  params: {
    player_id: '599b1202-97b6-4189-ba95-288b9b949ead'
  },
  headers: {
    'X-RapidAPI-Key': 'b984860ef9msh5bd83e7546e4cc5p1a0be5jsnfc5a565f57e1',
    'X-RapidAPI-Host': 'trackmania.p.rapidapi.com'
  }
};

async function fetchData(): Promise<void> {
  try {
    const response: AxiosResponse = await axios.request(options);
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// fetchData();