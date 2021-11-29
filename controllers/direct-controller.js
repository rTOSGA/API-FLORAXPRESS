const { Users } = require('../models');

exports.directstocks = async (req, res, next) => {
    return res.status(200).json({message: "directstocks com sucesso"});
};

exports.directorder = async (req, res, next) => {
    return res.status(200).json({message: "directorder com sucesso"});
};