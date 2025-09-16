document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade-avioes');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade-avioes');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte-avioes');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte-avioes');

  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte = Math.max(0.5, tamanhoAtualFonte - 0.1);
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });
});

ScrollReveal().reveal('#inicio-avioes', { delay: 500 });
ScrollReveal().reveal('#historia-avioes', { delay: 500 });
ScrollReveal().reveal('#galeria-avioes', { delay: 500 });
ScrollReveal().reveal('#contato-avioes', { delay: 500 });
