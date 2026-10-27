/* Scroll-linked UI: solid nav, rope + agent progress, mobile register dock */
(function (MI) {
  const { $ } = MI;
  MI.scroll = {
    init() {
      const nav = $('#nav'), rope = $('#ropeLine'), agent = $('#agent'), dock = $('#dock'), reg = $('#register');
      const onScroll = () => {
        const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
        nav.classList.toggle('solid', y > 40);
        const pos = (max > 0 ? y / max : 0) * (innerHeight - 34);
        rope.style.height = pos + 6 + 'px';
        agent.style.transform = `translateY(${pos}px)`;
        const r = reg.getBoundingClientRect();
        dock.classList.toggle('show', y > innerHeight * 0.7 && r.top > innerHeight * 0.55);
      };
      addEventListener('scroll', onScroll, { passive: true });
      addEventListener('resize', onScroll);
      onScroll();
    }
  };
})((window.MI = window.MI || {}));
