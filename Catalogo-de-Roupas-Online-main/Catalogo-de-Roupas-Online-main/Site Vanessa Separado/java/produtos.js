document.addEventListener("DOMContentLoaded", function () {
  const filtros = document.querySelector("#vinicius-produtos .vinicius-filtros");
  const menuLateral = document.querySelector(".navegacao-secundaria");
  const rodape = document.querySelector(".rodape");

  if (!filtros || !menuLateral) return;

  // Cria um espaço fixo para evitar que a página dê saltos visuais
  const espaco = document.createElement("div");
  espaco.style.height = filtros.offsetHeight + "px";
  espaco.style.display = "none";
  filtros.parentNode.insertBefore(espaco, filtros);

  let ticking = false;

  function atualizarMenu() {
    const rectFiltros = filtros.getBoundingClientRect();
    const limite = rectFiltros.top + window.scrollY;
    const scrollAtual = window.scrollY;

    // Alternância suave entre os filtros do topo e o menu flutuante
    if (scrollAtual > limite + 50) {
      filtros.style.visibility = "hidden";
      filtros.style.position = "absolute";
      espaco.style.display = "block";
      menuLateral.style.display = "flex";
    } else {
      filtros.style.visibility = "visible";
      filtros.style.position = "static";
      espaco.style.display = "none";
      menuLateral.style.display = "none";
    }

    // Oculta o menu ao chegar perto do rodapé
    if (rodape) {
      const distanciaRodape = rodape.getBoundingClientRect().top;
      const alturaTela = window.innerHeight;

      if (distanciaRodape < alturaTela - 50) {
        menuLateral.style.opacity = "0";
        menuLateral.style.pointerEvents = "none";
      } else {
        menuLateral.style.opacity = "1";
        menuLateral.style.pointerEvents = "auto";
      }
    }

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(atualizarMenu);
      ticking = true;
    }
  }, { passive: true });

  atualizarMenu();
});