document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.projects-grid .project-card');

  const applyFilter = (filter) => {
    cards.forEach((card) => {
      const category = (card.getAttribute('data-category') || '').toLowerCase();
      const show = filter === 'all' || category.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = (btn.getAttribute('data-filter') || 'all').toLowerCase();

      buttons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      applyFilter(filter);
    });
  });

  applyFilter('all');
});document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.projects-grid .project-card');
  const navLinks = document.querySelectorAll('nav .nav-links a');
  const menuToggle = document.getElementById('menuToggle');
  const navLinksContainer = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');

  const applyFilter = (filter) => {
    cards.forEach((card) => {
      const category = (card.getAttribute('data-category') || '').toLowerCase();
      const show = filter === 'all' || category.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = (btn.getAttribute('data-filter') || 'all').toLowerCase();
      buttons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      applyFilter(filter);
    });
  });

  applyFilter('all');

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = navbar ? navbar.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        scrollToId(href.slice(1));
        navLinksContainer?.classList.remove('active');
      }
    });
  });

  menuToggle?.addEventListener('click', () => {
    navLinksContainer?.classList.toggle('active');
  });
});