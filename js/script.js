let entrada = document.querySelector("#floatingInput")

entrada.addEventListener("blur", ()=>{
    if (entrada.value ==""){
        entrada.classList.add("border-danger","border-4")
    }else(
        entrada.classList.remove("border-danger","border-4")
    )
})

let saida = document.querySelector("#saida")

saida.addEventListener("blur", ()=>{
    if (saida.value ==""){
        saida.classList.add("border-danger","border-4")
    }else(
        saida.classList.remove("border-danger","border-4")
    )
})

let irresponsaveis = document.querySelector("#irresponsaveis")

irresponsaveis.addEventListener("blur", ()=>{
    if (irresponsaveis.value ==""){
        irresponsaveis.classList.add("border-danger","border-4")
    }else(
        irresponsaveis.classList.remove("border-danger","border-4")
    )
})


let pirralhos = document.querySelector("#pirralhos")

pirralhos.addEventListener("blur", ()=>{
    if (pirralhos.value ==""){
        pirralhos.classList.add("border-danger","border-4")
    }else(
        pirralhos.classList.remove("border-danger","border-4")
    )
})

let quarto = document.querySelector("#quarto")

quarto.addEventListener("blur", ()=>{
    if (quarto.value ==""){
        quarto.classList.add("border-danger","border-4")
    }else(
        quarto.classList.remove("border-danger","border-4")
    )
})

