import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
  Menu,
  MoveDownRight,
  X,
} from 'lucide-react'
import { portfolio } from './data/portfolio'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

function ExternalLinkButton({ href, children, icon = true, className = '' }) {
  return (
    <a className={`button button-outline ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
      {icon && <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />}
    </a>
  )
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Pragati Biradar home">
          Pragati Biradar<span className="wordmark-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <div className="nav-links">
            <a href="#home" onClick={closeMenu}>Home</a>
            {navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}
          </div>
          <div className="nav-socials">
            <a href={portfolio.github} target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub <ExternalLink size={13} aria-hidden="true" /></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" onClick={closeMenu}>LinkedIn <ExternalLink size={13} aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{portfolio.eyebrow}</p>
            <h1 id="hero-title">Pragati<br /><em>Biradar</em></h1>
            <p className="hero-headline">{portfolio.headline}</p>
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#projects">Explore my work <MoveDownRight size={17} aria-hidden="true" /></a>
              <ExternalLinkButton href={portfolio.linkedin}>Connect on LinkedIn</ExternalLinkButton>
            </div>
          </div>
          <div className="hero-aside" aria-label="Pragati's current direction">
            <div className="monogram" aria-hidden="true"><span>P</span><span>B</span></div>
            <div className="hero-note">
              <span className="note-index">01 / 03</span>
              <p>From mobile foundations<br />to modern interfaces.</p>
            </div>
            <div className="vertical-rule" />
            <span className="scroll-cue">Scroll to explore <MoveDownRight size={15} aria-hidden="true" /></span>
          </div>
        </section>

        <section className="statement-band">
          <div className="section-pad statement-inner">
            <p>01</p>
            <p>Grounded in practical Android development.<br />Curious about what the web can become.</p>
            <Code2 size={30} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </section>

        <section className="section-pad content-section about-section" id="about" aria-labelledby="about-title">
          <SectionLabel number="02" children="About me" />
          <div className="section-grid">
            <h2 id="about-title">A foundation built<br /><em>to keep expanding.</em></h2>
            <div className="section-copy">
              <p className="large-copy">{portfolio.about}</p>
              <a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section-pad content-section skills-section" id="skills" aria-labelledby="skills-title">
          <SectionLabel number="03" children="Technical skills" />
          <div className="section-heading-row">
            <h2 id="skills-title">Tools I use to<br /><em>make things work.</em></h2>
            <p>Established foundations on the left. A growing frontend practice on the right.</p>
          </div>
          <div className="skills-grid">
            {portfolio.skills.map((group, index) => (
              <article className={`skill-group ${index === 1 ? 'skill-group-accent' : ''}`} key={group.label}>
                <div className="skill-number">0{index + 1}</div>
                <h3>{group.label}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad content-section experience-section" id="experience" aria-labelledby="experience-title">
          <SectionLabel number="04" children="Experience" />
          <div className="experience-layout">
            <div>
              <h2 id="experience-title">Learning through<br /><em>real practice.</em></h2>
              <p className="section-aside-copy">A first professional step in Android development, and a foundation for the work ahead.</p>
            </div>
            <article className="experience-entry">
              <div className="experience-meta"><span>{portfolio.experience.duration}</span><BriefcaseBusiness size={18} strokeWidth={1.6} aria-hidden="true" /></div>
              <h3>{portfolio.experience.role}</h3>
              <p className="experience-org">{portfolio.experience.organization}</p>
              <p>{portfolio.experience.description}</p>
            </article>
          </div>
        </section>

        <section className="section-pad content-section projects-section" id="projects" aria-labelledby="projects-title">
          <SectionLabel number="05" children="Selected project" />
          <div className="section-heading-row project-heading">
            <h2 id="projects-title">A project with<br /><em>purpose.</em></h2>
            <p>One project in progress, with room for the next chapter of the portfolio.</p>
          </div>
          {portfolio.projects.map((project) => (
            <article className="project-feature" key={project.name}>
              <div className="project-art" aria-hidden="true">
                <div className="project-art-top"><span>PROJECT / 01</span><Code2 size={17} /></div>
                <div className="project-art-center"><span className="project-mark">CM</span><span>career<br />mate</span></div>
                <div className="project-art-bottom"><span>ANDROID / JAVA / XML</span><span>2026</span></div>
              </div>
              <div className="project-copy">
                <p className="project-kicker">Android application</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <p className="project-note">Project details and repository link can be added here when available.</p>
              </div>
            </article>
          ))}
        </section>

        <section className="section-pad content-section education-section" id="education" aria-labelledby="education-title">
          <SectionLabel number="06" children="Education" />
          <div className="section-heading-row">
            <h2 id="education-title">The context<br /><em>behind the work.</em></h2>
            <GraduationCap size={36} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <div className="education-list">
            {portfolio.education.map((item, index) => (
              <article className="education-item" key={item.degree}>
                <span className="education-status">{item.status}</span>
                <span className="education-index">0{index + 1}</span>
                <div><h3>{item.degree}</h3><p>{item.institution}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad content-section journey-section" aria-labelledby="journey-title">
          <SectionLabel number="07" children="Learning journey" />
          <div className="journey-layout">
            <h2 id="journey-title">A path that keeps<br /><em>moving forward.</em></h2>
            <ol className="journey-list">
              <li><span>01</span><p>Information Technology diploma</p></li>
              <li><span>02</span><p>Android development internship</p></li>
              <li><span>03</span><p>Practical foundation in Java and Android development tools</p></li>
              <li><span>04</span><p>Building frontend development skills with HTML and CSS</p></li>
              <li><span>05</span><p>Currently learning React.js for modern web development</p></li>
            </ol>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-pad contact-inner">
            <SectionLabel number="08" children="Contact" />
            <div className="contact-content">
              <div><p className="eyebrow"><span className="eyebrow-line" />Open to what comes next</p><h2 id="contact-title">Let's connect<br /><em>and build what's next.</em></h2></div>
              <div className="contact-copy"><p>I'm interested in growing as a software engineer, learning from real-world projects, and exploring opportunities in software and web development.</p><div className="contact-links"><ExternalLinkButton href={portfolio.github}>GitHub profile</ExternalLinkButton><ExternalLinkButton href={portfolio.linkedin}>LinkedIn profile</ExternalLinkButton></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-pad">
        <a className="wordmark" href="#home">Pragati Biradar<span className="wordmark-dot">.</span></a>
        <span>© {new Date().getFullYear()} Pragati Biradar</span>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </div>
  )
}

export default App
