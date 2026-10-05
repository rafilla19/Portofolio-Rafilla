import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ArrowLeft,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Download,
  GitBranch,
  Image,
  Mail,
  Menu,
  Palette,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  { title: 'Programming', icon: Code2, skills: ['Python', 'Laravel', '.Net', 'Flutter', 'JavaScript'] },
  { title: 'Data & ML', icon: BarChart3, skills: ['Power BI', 'Looker Studio', 'Pandas', 'Scikit-learn', 'TensorFlow'] },
  { title: 'Web craft', icon: Palette, skills: ['React', 'HTML / CSS', 'Tailwind', 'REST API'] },
  { title: 'Database', icon: Database, skills: ['PostgreSQL', 'MySQL', 'Firebase'] },
  { title: 'Workflow', icon: Sparkles, skills: ['Git', 'Figma', 'Jupyter', 'Notion'] },
]

const certificates = [
  { issuer: 'Amazon Web Services', title: 'Data Analytics Learning Plan', date: 'May 2025', image: '/img/certif/Data%20Analytics.jpg' },
  { issuer: 'Amazon Web Services', title: 'Machine Learning Learning Plan', date: 'Feb 2025', image: '/img/certif/Machine%20Learning.jpg' },
  { issuer: 'Amazon Web Services', title: 'Digital Classroom-Practical Data Science with Amazon SageMaker', date: 'Nov 2025', image: '/img/certif/Digital%20Classroom.jpg' },
  { issuer: 'CompSphere 2024', title: '1001 Event - 1st Winner of Tech Project', date: '2024', image: '/img/certif/Compsphere.jpeg' },
]

const projects = [
  { number: '01', category: 'WEB EXPERIENCE', title: 'Cooperative Management System', description: 'A full-stack employee cooperative management system covering membership, savings, loans, and SHU distribution, with an XGBoost-based credit scoring module and Midtrans payment integration. Built with Django REST Framework, PostgreSQL, and React.', tags: ['Django REST Framework', 'PostgreSQL', 'Supabase', 'React', 'XGBoost', 'Scikit-learn', 'Pandas', 'Midtrans', 'Chart.js'], tone: 'rose', githubUrl: 'https://github.com/rafilla19/Koperasi-Sanoh', liveUrl: '', attachments: [] },
  { number: '02', category: 'WEB EXPERIENCE', title: '1001-Events', description: 'A campus event platform for President University that centralizes event information in one accessible place. The platform helps students discover upcoming activities, stay informed, and participate more actively in building a connected campus community.', tags: ['React', 'Tailwind', 'Firebase'], tone: 'blue', githubUrl: 'https://github.com/rafilla19/1001-Events', liveUrl: '', attachments: [] },
  { number: '03', category: 'MACHINE LEARNING', title: 'Learnlytics', description: 'Learnlytics is a team-built, machine learning-powered web application that helps educational institutions understand student activity and performance through personalized insights, dashboards, and data visualizations.. I developed the Find Partner feature, which matches students with up to five study partners using similarity scoring on their learning activities and grades. I also applied Apriori association rule mining to uncover relationships between learning activities, presented through interactive Plotly charts of support, confidence, and lift. New user submissions are stored and fed back into the analysis, so recommendations keep improving as more data comes in.', tags: ['Python', 'Django', 'Pandas', 'MLxtend', 'Plotly', 'PostgreSQL', 'Joblib'], tone: 'moss', githubUrl: 'https://github.com/rafilla19/Learnlytics-main', liveUrl: '', attachments: [] },
  { number: '04', category: 'APPLICATION EXPERIENCE', title: 'Projectify', description: 'Projectify is a mobile application designed to serve as a centralized platform for computing students to explore, reference, and collaborate on academic projects. Developed using Flutter, JavaScript, and Firebase, this app was created to support the Research and Development (RnD) division of PUMA IS.', tags: ['Flutter', 'Dart', 'Firebase Authentication', 'Cloud Firestore', 'Firebase Storage', 'Google Sign-In', 'Provider'], tone: 'rose', githubUrl: 'https://github.com/rafilla19/Projectify', liveUrl: '', attachments: [] },
  ]

