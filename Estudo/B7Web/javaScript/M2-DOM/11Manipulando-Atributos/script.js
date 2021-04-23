function trocarImagem(filename, animalname) {
    window.document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
    window.document.querySelector('.imagem').setAttribute('data-animal', animalname);
}

function pegarAnimal() {
    var animal = window.document.querySelector('.imagem').getAttribute('data-animal');
    alert('O animal é um '+animal);
}