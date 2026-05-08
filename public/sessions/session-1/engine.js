// Presentation Engine
class Presentation {
  constructor(slides) {
    this.slides = slides;
    this.current = 0;
    this.container = document.getElementById('slides');
    this.counter = document.getElementById('counter');
    this.progressBar = document.getElementById('progress');
    this.init();
  }

  init() {
    this.slides.forEach((s, i) => {
      const el = document.createElement('div');
      el.className = 'slide' + (i === 0 ? ' active' : '');
      el.id = 'slide-' + i;
      el.innerHTML = this.renderSlide(s, i);
      this.container.appendChild(el);
    });
    this.updateUI();
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); this.next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
    });
    document.getElementById('btn-prev').onclick = () => this.prev();
    document.getElementById('btn-next').onclick = () => this.next();
    // Touch support
    let tx = 0;
    this.container.addEventListener('touchstart', e => { tx = e.touches[0].clientX; });
    this.container.addEventListener('touchend', e => {
      const diff = tx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
    });
  }

  renderSlide(s, i) {
    const num = `<span class="slide-number">${String(i+1).padStart(2,'0')} / ${String(this.slides.length).padStart(2,'0')}</span>`;
    const part = s.part ? `<div class="part-label animate-in">${s.part}</div>` : '';
    let body = '';

    switch(s.type) {
      case 'hero':
        body = `<h1 class="hero-title animate-in animate-in-delay-1">${s.title}</h1>
          ${s.subtitle ? `<p class="description animate-in animate-in-delay-2">${s.subtitle}</p>` : ''}`;
        break;
      case 'section':
        body = `<h2 class="section-title animate-in animate-in-delay-1">${s.title}</h2>
          ${s.subtitle ? `<h3 class="sub-title animate-in animate-in-delay-2">${s.subtitle}</h3>` : ''}
          ${s.content || ''}`;
        break;
      case 'interaction':
        body = `<div class="interaction-card animate-scale">
          <div class="emoji">${s.emoji || '🤔'}</div>
          <div class="question">${s.question}</div>
          ${s.hint ? `<div class="hint">${s.hint}</div>` : ''}
        </div>`;
        break;
      case 'diagram':
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          ${s.subtitle ? `<h3 class="sub-title animate-in animate-in-delay-1">${s.subtitle}</h3>` : ''}
          <div class="diagram animate-in animate-in-delay-2">${s.diagram}</div>`;
        break;
      case 'code':
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          <div class="code-block animate-in animate-in-delay-1">${s.code}</div>
          ${s.note ? `<p class="description animate-in animate-in-delay-2" style="margin-top:20px">${s.note}</p>` : ''}`;
        break;
      case 'cards':
        const cols = s.cards.length <= 2 ? 'cols-2' : s.cards.length === 3 ? 'cols-3' : 'cols-4';
        const cards = s.cards.map((c, ci) => `<div class="glass-card ${c.glow||''} animate-in animate-in-delay-${ci+1}">
            ${c.icon ? `<div class="icon-circle ${c.color||'blue'}">${c.icon}</div>` : ''}
            <div style="font-weight:700;font-size:1.05rem;margin-bottom:6px">${c.title}</div>
            <div style="color:var(--text-secondary);font-size:0.9rem;line-height:1.6">${c.desc}</div>
          </div>`).join('');
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          ${s.subtitle ? `<h3 class="sub-title animate-in animate-in-delay-1">${s.subtitle}</h3>` : ''}
          <div class="card-grid ${cols}">${cards}</div>`;
        break;
      case 'analogy':
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          <div class="analogy-box animate-in animate-in-delay-1">
            <div class="analogy-label">💡 Real-World Analogy</div>
            <div class="analogy-text">${s.analogy}</div>
          </div>`;
        break;
      case 'flow':
        const steps = s.steps.map((st, si) => `<div class="flow-step visible" style="animation-delay:${si*0.15}s;border-left:3px solid ${st.color||'var(--accent-cyan)'}">${st.text}</div>
          ${si < s.steps.length-1 ? '<div class="flow-connector visible">↓</div>' : ''}`).join('');
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          ${s.subtitle ? `<h3 class="sub-title animate-in animate-in-delay-1">${s.subtitle}</h3>` : ''}
          <div class="flow-vertical animate-in animate-in-delay-2">${steps}</div>`;
        break;
      case 'pipeline':
        const pipes = s.steps.map((st, si) => `<div class="pipeline-step ${st.cls} visible" style="animation-delay:${si*0.12}s">${st.text}</div>
          ${si < s.steps.length-1 ? '<span class="pipeline-arrow visible">→</span>' : ''}`).join('');
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          ${s.subtitle ? `<h3 class="sub-title animate-in animate-in-delay-1">${s.subtitle}</h3>` : ''}
          <div class="pipeline animate-in animate-in-delay-2">${pipes}</div>`;
        break;
      case 'timeline':
        const items = s.items.map((it, ti) => `<div class="timeline-item visible" style="animation-delay:${ti*0.15}s">
            <div class="tl-title">${it.title}</div>
            <div class="tl-desc">${it.desc}</div>
          </div>`).join('');
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          ${s.subtitle ? `<h3 class="sub-title animate-in animate-in-delay-1" style="margin-bottom:20px">${s.subtitle}</h3>` : ''}
          <div class="timeline animate-in animate-in-delay-1">${items}</div>`;
        break;
      case 'statuscodes':
        body = `<h2 class="section-title animate-in">${s.title}</h2>
          <div style="display:flex;flex-direction:column;gap:14px;margin-top:20px;max-width:550px;width:100%">
            ${s.codes.map((c,ci) => `<div class="animate-in animate-in-delay-${ci+1}" style="display:flex;align-items:center;gap:16px">
              <span class="status-badge ${c.cls}">${c.code}</span>
              <span style="color:var(--text-secondary)">${c.desc}</span>
            </div>`).join('')}
          </div>`;
        break;
      case 'typewriter':
        body = `<div style="margin-bottom:30px" class="animate-in">
            <span class="typewriter-wrap">${s.text}</span>
          </div>
          ${s.below || ''}`;
        break;
      default:
        body = `<h2 class="section-title">${s.title || ''}</h2><p class="description">${s.content || ''}</p>`;
    }
    return num + part + body;
  }

  next() { if (this.current < this.slides.length - 1) this.goTo(this.current + 1); }
  prev() { if (this.current > 0) this.goTo(this.current - 1); }

  goTo(idx) {
    const prev = document.getElementById('slide-' + this.current);
    const next = document.getElementById('slide-' + idx);
    if (idx > this.current) {
      prev.classList.remove('active');
      prev.classList.add('exit-left');
      setTimeout(() => prev.classList.remove('exit-left'), 600);
    } else {
      prev.classList.remove('active');
      prev.style.transform = 'translateX(60px)';
      prev.style.opacity = '0';
      setTimeout(() => { prev.style.transform = ''; prev.style.opacity = ''; }, 600);
    }
    next.classList.add('active');
    this.current = idx;
    this.updateUI();
  }

  updateUI() {
    this.counter.textContent = `${this.current + 1} / ${this.slides.length}`;
    this.progressBar.style.width = ((this.current + 1) / this.slides.length * 100) + '%';
  }
}
