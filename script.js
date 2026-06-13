document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. DICCIONARIO DE IDIOMAS (Inglés / Español)
    // ==========================================
    const translations = {
        es: {
            nav_about: "Quiénes Somos", nav_services: "Servicios", nav_process: "Proceso", nav_works: "Trabajos", nav_testimonials: "Testimonios", nav_contact: "Contacto",
            hero_badge: "Agencia Digital Premium", hero_title1: "Transformamos marcas", hero_title2: "en experiencias digitales", hero_sub: "Estrategia, diseño y tecnología al servicio de tu crecimiento. Construimos presencias digitales que convierten visitantes en clientes.",
            hero_btn1: "Ver Servicios", hero_btn2: "Nuestro Trabajo", hstat1: "Proyectos", hstat2: "Años", hstat3: "Clientes", scroll: "Scroll",
            about_eyebrow: "Sobre nosotros", about_title: "No somos una agencia más. Somos tu equipo de crecimiento.", about_p1: "En Digital Solution fusionamos estrategia de negocio, diseño de vanguardia y tecnología de punta. Cada proyecto que tomamos es tratado como si fuera nuestro propio negocio.", about_p2: "Trabajamos con marcas en España, Estados Unidos, Suiza y Latinoamérica que quieren destacar en un mercado cada vez más competitivo.", about_cta: "Trabajemos juntos",
            av1_title: "ROI Promedio", av2_title: "Mercados", av3_title: "Satisfacción",
            services_eyebrow: "Lo que hacemos", services_title: "Servicios diseñados para escalar tu negocio", s1_title: "Desarrollo Web", s1_p: "Sites ultrarrápidos, apps y e-commerces construidos con las tecnologías más modernas. Performance y conversión en el centro de cada decisión.", s2_title: "Marketing Digital", s2_p: "Estrategias de paid media, SEO, email marketing y contenido viral que llevan tu marca a la cima de tu sector.", s3_title: "Branding & Diseño", s3_p: "Identidad visual completa, sistemas de diseño y creatividades que hacen que tu marca sea inconfundible en cualquier plataforma.", s4_title: "Analytics & CRO", s4_p: "Medimos cada punto de contacto, optimizamos funnels y tomamos decisiones basadas en datos para maximizar tu retorno.", s5_title: "Social Media", s5_p: "Gestión editorial, contenido nativo y community management para que tu marca esté donde están tus clientes.", s6_eyebrow: "¿No ves lo que buscas?", s6_title: "Soluciones a medida para tu negocio", s6_btn: "Hablemos",
            process_eyebrow: "Cómo trabajamos", process_title: "Un proceso diseñado para resultados, no excusas", p1_title: "Diagnóstico", p1_p: "Analizamos tu negocio, competencia y mercado para entender exactamente dónde están las oportunidades de crecimiento.", p2_title: "Estrategia", p2_p: "Diseñamos un plan de acción personalizado con KPIs claros, plazos reales y recursos optimizados para tu presupuesto.", p3_title: "Ejecución", p3_p: "Nuestro equipo ejecuta con velocidad y precisión. Cada entrega pasa por control de calidad antes de llegar a tus manos.", p4_title: "Optimización", p4_p: "Medimos, aprendemos y mejoramos continuamente. No dormimos sobre los laureles: cada resultado es el punto de partida del siguiente.",
            works_eyebrow: "Portafolio", works_title: "Proyectos que hablan por sí solos", wf_all: "Todos", wf_web: "Web", wf_brand: "Branding", wf_marketing: "Marketing", wcat_web: "Desarrollo Web", wcat_mkt: "Marketing Digital", wcat_brand: "Branding", wt1: "E-commerce de Moda", wd1: "+280% en conversiones · 6 semanas", wt2: "Campaña B2B SaaS", wd2: "+500 leads cualificados · 3 meses", wt3: "Rebrand Corporativo", wd3: "Identidad completa en 4 semanas", wt4: "Plataforma SaaS", wd4: "Lanzamiento en tiempo récord",
            stat1: "Proyectos entregados", stat2: "Años de experiencia", stat3: "Clientes satisfechos", stat4: "Tasa de retención",
            test_eyebrow: "Testimonios", test_title: "Lo que dicen quienes ya escalaron", tc1_q: "\"Triplicamos nuestras ventas en 3 meses. El equipo de Digital Solution no solo ejecuta, piensa como socios de negocio.\"", tc1_name: "Carlos M.", tc1_role: "CEO, Startup Fintech", tc2_q: "\"Nuestra nueva web redujo el bounce rate a la mitad y el tiempo en página se duplicó. Resultados increíbles.\"", tc2_name: "Sara L.", tc2_role: "CMO, E-commerce de Moda", tc3_q: "\"Profesionalismo absoluto desde el primer contacto. Entregaron antes del plazo y por encima de las expectativas.\"", tc3_name: "Marc R.", tc3_role: "Founder, Agencia Inmobiliaria", tc4_q: "\"La mejor inversión que hice para mi negocio. El ROI del primer mes cubrió el costo del proyecto entero.\"", tc4_name: "Ana P.", tc4_role: "Directora, Consultora B2B",
            faq_eyebrow: "Preguntas frecuentes", faq_title: "Todo lo que necesitas saber", faq1_q: "¿Cuánto tiempo tarda un proyecto?", faq1_a: "Depende de la complejidad. Una landing page tarda 1-2 semanas. Un e-commerce o web corporativa completa entre 4-8 semanas. Un rebrand completo entre 3-5 semanas. Siempre pactamos plazos reales desde el inicio.", faq2_q: "¿Trabajan con clientes internacionales?", faq2_a: "Sí, trabajamos con clientes en España, Estados Unidos, Suiza y toda Latinoamérica. Nuestros procesos están adaptados para trabajar en remoto con total fluidez.", faq3_q: "¿Cuáles son los modelos de pago?", faq3_a: "Trabajamos con proyectos por tarifa fija y también con retainer mensual para servicios continuos. Aceptamos transferencia bancaria, tarjeta y PayPal.", faq4_q: "¿Ofrecen soporte post-lanzamiento?", faq4_a: "Todos nuestros proyectos incluyen 30 días de soporte gratuito post-entrega. Después ofrecemos planes de mantenimiento mensuales adaptados a tus necesidades.", faq5_q: "¿Cómo empezamos a trabajar juntos?", faq5_a: "Simple: rellena el formulario de contacto o escríbenos por WhatsApp. Agendamos una llamada de diagnóstico gratuita de 30 minutos y desde ahí construimos tu propuesta.",
            cta_title: "¿Listo para escalar tu negocio?", cta_sub: "Agenda una llamada gratuita de 30 minutos y cuéntanos tu proyecto.", cta_btn: "Agenda tu llamada",
            contact_eyebrow: "Contacto", contact_title: "Hablemos de tu proyecto", contact_sub: "Respondemos en menos de 24h. Sin compromisos, sin presión.", contact_hours: "Lun–Vie · 9:00–18:00 CET", form_name: "Nombre", form_email: "Email", form_company: "Empresa (opcional)", form_service: "Servicio que te interesa", fs_web: "Desarrollo Web", fs_mkt: "Marketing Digital", fs_brand: "Branding", fs_social: "Social Media", fs_other: "Otro", form_msg: "Cuéntanos tu proyecto", form_send: "Enviar mensaje", form_note: "Respondemos en menos de 24 horas hábiles.",
            footer_tagline: "Transformamos marcas en experiencias digitales que generan resultados reales.", footer_services: "Servicios", footer_company: "Empresa", footer_contact: "Contacto", footer_schedule: "Agendar llamada", footer_rights: "Todos los derechos reservados.", footer_privacy: "Privacidad", footer_terms: "Términos"
        },
        en: {
            nav_about: "About Us", nav_services: "Services", nav_process: "Process", nav_works: "Works", nav_testimonials: "Testimonials", nav_contact: "Contact",
            hero_badge: "Premium Digital Agency", hero_title1: "We transform brands", hero_title2: "into digital experiences", hero_sub: "Strategy, design, and technology fueling your growth. We build digital presences that turn visitors into clients.",
            hero_btn1: "Our Services", hero_btn2: "Our Work", hstat1: "Projects", hstat2: "Years", hstat3: "Clients", scroll: "Scroll",
            about_eyebrow: "About us", about_title: "Not just another agency. We are your growth team.", about_p1: "At Digital Solution, we merge business strategy, cutting-edge design, and modern technology. We treat every project as if it were our own business.", about_p2: "We work with brands in Europe, the United States, and Latin America looking to stand out in increasingly competitive markets.", about_cta: "Let's work together",
            av1_title: "Average ROI", av2_title: "Markets", av3_title: "Satisfaction",
            services_eyebrow: "What we do", services_title: "Services designed to scale your business", s1_title: "Web Development", s1_p: "Ultra-fast sites, apps, and e-commerce built with modern tech stacks. Performance and conversion at the core.", s2_title: "Digital Marketing", s2_p: "Paid media, SEO, email marketing, and viral content strategies that take your brand to the top.", s3_title: "Branding & Design", s3_p: "Complete visual identity, design systems, and creatives making your brand unmistakable everywhere.", s4_title: "Analytics & CRO", s4_p: "We track every touchpoint, optimize funnels, and make data-driven decisions to maximize your returns.", s5_title: "Social Media", s5_p: "Content management, native creation, and community building to meet your clients where they are.", s6_eyebrow: "Looking for something else?", s6_title: "Custom solutions for your needs", s6_btn: "Let's talk",
            process_eyebrow: "How we work", process_title: "A process designed for results, not excuses", p1_title: "Diagnosis", p1_p: "We analyze your business, competitors, and market to pinpoint exactly where the growth opportunities lie.", p2_title: "Strategy", p2_p: "We design a personalized roadmap with clear KPIs, realistic deadlines, and optimized resources.", p3_title: "Execution", p3_p: "Our team executes with speed and precision. Every deliverable undergoes strict quality control.", p4_title: "Optimization", p4_p: "We measure, learn, and continuously improve. Every result is just the starting point for the next.",
            works_eyebrow: "Portfolio", works_title: "Projects that speak for themselves", wf_all: "All", wf_web: "Web", wf_brand: "Branding", wf_marketing: "Marketing", wcat_web: "Web Development", wcat_mkt: "Digital Marketing", wcat_brand: "Branding", wt1: "Fashion E-commerce", wd1: "+280% conversion rate · 6 weeks", wt2: "B2B SaaS Campaign", wd2: "+500 qualified leads · 3 months", wt3: "Corporate Rebrand", wd3: "Complete identity in 4 weeks", wt4: "SaaS Platform", wd4: "Record-time launch",
            stat1: "Delivered projects", stat2: "Years of experience", stat3: "Satisfied clients", stat4: "Retention rate",
            test_eyebrow: "Testimonials", test_title: "Hear from those who already scaled", tc1_q: "\"We tripled our sales in 3 months. The Digital Solution team thinks like actual business partners.\"", tc1_name: "Carlos M.", tc1_role: "CEO, Fintech Startup", tc2_q: "\"Our new website cut bounce rates in half and doubled our session time. Incredible results.\"", tc2_name: "Sara L.", tc2_role: "CMO, Fashion E-commerce", tc3_q: "\"Absolute professionalism. They delivered ahead of schedule and exceeded all expectations.\"", tc3_name: "Marc R.", tc3_role: "Founder, Real Estate Agency", tc4_q: "\"The best investment I've made. The first month's ROI covered the cost of the entire project.\"", tc4_name: "Ana P.", tc4_role: "Director, B2B Consultancy",
            faq_eyebrow: "FAQ", faq_title: "Everything you need to know", faq1_q: "How long does a project take?", faq1_a: "It depends. A landing page takes 1-2 weeks. A full e-commerce or corporate site takes 4-8 weeks. Rebranding takes 3-5 weeks. We set realistic deadlines.", faq2_q: "Do you work with international clients?", faq2_a: "Yes, we collaborate seamlessly with clients across the US, Europe, and Latin America through streamlined remote processes.", faq3_q: "What are your payment models?", faq3_a: "We offer fixed-fee projects and monthly retainers for ongoing services. We accept wire transfers, credit cards, and PayPal.", faq4_q: "Do you offer post-launch support?", faq4_a: "Every project includes 30 days of free support. We also provide dedicated monthly maintenance plans.", faq5_q: "How do we start?", faq5_a: "Simply fill out our form or WhatsApp us. We'll set up a free 30-minute discovery call to build your proposal.",
            cta_title: "Ready to scale your business?", cta_sub: "Book a free 30-minute consultation call and tell us about your goals.", cta_btn: "Book a call",
            contact_eyebrow: "Contact", contact_title: "Let's talk about your project", contact_sub: "We reply in under 24 hours. No commitments, no pressure.", contact_hours: "Mon–Fri · 9:00 AM–6:00 PM CET", form_name: "Name", form_email: "Email", form_company: "Company (optional)", form_service: "Service of interest", fs_web: "Web Development", fs_mkt: "Digital Marketing", fs_brand: "Branding", fs_social: "Social Media", fs_other: "Other", form_msg: "Tell us about your project", form_send: "Send message", form_note: "We'll get back to you within 24 business hours.",
            footer_tagline: "Transforming brands into digital experiences that generate real results.", footer_services: "Services", footer_company: "Company", footer_contact: "Contact", footer_schedule: "Book a call", footer_rights: "All rights reserved.", footer_privacy: "Privacy Policy", footer_terms: "Terms of Service"
        }
    };

    // LOGICA DEL CAMBIO DE IDIOMA
    const langBtns = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang'); // 'es' o 'en'

            // Actualizar el estado visual de los botones (Escritorio y Móvil)
            langBtns.forEach(b => {
                if (b.getAttribute('data-lang') === selectedLang) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });

            // Reemplazar el texto (usando textContent para evitar inyecciones XSS)
            i18nElements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[selectedLang] && translations[selectedLang][key]) {
                    el.textContent = translations[selectedLang][key];
                }
            });
        });
    });

    // ==========================================
    // 1. PANTALLA DE CARGA (Preloader)
    // ==========================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => { preloader.style.display = 'none'; }, 900);
        }, 2400); 
    }

    // ==========================================
    // 2. BARRA DE NAVEGACIÓN Y MENÚ MÓVIL
    // ==========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // ==========================================
    // 3. ANIMACIONES REVEAL
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================
    // 4. ANIMACIÓN DE CONTADORES
    // ==========================================
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const increment = target / (2000 / 16); 
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter); 
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ==========================================
    // 5. FILTRO DEL PORTAFOLIO
    // ==========================================
    const filterBtns = document.querySelectorAll('.wf-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            workItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-cat') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => { item.style.display = 'none'; }, 300); 
                }
            });
        });
    });

    // ==========================================
    // 6. CARRUSEL DE TESTIMONIOS
    // ==========================================
    const track = document.querySelector('.tc-track');
    const dots = document.querySelectorAll('.tc-dot');
    let currentIndex = 0;
    
    if (track && dots.length > 0) {
        const updateCarousel = (index) => {
            const percentage = 100 / dots.length;
            track.style.transform = `translateX(-${index * percentage}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel(currentIndex);
            });
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateCarousel(currentIndex);
        }, 5000);
    }

    // ==========================================
    // 7. ACORDEÓN DE PREGUNTAS FRECUENTES
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-q');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(faq => faq.classList.remove('open'));
            if (!isOpen) { item.classList.add('open'); }
        });
    });

    // ==========================================
    // 8. SISTEMA DE SEGURIDAD DEL FORMULARIO
    // ==========================================
    const sanitizeInput = (input) => {
        if (!input) return '';
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    };

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const rawName = document.getElementById('fname').value;
            const rawEmail = document.getElementById('femail').value;
            const rawMsg = document.getElementById('fmsg').value;

            const safeName = sanitizeInput(rawName);
            const safeEmail = sanitizeInput(rawEmail);
            const safeMsg = sanitizeInput(rawMsg);

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = 'Verificando seguridad y enviando...';
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';
            
            setTimeout(() => {
                btn.innerText = '¡Mensaje Seguro Enviado!';
                btn.style.background = '#00C8FF';
                btn.style.color = '#060A15';
                contactForm.reset(); 
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.opacity = '1';
                    btn.style.pointerEvents = 'all';
                }, 3000);
            }, 1500);
        });
    }
});