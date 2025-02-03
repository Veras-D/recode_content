let notasAprovado = [8, 7, 9];
let notasReprovado = [5, 4, 3];

function getMean(notas) {
    let mean = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    return mean;
}

function aprovadoOuNao(notas) {
    let mean = getMean(notas);

    return mean >= 6;
}

function exibir(notas) {
    if (aprovadoOuNao(notas)) {
        console.log("Aprovado com media " + getMean(notas));
    } else {
        console.log("Reprovado com media " + getMean(notas));
    }
}

exibir(notasReprovado);
