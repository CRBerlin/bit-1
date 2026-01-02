let tiempo;
let segundos = 0;
document.getElementById("btnPause").style.display = "none";

function actualizarTiempo() {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const segs = String(Math.floor(segundos % 60)).padStart(2, "0");
    document.getElementById("clock_display").textContent = `${horas}:${minutos}:${segs}`;
}

function start() {
    if (!tiempo) {
        tiempo = setInterval(() => {
            segundos++;
            actualizarTiempo();
        }, 1000);
    }
    document.getElementById("btnStart").style.display = "none";
    document.getElementById("btnPause").style.display = "inline-block";
}

function pause() {
    clearInterval(tiempo);
    tiempo = null;
    document.getElementById("btnStart").style.display = "inline-block";
    document.getElementById("btnPause").style.display = "none";
}

function restart() {
    clearInterval(tiempo);
    segundos = 0;
    actualizarTiempo();
    document.getElementById("btnPause").style.display = "none";
    document.getElementById("btnStart").style.display = "inline-block";
}




