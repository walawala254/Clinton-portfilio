/**
 * Editorial Ledger — finance and procurement portfolio home.
 * Design cues: executive dossier, ink/navy foundation, paper surfaces, sparse Ledger Gold evidence marks.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronRight,
  FileDown,
  Linkedin,
  Mail,
  Menu,
  MoveRight,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

const navigation = [
  ["01", "Approach", "approach"],
  ["02", "Impact", "impact"],
  ["03", "Experience", "experience"],
  ["04", "Contact", "contact"],
] as const;

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const strengths = [
  {
    number: "01",
    title: "Economic & financial modelling",
    copy: "Analytical thinking that turns economic and financial information into practical decisions.",
  },
  {
    number: "02",
    title: "Fintech risk awareness",
    copy: "A grounded perspective shaped by finance, procurement, and work in high-risk fintech verticals.",
  },
  {
    number: "03",
    title: "Advanced Excel analysis",
    copy: "Structured reporting and careful analysis for teams that need visibility, accuracy, and accountability.",
  },
];

const caseStudies = [
  {
    number: "CASE / 01",
    category: "Finance & procurement",
    title: "The work behind a growing fintech.",
    copy: "Current finance and procurement experience at Experteye Solution Limited, supporting disciplined operations in a high-risk vertical environment.",
    result: "April 2025 — Present",
    image: assetUrl("images/procurement-work.webp"),
  },
  {
    number: "CASE / 02",
    category: "Economic analysis",
    title: "Turning evidence into direction.",
    copy: "An economics and statistics foundation developed through modelling, advanced Excel, and analytical work across operational contexts.",
    result: "Bachelor’s in progress",
    image: assetUrl("images/financial-analysis.webp"),
  },
  {
    number: "CASE / 03",
    category: "Payments experience",
    title: "Close to the customer journey.",
    copy: "Earlier M-Pesa shop experience brings a practical view of payments, service, and the importance of reliable financial processes.",
    result: "Jan — Nov 2020",
    image: assetUrl("images/payments-work.webp"),
  },
];

const timeline = [
  {
    years: "Apr 2025 — Present",
    role: "Finance & Procurement",
    company: "Experteye Solution Limited · Nairobi County",
    copy: "Current finance and procurement role in a fintech environment focused on high-risk verticals.",
  },
  {
    years: "May — Aug 2023",
    role: "Socioeconomic Department Attachment",
    company: "Kenya Marine and Fisheries Research Institute · Kisumu",
    copy: "Supported work in a socioeconomic research setting, building practical exposure to data and analysis.",
  },
  {
    years: "2021 — 2022",
    role: "Sales & Marketing",
    company: "Fiber Link Limited",
    copy: "Developed customer-facing commercial experience and strengthened communication across business contexts.",
  },
  {
    years: "Jan — Nov 2020",
    role: "M-Pesa Shop Attendant",
    company: "Lwanda Market · Homa Bay County",
    copy: "Built first-hand experience around payments, service, and day-to-day financial transactions.",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <img
      className={`monogram ${className}`}
      src={assetUrl("images/clinton-otieno-monogram.svg")}
      alt="Clinton Otieno monogram"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToSection(id), 80);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Clinton Otieno — Home" onClick={() => setMenuOpen(false)}>
          <Monogram />
          <span className="brand-wordmark">CLINTON<br />OTIENO</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([number, label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)}>
              <span>{number}</span>{label}
            </button>
          ))}
        </nav>

        <a className="header-contact" href="mailto:clintonotieno23@gmail.com">
          Let&apos;s talk <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}<span className="sr-only">Toggle menu</span>
        </button>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <span className="eyebrow">Portfolio navigation</span>
        {navigation.map(([number, label, id]) => (
          <button key={id} onClick={() => navigate(id)}><small>{number}</small>{label}<ChevronRight size={20} /></button>
        ))}
        <a href="mailto:clintonotieno23@gmail.com" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={17} /></a>
      </div>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-rail" aria-hidden="true">
            <span>CLINTON OTIENO / 2026</span>
            <span className="rail-line" />
            <span>01 — OPENING NOTE</span>
          </div>
          <div className="hero-copy">
            <p className="hero-kicker"><span />FINANCE & PROCUREMENT · FINTECH</p>
            <h1 id="hero-title">Finance for<br /><em>high-stakes</em> decisions.</h1>
            <p className="hero-intro">
              I bring economic analysis, finance, and procurement discipline to fintech teams operating where risk and accountability matter.
            </p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => scrollToSection("impact")}>Explore the work <MoveRight size={19} /></button>
              <button className="button-quiet" onClick={() => scrollToSection("experience")}><FileDown size={18} /> View CV snapshot</button>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame">
              <img src={assetUrl("images/clinton-otieno-portrait.webp")} alt="Clinton Otieno, Finance and Procurement Officer" />
            </div>
            <div className="portrait-caption"><span>CO</span><p>ANALYTICAL<br />FINANCIAL STEWARDSHIP</p></div>
          </div>
          <div className="hero-stamp" aria-label="Available for finance and procurement leadership opportunities">
            <span>AVAILABLE FOR</span><strong>FINANCE +<br />PROCUREMENT<br />FINTECH RISK</strong>
          </div>
          <button className="scroll-cue" onClick={() => scrollToSection("approach")}><span>SCROLL TO READ</span><ArrowDownRight size={18} /></button>
        </section>

        <section id="approach" className="intro-section section-pad" aria-labelledby="approach-title">
          <div className="chapter-spine chapter-spine-light" aria-hidden="true"><span>CTO / DOSSIER 2026</span><i /></div>
          <div className="section-rail"><span>01</span><span>THE APPROACH</span></div>
          <div className="intro-layout">
            <div className="intro-aside">
              <p className="eyebrow">A practical point of view</p>
              <div className="round-seal"><span>FISCAL<br />CLARITY</span></div>
            </div>
            <div className="intro-main">
              <h2 id="approach-title">Good governance should make <em>good work</em> easier.</h2>
              <p className="lead-copy">I bring a controller&apos;s eye and a procurement partner&apos;s instinct to the work: systems that protect resources, clarify ownership, and keep the organisation moving.</p>
              <div className="strength-list">
                {strengths.map((strength) => (
                  <article key={strength.number} className="strength-item">
                    <span className="strength-number">{strength.number}</span>
                    <div><h3>{strength.title}</h3><p>{strength.copy}</p></div>
                    <ArrowUpRight size={20} className="strength-arrow" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="impact-section" aria-labelledby="impact-title">
          <div className="chapter-spine chapter-spine-dark" aria-hidden="true"><span>CTO / DOSSIER 2026</span><i /></div>
          <div className="impact-heading">
            <div className="section-rail section-rail-dark"><span>02</span><span>IMPACT, IN FOCUS</span></div>
            <p className="eyebrow gold-text">CAPABILITY IN FOCUS</p>
            <h2 id="impact-title">Clear analysis.<br /><em>Stronger</em> controls.</h2>
          </div>
          <div className="metrics-grid">
            <article className="metric-card"><div><span className="metric-number">2025</span></div><p>Joined current finance<br />and procurement role</p><span className="metric-note">Experteye Solution</span></article>
            <article className="metric-card metric-card-feature"><div><span className="metric-number">2</span><span className="metric-suffix">languages</span></div><p>English and Kiswahili<br />for clear collaboration</p><span className="metric-note">Communication</span></article>
            <article className="metric-card"><div><span className="metric-number">B−</span></div><p>KCSE grade<br />achieved</p><span className="metric-note">Education record</span></article>
          </div>
          <div className="impact-footer"><span>THE VALUE IS IN THE DETAIL</span><span className="impact-rule" /><span>DISCIPLINE • VISIBILITY • PARTNERSHIP</span></div>
        </section>

        <section className="work-section section-pad" aria-labelledby="work-title">
          <div className="chapter-spine chapter-spine-light" aria-hidden="true"><span>CTO / DOSSIER 2026</span><i /></div>
          <div className="work-heading">
            <div className="section-rail"><span>03</span><span>SELECTED WORK</span></div>
            <div><p className="eyebrow">A RECORD OF PRACTICAL PROGRESS</p><h2 id="work-title">The work behind<br />the <em>numbers.</em></h2></div>
            <p className="work-heading-copy">A selection of programmes where disciplined finance and procurement created clearer choices for leaders and teams.</p>
          </div>
          <div className="case-list">
            {caseStudies.map((caseStudy, index) => (
              <article className={`case-study case-${index + 1}`} key={caseStudy.number}>
                <div className="case-image"><img src={caseStudy.image} alt="" /><div className="case-image-overlay" /><span className="evidence-tag">ARCHIVED EVIDENCE / {caseStudy.number.slice(-2)}</span></div>
                <div className="case-content">
                  <p className="case-number">{caseStudy.number}</p>
                  <p className="case-category">{caseStudy.category}</p>
                  <h3>{caseStudy.title}</h3>
                  <p className="case-copy">{caseStudy.copy}</p>
                  <div className="case-result"><span>OUTCOME</span><strong>{caseStudy.result}</strong></div>
                  <button className="case-link" aria-label={`Read ${caseStudy.title}`} onClick={() => scrollToSection("contact")}>Discuss this approach <ArrowUpRight size={17} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section section-pad" aria-labelledby="experience-title">
          <div className="chapter-spine chapter-spine-dark" aria-hidden="true"><span>CTO / DOSSIER 2026</span><i /></div>
          <div className="experience-visual"><div className="visual-index">04 / CAREER RECORD</div><div className="experience-image"><img src={assetUrl("images/financial-analysis.webp")} alt="Finance reports and analysis materials" /></div><div className="evidence-note"><ShieldCheck size={20} /><span>CONSCIENTIOUS<br />BY DESIGN</span></div></div>
          <div className="experience-main">
            <p className="eyebrow">EXPERIENCE & EXPERTISE</p>
            <h2 id="experience-title">A career built<br />on <em>good judgment.</em></h2>
            <div className="timeline">
              {timeline.map((item) => (
                <article className="timeline-item" key={item.years}>
                  <span className="timeline-year">{item.years}</span>
                  <div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.copy}</p></div>
                </article>
              ))}
            </div>
            <div className="credentials"><BadgeCheck size={20} /><span>ECONOMICS & STATISTICS</span><span className="credential-rule" /><span>IT ESSENTIALS · CISCO</span></div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="chapter-spine chapter-spine-dark" aria-hidden="true"><span>CTO / DOSSIER 2026</span><i /></div>
          <div className="contact-top"><p className="eyebrow gold-text">05 / START A CONVERSATION</p><span>FINTECH · FINANCE · PROCUREMENT</span></div>
          <div className="contact-main">
            <h2 id="contact-title">Bring clarity to<br />the spend behind<br /><em>the strategy.</em></h2>
            <a className="contact-arrow" href="mailto:clintonotieno23@gmail.com" aria-label="Email Clinton Otieno"><ArrowUpRight size={42} strokeWidth={1.2} /></a>
          </div>
          <div className="contact-details">
            <a href="mailto:clintonotieno23@gmail.com"><Mail size={17} />clintonotieno23@gmail.com</a>
            <a href="tel:0718880411"><Phone size={17} />0718 880 411</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn</a>
          </div>
          <footer className="site-footer"><div className="footer-brand"><Monogram /><span>CLINTON OTIENO</span></div><span>FINANCE & PROCUREMENT · FINTECH</span><span>© 2026</span></footer>
        </section>
      </main>
    </div>
  );
}
