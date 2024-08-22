import { Request, Response, NextFunction } from "express";
import { DataBaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-errors";

export const errorHandaler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        const formattedError = err.errors.map(error => {
            return { message: error.msg, field: error.type }
        })
        return res.status(400).send({ errors: formattedError })
    }

    res.status(401).send({ message: err.message })

}