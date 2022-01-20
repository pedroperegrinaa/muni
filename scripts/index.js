var inseridos = document.getElementById('inseridos');
var resultados = document.getElementById('resultados')

console.log(inseridos.innerHTML);

document.onkeyup = function(e) {
    let aInseridos = inseridos.innerHTML;

    console.log(aInseridos);
    console.log(eval(aInseridos));




    if (eval(aInseridos) === undefined) {
        console.log('aaa');
        resultados.innerHTML = ''
    } else {
        resultados.innerHTML = eval(aInseridos);
    }

    // console.log(resultados.innerHTML);
    // console.log(typeof resultados.innerHTML);
}

// E se eu transofrmasse a porra toda em objeto? separar a linha do objeto por div
// e usar o id do objeto pra renderizar a nota/calculo