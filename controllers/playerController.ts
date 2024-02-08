import {NextFunction, Request, Response } from "express";
import axios, {AxiosResponse} from "axios";
import { TRACKMANIA_API_ERROR_MESSAGE } from "../constants/errorMessage";
import { TRACKMANIA_API_URL } from "../constants/config";
import { ApiError } from "../errors/ApiError";


/**
 * @swagger
 * tags:
 * name: Tracmania
 * description: Opérations liées à la météo
 * 
 */

export class PlayerController {
  private API_KEY: string;

  constructor(apiKey: string) {
    this.API_KEY = apiKey;
  }


/**
 *
 * @swagger
 * /player/summary/{player_id}:
 *   get:
 *     summary: Récupérer les informations d'un joueur à partir de son username
 *     description: "'''''''''"
 *     tags: [Trackmania]
 *     parameters:
 *       - in: path
 *         name: player_id
 *         required: true
 *         description: ID du joueur
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: succes, retourne les informations du joueur
 *       400:
 *         description: Erreur lors de la récupération des informations
 */



public async getPlayer(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const player_id: string = req.params.player_id;

    const options = {
      method: 'GET',
      url: `${TRACKMANIA_API_URL}player/summary`,
      params: {
        player_id: player_id,
      },
      headers: {
        'X-RapidAPI-Key': this.API_KEY,
        'X-RapidAPI-Host': 'trackmania.p.rapidapi.com',
      },
    };

    try {
      const response: AxiosResponse = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      next(new ApiError(TRACKMANIA_API_ERROR_MESSAGE));
    }
  }
}


