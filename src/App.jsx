import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Palette,
  PenTool,
  PanelsTopLeft,
  MousePointer2,
  Film,
  Video,
  Languages
} from 'lucide-react'

import nelson from './images/nelson.png';


const sampleProjects = [
  { n: '01', title: 'Baobab Hospital', type: 'Healthcare graphics', category: 'Branding', year: 'ADM', image: 'photo-1558655146-9f40138edfeb', tone: 'light' },
  { n: '02', title: 'Bookiper Consultancy', type: 'Business communications', category: 'Branding', year: 'ADM', image: 'photo-1500530855697-b586d89ba3ee', tone: 'dark' },
  { n: '03', title: 'Independent Practice', type: 'Freelance design', category: 'Posters', year: '2026', image: 'photo-1602143407151-7111542de6e8', tone: 'light' },
  { n: '04', title: 'Visual Noise', type: 'Digital campaign', category: 'Social', year: '2025', image: 'photo-1550745165-9bc0b252726f', tone: 'dark' },
  { n: '05', title: 'Soft Structures', type: 'Editorial design', category: 'Posters', year: '2025', image: 'photo-1518005020951-eccb494ad742', tone: 'light' },
  { n: '06', title: 'Move Different', type: 'Motion & video', category: 'Motion', year: '2025', image: 'photo-1536240478700-b869070f9279', tone: 'dark' },
]

const toTitle = (value) =>
  value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase())

const localProjectImages = import.meta.glob('./images/projects/**/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  import: 'default',
})

const projectsFromFolder = Object.entries(localProjectImages)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([path, src], index) => {
    const segments = path.split('/')
    const fileName = segments[segments.length - 1].replace(/\.[^.]+$/, '')
    const parentFolder = segments[segments.length - 2]
    const category = toTitle(parentFolder)

    return {
      n: String(index + 1).padStart(2, '0'),
      title: toTitle(fileName),
      type: `${category} project`,
      category,
      year: 'Recent',
      src,
    }
  })

const projects = projectsFromFolder.length > 0 ? projectsFromFolder : sampleProjects
const filters = ['All work', ...new Set(projects.map((project) => project.category))]
const tools = [
  ['Photoshop', 'Photo manipulation · compositing'],
  ['Illustrator', 'Vector design · logos · illustration'],
  ['CapCut', 'Short-form video · reels'],
  ['After Effects', 'Motions'],
  ['Canva', 'Fast, polished social content'],
  ['Figma', 'Digital layouts · UI concepts'],


]

