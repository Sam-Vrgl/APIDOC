import { NextFunction, Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { TRACKMANIA_API_ERROR_MESSAGE } from "../constants/errorMessage";
import { TRACKMANIA_API_URL } from "../constants/config";
import { ApiError } from "../errors/ApiError";


/**
 * @swagger
 * tags:
 * name: Trackmania
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



  public async getPlayerStatsByID(
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

  /**
   *
   * @swagger
   * /player/search/{username}:
   *   get:
   *     summary: Récupérer les informations d'un joueur à partir de son username
   *     description: "'''''''''"
   *     tags: [Trackmania]
   *     parameters:
   *       - in: path
   *         name: username
   *         required: true
   *         description: Pseudonyme du joueur
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: succes, retourne les informations du joueur
   *       400:
   *         description: Erreur lors de la récupération des informations
   */

  public async getPlayerStatsByName(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const username: string = req.params.search_query;

    const options = {
      method: 'GET',
      url: `${TRACKMANIA_API_URL}players/search`,
      params: {
        search_query: username,
      },
      headers: {
        'X-RapidAPI-Key': this.API_KEY,
        'X-RapidAPI-Host': 'trackmania.p.rapidapi.com',
      },
    };
    console.log(options);

    try {
      const response: AxiosResponse = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      next(new ApiError(TRACKMANIA_API_ERROR_MESSAGE));
    }
  }


  /**
   *
   * @swagger
   * /top_players/matchmaking/{limit}:
   *   get:
   *     summary: Récupérer les informations des Top Players du Matchmaking
   *     description: "'''''''''"
   *     tags: [Trackmania]
   *     parameters:
   *       - in: path
   *         name: limit
   *         required: true
   *         description: Limit
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: succes, retourne les informations des joueurs
   *       400:
   *         description: Erreur lors de la récupération des informations
   */


  public async getTopMatchmaking(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const limit: string = req.params.limit;

    const options = {
      method: 'GET',
      url: `${TRACKMANIA_API_URL}top_players/matchmaking`,
      params: {
        limit: limit,
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

/**
 *
 * @swagger
 * /totd/date/{year}/{month}:
 *   get:
 *     summary: Récupérer les informations des TOTD (Track of the Day) d'un mois
 *     description: "'''''''''"
 *     tags: [Trackmania]
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         description: Date (Year)
 *         schema:
 *           type: string
 *       
 *       - in: path
 *         name: month
 *         required: true
 *         description: Date (Month)
 *         schema:
 *           type: string
 *     
 *     responses:
 *       200:
 *         description: succes, retourne les informations du joueur
 *       400:
 *         description: Erreur lors de la récupération des informations
 */


  public async getTotd(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const year: string = req.params.year;
    const month: string = req.params.month;

    const options = {
        method: 'GET',
        url: `${TRACKMANIA_API_URL}totd/date`,
        params: {
            year: year,
            month: month,
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






