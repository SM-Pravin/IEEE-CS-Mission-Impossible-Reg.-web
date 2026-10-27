/* Five-second self-destruct intro (plays once per session; skippable; honours reduced motion) */
(function (MI) {
  const { $, reduce } = MI;
  MI.intro = {
    init() {
      const intro = $('#intro'), num = $('#introNum'), fuse = $('#fuse');
      const body = document.body;
      const finish = () => { intro.classList.add('gone'); body.classList.remove('locked'); body.classList.add('ready'); };
      let seen = false;
      try { seen = sessionStorage.getItem('mi-intro') === '1'; } catch (e) {}
      if (seen || reduce) { finish(); return; }
      let done = false, n = 5, tick;
      const end = () => {
        if (done) return; done = true;
        try { sessionStorage.setItem('mi-intro', '1'); } catch (e) {}
        intro.classList.add('boom');
        setTimeout(finish, 180);
      };
      fuse.classList.add('go');
      tick = setInterval(() => {
        n--; num.textContent = n;
        if (n <= 0) { clearInterval(tick); setTimeout(end, 260); }
      }, 720);
      $('#skip').addEventListener('click', () => { clearInterval(tick); end(); });
    }
  };
})((window.MI = window.MI || {}));