const experiences = [
  {
    period: 'Feb - July 2026',
    role: 'Production Digitalization Intern - Operational Technology',
    company: 'PT. Bintang Toedjoe',
    attachments: [
      { src: '/img/b7/bc24eb1e-abec-498c-abec-cfe1dbc0e487.jpg', alt: 'Foto kegiatan di PT. Bintang Toedjoe', caption: 'PT. Bintang Toedjoe' },
      { src: '/img/b7/bf9ed184-5ab6-4fad-97b4-40dd647373eb.jpg', alt: 'Foto kegiatan di PT. Bintang Toedjoe', caption: 'PT. Bintang Toedjoe' },
      { src: '/img/b7/c21719bd-bf46-464b-a1f3-6a53ad7ed6d1.jpg', alt: 'Foto kegiatan di PT. Bintang Toedjoe', caption: 'PT. Bintang Toedjoe' },
      { src: '/img/b7/e9ec9082-63b3-4359-85e7-6aff12e3921f.jpg', alt: 'Foto kegiatan di PT. Bintang Toedjoe', caption: 'PT. Bintang Toedjoe' },
      { src: '/img/b7/IMG_1218.JPG', alt: 'Foto kegiatan di PT. Bintang Toedjoe', caption: 'PT. Bintang Toedjoe' },
    ],
    text: `Worked in the Operational Technology Department on the digitalization of production monitoring through the Daily Sheets App. Developed and enhanced the Pencapaian Harian Produksi module, a web-based dashboard providing real-time production visibility across 18 filling and packaging lines, with features for production achievement, history, and monthly/yearly performance covering targets, output, downtime, and batch status. Consolidated data by querying the Batch Tracker, Batch Reporter, and Breakdown Management databases and calling APIs for OPC-based Line View. Also gathered requirements through direct observation and stakeholder discussions, designed the supporting database structure, and authored GMP-compliant Functional Design Specification (FDS) documentation.`
  },
  {
    period: 'Sept 2025 - Jan 2026',
    role: 'Warehouse Admin Intern',
    company: 'PT. Sanoh Indonesia',
    attachments: [
      { src: '/img/sanoh/fd082218-b27e-4569-a27a-aafc81bb90a0.jpg', alt: 'Foto kegiatan di PT. Sanoh Indonesia', caption: 'PT. Sanoh Indonesia' },
    ],
    text: `Managed inbound and inventory data, supplier arrival schedules, and warehouse records using Excel and internal inventory systems, verifying incoming goods against physical conditions and shipping documents to keep receiving records accurate. Coordinated with Warehouse, PPIC, Production, QC, and suppliers to maintain data consistency, and analyzed supplier performance (delivery quantities, delays, and premium freight costs) in monthly reports for management. Also contributed to a web-based warehouse system by supporting database design, gathering user requirements, mapping workflows, and liaising between warehouse users and the IT team.`,
  },
  {
    period: 'Nov 2024 - Aug 2025',
    role: 'Head of Internal Communication Division',
    company: 'Investment Club President University',
    attachments: [
      { src: '/img/investment/1.jpg', alt: 'Kegiatan Investment Club President University', caption: 'Investment Club President University' },
      { src: '/img/investment/2.jpeg', alt: 'Kegiatan Investment Club President University', caption: 'Investment Club President University' },
      { src: '/img/investment/3.jpeg', alt: 'Kegiatan Investment Club President University', caption: 'Investment Club President University' },
      { src: '/img/investment/4.jpg', alt: 'Kegiatan Investment Club President University', caption: 'Investment Club President University' },
      { src: '/img/investment/7.jpeg', alt: 'Kegiatan Investment Club President University', caption: 'Investment Club President University' },
    ],
    text: `Led a 6-member internal communication division, ensuring fair task distribution and support during urgent situations. Supervised visual content creation and established the feed layout for all Investment Club materials, while monitoring team performance and facilitating coordination meetings to keep work on schedule and aligned.`,
  },
]

