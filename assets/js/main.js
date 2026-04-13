// =============================================
// N7N Usinagem — JS
// =============================================

// ----- Header scroll -----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// ----- Menu mobile -----
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ----- File upload label -----
const fileInput = document.getElementById('arquivo');
const fileName = document.getElementById('fileName');
if (fileInput) {
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileName.textContent = 'Arquivo: ' + fileInput.files[0].name;
    } else {
      fileName.textContent = '';
    }
  });
}

// ----- Formulário -----
const form = document.getElementById('quoteForm');
if (form) {
  const submitBtn = form.querySelector('button[type="submit"]');

  function setBtnState(icon, text, bg) {
    const i = submitBtn.querySelector('i');
    const span = submitBtn.querySelector('.btn-text');
    if (i) { i.className = icon; }
    if (span) { span.textContent = text; }
    submitBtn.style.background = bg || '';
  }

  // Adiciona span de texto no botão para manipulação segura
  const btnIcon = submitBtn.querySelector('i');
  const btnTextNode = submitBtn.lastChild;
  if (btnTextNode && btnTextNode.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');
    span.className = 'btn-text';
    span.textContent = btnTextNode.textContent.trim();
    btnTextNode.replaceWith(span);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#E53E3E';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      setBtnState('fas fa-exclamation-circle', ' Preencha os campos obrigatórios', '#E53E3E');
      submitBtn.disabled = true;
      setTimeout(() => {
        setBtnState('fas fa-paper-plane', ' Enviar Pedido de Orçamento', '');
        submitBtn.disabled = false;
      }, 3000);
      return;
    }

    setBtnState('fas fa-spinner fa-spin', ' Enviando...', '');
    submitBtn.disabled = true;

    // TODO: substituir por fetch real (Formspree, backend, etc.)
    setTimeout(() => {
      setBtnState('fas fa-check-circle', ' Orçamento enviado com sucesso!', '#38A169');
      form.reset();
      if (fileName) { fileName.textContent = ''; }
      setTimeout(() => {
        setBtnState('fas fa-paper-plane', ' Enviar Pedido de Orçamento', '');
        submitBtn.disabled = false;
      }, 5000);
    }, 1500);
  });
}

// ----- Scroll suave -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ----- Animações de entrada -----
const style = document.createElement('style');
style.textContent = '.anim-in { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .diff-item, .sector-item, .spec-card, .about__stat').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease ' + (i * 0.06) + 's, transform .5s ease ' + (i * 0.06) + 's';
  observer.observe(el);
});
