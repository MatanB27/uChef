import { Request, Response, NextFunction } from 'express-serve-static-core';
export function validateRequestBody(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    
    for (const key in body) {
        const value = body[key];
        if (value == null || value.trim() === '') {
            return res.status(400).json({ error: `${key} cannot be empty` });
        }
    }
    next();
}