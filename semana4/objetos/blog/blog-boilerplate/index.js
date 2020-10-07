let arrayDePosts = []

function criarPost() {
let entradaTitulo = document.getElementById("titulo-post")
let entradaAutor = document.getElementById("autor-post")
let entradaConteudo = document.getElementById("conteudo-post")
let imprimir = document.getElementById("container-de-posts")

let post = {
    titulo: entradaTitulo.value,
    autor: entradaAutor.value,
    conteudo: entradaConteudo.value,
}

arrayDePosts.push(post)
console.log(post)

imprimir.innerHTML += `Título: ${entradaTitulo.value} , Autor: ${entradaAutor.value} , Conteúdo ${entradaConteudo.value}`