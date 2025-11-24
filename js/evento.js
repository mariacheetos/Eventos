/* Exemplo 01 */
function exibir() {
    alert("Manipulação direta do evento!")
}

/* Exemplo 02 */
function exibir_funcaoanonima() {
    let botao = document.getElementById("btn1")
    botao.addEventListener("click", function () {
        alert("A função anônima não possui nome. Exemplo: function(){...}. São conhecidas também como funções callback ou função de evento (Event Handler)")
    })
}

function exibir_funcaonominada() {
    let botao = document.getElementById("btn2")
    botao.addEventListener("click", exibir)
}

function exibir_funcaoflecha() {
    let botao = document.getElementById("btn3")
    botao.addEventListener("dblclick", () => { alert("A função flecha é dada por()=>{...}") })
}

function passar_mouse() {
    let mouse = document.getElementById("mouse")
    mouse.addEventListener("mouseout", function () {
        mouse.style.color = "black"
        mouse.innerText = "Passe o mouse aqui"
    })
    mouse.addEventListener("mouseover", function () {
        mouse.style.color = "blue"
        mouse.innerText = "Evento com o mouse!"
    })
}
/* Ativa as funções relacionadas ao addEventListener */
exibir_funcaoanonima()
exibir_funcaonominada()
exibir_funcaoflecha()
passar_mouse()