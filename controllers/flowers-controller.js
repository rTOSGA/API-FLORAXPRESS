const { Flowers, UserFlower } = require('../models');
//const Flowers = require('../models/Flowers');

exports.findallflowers = async (req, res, next) => {
    //return res.status(200).json({message: "findallflowers com sucesso"});

    await Flowers.findAll()
    .catch((error)=>{res.status(500).json(error);})
    .then((data)=> {
        {res.status(200).json(data)}
    });

};

exports.findbyidflowers = async (req, res, next) => {
    return res.status(200).json({message: "findbyidflowers com sucesso"});
};

exports.addnewflowers = async (req, res, next) => {
    //return res.status(200).json({message: "addnewflowers com sucesso"});

    await Flowers.create({
        name: req.body.name,
        size: req.body.size,
        quality: req.body.quality,
        stage: req.body.stage,
        quantity: req.body.quantity,
        price: req.body.price,
    })
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(400).json(error))
 
};

exports.patchflowers = async (req, res, next) => {
    return res.status(200).json({message: "patchflowers com sucesso"});
};

exports.deleteflowers = async (req, res, next) => {
    //return res.status(200).json({message: "deleteflowers com sucesso"});

    await Flowers.destroy({
        where: {
            id: req.body.id
        }
    })
    .catch((error)=>{res.status(500).json(error);})
    .then((deleterecord) => {
        if (deleterecord === 1){res.status(200).json({message:"Deletado"});} 
        else {res.status(404).json({message:"flower nao encontrado"})}})
};