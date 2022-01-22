var inseridos = document.getElementById('inseridos');
var resultados = document.getElementById('resultados');

// var testeChannel = 'STATUS OK DEU BOM'

const { ipcRenderer } = require("electron");
console.log(ipcRenderer);
ipcRenderer.send('renderer/teste', testeChannel)

console.log('aa');
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
};

// document.getElementById("min-btn").addEventListener("click", (e) => {
//     console.log('aaa');
//     e.preventDefault();
//     window.closeCurrentWindow();
// });
// E se eu transofrmasse a porra toda em objeto? separar a linha do objeto por div
// e usar o id do objeto pra renderizar a nota/calculo