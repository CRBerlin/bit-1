const valorContador = document.querySelector("#valorContador");
const btn_incremento = document.querySelector("#btn_incremento");
const btn_decremento = document.querySelector("#btn_decremento");
const btn_reinicio = document.querySelector("#btn_reinicio");

btn_incremento.addEventListener("click", ()=>{
    valorContador.textContent++
})

btn_decremento.addEventListener("click", ()=>{
    valorContador.textContent--
})

btn_reinicio.addEventListener("click", ()=> {
    valorContador.textContent = 0;
})