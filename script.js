document.getElementById('giftBox').addEventListener('click', function(){
    document.querySelector('.lid').style.transform = 'rotateX(-120deg)';
    setTimeout(()=>{
        document.querySelector('.content').style.display = 'block';
        document.getElementById('music').play();

        // Activar animación y desaparición del mensaje
        const mensaje = document.getElementById("mensaje");
        mensaje.classList.add("animado");
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 6000); // 6s igual que la animación
    }, 1000);
});

function generarCorazones() {
    const contenedor = document.getElementById("corazones");
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = Math.random() * 20 + 20 + "px";
        corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";
        contenedor.appendChild(corazon);

        // Eliminar corazones después de la animación
        setTimeout(() => {
            corazon.remove();
        }, 6000);
    }, 500);
}

// Llamar la función cuando se muestre el contenido
document.getElementById("giftBox").addEventListener("click", () => {
    setTimeout(() => {
        generarCorazones();
    }, 1000);
});