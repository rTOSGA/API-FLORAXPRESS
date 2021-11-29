const { Users } = require('../models');
const jwt = require('jsonwebtoken');


exports.auth = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, "abc"); 
        const email = decode.email;
        const status = await Users.findOne({ where: { email }})    
        if (status.status === false) {return res.status(401).send({ mensagem: 'NAO ATIVO'});}
        next();
    } catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação'});
    }

}

