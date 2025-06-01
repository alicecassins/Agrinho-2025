document.addEventListener('DOMContentLoaded', () => {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoAcessibilidade.addEventListener('click', () => {
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');

        const expanded = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoAcessibilidade.setAttribute('aria-expanded', String(!expanded));
    });

    const aumentaFonte = document.getElementById('aumentar-fonte');
    const diminuiFonte = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let fontSize = 1;
    const maxFontSize = 1.8;
    const minFontSize = 0.8;

    function updateFontSize() {
        document.body.style.fontSize = fontSize.toFixed(2) + 'rem';
    }

    aumentaFonte.addEventListener('click', () => {
        if (fontSize < maxFontSize) {
            fontSize += 0.1;
            updateFontSize();
        }
    });

    diminuiFonte.addEventListener('click', () => {
        if (fontSize > minFontSize) {
            fontSize -= 0.1;
            updateFontSize();
        }
    });

    alternaContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });
});

// ScrollReveal para animação suave das seções
['#inicio', '#problemas', '#solucoes', '#contato'].forEach(id => {
    ScrollReveal().reveal(id, { delay: 500, distance: '50px', origin: 'bottom', easing: 'ease-in-out' });
});
