const botao = document.getElementById('btn-leia-mais');
const botaoEquilibrio = document.getElementById('btn-equilibrio');
const botaoExemplos = document.getElementById('btn-exemplos');

const detalhes = document.getElementById('mais-detalhes');
const comoAlcancar = document.getElementById('como-alcancar');
const exemplos = document.getElementById('exemplos');

// Botão O QUE É?
botao.addEventListener('click', () => {

    const abrir = !detalhes.classList.contains('aberto');

    detalhes.classList.remove('aberto');
    comoAlcancar.classList.remove('aberto');
    exemplos.classList.remove('aberto');

    botao.textContent = 'O QUE É?';
    botaoEquilibrio.textContent = 'COMO ALCANÇAR?';
    botaoExemplos.textContent = 'EXEMPLOS';

    if (abrir) {
        detalhes.classList.add('aberto');
        botao.textContent = 'Mostrar menos';
    }
});

// Botão COMO ALCANÇAR?
botaoEquilibrio.addEventListener('click', () => {

    const abrir = !comoAlcancar.classList.contains('aberto');

    detalhes.classList.remove('aberto');
    comoAlcancar.classList.remove('aberto');
    exemplos.classList.remove('aberto');

    botao.textContent = 'O QUE É?';
    botaoEquilibrio.textContent = 'COMO ALCANÇAR?';
    botaoExemplos.textContent = 'EXEMPLOS';

    if (abrir) {
        comoAlcancar.classList.add('aberto');
        botaoEquilibrio.textContent = 'Mostrar menos';
    }
});

// Botão EXEMPLOS
botaoExemplos.addEventListener('click', () => {

    const abrir = !exemplos.classList.contains('aberto');

    detalhes.classList.remove('aberto');
    comoAlcancar.classList.remove('aberto');
    exemplos.classList.remove('aberto');

    botao.textContent = 'O QUE É?';
    botaoEquilibrio.textContent = 'COMO ALCANÇAR?';
    botaoExemplos.textContent = 'EXEMPLOS';

    if (abrir) {
        exemplos.classList.add('aberto');
        botaoExemplos.textContent = 'Mostrar menos';
    }
});
// Botao MODO ACESSÍVEL
// Botão de acessibilidade
const btnAcessibilidade = document.getElementById("btn-acessibilidade");

if (btnAcessibilidade) {
    btnAcessibilidade.addEventListener("click", () => {
        document.body.classList.toggle("acessivel");
    });
}
// Modal das imagens
const modal = document.getElementById("imagem-ampliada");
const modalImg = document.getElementById("img-ampliada");
const imagens = document.querySelectorAll(".carrossel-infinito img");
const fechar = document.querySelector(".fechar");

if (modal && modalImg && fechar) {

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
}
