// Toggle dark mode, persist preference
(function () {
    const btn = document.getElementById('dark-mode-toggle');
    if (!btn) return;

    const apply = (dark) => {
        document.body.classList.toggle('dark', dark);
        btn.setAttribute('aria-pressed', String(!!dark));
    };

    // load saved preference, fallback to prefers-color-scheme
    const saved = localStorage.getItem('dark-mode');
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved !== null ? saved === '1' : prefers;
    apply(initial);

    btn.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark');
        apply(isDark);
        localStorage.setItem('dark-mode', isDark ? '1' : '0');
        // small visual feedback
        btn.blur();
    });
})();