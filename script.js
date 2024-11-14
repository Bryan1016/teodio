function showCard() {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector('.card');
    const continueBtn = document.querySelector('.continue-btn');
    const backBtn = document.querySelector('.back-btn');
    
    envelope.style.display = 'none';
    card.style.display = 'block';

    const messages = document.querySelectorAll('.message');
    
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.animation = 'fadeIn 1s forwards';
        }, index * 1000);
    });

    setTimeout(() => {
        continueBtn.style.visibility = 'visible';
    }, messages.length * 1000);

    createHearts(30);

    // Reproducir audio después de la interacción del usuario
    const audio = new Audio('viernes13.mp3');
    audio.play().catch(error => {
        // Si el audio es bloqueado, muestra un mensaje o reproduce después de la interacción
        console.log("Audio autoplay blocked. Waiting for user interaction.");
        
        // Intentar reproducir el audio de nuevo cuando el usuario haga clic en la pantalla
        document.addEventListener('click', () => {
            audio.play();
        }, { once: true }); // Este evento se ejecuta solo una vez
    });
}

function createHearts(num) {
    const body = document.body;
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

function showNextMessage() {
    const card = document.querySelector('.card');
    const nextMessage = document.getElementById('nextMessage');
    const continueBtn = document.querySelector('.continue-btn');
    const backBtn = document.querySelector('.back-btn');
    
    card.style.display = 'none';
    nextMessage.style.display = 'block';
    continueBtn.style.visibility = 'hidden';
    backBtn.style.visibility = 'visible';
}

function goBack() {
    const card = document.querySelector('.card');
    const nextMessage = document.getElementById('nextMessage');
    const continueBtn = document.querySelector('.continue-btn');
    const backBtn = document.querySelector('.back-btn');
    
    nextMessage.style.display = 'none';
    continueBtn.style.visibility = 'visible';
    backBtn.style.visibility = 'hidden';
    card.style.display = 'block';
}
