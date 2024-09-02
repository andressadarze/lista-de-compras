import { criarTextoData } from "./criarTextoData.js"
import { excluirItem } from "./excluirItem.js"
import { editarItem } from "./editarItem.js"
import { verificarListaCompradosVazia } from "./verificarListaCompradosVazia.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados")
const listaDeCompras = document.getElementById("lista-de-compras")
let contador=0;

export function criarItemDaLista(item){
    const listaItem = document.createElement("li")
    listaItem.classList.add("lista-item")
    const containerListaItemL1 = document.createElement("div")
    containerListaItemL1.classList.add("lista-item-l1")

   // Container do checkbox + nome
    const containerItemCheckNome= document.createElement("div")
    containerItemCheckNome.classList.add("lista-item-check-nome")

    // checkbox
    const containerCheckbox = document.createElement("div")
    containerCheckbox.classList.add("checkbox-container")

    const checkboxInput = document.createElement("input")
    checkboxInput.type = "checkbox"
    checkboxInput.classList.add("checkbox-input")
    checkboxInput.id = "checkbox-" + contador++

    const checkboxLabel = document.createElement("label")
    checkboxLabel.setAttribute("for", checkboxInput.id)

    checkboxLabel.addEventListener("click", function(evento){
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input")
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado")
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")

        if(checkboxInput.checked){
            checkboxCustomizado.classList.add("checked")
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(listaItem)
            verificarListaCompradosVazia(listaComprados)
            verificarListaVazia(listaDeCompras)
        } else {
            checkboxCustomizado.classList.remove("checked")
            itemTitulo.style.textDecoration = "none"
            listaDeCompras.appendChild(listaItem)
            verificarListaCompradosVazia(listaComprados)
            verificarListaVazia(listaDeCompras)
        }
    })

    const checkboxCustomizado = document.createElement("div")
    checkboxCustomizado.classList.add("checkbox-customizado")

    checkboxLabel.appendChild(checkboxInput)
    checkboxLabel.appendChild(checkboxCustomizado)

    containerCheckbox.appendChild(checkboxLabel)
    containerItemCheckNome.appendChild(containerCheckbox)

    // nome
    const nomeDoItem = document.createElement("p")
    nomeDoItem.id = "item-titulo"
    nomeDoItem.innerText = item

    containerItemCheckNome.appendChild(nomeDoItem)

   // Botões
    const containerBotoes = document.createElement("div")

    // remover
    const botaoRemover = document.createElement("button")
    botaoRemover.classList.add("lista-button")

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg"
    imagemRemover.alt = "Remover"

    botaoRemover.addEventListener("click", function(){
        excluirItem(listaItem)
    })

    botaoRemover.appendChild(imagemRemover)
    containerBotoes.appendChild(botaoRemover)

    // editar
    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("lista-button")

    const imagemEditar = document.createElement("img")
    imagemEditar.src = "img/edit.svg"
    imagemEditar.alt = "Editar"

    botaoEditar.addEventListener("click", function(){
        editarItem(listaItem)
    })

    botaoEditar.appendChild(imagemEditar)
    containerBotoes.appendChild(botaoEditar)

    // ---
    
    containerListaItemL1.appendChild(containerItemCheckNome)
    containerListaItemL1.appendChild(containerBotoes)

    // data
    const itemData = document.createElement("p")
    itemData.innerText = criarTextoData()
    itemData.classList.add("lista-item-l2")

    // ---
    
    listaItem.appendChild(containerListaItemL1)
    listaItem.appendChild(itemData)

    return listaItem
}