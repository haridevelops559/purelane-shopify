(() => {
  const initPurelaneHero = (root) => {
    const stage = root.querySelector('[data-purelane-stage]');
    const dots = [...root.querySelectorAll('[data-purelane-dots] button')];

    if (!stage || !dots.length) return;

    const slides = [...stage.querySelectorAll('.hslide')];
    let current = 0;
    let timer = null;

    const show = (index) => {
      current = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle('on', i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('on', i === index);
        dot.setAttribute('aria-pressed', i === index ? 'true' : 'false');
      });
    };

    const stop = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    const play = () => {
      stop();

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      timer = window.setInterval(() => {
        show((current + 1) % slides.length);
      }, 4500);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        show(index);
        play();
      });
    });

    stage.addEventListener('mouseenter', stop);
    stage.addEventListener('mouseleave', play);

    show(0);
    play();
  };

  const init = (scope = document) => {
    scope
      .querySelectorAll('[data-purelane-hero]')
      .forEach(initPurelaneHero);
  };

  document.addEventListener('DOMContentLoaded', () => init());

  document.addEventListener('shopify:section:load', (event) => {
    init(event.target);
  });
})();