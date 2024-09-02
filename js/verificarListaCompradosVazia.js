const tituloListaComprados = document.getElementById("titulo-lista-comprados")

export function verificarListaCompradosVazia(lista){
    if(lista.childElementCount == 0){
        tituloListaComprados.style.display = "none" 
    } else{
        tituloListaComprados.style.display = "block" 
    }
}