const whatsappNumber = '6281389203127'
const whatsappMessage = 'Halo Rafilla, saya tertarik untuk berdiskusi tentang peluang atau project.'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [sent, setSent] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState(null)

  useEffect(() => {
    if (!selectedDetail) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedDetail(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedDetail])

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12 })
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-25% 0px -60% 0px' })

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
    document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section))
    return () => { revealObserver.disconnect(); sectionObserver.disconnect() }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rafilla home"><span>R.</span><b>Rafilla Shalwa Sakina</b></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {navItems.map((item) => <a className={activeSection === item.href.slice(1) ? 'active' : ''} key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-contact" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> Fresh graduate in Information Systems</p>
            <h1>Ideas become<br /><em>impact.</em></h1>
            <p className="hero-intro">I am Rafilla Shalwa Sakina, a data-minded creative building thoughtful digital experiences where technology meets human needs.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a><a className="text-link" href="#contact">Download CV <Download size={16} /></a></div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="portrait-frame"><div className="portrait-art"><img className="portrait-image" src="/img/shalwa.jpeg" alt="Rafilla Shalwa Sakina wearing a black hijab and white shirt" /><div className="portrait-shade" /><div className="portrait-shape shape-one" /><div className="portrait-shape shape-two" /></div><div className="portrait-note"><span>currently</span><strong>making sense<br />of complexity</strong></div></div>
            <div className="floating-stamp"><span>curious</span><span>by design</span><Sparkles size={15} /></div>
          </div>
        </section>

        <section className="statement-band"><div className="section-wrap statement-inner reveal"><h2>Curiosity is my<br /><span>creative advantage.</span></h2><p className="statement-body">I care about the in-between moments: where a dataset becomes a decision, where an interface becomes intuitive, and where a good question opens a better possibility.</p></div></section>

        <section className="content-section" id="about"><div className="section-wrap"><div className="section-heading reveal"><h2>More than just<br /><em>the numbers.</em></h2></div><div className="about-grid"><div className="about-copy reveal"><p className="large-copy">I am a fresh graduate in Information Systems, specializing in Data Science. My work lives at the intersection of data analysis, software development, and digitalization.</p><p>From exploring data and building models to shipping real, functional web and mobile applications, I enjoy turning business requirements into practical, user-friendly solutions.</p><a className="text-link" href="#skills">More about my journey <ArrowUpRight size={16} /></a></div><div className="about-facts reveal reveal-delay"><div><span>Based in</span><strong>Bekasi</strong></div><div><span>Focus</span><strong>Data + Digital</strong></div><div><span>Currently</span><strong>Open to opportunities</strong></div></div></div></div></section>

        <section className="content-section skills-section" id="skills"><div className="section-wrap"><div className="section-heading split-heading reveal"><div><h2>Tools for turning<br /><em>questions into clarity.</em></h2></div><p className="heading-aside"></p></div><div className="skills-grid">{skillGroups.map(({ title, icon: Icon, skills }, index) => <div className={`skill-card reveal reveal-delay-${index % 3}`} key={title}><div className="skill-icon"><Icon size={19} /></div><h3>{title}</h3><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

        <section className="content-section projects-section" id="projects"><div className="section-wrap"><div className="section-heading split-heading reveal"><div><h2>Built with intent,<br /><em>made to matter.</em></h2></div><a className="text-link" href="#contact">View all projects <ArrowUpRight size={16} /></a></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone} reveal`} key={project.title}><a className="project-open" href={project.githubUrl || 'https://github.com/rafilla19?tab=repositories'} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><div className="project-top"><span>{project.number}</span><ArrowUpRight size={19} /></div><div className="project-visual"><div className="visual-grid" /><span>{project.category}</span><div className="visual-orbit" /></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></a></article>)}</div></div></section>

        <section className="content-section experience-section" id="experience"><div className="section-wrap"><div className="section-heading reveal"><h2>The chapters<br /><em>so far.</em></h2></div><div className="timeline">{experiences.map((experience) => <button className={`timeline-item reveal ${experience.current ? 'current' : ''}`} key={experience.role} onClick={() => setSelectedDetail({ type: 'experience', data: experience })} aria-label={`View details for ${experience.role}`}><span className="timeline-marker"><BriefcaseBusiness size={15} /></span><span className="timeline-period">{experience.period}</span><span className="timeline-content"><h3>{experience.role}</h3><strong>{experience.company}</strong><p>{experience.text.slice(0, 190)}...</p></span></button>)}</div></div></section>

        <section className="content-section certificates-section" id="certificates"><div className="section-wrap"><div className="section-heading split-heading reveal"><div><h2>Proof of<br /><em>the practice.</em></h2></div><p className="heading-aside"></p></div><div className="certificate-grid">{certificates.map((certificate, index) => <button className="certificate-card reveal" style={{ '--delay': `${index * 60}ms` }} onClick={() => setSelectedDetail({ type: 'certificate', data: certificate })} key={certificate.title}><div className="issuer-mark"><Award size={17} /></div><div className="certificate-info"><span>{certificate.issuer}</span><h3>{certificate.title}</h3><small>Issued {certificate.date}</small></div><ArrowUpRight className="card-arrow" size={18} /></button>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div className="contact-copy reveal"><h2>Have a good<br /><em>question?</em></h2><p>Whether you want to talk data, design, or a new opportunity, my inbox is always open.</p><div className="social-links"><a href="www.linkedin.com/in/rafilla-shalwa-sakina" target="_blank" rel="noreferrer"><Code2 size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/rafilla19" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub <ArrowUpRight size={14} /></a><a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer"><Send size={17} /> WhatsApp <ArrowUpRight size={14} /></a><a href="mailto:hello@rafilla.dev"><Mail size={17} /> Email <ArrowUpRight size={14} /></a></div></div><form className="contact-form reveal reveal-delay" onSubmit={handleSubmit}><label>Name<input required name="name" type="text" placeholder="Your name" /></label><label>Email<input required name="email" type="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about your idea..." /></label><button className="button button-primary" type="submit">{sent ? <>Message sent <Check size={16} /></> : <>Send message <Send size={15} /></>}</button></form></div></section>
      </main>
      <footer className="site-footer"><div className="footer-brand"><span>R.</span><p>By Rafilla Shalwa Sakina<br /><small>© 2026</small></p></div><a href="#top" className="back-top">Back to top <ArrowUpRight size={15} /></a></footer>
      {selectedDetail && <div className="detail-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedDetail(null) }}><section className="detail-page" role="dialog" aria-modal="true" aria-labelledby="detail-title"><div className="detail-toolbar"><button className="detail-back" onClick={() => setSelectedDetail(null)}><ArrowLeft size={17} /> Back</button><button className="icon-button detail-close" onClick={() => setSelectedDetail(null)} aria-label="Close details"><X size={20} /></button></div><div className="detail-content"><p className="eyebrow"><span className="eyebrow-dot" />{selectedDetail.type === 'project' ? selectedDetail.data.category : selectedDetail.type === 'experience' ? selectedDetail.data.period : 'CERTIFICATE'}</p><h2 id="detail-title">{selectedDetail.data.title || selectedDetail.data.role}</h2>{selectedDetail.type === 'certificate' ? <><p className="detail-subtitle">{selectedDetail.data.issuer} · Issued {selectedDetail.data.date}</p>{selectedDetail.data.image ? <img className="certificate-image" src={selectedDetail.data.image} alt={`${selectedDetail.data.title} certificate`} /> : <div className="certificate-preview"><div className="certificate-preview-inner"><Award size={34} /><span>Certificate of Achievement</span><strong>{selectedDetail.data.title}</strong><small>{selectedDetail.data.issuer}</small><i /></div></div>}</> : <><p className="detail-description">{selectedDetail.data.description || selectedDetail.data.text}</p>{selectedDetail.type === 'project' && <div className="tag-list detail-tags">{selectedDetail.data.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<div className={`detail-media-grid ${selectedDetail.type === 'project' ? 'project-media-grid' : ''}`}>{selectedDetail.data.attachments?.length ? selectedDetail.data.attachments.map((attachment) => <figure className="detail-attachment" key={attachment.src}>{attachment.type === 'video' ? <video controls src={attachment.src} /> : <img src={attachment.src} alt={attachment.alt || attachment.caption || 'Project attachment'} />}<figcaption>{attachment.caption}</figcaption></figure>) : <div className="detail-media-slot"><Image size={24} /><strong>{selectedDetail.type === 'project' ? 'Project attachment' : 'Experience attachment'}</strong><span>Image or video preview</span><small>Add a file path and caption in the item data</small></div>}{selectedDetail.type === 'experience' && <div className="detail-media-caption"><span>ATTACHMENT NOTE</span><p>Explain what the image or video shows and your contribution.</p></div>}</div>{selectedDetail.type === 'project' ? <div className="detail-links"><span>PROJECT LINKS</span>{selectedDetail.data.githubUrl && <a href={selectedDetail.data.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>}{selectedDetail.data.liveUrl && <a href={selectedDetail.data.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a>}{!selectedDetail.data.githubUrl && !selectedDetail.data.liveUrl && <small>Project links can be added in the project data.</small>}</div> : <p className="detail-subtitle">{selectedDetail.data.company}</p>}</>}</div></section></div>}
    </div>
  )
}

export default App
