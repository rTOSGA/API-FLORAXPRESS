const { Users } = require('../models');

exports.findallplants = async (req, res, next) => {
    return res.status(200).json({message: "findallplants com sucesso"});
};

exports.findbyidplants = async (req, res, next) => {
    return res.status(200).json({message: "findbyidplants com sucesso"});
};

exports.addnewplants = async (req, res, next) => {
    return res.status(200).json({message: "addnewplants com sucesso"});
};

exports.patchplants = async (req, res, next) => {
    return res.status(200).json({message: "patchplants com sucesso"});
};

exports.deleteplants = async (req, res, next) => {
    return res.status(200).json({message: "deleteplants com sucesso"});
};