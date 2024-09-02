import { criarTextoData } from "./criarTextoData.js"

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:")

    if(novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtualizado = elemento.querySelector("#item-titulo")
        itemTextoAtualizado.textContent = novoItem

        const novaData = elemento.querySelector(".lista-item-l2")
        novaData.textContent = criarTextoData()

        // --- Código desnecessário ---

        // const estavaComprado = elemento.querySelector(".checkbox-input").checked


        // if(estavaComprado){
        //     elemento.querySelector(".checkbox-input").checked = true // Já é true, náo precisa atribuir valor de novo
        //     elemento.querySelector(".checkbox-customizado").classList.add("checked")
        //     itemTextoAtualizado.style.textDecoration = "line-through"        
        // }
    }
}