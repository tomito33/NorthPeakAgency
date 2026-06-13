/* ════════════════════════════════════════════
   NORTH PEAK — PREMIUM CSS
   Tipografía: Syne (display) + Inter (body)
   Paleta: #08090D bg · #101320 alt · #B4FF39 accent
════════════════════════════════════════════ */

:root {
    --bg:      #08090D;
    --bg-alt:  #101320;
    --bg-card: rgba(255,255,255,0.035);
    --accent:  #B4FF39;
    --accent2: #7FD900;
    --text:    #EAEEF8;
    --muted:   #6B7590;
    --border:  rgba(255,255,255,0.07);
    --shadow:  0 24px 64px rgba(0,0,0,0.6);
    --r:       12px;
    --nav-h:   70px;
    --fd:      'Syne', sans-serif;
    --fb:      'Inter', sans-serif;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text); font-family: var(--fb); overflow-x: hidden; cursor: auto; }
img { display: block; max-width: 100%; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ── CURSOR ── */
.cursor-dot { width: 7px; height: 7px; background: var(--accent); border-radius: 50%; position: fixed; pointer-events: none; z-index: 99999; top: 0; left: 0; transform: translate(-50%,-50%); transition: transform .06s linear; }
.cursor-ring { width: 34px; height: 34px; border: 1.5px solid rgba(180,255,57,.45); border-radius: 50%; position: fixed; pointer-events: none; z-index: 99998; top: 0; left: 0; transform: translate(-50%,-50%); transition: transform .16s ease-out, width .25s, height .25s, border-color .25s; }
body.hovering .cursor-ring { width: 56px; height: 56px; border-color: var(--accent); }
@media (hover: none) { body { cursor: auto; } .cursor-dot, .cursor-ring { display: none; } }

/* ── PRELOADER ── */
#preloader { position: fixed; inset: 0; background: #050609; z-index: 100000; display: flex; align-items: center; justify-content: center; transition: transform .9s cubic-bezier(.77,0,.175,1); }
#preloader.gone { transform: translateY(-100%); }
.pre-inner { text-align: center; }
.pre-logo { font-family: var(--fd); font-size: 3rem; font-weight: 800; letter-spacing: 6px; color: #fff; margin-bottom: 28px; }
.pre-bar-track { width: 240px; height: 2px; background: rgba(255,255,255,.08); border-radius: 99px; overflow: hidden; margin: 0 auto 14px; }
.pre-bar-fill { width: 0; height: 100%; background: var(--accent); border-radius: 99px; box-shadow: 0 0 12px var(--accent); animation: barAnim 2.5s cubic-bezier(.4,0,.2,1) forwards; }
@keyframes barAnim { 0%{width:0} 55%{width:70%} 85%{width:92%} 100%{width:100%} }
.pre-pct { font-size: .75rem; color: var(--muted); letter-spacing: 2px; font-family: var(--fd); }

/* ── NAVBAR ── */
#navbar { position: fixed; top: 0; left: 0; right: 0; height: var(--nav-h); z-index: 1000; transition: background .35s, border-color .35s; border-bottom: 1px solid transparent; }
#navbar.scrolled { background: rgba(8,9,13,.88); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border-color: var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; height: 100%; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }
.nav-logo { font-family: var(--fd); font-size: 1.25rem; font-weight: 800; letter-spacing: -.3px; color: #fff; }
.nav-logo em { color: var(--accent); font-style: normal; }
.nav-links { display: flex; gap: 32px; align-items: center; }
.nav-links a { font-size: .85rem; font-weight: 500; color: var(--muted); transition: color .2s; }
.nav-links a:hover { color: #fff; }
.nav-links .nav-cta { color: var(--accent); border: 1px solid rgba(180,255,57,.35); padding: 7px 18px; border-radius: 99px; transition: all .3s; font-weight: 600; }
.nav-links .nav-cta:hover { background: var(--accent); color: var(--bg); border-color: var(--accent); }

/* Switcher de Idiomas */
.lang-switch { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 700; color: var(--muted); margin-right: 15px; }
.lang-btn { background: none; border: none; color: var(--muted); cursor: pointer; font-family: var(--fd); transition: color 0.2s; padding: 2px 4px; }
.lang-btn:hover, .lang-btn.active { color: var(--accent); }

.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.hamburger span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: all .3s; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mobile-menu { position: fixed; top: var(--nav-h); left: 0; right: 0; background: rgba(8,9,13,.97); backdrop-filter: blur(20px); padding: 28px 24px; z-index: 999; border-bottom: 1px solid var(--border); transform: translateY(-110%); transition: transform .4s cubic-bezier(.25,1,.5,1); }
.mobile-menu.open { transform: translateY(0); }
.mobile-menu ul { display: flex; flex-direction: column; gap: 18px; }
.mobile-menu a { font-size: 1.1rem; color: var(--muted); font-weight: 500; transition: color .2s; }
.mobile-menu a:hover { color: #fff; }

/* ── WHATSAPP ── */
.wa-float { position: fixed; bottom: 26px; right: 26px; z-index: 1000; width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #25d366, #128c7e); display: flex; align-items: center; justify-content: center; font-size: 26px; color: #fff; box-shadow: 0 8px 24px rgba(37,211,102,.4); transition: transform .3s, box-shadow .3s; }
.wa-float:hover { transform: scale(1.12) rotate(8deg); box-shadow: 0 12px 30px rgba(37,211,102,.6); }
.wa-ping { position: absolute; top: -2px; right: -2px; width: 14px; height: 14px; background: #25d366; border-radius: 50%; border: 2px solid var(--bg); animation: ping 2s ease-in-out infinite; }
@keyframes ping { 0%,100%{ transform: scale(1); opacity: 1; } 50%{ transform: scale(1.5); opacity: 0; } }

/* ── HERO ── */
.hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; overflow: hidden; padding: calc(var(--nav-h) + 60px) 24px 120px; }
#heroCanvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
.hero-overlay { position: absolute; inset: 0; z-index: 1; pointer-events: none; background: radial-gradient(ellipse 90% 55% at 50% 5%, rgba(180,255,57,.09), transparent 65%), radial-gradient(ellipse 60% 40% at 80% 90%, rgba(180,255,57,.04), transparent 60%); }
.hero-inner { position: relative; z-index: 2; max-width: 820px; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(180,255,57,.07); border: 1px solid rgba(180,255,57,.25); padding: 6px 16px; border-radius: 99px; font-size: .8rem; font-weight: 600; color: var(--accent); font-family: var(--fd); letter-spacing: .5px; margin-bottom: 28px; }
.dot-live { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); animation: blink 1.6s ease-in-out infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }
.hero-heading { font-family: var(--fd); font-size: clamp(2.8rem, 6.5vw, 5.6rem); font-weight: 800; line-height: 1.05; letter-spacing: -2px; margin-bottom: 22px; }
.hero-heading span { display: block; }
.hero-heading .grad { background: linear-gradient(90deg, var(--accent), var(--accent2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.hero-sub { font-size: clamp(.97rem, 1.5vw, 1.15rem); color: var(--muted); max-width: 540px; margin: 0 auto 36px; line-height: 1.75; }
.hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 52px; }
.hero-stats { position: relative; z-index: 2; display: inline-flex; align-items: center; border: 1px solid var(--border); background: rgba(255,255,255,.03); backdrop-filter: blur(10px); border-radius: 99px; padding: 13px 28px; }
.hstat { text-align: center; padding: 0 22px; }
.hstat strong { display: block; font-family: var(--fd); font-size: 1.55rem; font-weight: 700; color: var(--accent); line-height: 1; }
.hstat span { font-size: .72rem; color: var(--muted); font-weight: 500; margin-top: 4px; display: block; }
.hstat-sep { width: 1px; height: 38px; background: var(--border); }
.scroll-hint { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: .68rem; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); }
.sh-line { width: 1px; height: 42px; background: linear-gradient(to bottom, var(--accent), transparent); animation: shAnim 2s ease-in-out infinite; }
@keyframes shAnim { 0%,100%{opacity:1;transform:scaleY(1)} 50%{opacity:.3;transform:scaleY(.4)} }

/* ── BOTONES ── */
.btn-main { display: inline-block; padding: 13px 28px; background: var(--accent); color: var(--bg); font-weight: 700; font-size: .9rem; font-family: var(--fb); border-radius: 99px; border: none; cursor: pointer; transition: all .3s; letter-spacing: .2px; position: relative; overflow: hidden; }
.btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(180,255,57,.35); background: #c8ff5a; }
.btn-ghost { display: inline-block; padding: 12px 28px; background: transparent; color: var(--text); font-weight: 600; font-size: .9rem; border-radius: 99px; border: 1px solid var(--border); transition: all .3s; font-family: var(--fb); }
.btn-ghost:hover { background: var(--bg-card); border-color: rgba(255,255,255,.15); transform: translateY(-2px); }
.btn-lg { padding: 15px 34px; font-size: .97rem; }
.btn-full { width: 100%; text-align: center; }
.mt-3 { margin-top: 30px; }

/* ── LAYOUT GLOBAL Y REVEAL ── */
.section { padding: 110px 24px; }
.section-alt { background: var(--bg-alt); }
.container { max-width: 1200px; margin: 0 auto; }
.eyebrow { font-size: .72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; font-family: var(--fd); }
.section-hd { text-align: center; max-width: 640px; margin: 0 auto 60px; }
.section-hd h2, .about-left h2, .contact-info h2 { font-family: var(--fd); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; line-height: 1.12; letter-spacing: -1px; color: #fff; }

.reveal, .reveal-left, .reveal-right { opacity: 0; transition: opacity .8s ease, transform .8s cubic-bezier(.25,1,.5,1); will-change: opacity, transform; }
.reveal { transform: translateY(46px); }
.reveal-left { transform: translateX(-46px); }
.reveal-right { transform: translateX(46px); }
.reveal[data-d="1"] { transition-delay: .1s; } .reveal[data-d="2"] { transition-delay: .2s; }
.reveal[data-d="3"] { transition-delay: .3s; } .reveal[data-d="4"] { transition-delay: .4s; }
.reveal[data-d="5"] { transition-delay: .5s; }
.visible { opacity: 1 !important; transform: none !important; }
.hero-eyebrow.reveal { transition-delay: .3s; } .hero-heading.reveal { transition-delay: .5s; }
.hero-sub.reveal { transition-delay: .7s; } .hero-actions.reveal { transition-delay: .9s; }
.hero-stats.reveal { transition-delay: 1.1s; }

/* ── NOSOTROS ── */
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.about-left h2 { margin-bottom: 20px; }
.about-left p { color: var(--muted); line-height: 1.75; font-size: .96rem; margin-bottom: 14px; }
.about-right { position: relative; height: 460px; border-radius: 20px; overflow: visible; }
.about-right img { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; filter: brightness(.6) saturate(.8); }
.about-card { position: absolute; z-index: 2; background: rgba(16,19,32,.92); border: 1px solid var(--border); backdrop-filter: blur(14px); border-radius: var(--r); padding: 14px 18px; display: flex; align-items: center; gap: 14px; box-shadow: var(--shadow); }
.about-card i { font-size: 1.3rem; color: var(--accent); }
.about-card strong { display: block; font-size: .75rem; color: var(--muted); font-weight: 500; }
.about-card span { font-size: 1.1rem; font-weight: 700; font-family: var(--fd); color: #fff; }
.ac-1 { top: 20px; right: -16px; animation: floatC 6s ease-in-out infinite; }
.ac-2 { bottom: 80px; right: -16px; animation: floatC 6s ease-in-out infinite 2s; }
.ac-3 { bottom: 20px; left: -16px; animation: floatC 6s ease-in-out infinite 4s; }
@keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

/* ── SERVICIOS ── */
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.svc-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r); padding: 34px 28px; transition: all .4s cubic-bezier(.25,1,.5,1); position: relative; overflow: hidden; }
.svc-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(180,255,57,.05), transparent); opacity: 0; transition: opacity .4s; }
.svc-card:hover { border-color: rgba(180,255,57,.3); transform: translateY(-8px); box-shadow: var(--shadow); }
.svc-card:hover::after { opacity: 1; }
.svc-icon { width: 50px; height: 50px; background: rgba(180,255,57,.1); border-radius: 11px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: var(--accent); margin-bottom: 20px; transition: background .3s; }
.svc-card:hover .svc-icon { background: rgba(180,255,57,.18); }
.svc-card h3 { font-family: var(--fd); font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.svc-card > p { color: var(--muted); font-size: .88rem; line-height: 1.7; }
.svc-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
.svc-tags li { background: rgba(255,255,255,.05); border: 1px solid var(--border); border-radius: 99px; font-size: .7rem; font-weight: 600; padding: 3px 10px; color: var(--muted); font-family: var(--fd); }
.svc-arrow { position: absolute; bottom: 22px; right: 22px; width: 34px; height: 34px; border: 1px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .8rem; color: var(--muted); opacity: 0; transform: translateX(-8px); transition: all .3s; }
.svc-card:hover .svc-arrow { opacity: 1; transform: translateX(0); color: var(--accent); border-color: var(--accent); }
.svc-cta { background: linear-gradient(135deg, rgba(180,255,57,.1), rgba(127,217,0,.05)); border-color: rgba(180,255,57,.2); display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.svc-cta h3 { font-size: 1.3rem; }

/* ── PROCESO ── */
.process-steps { display: grid; grid-template-columns: repeat(2,1fr); gap: 28px; margin-top: 60px; }
.ps { display: flex; gap: 26px; align-items: flex-start; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r); padding: 30px; transition: border-color .3s, transform .3s; }
.ps:hover { border-color: rgba(180,255,57,.25); transform: translateY(-4px); }
.ps-num { font-family: var(--fd); font-size: 2.4rem; font-weight: 800; color: rgba(180,255,57,.18); flex-shrink: 0; line-height: 1; letter-spacing: -1px; transition: color .3s; }
.ps:hover .ps-num { color: rgba(180,255,57,.45); }
.ps-body h3 { font-family: var(--fd); font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.ps-body p { color: var(--muted); font-size: .88rem; line-height: 1.7; }

/* ── PROYECTOS SCROLL ── */
.projects-outer { height: 580vh; position: relative; }
.projects-sticky-wrap { position: sticky; top: 0; height: 100vh; overflow: hidden; }
.projects-sticky { height: 100%; width: 100%; display: flex; align-items: stretch; }
.proj-title-col { flex-shrink: 0; width: 380px; padding: 0 48px 0 60px; display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 2; }
.proj-title-col .eyebrow { margin-bottom: 14px; }
.proj-main-title { font-family: var(--fd); font-size: clamp(2rem,3.2vw,3rem); font-weight: 800; line-height: 1.1; letter-spacing: -1px; color: #fff; margin-bottom: 18px; }
.proj-main-title em { font-style: normal; color: var(--accent); }
.proj-sub { color: var(--muted); font-size: .88rem; line-height: 1.7; margin-bottom: 28px; }
.proj-cta-btn { margin-bottom: 36px; align-self: flex-start; }
.proj-progress-bar { width: 100%; height: 2px; background: rgba(255,255,255,.08); border-radius: 99px; overflow: hidden; margin-bottom: 12px; }
.proj-progress-fill { height: 100%; width: 0%; background: var(--accent); border-radius: 99px; transition: width .1s linear; box-shadow: 0 0 8px var(--accent); }
.proj-counter { font-family: var(--fd); font-size: .78rem; font-weight: 700; color: var(--muted); letter-spacing: 2px; }
.proj-track-wrap { flex: 1; overflow: hidden; display: flex; align-items: center; padding: 0 40px 0 20px; position: relative; }
.proj-track { display: flex; gap: 28px; will-change: transform; }
.proj-card { flex-shrink: 0; width: clamp(320px, 36vw, 500px); height: calc(100vh - 120px); max-height: 680px; border-radius: 20px; overflow: hidden; position: relative; cursor: pointer; transform: scale(.95) translateZ(0); opacity: .7; transition: transform .5s cubic-bezier(.25,1,.5,1), opacity .5s, box-shadow .4s; box-shadow: 0 12px 40px rgba(0,0,0,.5); }
.proj-card.active { transform: scale(1) translateZ(0); opacity: 1; box-shadow: 0 24px 60px rgba(180,255,57,.12), 0 24px 60px rgba(0,0,0,.6); }
.pc-img-wrap { position: absolute; inset: 0; }
.pc-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s cubic-bezier(.25,1,.5,1), filter .5s; filter: brightness(.7) saturate(.85); }
.proj-card:hover .pc-img-wrap img { transform: scale(1.06); filter: brightness(.55) saturate(.7); }
.pc-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,9,13,.95) 0%, rgba(8,9,13,.2) 55%, transparent 100%); transition: background .4s; }
.proj-card:hover .pc-overlay { background: linear-gradient(to top, rgba(8,9,13,.98) 0%, rgba(180,255,57,.06) 100%); }
.pc-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px 28px; z-index: 2; }
.pc-tag { display: inline-block; font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); background: rgba(180,255,57,.1); border: 1px solid rgba(180,255,57,.25); padding: 3px 10px; border-radius: 99px; margin-bottom: 10px; transform: translateY(6px); opacity: 0; transition: all .4s .08s; }
.proj-card:hover .pc-tag { opacity: 1; transform: translateY(0); }
.pc-info h3 { font-family: var(--fd); font-size: 1.4rem; font-weight: 800; color: #fff; margin-bottom: 8px; transform: translateY(8px); transition: transform .4s; }
.proj-card:hover .pc-info h3 { transform: translateY(0); }
.pc-result { font-size: .82rem; color: var(--accent); display: flex; align-items: center; gap: 7px; font-weight: 600; font-family: var(--fd); transform: translateY(8px); opacity: 0; transition: all .4s .05s; }
.proj-card:hover .pc-result { opacity: 1; transform: translateY(0); }

/* ── ESTADÍSTICAS ── */
.stats-section { position: relative; overflow: hidden; background: linear-gradient(135deg, #060810, #0b1020); }
.stats-bg-word { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-family: var(--fd); font-size: clamp(8rem,22vw,20rem); font-weight: 900; color: rgba(255,255,255,.018); pointer-events: none; user-select: none; white-space: nowrap; letter-spacing: -8px; }
.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 40px; position: relative; z-index: 1; text-align: center; }
.stat-item h3 { font-family: var(--fd); font-size: clamp(3rem, 5vw, 4.8rem); font-weight: 800; background: linear-gradient(90deg, var(--accent), var(--accent2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; line-height: 1; }
.stat-item p { color: var(--muted); margin-top: 10px; font-size: .88rem; font-weight: 500; }

/* ── TESTIMONIOS ── */
.testi-carousel { position: relative; overflow: hidden; margin-top: 8px; }
.testi-track { display: flex; gap: 22px; transition: transform .6s cubic-bezier(.25,1,.5,1); }
.testi-card { flex: 0 0 calc(33.333% - 15px); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r); padding: 34px; transition: border-color .3s, transform .3s; }
.testi-card:hover { border-color: rgba(180,255,57,.25); transform: translateY(-4px); }
.tc-stars { color: var(--accent); font-size: .95rem; letter-spacing: 2px; margin-bottom: 18px; }
.testi-card > p { color: var(--muted); font-size: .92rem; line-height: 1.75; margin-bottom: 22px; font-style: italic; }
.tc-author { display: flex; align-items: center; gap: 12px; }
.tc-av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #B4FF39, #7FD900); display: flex; align-items: center; justify-content: center; font-size: .72rem; font-weight: 800; font-family: var(--fd); color: var(--bg); flex-shrink: 0; }
.tc-author strong { display: block; color: #fff; font-size: .88rem; }
.tc-author span { color: var(--muted); font-size: .78rem; display: block; margin-top: 2px; }
.testi-dots { display: flex; gap: 7px; justify-content: center; margin-top: 28px; }
.td { width: 7px; height: 7px; border-radius: 99px; background: var(--border); cursor: pointer; transition: all .3s; }
.td.active { background: var(--accent); width: 22px; }

/* ── FAQ ── */
.faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
.faq-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r); overflow: hidden; transition: border-color .3s; }
.faq-item:hover { border-color: rgba(180,255,57,.2); }
.faq-q { width: 100%; background: none; border: none; padding: 22px 26px; display: flex; align-items: center; justify-content: space-between; gap: 14px; color: #fff; font-size: .95rem; font-weight: 600; cursor: pointer; text-align: left; font-family: var(--fb); transition: color .3s; }
.faq-q i { flex-shrink: 0; font-size: .78rem; color: var(--muted); transition: transform .4s, color .3s; }
.faq-item.open .faq-q { color: var(--accent); }
.faq-item.open .faq-q i { transform: rotate(45deg); color: var(--accent); }
.faq-a { max-height: 0; overflow: hidden; transition: max-height .5s cubic-bezier(.25,1,.5,1); }
.faq-item.open .faq-a { max-height: 260px; }
.faq-a p { padding: 0 26px 22px; color: var(--muted); font-size: .88rem; line-height: 1.75; }

/* ── CTA BAND ── */
.cta-band { padding: 80px 24px; background: linear-gradient(135deg, rgba(180,255,57,.1), rgba(127,217,0,.04)); border-top: 1px solid rgba(180,255,57,.15); border-bottom: 1px solid rgba(180,255,57,.15); }
.cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
.cta-inner h2 { font-family: var(--fd); font-size: clamp(1.8rem,3.5vw,2.6rem); font-weight: 800; color: #fff; letter-spacing: -.5px; margin-bottom: 8px; }
.cta-inner > div > p { color: var(--muted); font-size: .96rem; }

/* ── CONTACTO FORM ── */
.contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; align-items: flex-start; }
.contact-info h2 { margin-bottom: 14px; }
.contact-info > p { color: var(--muted); margin-bottom: 30px; line-height: 1.7; font-size: .94rem; }
.ci-list { display: flex; flex-direction: column; gap: 14px; }
.ci-row { display: flex; align-items: center; gap: 12px; font-size: .88rem; color: var(--muted); }
.ci-row i { color: var(--accent); font-size: .95rem; width: 18px; text-align: center; }
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.fg { position: relative; }
.fg input, .fg textarea { width: 100%; background: rgba(255,255,255,.04); border: 1px solid var(--border); border-radius: 10px; padding: 20px 16px 8px; color: #fff; font-size: .9rem; font-family: var(--fb); outline: none; transition: border-color .3s, background .3s; }
.fg input:focus, .fg textarea:focus { border-color: var(--accent); background: rgba(180,255,57,.04); }
.fg label { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--muted); font-size: .85rem; pointer-events: none; transition: all .25s; }
.fg textarea ~ label { top: 16px; transform: none; }
.fg input:focus ~ label, .fg input:not([value=""]):valid ~ label, .fg input:not(:placeholder-shown) ~ label, .fg textarea:focus ~ label, .fg textarea:not(:placeholder-shown) ~ label { top: 7px; transform: none; font-size: .68rem; color: var(--accent); letter-spacing: .5px; }
.fg textarea { resize: vertical; min-height: 110px; }
.fg-sel label { position: static; font-size: .75rem; color: var(--muted); letter-spacing: .3px; margin-bottom: 6px; display: block; font-family: var(--fb); }
.fg-sel select { width: 100%; background: rgba(255,255,255,.04); border: 1px solid var(--border); border-radius: 10px; padding: 13px 16px; color: #fff; font-size: .88rem; font-family: var(--fb); outline: none; cursor: pointer; transition: border-color .3s; appearance: none; }
.fg-sel select:focus { border-color: var(--accent); }
.fg-sel select option { background: var(--bg-alt); color: #fff; }
.form-note { font-size: .75rem; color: var(--muted); text-align: center; margin-top: -6px; }

/* ── BANNER DE COOKIES (GDPR) ── */
.cookie-notice { position: fixed; bottom: 24px; left: 24px; max-width: 420px; background: rgba(16, 19, 32, 0.95); border: 1px solid var(--border); backdrop-filter: blur(16px); border-radius: var(--r); padding: 24px; z-index: 999999; box-shadow: var(--shadow); transition: transform 0.5s ease, opacity 0.5s ease; }
.cookie-notice.hidden { transform: translateY(50px); opacity: 0; pointer-events: none; }
.cookie-content p { font-size: 0.85rem; color: var(--muted); line-height: 1.6; margin-bottom: 16px; }
.cookie-content a { color: var(--accent); text-decoration: underline; }
.cookie-btns { display: flex; gap: 12px; }
.cookie-btns .btn-main { padding: 8px 18px; font-size: 0.8rem; }
.cookie-btns .btn-ghost { padding: 8px 18px; font-size: 0.8rem; }

/* ── FOOTER ── */
footer { background: #040509; border-top: 1px solid var(--border); padding: 70px 24px 0; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 56px; }
.footer-brand .nav-logo { font-size: 1.3rem; display: block; margin-bottom: 16px; }
.footer-brand > p { color: var(--muted); font-size: .85rem; line-height: 1.7; max-width: 280px; margin-bottom: 22px; }
.social-icons { display: flex; gap: 10px; }
.social-icons a { width: 36px; height: 36px; border: 1px solid var(--border); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--muted); font-size: .9rem; transition: all .3s; }
.social-icons a:hover { color: var(--accent); border-color: var(--accent); background: rgba(180,255,57,.08); }
.footer-col h4 { font-family: var(--fd); font-size: .8rem; font-weight: 700; color: #fff; margin-bottom: 18px; letter-spacing: .5px; text-transform: uppercase; }
.footer-col ul { display: flex; flex-direction: column; gap: 11px; }
.footer-col a { color: var(--muted); font-size: .85rem; transition: color .25s; }
.footer-col a:hover { color: #fff; }
.footer-bottom { border-top: 1px solid var(--border); padding: 20px 0; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.footer-bottom p { color: var(--muted); font-size: .8rem; }
.footer-links { display: flex; gap: 18px; }
.footer-links a { color: var(--muted); font-size: .8rem; transition: color .25s; }
.footer-links a:hover { color: #fff; }

/* ── RESPONSIVE ── */
@media (max-width: 1100px) { .proj-title-col { width: 320px; padding: 0 32px 0 40px; } .about-grid { gap: 48px; } .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 992px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .lang-switch { margin-left: auto; margin-right: 20px; }
    .services-grid { grid-template-columns: repeat(2,1fr); }
    .stats-grid { grid-template-columns: repeat(2,1fr); gap: 32px; }
    .about-grid { grid-template-columns: 1fr; }
    .about-right { height: 320px; order: -1; }
    .ac-1, .ac-2 { right: 10px; } .ac-3 { left: 10px; }
    .contact-grid { grid-template-columns: 1fr; gap: 48px; }
    .process-steps { grid-template-columns: 1fr; }
    .projects-outer { height: auto; }
    .projects-sticky-wrap { position: static; height: auto; overflow: visible; }
    .projects-sticky { flex-direction: column; height: auto; padding: 80px 24px; background: var(--bg); }
    .proj-title-col { width: 100%; padding: 0 0 40px; }
    .proj-track-wrap { padding: 0; }
    .proj-track { flex-direction: column; transform: none !important; }
    .proj-card { width: 100%; height: 340px; opacity: 1; transform: none; }
    .proj-card.active { transform: none; box-shadow: var(--shadow); }
    .proj-progress-bar, .proj-counter { display: none; }
    .testi-card { flex: 0 0 calc(100% - 4px); }
}
@media (max-width: 768px) {
    .section { padding: 80px 20px; }
    .services-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .cta-inner { flex-direction: column; text-align: center; align-items: center; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
    .hero-stats { display: none; }
}
@media (max-width: 576px) {
    .cookie-notice { left: 16px; right: 16px; bottom: 16px; max-width: none; }
    .footer-grid { grid-template-columns: 1fr; }
}