function App() {
  const [filter, setFilter] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const shown = filter === 'All work' ? projects : projects.filter(p => p.category === filter)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-acid selection:text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">NELSON SAUKA<span className="text-acid">®</span></a>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[.18em] md:flex">
            <a className="nav-link" href="#home">Home</a><a className="nav-link" href="#about">About</a><a className="nav-link" href="#experience">Experience</a><a className="nav-link" href="#work">Work</a><a className="nav-link" href="#skills">Skills</a><a className="nav-link" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-acid px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-ink transition hover:bg-white md:inline-flex">Let's talk <ArrowUpRight size={15} className="ml-2" /></a>
          <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 text-sm uppercase tracking-widest md:hidden"><a onClick={closeMenu} href="#home">Home</a><a onClick={closeMenu} href="#about">About</a><a onClick={closeMenu} href="#experience">Experience</a><a onClick={closeMenu} href="#work">Work</a><a onClick={closeMenu} href="#skills">Skills</a><a onClick={closeMenu} href="#contact">Contact</a></nav>}
      </header>

      <main>
        <section id="home" className="hero-grid relative flex min-h-[760px] items-end overflow-hidden bg-ink pt-28 text-white md:min-h-[820px]">
          <div className="absolute inset-0 opacity-40">
            <img className="h-full w-full object-cover object-center grayscale" src={nelson.png} alt="Nelson Sauka" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
          <div className="absolute right-[8%] top-[22%] hidden h-48 w-48 rounded-full border border-white/20 md:block"><div className="absolute inset-5 rounded-full border border-white/15" /><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] uppercase tracking-[.3em]">DIT<br />2027</span></div>
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 pb-16 md:grid-cols-[1.2fr_.8fr] md:items-end md:px-10 md:pb-24">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-acid"><span className="h-px w-10 bg-acid" />Graphic designer · DIT student</p>
              <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[.82] tracking-[-.075em]">IDEAS<br />INTO <span className="text-acid">IMPACT.</span></h1>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#work" className="inline-flex items-center rounded-full bg-acid px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition hover:scale-[1.03]">Explore my work <ArrowDownRight size={16} className="ml-3" /></a>
                <span className="text-xs text-white/65">Design · Digital · Motion</span>
              </div>
            </div>
            <div className="max-w-sm md:justify-self-end">
              <p className="mb-3 text-xs uppercase tracking-[.25em] text-white/55">Hello, I'm</p>
              <h2 className="font-display text-3xl font-bold uppercase leading-none md:text-4xl">Nelson Sauka<span className="text-acid">.</span></h2>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">A graphic designer creating clear, engaging visuals for organizations, businesses and people with something to say.</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between border-t border-white/15 px-5 py-4 text-[9px] uppercase tracking-[.2em] text-white/50 md:px-10"><span>Based in Tanzania · Available worldwide</span><span className="hidden sm:block">Scroll to explore ↓</span></div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center md:px-10 md:py-32">
          <div className="relative max-w-lg">
            <div className="absolute -left-3 -top-3 h-full w-full border border-ink/20" />
            <img className="relative aspect-[4/5] w-full object-cover grayscale" src={nelson} alt="Portrait placeholder for designer" />
            <div className="absolute -bottom-5 -right-3 bg-acid px-5 py-4 font-display text-sm font-bold uppercase">Curious by design ↗</div>
          </div>
          <div>
            <p className="eyebrow"><span /> A little about me</p>
            <h2 className="section-heading">DESIGN WITH<br />A <span className="highlight">POINT OF VIEW.</span></h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-ink/70">I turn ideas into clear, memorable visuals. From a logo's first sketch to a campaign's final frame, I love combining thoughtful design with a little bit of unexpected energy.</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">My work moves between graphic design, brand identity, digital content and video. I care about the details, the story behind the visuals, and making every project feel intentional.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/15 pt-6">
              <div><p className="font-display text-3xl font-bold">03<span className="text-acid">+</span></p><p className="mt-1 text-[10px] uppercase tracking-wider text-ink/55">Work settings</p></div>
              <div><p className="font-display text-3xl font-bold">06</p><p className="mt-1 text-[10px] uppercase tracking-wider text-ink/55">Creative tools</p></div>
              <div><p className="font-display text-3xl font-bold">27</p><p className="mt-1 text-[10px] uppercase tracking-wider text-ink/55">Graduating</p></div>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-ink px-5 py-24 text-white md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
              <div><p className="eyebrow text-acid"><span className="bg-acid" /> Experience</p><h2 className="section-heading">WORK THAT<br /><span className="text-acid">CONNECTS.</span></h2><p className="mt-6 max-w-sm text-sm leading-6 text-white/60">I bring a practical, thoughtful approach to every brief — from the first idea to the final export.</p></div>
              <div className="divide-y divide-white/15 border-y border-white/15">
                {[
                  ['01', 'ADM', 'Graphic Designer', 'Produced graphic design work for Baobab Hospital and Bookiper Consultancy Limited, creating visual content for their communication needs.'],
                  ['02', 'Freelance', 'Graphic Designer', 'Working independently with clients to develop posters, social media graphics, identity pieces and other visual materials.'],
                  ['03', 'DIT', 'Student · finishing 2027', 'Building a strong foundation in design, technology and creative problem-solving at the Dar es Salaam Institute of Technology.'],
                ].map(item => <div key={item[0]} className="grid gap-4 py-6 sm:grid-cols-[3rem_8rem_1fr] sm:gap-6"><span className="text-xs text-acid">{item[0]} /</span><div><p className="font-display text-xl font-bold">{item[1]}</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{item[2]}</p></div><p className="text-sm leading-6 text-white/60">{item[3]}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="bg-white px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div><p className="eyebrow"><span /> Selected projects</p><h2 className="section-heading">MADE TO<br /><span className="highlight">MAKE YOU LOOK.</span></h2></div>
              {/* <p className="max-w-xs text-sm leading-6 text-ink/60">All images from <strong>src/images/projects</strong> are loaded automatically, including subfolders like posters, logos and business cards.</p> */}
            </div>
            <div className="mt-10 flex flex-wrap gap-2 border-b border-ink/10 pb-5">
              {filters.map(f => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition ${filter === f ? 'bg-ink text-white' : 'bg-transparent text-ink/55 hover:bg-ink/5 hover:text-ink'}`}>{f}</button>)}
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map(p => <article key={p.n} className="project-card group">
                <div className="relative overflow-hidden bg-[#deded9]">
                  <img className="aspect-[4/4.5] w-full object-cover transition duration-700 group-hover:scale-105" src={p.src ?? `https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=900&q=85`} alt={`${p.title} project`} loading="lazy" />
                  <div className="absolute inset-0 flex items-end justify-between bg-ink/0 p-5 text-white transition group-hover:bg-ink/25"><span className="text-xs font-semibold uppercase tracking-widest opacity-0 transition group-hover:opacity-100">View project</span><span className="grid h-10 w-10 place-items-center rounded-full bg-acid text-ink opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={18} /></span></div>
                  <span className="absolute left-4 top-4 bg-paper px-3 py-1 text-[10px] font-bold">{p.n} / {String(projects.length).padStart(2, '0')}</span>
                </div>
                <div className="flex items-start justify-between gap-4 py-4"><div><h3 className="font-display text-xl font-bold">{p.title}</h3><p className="mt-1 text-xs text-ink/55">{p.type}</p></div><span className="pt-1 text-[10px] text-ink/45">{p.year}</span></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-acid px-5 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
              <div><p className="eyebrow"><span /> My creative toolkit</p><h2 className="section-heading">TOOLS ARE<br />JUST THE <span className="text-white">START.</span></h2><p className="mt-6 max-w-sm text-sm leading-6 text-ink/70">The right tool for the right idea. Here's what I use to bring concepts to life.</p></div>
              <div className="divide-y divide-ink/20 border-y border-ink/20">
                {tools.map((t, i) => <div key={t[0]} className="group flex items-center gap-4 py-4 transition hover:px-2"><span className="w-7 text-xs text-ink/45">0{i + 1}</span><div className="flex-1"><h3 className="font-display text-xl font-bold md:text-2xl">{t[0]}</h3><p className="mt-1 text-xs text-ink/65">{t[1]}</p></div><ArrowUpRight className="transition group-hover:rotate-45" /></div>)}
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-2">{['Visual identity', 'Art direction', 'Social media', 'Photo editing', 'UI concepts', 'Video editing', 'Motion content'].map(x => <span key={x} className="rounded-full border border-ink/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider">{x}</span>)}</div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ink px-5 py-24 text-white md:px-10 md:py-32">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10 md:h-[30rem] md:w-[30rem]" /><div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-white/10 md:h-[25rem] md:w-[25rem]" />
          <div className="relative mx-auto max-w-7xl"><p className="eyebrow text-acid"><span className="bg-acid" /> The process</p><h2 className="section-heading">GOOD WORK.<br /><span className="text-acid">GOOD ENERGY.</span></h2><div className="mt-12 grid gap-8 border-t border-white/15 pt-7 sm:grid-cols-3">{[['01', 'Listen', 'Understand the brief, audience and goals.'], ['02', 'Explore', 'Find the visual idea worth remembering.'], ['03', 'Make it real', 'Refine, deliver and make the details count.']].map(s => <div key={s[0]}><p className="text-xs text-acid">{s[0]} /</p><h3 className="mt-4 font-display text-2xl font-bold">{s[1]}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-white/55">{s[2]}</p></div>)}</div></div>
        </section>

        <section id="contact" className="px-5 py-24 md:px-10 md:py-32">

          <div className="mt-10 grid gap-5 border-t border-ink/15 pt-8 sm:grid-cols-2">
            {/* Email card */}
            <a
              href="mailto:nelsonsauka821@gmail.com"
              className="group relative flex min-w-0 items-center gap-4 overflow-hidden rounded-2xl border border-ink/15 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-acid hover:shadow-xl"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ink text-acid transition-transform duration-300 group-hover:rotate-[-6deg]">
                <Mail size={25} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">
                  Email me
                </p>
                <p className="mt-2 break-all text-sm font-bold text-ink sm:text-base">
                  nelsonsauka821@gmail.com
                </p>
                <p className="mt-1 text-xs text-ink/60">
                  Let’s discuss your next project
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-acid">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:+255689254189"
              className="group relative flex min-w-0 items-center gap-4 overflow-hidden rounded-2xl border border-ink/15 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-acid hover:shadow-xl"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ink text-acid transition-transform duration-300 group-hover:rotate-[6deg]">
                <Phone size={25} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">
                  Call me
                </p>
                <p className="mt-2 text-sm font-bold text-ink sm:text-base">
                  +255 689 254 189
                </p>
                <p className="mt-1 text-xs text-ink/60">
                  Let’s bring your ideas to life
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-acid">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>

        </section>
      </main>
    </div>
  )
}

export default App