const numStars = 500; // Número de estrelas
const container = document.getElementById("bolhas");
const fragment = document.createDocumentFragment(); // Criação do fragmento

// Criação das estrelas dentro do fragmento
for (let i = 0; i < numStars; i++) {
    const star = document.createElement("span");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.classList.add("bolha"); // Adiciona a classe "bolha"

    // Calcula um atraso aleatório entre 0 e 3 segundos
    const randomDelay = Math.random() * 3000;
    star.style.setProperty("--delay", `-${randomDelay}ms`);

    fragment.appendChild(star); // Adiciona a estrela ao fragmento
}

container.appendChild(fragment); // Anexa o fragmento ao DOM

// Função para atualizar a animação das estrelas
function updateAnimation() {
    const stars = document.querySelectorAll(".bolha");
    
    stars.forEach((star, index) => {
        const time = performance.now() / 1000; // Tempo em segundos
        const x = Math.sin(time + index) * 120 + 80; // Calcula coordenada x
        const y = Math.cos(time + index) * 90 + 900; // Calcula coordenada y
        
        star.style.transform = `translate(${x}%, ${y}%) scale(1.2)`;
    });

    requestAnimationFrame(updateAnimation);
}

// Inicia a animação
requestAnimationFrame(updateAnimation);
