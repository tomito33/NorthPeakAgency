/* ============================================
   NORTH PEAK — PREMIUM SCRIPT
   - Sistema de idiomas (ES/EN)
   - Lógica de formulario seguro (Web3Forms)
   - Menú Móvil
   - Animaciones y Canvas de Partículas
============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* --- SISTEMA DE IDIOMAS (I18N) --- */
    const translations = {
        es: {
            "nav-about": "Nosotros", "nav-services": "Servicios", "nav-process": "Proceso", "nav-projects": "Proyectos", "nav-testimonials": "Testimonios", "nav-cta": "Contactanos",
            "hero-eyebrow": "Agencia de Crecimiento Digital", "hero-h1-1": "Hacemos crecer", "hero-h1-2": "tu marca online.",
            "hero-sub": "Páginas web, embudos de ventas y captación de clientes calificados. Sin humo. Solo resultados.",
            "hero-btn-main": "Quiero escalar ahora", "hero-btn-ghost": "Ver proyectos", "stat-1": "Proyectos", "stat-2": "Años", "stat-3": "Satisfacción", "scroll": "Scroll",
            "about-eyebrow": "Sobre North Peak", "about-h2": "No somos una agencia más. Somos tu equipo de crecimiento.",
            "about-p1": "En North Peak no vendemos servicios sueltos. Construimos sistemas digitales completos: desde la primera impresión hasta el cliente que paga. Cada proyecto que tomamos lo trabajamos como si fuera nuestro propio negocio.",
            "about-p2": "Trabajamos con marcas en Argentina, España, Estados Unidos y Suiza que quieren destacar de verdad en sus mercados.",
            "about-btn": "Trabajemos juntos", "about-c1": "ROI Promedio", "about-c2": "Clientes activos", "about-c3": "Satisfacción",
            "svc-eyebrow": "Lo que hacemos", "svc-h2": "Servicios diseñados para escalar tu negocio",
            "svc-1-t": "Desarrollo Web", "svc-1-d": "Sites ultrarrápidos, landing pages y e-commerces construidos para convertir. Performance y UX en el centro de cada pixel.",
            "svc-2-t": "Embudos de Ventas", "svc-2-d": "Diseñamos y automatizamos funnels completos que guían al prospecto desde el primer clic hasta la compra.",
            "svc-3-t": "Captación de Clientes", "svc-3-d": "Sistemas de adquisición que filtran prospectos calificados. Menos ruido, más clientes que realmente compran.",
            "svc-4-t": "Marketing Digital", "svc-4-d": "SEO, Google Ads, Meta Ads y contenido viral que posiciona tu marca donde están tus clientes ideales.",
            "svc-5-t": "Branding & Diseño", "svc-5-d": "Identidad visual que hace que tu marca sea inconfundible. Desde el logo hasta el sistema completo.",
            "svc-cta-eye": "¿Necesitás algo específico?", "svc-cta-t": "Soluciones a medida para tu negocio", "nav-cta": "Hablemos",
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
            "faq-4-q": "¿Ofrecen soporte después del lanzamiento?", "faq-4-a": "Todos los proyectos incluyen 15 días de soporte gratuito post-entrega. Después ofrecemos planes de mantenimiento mensuales adaptados a cada cliente.",
            "faq-5-q": "¿Cómo empezamos a trabajar juntos?", "faq-5-a": "Escribinos por el formulario o por WhatsApp. Agendamos una llamada gratuita de 15 minutos, entendemos tu negocio y desde ahí armamos una propuesta personalizada.",
            "cta-band-h2": "¿Listo para escalar tu negocio?", "cta-band-p": "Agenda una llamada gratuita de 30 minutos y cuéntanos tu proyecto.", "cta-band-btn": "Agenda tu llamada",
            "contact-eyebrow": "Contacto", "contact-h2": "Hablemos de tu proyecto", "contact-p": "Respondemos en menos de 24h. Sin compromisos, sin presión.", "contact-hours": "Lun–Vie · 9:00–18:00",
            "form-name": "Nombre", "form-email": "Email", "form-company": "Empresa (opcional)", "form-phone": "Teléfono (opcional)", "form-service": "Servicio que te interesa",
            "form-msg": "Contanos tu proyecto", "form-btn": "Enviar mensaje", "form-note": "Respondemos en menos de 24 horas hábiles.",
            "footer-desc": "Hacemos crecer marcas online. Páginas web, embudos y captación de clientes que generan resultados reales.",
            "footer-company": "Empresa", "footer-privacy": "Privacidad", "footer-terms": "Términos",
            "cookie-text": "Utilizamos cookies propias y de terceros para optimizar el rendimiento y analizar el tráfico de la web. Puedes aceptar todas o configurar tus preferencias en nuestra Política de Privacidad.",
            "cookie-accept": "Aceptar todas", "cookie-decline": "Rechazar"
        },
        en: {
            "nav-about": "About Us", "nav-services": "Services", "nav-process": "Process", "nav-projects": "Projects", "nav-testimonials": "Testimonials", "nav-cta": "Contact Us",
            "hero-eyebrow": "Digital Growth Agency", "hero-h1-1": "We scale your", "hero-h1-2": "online brand.",
            "hero-sub": "Websites, sales funnels, and qualified lead generation. No fluff. Just results.",
            "hero-btn-main": "Scale Now", "hero-btn-ghost": "View Projects", "stat-1": "Projects", "stat-2": "Years", "stat-3": "Satisfaction", "scroll": "Scroll",
            "about-eyebrow": "About North Peak", "about-h2": "Not just another agency. We are your growth team.",
            "about-p1": "At North Peak, we don't sell isolated services. We build complete digital systems: from the first impression to the paying customer. We treat every project like it's our own business.",
            "about-p2": "We work with brands in Spain, the US, Switzerland, and Latin America that want to stand out in an increasingly competitive market.",
            "about-btn": "Let's work together", "about-c1": "Avg ROI", "about-c2": "Active Clients", "about-c3": "Satisfaction",
            "svc-eyebrow": "What we do", "svc-h2": "Services designed to scale your business",
            "svc-1-t": "Web Development", "svc-1-d": "Ultra-fast sites, landing pages, and e-commerces built with modern tech stacks. Performance and conversion at the core.",
            "svc-2-t": "Sales Funnels", "svc-2-d": "We design and automate complete funnels that guide the prospect from the first click to purchase.",
            "svc-3-t": "Client Acquisition", "svc-3-d": "Acquisition systems that filter qualified prospects. Less noise, more customers who actually buy.",
            "svc-4-t": "Digital Marketing", "svc-4-d": "SEO, Google Ads, Meta Ads, and viral content strategies that take your brand to the top.",
            "svc-5-t": "Branding & Design", "svc-5-d": "Complete visual identity, design systems, and creatives making your brand unmistakable everywhere.",
            "svc-cta-eye": "Looking for something else?", "svc-cta-t": "Custom solutions for your needs", "nav-cta": "Let's Talk",
            "proc-eyebrow": "How we work", "proc-h2": "A process built for results, not excuses",
            "proc-1-t": "Diagnosis", "proc-1-d": "We analyze your business, competition, and market to understand exactly where the growth opportunities lie.",
            "proc-2-t": "Strategy", "proc-2-d": "We design a personalized roadmap with clear KPIs, realistic deadlines, and optimized resources.",
            "proc-3-t": "Execution", "proc-3-d": "Our team executes with speed and precision. Every deliverable undergoes strict quality control.",
            "proc-4-t": "Optimization", "proc-4-d": "We continuously measure, learn, and improve. Every result is just the starting point for the next.",
            "proj-eyebrow": "Portfolio", "proj-h2": "Projects that speak for themselves.", "proj-sub": "Every job we take is treated as if it were our own business.", "proj-btn": "I want a project like this",
            "proj-t-1": "Web Development", "proj-n-1": "Fashion E-commerce", "proj-r-1": "+280% conversions · 6 weeks",
            "proj-t-2": "Digital Marketing", "proj-n-2": "B2B SaaS Campaign", "proj-r-2": "+500 qualified leads · 3 months",
            "proj-t-3": "Sales Funnel", "proj-n-3": "Acquisition Funnel", "proj-r-3": "4x in qualified clients · 2 months",
            "proj-t-4": "Branding", "proj-n-4": "Corporate Rebrand", "proj-r-4": "Complete identity in 4 weeks",
            "proj-t-5": "Web App", "proj-n-5": "SaaS Platform", "proj-r-5": "Record-time launch",
            "stat-p-1": "Delivered projects", "stat-p-2": "Years of experience", "stat-p-3": "Happy clients", "stat-p-4": "Retention rate",
            "test-eyebrow": "Testimonials", "test-h2": "What those who scaled say",
            "test-1-d": "\"We tripled our sales in 3 months. The North Peak team thinks like actual business partners.\"", "test-1-p": "CEO, Fintech Startup",
            "test-2-d": "\"Our new site halved bounce rates and doubled time-on-page. Incredible results.\"", "test-2-p": "CMO, Fashion E-commerce",
            "test-3-d": "\"Absolute professionalism from day one. Delivered early and exceeded expectations.\"", "test-3-p": "Founder, Real Estate Agency",
            "test-4-d": "\"The best investment I've made. The first month's ROI covered the cost of the entire project.\"", "test-4-p": "Director, B2B Consultancy",
            "faq-eyebrow": "FAQ", "faq-h2": "Everything you need to know",
            "faq-1-q": "How long does a project take?", "faq-1-a": "It depends. A landing page takes 1-2 weeks. A full e-commerce or corporate site takes 4-8 weeks. Rebranding takes 3-5 weeks. We set realistic deadlines.",
            "faq-2-q": "Do you work internationally?", "faq-2-a": "Yes, we collaborate seamlessly with clients across the US, Europe, and Latin America through streamlined remote processes.",
            "faq-3-q": "What are your payment models?", "faq-3-a": "We offer fixed-fee projects and monthly retainers for ongoing services. We accept wire transfers, credit cards, and PayPal.",
            "faq-4-q": "Do you offer post-launch support?", "faq-4-a": "Every project includes 30 days of free support. We also provide dedicated monthly maintenance plans.",
            "faq-5-q": "How do we start?", "faq-5-a": "Simply fill out our form or WhatsApp us. We'll set up a free 30-minute discovery call to build your proposal.",
            "cta-band-h2": "Ready to scale your business?", "cta-band-p": "Book a free 30-minute consultation call and tell us about your goals.", "cta-band-btn": "Book your call",
            "contact-eyebrow": "Contact", "contact-h2": "Let's talk about your project", "contact-p": "We reply in under 24 hours. No commitments, no pressure.", "contact-hours": "Mon–Fri · 9:00 AM–6:00 PM",
            "form-name": "Name", "form-email": "Email", "form-company": "Company (optional)", "form-phone": "Phone (optional)", "form-service": "Service of interest",
            "form-msg": "Tell us about your project", "form-btn": "Send message", "form-note": "We'll get back to you within 24 business hours.",
            "footer-desc": "We grow brands online. Websites, funnels, and customer acquisition that generate real results.",
            "footer-company": "Company", "footer-privacy": "Privacy Policy", "footer-terms": "Terms of Service",
            "cookie-text": "We use our own and third-party cookies to optimize performance and analyze web traffic. You can accept all or configure your preferences in our Privacy Policy.",
            "cookie-accept": "Accept All", "cookie-decline": "Decline"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.innerHTML.includes('<br>') || el.innerHTML.includes('<em>')) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('np_lang', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));
            changeLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem('np_lang') || 'es';
    if (savedLang !== 'es') {
        const activeBtns = document.querySelectorAll(`.lang-btn[data-lang="${savedLang}"]`);
        if (activeBtns.length > 0) activeBtns[0].click();
    }

    /* --- PRELOADER --- */
    const preloader = document.getElementById('preloader');
    const prePct = document.getElementById('prePct');
    let pct = 0;
    const interval = setInterval(() => {
        pct += Math.random() * 15;
        if (pct >= 100) {
            pct = 100;
            clearInterval(interval);
            if (prePct) prePct.textContent = '100%';
            setTimeout(() => {
                preloader.classList.add('gone');
                setTimeout(() => { preloader.style.display = 'none'; }, 900);
                document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
            }, 500);
        } else {
            if (prePct) prePct.textContent = Math.floor(pct) + '%';
        }
    }, 150);

    window.addEventListener('load', () => {
        if (pct < 100) {
            pct = 100;
            clearInterval(interval);
            if (prePct) prePct.textContent = '100%';
            setTimeout(() => {
                preloader.classList.add('gone');
                setTimeout(() => { preloader.style.display = 'none'; }, 900);
                document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
            }, 500);
        }
    });

    /* --- NAVBAR SCROLL --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    /* --- MOBILE MENU --- */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
        
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    /* --- REVEAL ON SCROLL --- */
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

    /* --- CANVAS BACKGROUND (NORTH PEAK) --- */
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let W, H, particles = [];
        const COUNT = 110;

        function resize() {
            W = canvas.width  = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x  = Math.random() * W; this.y  = Math.random() * H;
                this.r  = Math.random() * 1.6 + 0.3;
                this.vx = (Math.random() - 0.5) * 0.35; this.vy = (Math.random() - 0.5) * 0.35;
                this.a  = Math.random() * 0.45 + 0.05; this.isAccent = Math.random() < 0.2;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
            }
            draw() {
                ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = this.isAccent ? `rgba(180,255,57,${this.a})` : `rgba(234,238,248,${this.a * 0.6})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < COUNT; i++) particles.push(new Particle());

        function drawLines() {
            const DIST = 100;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y;
                    const d  = Math.sqrt(dx*dx + dy*dy);
                    if (d < DIST) {
                        const alpha = (1 - d / DIST) * 0.08;
                        ctx.beginPath(); ctx.strokeStyle = `rgba(180,255,57,${alpha})`; ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
                    }
                }
            }
        }

        let rafId;
        function loop() {
            ctx.clearRect(0, 0, W, H);
            drawLines();
            particles.forEach(p => { p.update(); p.draw(); });
            rafId = requestAnimationFrame(loop);
        }
        loop();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(rafId);
            else loop();
        });
    }

    /* --- CURSOR CUSTOM --- */
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (dot && ring && window.matchMedia('(hover: hover)').matches) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
        function animRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animRing); }
        animRing();
        document.querySelectorAll('a, button, .svc-card, .proj-card, .faq-q, .testi-card, .about-card').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    }

    /* --- PROYECTOS SCROLL STICKY --- */
    const projOuter = document.querySelector('.projects-outer');
    const projTrack = document.getElementById('projTrack');
    const projFill  = document.getElementById('projFill');
    const projCounter = document.getElementById('projCounter');
    const projCards   = projTrack ? Array.from(projTrack.querySelectorAll('.proj-card')) : [];
    const N_CARDS = projCards.length;

    if (projOuter && projTrack && N_CARDS > 0) {
        let currentX = 0, targetX = 0, rafProj;
        function maxTranslate() {
            const wrap = document.querySelector('.proj-track-wrap'); if (!wrap) return 0;
            const totalW = N_CARDS * projCards[0].offsetWidth + (N_CARDS - 1) * 28;
            return Math.max(0, totalW - wrap.offsetWidth + 80);
        }
        function updateProj() {
            if (window.innerWidth <= 992) { projTrack.style.transform = `none`; rafProj = requestAnimationFrame(updateProj); return; }
            const rect = projOuter.getBoundingClientRect(); const start = -rect.top; const total = projOuter.offsetHeight - window.innerHeight;
            const rawProgress = Math.max(0, Math.min(1, start / total));
            targetX = rawProgress * maxTranslate(); currentX += (targetX - currentX) * 0.08;
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

    /* --- CONTADORES --- */
    const countersObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target; const target = +el.dataset.target; const speed = target < 20 ? 30 : target < 100 ? 60 : 140; const inc = target / speed; let count = 0;
            const tick = () => { count = Math.min(count + inc, target); el.textContent = Math.ceil(count); if (count < target) setTimeout(tick, 14); else el.textContent = target; };
            setTimeout(tick, 350); obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(c => countersObs.observe(c));

    /* --- CARRUSEL TESTIMONIOS --- */
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
        testiTrack.addEventListener('touchend', e => { if (tx0 === null) return; const dx = e.changedTouches[0].clientX - tx0; if (Math.abs(dx) > 40) gotoSlide(currentSlide + (dx < 0 ? 1 : -1)); tx0 = null; }, { passive: true });
        window.addEventListener('resize', () => gotoSlide(currentSlide));
    }

    /* --- FAQ ACCORDION --- */
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    /* --- FORMULARIO CONECTADO CON WEB3FORMS (SEGURIDAD MÁXIMA) --- */
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    function sanitize(str) {
        if (!str) return '';
        let clean = str.replace(/<\/?[^>]+(>|$)/g, ""); 
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', "/": '&#x2F;', "`": '&#x60;' };
        return clean.replace(/[&<>"'/`]/g, (match) => map[match]).trim();
    }

    if (form && submitBtn) {
        form.addEventListener('submit', async e => {
            e.preventDefault();

            const name    = sanitize(document.getElementById('fname').value);
            const email   = sanitize(document.getElementById('femail').value);
            const phone   = sanitize(document.getElementById('fphone').value);
            const company = sanitize(document.getElementById('fcompany').value);
            const service = sanitize(document.getElementById('fservice').value);
            const msg     = sanitize(document.getElementById('fmsg').value);

            if (!name || !email || !msg) return;

            const originalTxt = submitBtn.textContent;
            submitBtn.textContent = 'Enviando consulta...';
            submitBtn.style.opacity = '0.7'; submitBtn.style.pointerEvents = 'none';

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        access_key: 'd52cb6df-e358-4516-9d3d-cd2bd22fdd34',
                        subject: `🔥 Nuevo Lead: ${name} - Interesado en ${service || 'Servicios'}`,
                        from_name: 'North Peak Web',
                        Nombre: name, Email: email, Teléfono: phone || 'No especificado', Empresa: company || 'No especificada', Servicio: service || 'No especificado', Mensaje: msg
                    })
                });

                if (response.ok) {
                    submitBtn.textContent = '¡Mensaje enviado! ✓'; submitBtn.style.background = '#B4FF39'; submitBtn.style.color = '#08090D'; submitBtn.style.opacity = '1';
                    form.reset();
                } else {
                    submitBtn.textContent = 'Error al enviar ✕';
                }
            } catch (error) {
                submitBtn.textContent = 'Error de conexión ✕';
            }

            setTimeout(() => { submitBtn.textContent = originalTxt; submitBtn.style.background = ''; submitBtn.style.color = ''; submitBtn.style.pointerEvents = 'all'; }, 3500);
        });
    }

    /* --- EFECTO MAGNETIC BOTONES --- */
    document.querySelectorAll('.btn-main').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect(); const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * 0.22; const dy = (e.clientY - cy) * 0.22;
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    /* --- COOKIES CONTROL --- */
    const cookieNotice = document.getElementById('cookieNotice');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    if (!localStorage.getItem('cookieConsent') && cookieNotice) { setTimeout(() => { cookieNotice.classList.remove('hidden'); }, 2000); }
    if (acceptBtn) { acceptBtn.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'accepted'); cookieNotice.classList.add('hidden'); }); }
    if (declineBtn) { declineBtn.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'declined'); cookieNotice.classList.add('hidden'); }); }

});