import { Request, Response, NextFunction } from 'express';
import NotFoundError from '../errors/not-found';
import BadRequestError from '../errors/bad-request';
import ServerError from '../errors/server-error';
import Forbidden from '../errors/forbidden';

interface CustomError extends Error {
    status?: number
}

export const errorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500
    const message = error.message || 'Internal Server Error';

    console.log(`Error: ${message} at ${req.path}`, {status, errorStack: error.stack});
    if (error instanceof NotFoundError)
        return res.status(404).send(error.message);
      if (error instanceof BadRequestError)
        return res.status(400).send(error.message);
      if (error instanceof ServerError)
        return res.status(500).send(error.message);
      if (error instanceof Forbidden)
        return res.status(403).send(error.message);
      
    
      res.status(status).json({ error: message });
      next();
}
