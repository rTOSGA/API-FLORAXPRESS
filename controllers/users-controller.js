const { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.searchUsers = async (req, res, next) => {
    await Users.findAll()
    .catch((error)=>{res.status(500).json(error);})
    .then((data)=> {
        {res.status(200).json(data)}
    });
};

exports.registerUser = async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
        if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) };
            Users.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            roles: req.body.roles,
            status: req.body.status
        })  .then((user) => res.status(201).json(user))
            .catch((error) => res.status(400).json(error))
    })
};

exports.registerReq = async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
        if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) };
            Users.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            roles: req.body.roles,
            status: "0"
        })  .then((user) => res.status(201).json(user))
            .catch((error) => res.status(400).json(error))
    })
};

exports.patchUser = async (req, res, next) => {
    res.status(200).json({message: "editar user"});
};

exports.deleteUser = async (req, res, next) => {
    await Users.destroy({
        where: {
            id: req.body.id
        }
    })
    .catch((error)=>{res.status(500).json(error);})
    .then((deleterecord) => {
        if (deleterecord === 1){res.status(200).json({message:"Deletado"});} 
        else {res.status(404).json({message:"User id nao encontrado"})}})
};

exports.login = async (req, res, next) => {
    const { name, password } = req.body;
    const userWhithName = await Users.findOne( { where: { name } })
    .catch((err) => {res.json(err)});
        if (!userWhithName) return res.json({message: "falha autenticção"});
        bcrypt.compare(req.body.password, userWhithName.password, (err, result) => {
            if (err) {return res.status(401).send(err);}
            if (result) {
                let token = jwt.sign({name: userWhithName.name, email: userWhithName.email}, "abc", {expiresIn: "1h"});
                return res.json({email: userWhithName.email, token: token});
            }
            return res.status(401).json({message: "falha autenticção"});
        })  
};

    
exports.logout = (req, res, next) => {
    return res.status(200).json({message: "logout com sucesso"});
};