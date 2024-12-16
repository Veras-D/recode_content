const equationModel = require('../models/equationModel');

exports.getAllEquations = (req, res) => {
    const equations = equationModel.getAllEquations();
    res.status(200).json({
        success: true,
        equations
    });
};


exports.solveEquation = (req, res) => {
    const {equation, x} = req.body;

    if (!equation || x === undefined) {
        return res.status(400).json({
            success: false,
            message: 'Error, provide an equation and the value of x.'
        });
    }

    try {
        const result = equationModel.solve(equation, x);
        res.status(200).json({
            success: true,
            equation,
            x,
            result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error, unable to solve equation.',
            error: error.message
        });
    }
};
