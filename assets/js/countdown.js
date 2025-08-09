// Fecha del evento
const eventDate = new Date("2025-10-11T16:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdowm").innerHTML = "<p>¡Ya comenzó!</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Insertamos los valores en los elementos correspondientes
    document.getElementById("dias").innerText = days;
    document.getElementById("horas").innerText = hours;
    document.getElementById("minutos").innerText = minutes;
}, 1000);
