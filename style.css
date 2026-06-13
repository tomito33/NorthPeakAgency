/* ════════════════════════════════════════════
   NORTH PEAK — script.js
   TODO INCLUIDO: Animaciones, Canvas, Sliders, Seguridad, I18N
════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ──────────────────────────────────────
       1. SISTEMA MULTIIDIOMA (DICCIONARIO EXTENDIDO)
    ────────────────────────────────────── */
    const translations = {
        es: {
            "nav-about": "Nosotros", "nav-services": "Servicios", "nav-process": "Proceso", "nav-projects": "Proyectos", "nav-testimonials": "Testimonios", "nav-cta": "Hablemos",
            "hero-eyebrow": "Agencia de Crecimiento Digital", "hero-h1-1": "Hacemos crecer", "hero-h1-2": "tu marca online.", "hero-sub": "Páginas web, embudos de ventas y captación de clientes calificados. Sin humo. Solo resultados.", "hero-btn-main": "Quiero escalar ahora", "hero-btn-ghost": "Ver proyectos",
            "stat-1": "Proyectos", "stat-2": "Años", "stat-3": "Satisfacción",
            "about-eyebrow": "Sobre North Peak", "about-h2": "No somos una agencia más. Somos tu equipo de crecimiento.", "about-p1": "En North Peak no vendemos servicios sueltos. Construimos sistemas digitales completos: desde la primera impresión hasta el cliente que paga. Cada proyecto que tomamos lo trabajamos como si fuera nuestro propio negocio.", "about-p2": "Trabajamos con marcas en Argentina, España, Estados Unidos y Suiza que quieren destacar de verdad en sus mercados.", "about-btn": "Trabajemos juntos", "about-c1": "ROI Promedio", "about-c2": "Clientes activos", "about-c3": "Satisfacción",
            "svc-eyebrow": "Lo que hacemos", "svc-h2": "Servicios diseñados para escalar tu negocio",
            "svc-1-t": "Desarrollo Web", "svc-1-d": "Sites ultrarrápidos, landing pages y e-commerces construidos para convertir. Performance y UX en el centro de cada pixel.",
            "svc-2-t": "Embudos de Ventas", "svc-2-d": "Diseñamos y automatizamos funnels completos que guían al prospecto desde el primer clic hasta la compra.",
            "svc-3-t": "Captación de Clientes", "svc-3-d": "Sistemas de adquisición que filtran prospectos calificados. Menos ruido, más clientes que realmente compran.",
            "svc-4-t": "Marketing Digital", "svc-4-d": "SEO, Google Ads, Meta Ads y contenido viral que posiciona tu marca donde están tus clientes ideales.",
            "svc-5-t": "Branding & Diseño", "svc-5-d": "Identidad visual que hace que tu marca sea inconfundible. Desde el logo hasta el sistema completo.",
            "svc-cta-eye": "¿Necesitás algo específico?", "svc-cta-t": "Soluciones a medida para tu negocio",
            "proc-eyebrow": "Cómo trabajamos", "proc-h2": "Un proceso claro, sin sorpresas",
            "proc-1-t": "Diagnóstico", "proc-1-d": "Analizamos tu negocio, competencia y mercado para encontrar exactamente dónde están las oportunidades de crecimiento real.",
            "proc-2-t": "Estrategia", "proc-2-d": "Armamos un plan de acción personalizado con KPIs claros, plazos reales y una hoja de ruta ejecutable desde el día uno.",
            "proc-3-t": "Ejecución", "proc-3-d": "Ejecutamos rápido y con precisión. Cada entrega pasa por revisión interna antes de llegar a tus manos.",
            "proc-4-t": "Optimización", "proc-4-d": "Medimos, aprendemos y mejoramos sin parar. Cada resultado es el punto de partida del siguiente nivel.",
            "proj-eyebrow": "Portafolio", "proj-h2": "Proyectos que hablan por sí solos.", "proj-sub": "Cada trabajo que tomamos es tratado como si fuera nuestro propio negocio.", "proj-btn": "Quiero un proyecto así",
            "proj-t-1": "Desarrollo Web", "proj-n-1": "E-commerce de Moda", "proj-r-1": "+280% en conversiones · 6 semanas",
            "proj-t-2": "Marketing Digital", "proj-n-2": "Campaña B2B SaaS", "proj-r-2": "+500 leads calificados · 3 meses",
            "proj-t-3": "Embudo de Ventas", "proj-n-3": "Embudo de Captación", "proj-r-3": "x4 en clientes calificados · 2 meses",
            "proj-t-4": "Branding", "proj-n-4": "Rebrand Corporativo", "proj-r-4": "Identidad completa · 4 semanas",
            "proj-t-5": "Web App", "proj-n-5": "Plataforma SaaS", "proj-r-5": "Lanzamiento en tiempo récord",
            "stat-p-1": "Proyectos entregados", "stat-p-2": "Años de experiencia", "stat-p-3": "Clientes satisfechos", "stat-p-4": "Tasa de retención",
            "test-eyebrow": "Testimonios", "test-h2": "Lo que dicen quienes ya escalaron",
            "test-1-d": "\"Triplicamos las ventas en 3 meses. El equipo de North Peak piensa como socios de negocio, no como proveedores.\"", "test-1-p": "CEO, Startup Fintech",
            "test-2-d": "\"La nueva web redujo el bounce rate a la mitad y duplicó el tiempo en página. Los resultados hablan solos.\"", "test-2-p": "CMO, E-commerce de Moda",
            "test-3-d": "\"Profesionalismo total desde la primera llamada. Entregaron antes del plazo y superaron todas las expectativas.\"", "test-3-p": "Founder, Inmobiliaria",
            "test-4-d": "\"La mejor inversión que hice para mi negocio. El ROI del primer mes cubrió el costo del proyecto entero.\"", "test-4-p": "Directora, Consultora B2B",
            "faq-eyebrow": "Preguntas frecuentes", "faq-h2": "Todo lo que necesitás saber",
            "faq-1-q": "¿Cuánto tiempo tarda un proyecto?", "faq-1-a": "Depende de la complejidad. Una landing page tarda 1-2 semanas. Un e-commerce completo entre 4-8 semanas. Un embudo de ventas completo entre 2-4 semanas. Siempre pactamos plazos reales desde el primer día.",
            "faq-2-q": "¿Trabajan con clientes internacionales?", "faq-2-a": "Sí, trabajamos con clientes en Argentina, España, Estados Unidos y Suiza. Nuestros procesos están diseñados para trabajar en remoto con total fluidez en cualquier zona horaria.",
            "faq-3-q": "¿Cuáles son sus modelos de trabajo?", "faq-3-a": "Trabajamos por proyecto a tarifa fija o con retainer mensual para servicios continuos. Definimos el modelo que mejor se adapta a tu situación antes de arrancar.",
            "faq-4-q": "¿Ofrecen soporte después del lanzamiento?", "faq-4-a": "Todos los proyectos incluyen 30 días de soporte gratuito post-entrega. Después ofrecemos planes de mantenimiento mensuales adaptados a cada cliente.",
            "faq-5-q": "¿Cómo empezamos a trabajar juntos?", "faq-5-a": "Escribinos por el formulario o por WhatsApp. Agendamos una llamada gratuita de 30 minutos, entendemos tu negocio y desde ahí armamos una propuesta personalizada.",
            "cta-band-h2": "¿Listo para escalar tu negocio?", "cta-band-p": "Agenda una llamada gratuita de 30 minutos y cuéntanos tu proyecto.", "cta-band-btn": "Agenda tu llamada",
            "contact-eyebrow": "Contacto", "contact-h2": "Hablemos de tu proyecto", "contact-p": "Respondemos en menos de 24h. Sin compromisos, sin presión.", "contact-hours": "Lun–Vie · 9:00–18:00",
            "form-name": "Nombre", "form-email": "Email", "form-company": "Empresa (opcional)", "form-service": "Servicio que te interesa", "form-msg": "Contanos tu proyecto", "form-btn": "Enviar mensaje", "form-note": "Respondemos en menos de 24 horas hábiles.",
            "footer-desc": "Hacemos crecer marcas online. Páginas web, embudos y captación de clientes que generan resultados reales.", "footer-company": "Empresa", "footer-privacy": "Privacidad", "footer-terms": "Términos",
            "cookie-text": "Utilizamos cookies propias y de terceros para optimizar el rendimiento y analizar el tráfico de la web. Puedes aceptar todas o configurar tus preferencias en nuestra Política de Privacidad.", "cookie-accept": "Aceptar todas", "cookie-decline": "Rechazar"
        },
        en: {
            "nav-about": "About Us", "nav-services": "Services", "nav-process": "Process", "nav-projects": "Projects", "nav-testimonials": "Testimonials", "nav-cta": "Let's Talk",
            "hero-eyebrow": "Digital Growth Agency", "hero-h1-1": "We scale your", "hero-h1-2": "online brand.", "hero-sub": "Websites, sales funnels, and qualified lead generation. No fluff. Just results.", "hero-btn-main": "Scale Now", "hero-btn-ghost": "View Projects",
            "stat-1": "Projects", "stat-2": "Years", "stat-3": "Satisfaction",
            "about-eyebrow": "About North Peak", "about-h2": "Not just another agency. We are your growth team.", "about-p1": "At North Peak, we don't sell isolated services. We build complete digital systems: from the first impression to the paying customer. We treat every project like our own business.", "about-p2": "We work with brands in Argentina, Spain, the US, and Switzerland that truly want to stand out in their markets.", "about-btn": "Let's work together", "about-c1": "Average ROI", "about-c2": "Active Clients", "about-c3": "Satisfaction",
            "svc-eyebrow": "What we do", "svc-h2": "Services designed to scale your business",
            "svc-1-t": "Web Development", "svc-1-d": "Ultra-fast sites, landing pages, and e-commerces built to convert. Performance and UX at the center of every pixel.",
            "svc-2-t": "Sales Funnels", "svc-2-d": "We design and automate complete funnels that guide the prospect from the first click to purchase.",
            "svc-3-t": "Client Acquisition", "svc-3-d": "Acquisition systems that filter qualified prospects. Less noise, more customers who actually buy.",
            "svc-4-t": "Digital Marketing", "svc-4-d": "SEO, Google Ads, Meta Ads, and viral content that positions your brand where your ideal clients are.",
            "svc-5-t": "Branding & Design", "svc-5-d": "Visual identity that makes your brand unmistakable. From the logo to the complete system.",
            "svc-cta-eye": "Need something specific?", "svc-cta-t": "Custom solutions for your business",
            "proc-eyebrow": "How we work", "proc-h2": "A clear process, no surprises",
            "proc-1-t": "Diagnosis", "proc-1-d": "We analyze your business, competition, and market to find exactly where the real growth opportunities are.",
            "proc-2-t": "Strategy", "proc-2-d": "We build a custom action plan with clear KPIs, real deadlines, and a roadmap executable from day one.",
            "proc-3-t": "Execution", "proc-3-d": "We execute fast and accurately. Every deliverable goes through internal review before reaching your hands.",
            "proc-4-t": "Optimization", "proc-4-d": "We measure, learn, and improve constantly. Every result is the starting point for the next level.",
            "proj-eyebrow": "Portfolio", "proj-h2": "Projects that speak for themselves.", "proj-sub": "Every job we take is treated as if it were our own business.", "proj-btn": "I want a project like this",
            "proj-t-1": "Web Development", "proj-n-1": "Fashion E-commerce", "proj-r-1": "+280% in conversions · 6 weeks",
            "proj-t-2": "Digital Marketing", "proj-n-2": "B2B SaaS Campaign", "proj-r-2": "+500 qualified leads · 3 months",
            "proj-t-3": "Sales Funnel", "proj-n-3": "Acquisition Funnel", "proj-r-3": "4x in qualified clients · 2 months",
            "proj-t-4": "Branding", "proj-n-4": "Corporate Rebrand", "proj-r-4": "Complete identity · 4 weeks",
            "proj-t-5": "Web App", "proj-n-5": "SaaS Platform", "proj-r-5": "Record time launch",
            "stat-p-1": "Delivered projects", "stat-p-2": "Years of experience", "stat-p-3": "Happy clients", "stat-p-4": "Retention rate",
            "test-eyebrow": "Testimonials", "test-h2": "What those who already scaled say",
            "test-1-d": "\"We tripled sales in 3 months. The North Peak team thinks like business partners, not vendors.\"", "test-1-p": "CEO, Fintech Startup",
            "test-2-d": "\"The new website halved the bounce rate and doubled time on page. The results speak for themselves.\"", "test-2-p": "CMO, Fashion E-commerce",
            "test-3-d": "\"Total professionalism from the first call. They delivered ahead of schedule and exceeded all expectations.\"", "test-3-p": "Founder, Real Estate",
            "test-4-d": "\"The best investment I made for my business. The first month's ROI covered the cost of the entire project.\"", "test-4-p": "Director, B2B Consulting",
            "faq-eyebrow": "Frequently Asked Questions", "faq-h2": "Everything you need to know",
            "faq-1-q": "How long does a project take?", "faq-1-a": "It depends on the complexity. A landing page takes 1-2 weeks. A full e-commerce between 4-8 weeks. A complete sales funnel between 2-4 weeks. We always agree on real deadlines from day one.",
            "faq-2-q": "Do you work with international clients?", "faq-2-a": "Yes, we work with clients in Argentina, Spain, the US, and Switzerland. Our processes are designed to work remotely with total fluidity in any time zone.",
            "faq-3-q": "What are your working models?", "faq-3-a": "We work per project at a fixed rate or with a monthly retainer for continuous services. We define the model that best adapts to your situation before starting.",
            "faq-4-q": "Do you offer post-launch support?", "faq-4-a": "All projects include 30 days of free post-delivery support. After that, we offer monthly maintenance plans adapted to each client.",
            "faq-5-q": "How do we start working together?", "faq-5-a": "Write to us through the form or WhatsApp. We schedule a free 30-minute call, understand your business, and from there we build a custom proposal.",
            "cta-band-h2": "Ready to scale your business?", "cta-band-p": "Schedule a free 30-minute call and tell us about your project.", "cta-band-btn": "Schedule your call",
            "contact-eyebrow": "Contact", "contact-h2": "Let's talk about your project", "contact-p": "We reply in under 24 hours. No strings attached, no pressure.", "contact-hours": "Mon–Fri · 9:00 AM–6:00 PM",
            "form-name": "Name", "form-email": "Email", "form-company": "Company (optional)", "form-service": "Service of interest", "form-msg": "Tell us about your project", "form-btn": "Send message", "form-note": "We reply in under 24 business hours.",
            "footer-desc": "We grow brands online. Websites, funnels, and customer acquisition that generate real results.", "footer-company": "Company", "footer-privacy": "Privacy Policy", "footer-terms": "Terms of Service",
            "cookie-text": "We use our own and third-party cookies to optimize performance and analyze web traffic. You can accept all or configure your preferences in our Privacy Policy.", "cookie-accept": "Accept All", "cookie-decline": "Decline"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'LABEL' || el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'BUTTON' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'STRONG') {
                    // Cuidando no sobreescribir el HTML interno si tiene etiquetas (como <br> o <em>)
                    if (el.innerHTML.includes('<br>') || el.innerHTML.includes('<em>')) {
                        el.innerHTML = translations[lang][key];
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('preferred-lang', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            changeLanguage(e.target.getAttribute('data-lang'));
        });
    });

    const savedLang = localStorage.getItem('preferred-lang') || 'es';
    if (savedLang !== 'es') {
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (activeBtn) activeBtn.click();
    }

    /* ──────────────────────────────────────
       2. PRELOADER Y REVEALS
    ────────────────────────────────────── */
    const preloader = document.getElementById('preloader');
    const prePct    = document.getElementById('prePct');
    let pct = 0;
    const pctInterval = setInterval(() => {
        pct = Math.min(pct + Math.random() * 12, 99);
        if (prePct) prePct.textContent = Math.floor(pct) + '%';
    }, 180);

    window.addEventListener('load', () => {
        clearInterval(pctInterval);
        if (prePct) prePct.textContent = '100%';
        setTimeout(() => {
            if(preloader) preloader.classList.add('gone');
            setTimeout(() => { if(preloader) preloader.style.display = 'none'; }, 950);
            document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
        }, 600);
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        if (!el.closest('.hero')) revealObserver.observe(el);
    });

    /* ──────────────────────────────────────
       3. CURSOR CUSTOM Y NAVBAR
    ────────────────────────────────────── */
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (dot && ring && window.matchMedia('(hover: hover)').matches) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
        function animRing() {
            rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
            ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
            requestAnimationFrame(animRing);
        }
        animRing();
        document.querySelectorAll('a, button, .svc-card, .proj-card, .faq-q, .testi-card, .about-card').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    }

    const navbar = document.getElementById('navbar');
    const onScroll = () => { navbar.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if(hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open'); mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('open'); mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    /* ──────────────────────────────────────
       4. CANVAS DE PARTÍCULAS (HERO)
    ────────────────────────────────────── */
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let W, H, particles = [];
        const COUNT = 110;
        function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
        resize(); window.addEventListener('resize', resize);
        class Particle {
            constructor() { this.reset(); }
            reset() { this.x = Math.random() * W; this.y = Math.random() * H; this.r = Math.random() * 1.6 + 0.3; this.vx = (Math.random() - 0.5) * 0.35; this.vy = (Math.random() - 0.5) * 0.35; this.a = Math.random() * 0.45 + 0.05; this.isAccent = Math.random() < 0.2; }
            update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset(); }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = this.isAccent ? `rgba(180,255,57,${this.a})` : `rgba(234,238,248,${this.a * 0.6})`; ctx.fill(); }
        }
        for (let i = 0; i < COUNT; i++) particles.push(new Particle());
        function drawLines() {
            const DIST = 100;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y; const d = Math.sqrt(dx*dx + dy*dy);
                    if (d < DIST) { const alpha = (1 - d / DIST) * 0.08; ctx.beginPath(); ctx.strokeStyle = `rgba(180,255,57,${alpha})`; ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
                }
            }
        }
        let rafId;
        function loop() { ctx.clearRect(0, 0, W, H); drawLines(); particles.forEach(p => { p.update(); p.draw(); }); rafId = requestAnimationFrame(loop); }
        loop();
        document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(rafId); else loop(); });
    }

    /* ──────────────────────────────────────
       5. PROYECTOS — SCROLL HORIZONTAL STICKY
    ────────────────────────────────────── */
    const projOuter = document.querySelector('.projects-outer');
    const projTrack = document.getElementById('projTrack');
    const projFill  = document.getElementById('projFill');
    const projCounter = document.getElementById('projCounter');
    const projCards   = projTrack ? Array.from(projTrack.querySelectorAll('.proj-card')) : [];
    const N_CARDS = projCards.length;

    if (projOuter && projTrack && N_CARDS > 0) {
        let currentX = 0, targetX = 0, rafProj;
        function maxTranslate() {
            const wrap = document.querySelector('.proj-track-wrap');
            if (!wrap) return 0;
            const totalW = N_CARDS * projCards[0].offsetWidth + (N_CARDS - 1) * 28;
            return Math.max(0, totalW - wrap.offsetWidth + 80);
        }
        function updateProj() {
            if (window.innerWidth <= 992) {
                projTrack.style.transform = `none`;
                rafProj = requestAnimationFrame(updateProj);
                return;
            }
            const rect = projOuter.getBoundingClientRect();
            const start = -rect.top;
            const total = projOuter.offsetHeight - window.innerHeight;
            const rawProgress = Math.max(0, Math.min(1, start / total));
            targetX = rawProgress * maxTranslate();
            currentX += (targetX - currentX) * 0.08;
            projTrack.style.transform = `translateX(${-currentX}px)`;
            if (projFill) projFill.style.width = (rawProgress * 100) + '%';
            if (N_CARDS > 0) {
                const cardIdx = Math.min(Math.floor(rawProgress * N_CARDS), N_CARDS - 1);
                projCards.forEach((c, i) => c.classList.toggle('active', i === cardIdx));
                if (projCounter) projCounter.textContent = String(cardIdx + 1).padStart(2, '0') + ' / ' + String(N_CARDS).padStart(2, '0');
            }
            rafProj = requestAnimationFrame(updateProj);
        }
        const projStickyObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) updateProj(); else cancelAnimationFrame(rafProj); });
        }, { threshold: 0.01 });
        projStickyObserver.observe(projOuter);
        if (projCards[0]) projCards[0].classList.add('active');
    }

    /* ──────────────────────────────────────
       6. CONTADORES ANIMADOS
    ────────────────────────────────────── */
    const countersObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target; const target = +el.dataset.target; const speed = target < 20 ? 30 : target < 100 ? 60 : 140; const inc = target / speed; let count = 0;
            const tick = () => { count = Math.min(count + inc, target); el.textContent = Math.ceil(count); if (count < target) setTimeout(tick, 14); else el.textContent = target; };
            setTimeout(tick, 350); obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(c => countersObs.observe(c));

    /* ──────────────────────────────────────
       7. CARRUSEL DE TESTIMONIOS
    ────────────────────────────────────── */
    const testiTrack = document.getElementById('testiTrack');
    const testiDots  = document.querySelectorAll('.td');
    if (testiTrack && testiDots.length) {
        let currentSlide = 0; const totalSlides = testiDots.length;
        function perView() { if (window.innerWidth > 992) return 3; if (window.innerWidth > 640) return 2; return 1; }
        function gotoSlide(idx) {
            const pv = perView(); const maxIdx = totalSlides - pv; currentSlide = Math.max(0, Math.min(idx, maxIdx));
            const card = testiTrack.querySelector('.testi-card'); if (!card) return;
            const cardW = card.offsetWidth + 22; testiTrack.style.transform = `translateX(-${currentSlide * cardW}px)`;
            testiDots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        }
        testiDots.forEach((dot, i) => dot.addEventListener('click', () => gotoSlide(i)));
        let testiInterval = setInterval(() => gotoSlide((currentSlide + 1) % totalSlides), 4800);
        testiTrack.addEventListener('mouseenter', () => clearInterval(testiInterval));
        testiTrack.addEventListener('mouseleave', () => { testiInterval = setInterval(() => gotoSlide((currentSlide + 1) % totalSlides), 4800); });
        let tx0 = null;
        testiTrack.addEventListener('touchstart', e => tx0 = e.changedTouches[0].clientX, { passive: true });
        testiTrack.addEventListener('touchend', e => {
            if (tx0 === null) return; const dx = e.changedTouches[0].clientX - tx0;
            if (Math.abs(dx) > 40) gotoSlide(currentSlide + (dx < 0 ? 1 : -1)); tx0 = null;
        }, { passive: true });
        window.addEventListener('resize', () => gotoSlide(currentSlide));
    }

    /* ──────────────────────────────────────
       8. FAQ ACCORDION
    ────────────────────────────────────── */
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    /* ──────────────────────────────────────
       9. FORMULARIO BLINDADO
    ────────────────────────────────────── */
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    function sanitize(str) {
        if (!str) return '';
        let clean = str.replace(/<\/?[^>]+(>|$)/g, ""); 
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', "/": '&#x2F;', "`": '&#x60;' };
        return clean.replace(/[&<>"'/`]/g, (match) => map[match]).trim();
    }
    if (form && submitBtn) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const name  = sanitize(document.getElementById('fname').value);
            const email = sanitize(document.getElementById('femail').value);
            const msg   = sanitize(document.getElementById('fmsg').value);
            if (!name || !email || !msg) return;

            const originalTxt = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.style.opacity = '0.7'; submitBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                submitBtn.textContent = '¡Mensaje enviado! ✓';
                submitBtn.style.opacity = '1'; submitBtn.style.background = '#B4FF39'; submitBtn.style.color = '#08090D';
                form.reset();
                setTimeout(() => { submitBtn.textContent = originalTxt; submitBtn.style.background = ''; submitBtn.style.color = ''; submitBtn.style.pointerEvents = 'all'; }, 3500);
            }, 1400);
        });
    }

    /* ──────────────────────────────────────
       10. EFECTO MAGNETIC BOTONES
    ────────────────────────────────────── */
    document.querySelectorAll('.btn-main').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect(); const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * 0.22; const dy = (e.clientY - cy) * 0.22;
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    /* ──────────────────────────────────────
       11. BANNER DE COOKIES
    ────────────────────────────────────── */
    const cookieNotice = document.getElementById('cookieNotice');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    if (!localStorage.getItem('cookieConsent') && cookieNotice) {
        setTimeout(() => { cookieNotice.classList.remove('hidden'); }, 2000);
    }
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'accepted'); cookieNotice.classList.add('hidden'); });
    }
    if (declineBtn) {
        declineBtn.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'declined'); cookieNotice.classList.add('hidden'); });
    }

});