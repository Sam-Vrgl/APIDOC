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
 * /weather/{city}:
 *   get:
 *     summary: Récupérer les informations météo d'une ville
 *     description: "'''''''''"
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         description: Le nom de la ville
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: succes, retourne les informations météo de la ville
 *       400:
 *         description: Erreur lors de la récupération des informations météo
 */

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://trackmania.p.rapidapi.com/matches/matchmaking',
  params: {
    page: '0',
    limit: '10'
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

fetchData();