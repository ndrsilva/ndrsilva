function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    
}
alterar("Titulo de exemplo");

function somar(x, y){
    let total = x + y;

    document.getElementById("campo").value = total;
    console.log(total);
}