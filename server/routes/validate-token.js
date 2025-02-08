const { Request, Response, NextFunction } = require('express')
const jwt = require('jsonwebtoken');

//funciones que se conectan con la bdd
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization']

    //validacion
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        // Tiene token
        try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
            
            next()
        } catch (error) {
            res.status(401).json({
                msg: 'token no valido'
            })
        }

    } else {
        res.status(401).json({
            msg: 'Acceso denegado'
        })
    }

}
module.exports = validateToken