const equations = [
    { nome: 'Quadratic', formula: 'ax^2 + bx + c' },
    { nome: 'Linear', formula: 'ax + b' }
];


exports.getEquations = () => {
    return equations;
};


exports.solve = () => {
    const [a, b] = equation.match(/-?\d+/g).map(Number);
    
    if (equation.includes('x^2')) {
        throw new Error('Quadratic equation not currently supported.');
    }

    return a * x + b;
};
