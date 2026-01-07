const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    setTimeout(() => {
        alert('✅ Mensaje enviado correctamente. Te contactaré pronto.');
        form.reset();
    }, 500);
});