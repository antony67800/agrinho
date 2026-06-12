const botao = document.getElementById('btn-leia-mais');
const detalhes = document.getElementById('mais-detalhes');

botao.addEventListener('click', () => {
    const aberto = detalhes.classList.toggle('aberto');
    botao.textContent = aberto ? 'Mostrar menos' : 'O QUE É?';
});

const botaoEquilibrio = document.getElementById('btn-equilibrio');
const comoAlcancar = document.getElementById('como-alcancar');

botaoEquilibrio.addEventListener('click', () => {
    const aberto = comoAlcancar.classList.toggle('aberto');
    botaoEquilibrio.textContent =
        aberto ? 'Mostrar menos' : 'COMO ALCANÇAR?';
});

const botaoExemplos = document.getElementById('btn-exemplos');
const exemplos = document.getElementById('exemplos');

botaoExemplos.addEventListener('click', () => {
    const aberto = exemplos.classList.toggle('aberto');
    botaoExemplos.textContent =
        aberto ? 'Mostrar menos' : 'EXEMPLOS';
});

function irParaConclusao() {
    document.getElementById('conclusao').scrollIntoView({
        behavior: 'smooth'
    });
}

const modal = document.getElementById("imagem-ampliada");
const modalImg = document.getElementById("img-ampliada");
const imagens = document.querySelectorAll(".carrossel img");
const fechar = document.querySelector(".fechar");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    });
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const btnAcessibilidade = document.getElementById("btn-acessibilidade");

btnAcessibilidade.addEventListener("click", () => {
    document.body.classList.toggle("acessivel");

    if (document.body.classList.contains("acessivel")) {
        btnAcessibilidade.textContent = "MODO NORMAL";
    } else {
        btnAcessibilidade.textContent = "MODO ACESSÍVEL";
    }
});