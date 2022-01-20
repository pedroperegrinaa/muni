// function setTopo() {
//     $(window).scrollTop(0);
// }
// $(window).bind('scroll', setTopo);   

var inseridos = document.getElementById('inseridos');
var resultados = document.getElementById('resultados')

console.log(inseridos.innerHTML);

document.onkeyup = function(e) {
    let aInseridos = inseridos.innerHTML;

    let res = parseInt(aInseridos)
    console.log(res);
    resultados.innerHTML = res;

}