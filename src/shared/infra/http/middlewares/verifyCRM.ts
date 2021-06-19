import axios from "axios";
import { NextFunction, Request, Response } from "express";

import { AppError } from "../../../errors/AppError";

export async function verifyCRM(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { crm, uf } = request.body;

    const crmApiRequestRey = 4502488655;

    const api = axios.create({
      baseURL: "https://www.consultacrm.com.br",
      params: {
        tipo: "crm",
        q: crm,
        uf,
        chave: crmApiRequestRey,
        destino: "json",
      },
    });

    const crmData = await api.get("/api/index.php");

    console.log(crmData.data.item);

    // if (crmData.data.situacao !== "Ativo") {
    //   throw new AppError("CRM is not active!");
    // }

    next();
  } catch (error) {
    throw new AppError("Invalid CRM number!");
  }
}
