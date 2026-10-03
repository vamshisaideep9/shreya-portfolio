import Image from "next/image";
import MotionObserver from "./motion-observer";

const experience = [
  {
    period: "JUN — JUL 2026",
    role: "Product Developer Intern",
    place: "Indian Designs Export Pvt. Ltd.",
    copy: "Tracked samples and requirements across teams, issued samples for H&M, Zara and Columbia, and coordinated fabrics for product development.",
  },
  {
    period: "JAN — APR 2024",
    role: "Fashion Design & Production Intern",
    place: "Bhargavi Amirineni Studio, Hyderabad",
    copy: "Coordinated sourcing, artisan schedules and custom orders, while contributing to sustainable design work, product photography and social content.",
  },
  {
    period: "2022 — 2023",
    role: "Assistant Costume Designer",
    place: "Ardhamayyindha Arun Kumar · Laughing Cow Productions / aha",
    copy: "Managed on-set costume inventory, fittings and continuity across scenes, translating creative direction into practical styling decisions.",
  },
];

const software = [
  { name: "Microsoft Excel", src: "/images/logos/excel.svg" },
  { name: "Microsoft Word", src: "/images/logos/word.svg" },
  { name: "Power BI", src: "/images/logos/powerbi.svg" },
  { name: "Canva", src: "/images/logos/canva.svg" },
  { name: "Adobe Illustrator", src: "/images/logos/illustrator.svg" },
  { name: "Microsoft PowerPoint", src: "/images/logos/powerpoint.svg" },
];

const domains = ["Product lifecycle management", "Consumer behaviour", "Data analysis", "Time & action planning"];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span><span className="section-label__rule" /></div>;
}

function Sticker({ src, className }: { src: string; className: string }) {
  return <span className={`sticker ${className}`} aria-hidden="true"><Image src={src} alt="" width={380} height={380} loading="eager" /></span>;
}

export default function Home() {
  return <main id="top">
    <MotionObserver />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grain" aria-hidden="true" />
      <p className="hero__issue">PORTFOLIO / 2026 <span>HYDERABAD, INDIA</span></p>
      <div className="hero__portrait"><Image src="/images/shreya-hero.png" alt="Shreya Sirigireddy smiling" fill priority sizes="(max-width: 700px) 72vw, 34vw" /></div>
      <div className="hero__heading"><p className="hero__kicker">hello, I&apos;m</p><h1 id="hero-title"><span>Shreya</span><span>Sirigireddy</span></h1><p className="hero__subtitle">Fashion management · product development · the stories behind what we make</p></div>
      <Sticker src="/images/sticker-phone-cutout.png" className="sticker--phone" />
      <Sticker src="/images/sticker-camera.png" className="sticker--camera" />
      <Sticker src="/images/sticker-brain-cutout.png" className="sticker--brain" />
      <Sticker src="/images/sticker-recycle-cutout.png" className="sticker--recycle" />
      <Sticker src="/images/sticker-globe-cutout.png" className="sticker--globe" />
      <Sticker src="/images/sticker-cassette.png" className="sticker--cassette" />
      <Sticker src="/images/sticker-clock.png" className="sticker--clock" />
      <Sticker src="/images/sticker-handshake.png" className="sticker--handshake" />
      <Sticker src="/images/sticker-keyboard.png" className="sticker--keyboard" />
      <Sticker src="/images/sticker-books.png" className="sticker--books" />
      <span className="hero__side-note" aria-hidden="true">creative thinking meets considered execution</span>
      <a className="hero__enter" href="#about"><span>Click here to find out more</span><span aria-hidden="true">↓</span></a>
    </section>

    <section className="about section-shell" id="about" aria-labelledby="about-title">
      <SectionLabel number="01">About me</SectionLabel>
      <div className="about__layout">
        <div className="about__visual" data-reveal="scale"><div className="about__portrait"><Image src="/images/shreya-about.png" alt="Black and white portrait of Shreya" fill sizes="(max-width: 700px) 90vw, 470px" loading="eager" /></div><span className="about__signature">Shreya Sirigireddy</span></div>
        <div className="about__copy" data-reveal="rise"><p className="eyebrow">A little introduction</p><h2 id="about-title">About <em>me.</em></h2><p className="about__lead">I&apos;m a Master of Fashion Management student at NIFT Kannur, interested in the space where fashion, business and customer experience meet.</p><p>My background in fashion design and hands-on work in production have shown me how an idea becomes a product: through research, coordination, planning and a lot of thoughtful decisions along the way.</p><p>I love understanding what people need, then finding a creative and practical way to bring it to life.</p><div className="about__tags"><span>Curious by nature</span><span>Design minded</span><span>People focused</span></div></div>
      </div>
    </section>

    <section className="brands" id="brands" aria-labelledby="brands-title"><div className="section-shell">
      <SectionLabel number="02">Collaborations</SectionLabel>
      <div className="section-intro" data-reveal="rise"><div><p className="eyebrow">Along the way</p><h2 id="brands-title">Brands I&apos;ve<br /><em>worked with.</em></h2></div><p>From studio and screen to product development, each experience has taught me something different about making ideas real.</p></div>
      <div className="brands__logos" aria-label="Brands Shreya has worked with"><div className="brand-logo brand-logo--aha" role="img" aria-label="aha logo" data-reveal="scale" /><div className="brand-logo brand-logo--bhargavi" role="img" aria-label="Bhargavi Amirineni logo" data-reveal="scale" /><div className="brand-logo" data-reveal="scale"><Image src="/images/logos/zara.svg" alt="Zara logo" width={250} height={110} unoptimized loading="eager" /></div><div className="brand-logo" data-reveal="scale"><Image src="/images/logos/hm.svg" alt="H&M logo" width={180} height={120} unoptimized loading="eager" /></div></div>
      <p className="brands__note">Brand work includes projects completed through Indian Designs Export, Bhargavi Amirineni Studio and Laughing Cow Productions.</p>
    </div></section>

    <section className="skills section-shell" id="skills" aria-labelledby="skills-title">
      <SectionLabel number="03">Skills & tools</SectionLabel>
      <div className="section-intro" data-reveal="rise"><div><p className="eyebrow">What I bring to the table</p><h2 id="skills-title">Creative instincts.<br /><em>Practical tools.</em></h2></div><p>Comfortable moving between visual ideas, data and the details that keep a project on track.</p></div>
      <div className="skills__grid">{software.map(item => <div className="skill" key={item.name} data-reveal="scale"><div className="skill__mark"><Image src={item.src} alt="" width={110} height={110} unoptimized loading="eager" /></div><span>{item.name}</span></div>)}</div>
      <div className="skills__domains" data-reveal="rise"><span className="skills__domains-label">DOMAIN KNOWLEDGE</span>{domains.map(item => <span key={item}>{item}</span>)}</div><p className="skills__additional">Also familiar with SPSS and R Studio.</p>
    </section>

    <section className="experience" id="experience" aria-labelledby="experience-title"><div className="section-shell">
      <SectionLabel number="04">The experience</SectionLabel>
      <div className="section-intro" data-reveal="rise"><div><p className="eyebrow">Learning by doing</p><h2 id="experience-title">The work<br /><em>so far.</em></h2></div><p>A mix of product development, studio production and on-set costume work.</p></div>
      <div className="experience__list">{experience.map((item, index) => <article className="experience__item" key={item.role} data-reveal="rise"><span className="experience__number">0{index + 1}</span><div><p className="experience__period">{item.period}</p><h3>{item.role}</h3><p className="experience__place">{item.place}</p><p className="experience__copy">{item.copy}</p></div><span className="experience__asterisk" aria-hidden="true">✳</span></article>)}</div>
    </div></section>

    <section className="more section-shell" id="projects" aria-labelledby="projects-title">
      <SectionLabel number="05">Beyond the brief</SectionLabel>
      <div className="more__layout"><div className="more__project" data-reveal="rise"><p className="eyebrow">Selected project / 2023</p><h2 id="projects-title">Designed to<br /><em>be worn.</em></h2><h3>Uniform Design Project · MAHE</h3><p>Contributed to uniform design for the Welcomgroup Graduate School of Hotel Administration, developed in collaboration with Manipal School of Architecture and Planning.</p></div><div className="more__details" data-reveal="rise"><h3>A few things I&apos;m proud of</h3><ul><li><strong>First place</strong> · Trash to Trend, reSPARKle 2025</li><li><strong>First place</strong> · Discus Throw, Spectrum 2026</li><li><strong>Volunteer</strong> · Retrace Alumni Meet 2026</li></ul><div className="more__personal"><span>OFF THE CLOCK</span><p>Crochet · embroidery · sports</p><span>LANGUAGES</span><p>English · Telugu · Hindi</p></div></div></div>
    </section>

    <section className="education" id="education" aria-labelledby="education-title"><div className="section-shell">
      <SectionLabel number="06">Education</SectionLabel>
      <div className="section-intro" data-reveal="rise"><div><p className="eyebrow">The foundation</p><h2 id="education-title">Still learning.<br /><em>Always making.</em></h2></div><p>Design foundations, paired with a growing perspective on management, markets and people.</p></div>
      <div className="education__grid"><article className="education__item" data-reveal="scale"><div className="education__logo"><Image src="/images/logos/nift.svg" alt="National Institute of Fashion Technology logo" width={210} height={210} unoptimized loading="eager" /></div><div className="education__details"><span>2025 — 2027</span><h3>Master of Fashion Management</h3><p>National Institute of Fashion Technology, Kannur</p></div></article><article className="education__item" data-reveal="scale"><div className="education__logo education__logo--manipal"><Image src="/images/logos/manipal-official.png" alt="Manipal Academy of Higher Education logo" width={304} height={114} loading="eager" /></div><div className="education__details"><span>2020 — 2024</span><h3>Bachelor of Fashion Design</h3><p>Manipal School of Architecture and Planning</p></div></article></div>
    </div></section>

    <section className="contact" id="contact" aria-labelledby="contact-title"><div className="section-shell contact__inner"><SectionLabel number="07">Say hello</SectionLabel><p className="contact__script" data-reveal="rise">Have something in mind?</p><h2 id="contact-title" data-reveal="rise">Let&apos;s make<br />something <em>matter.</em></h2><p data-reveal="rise">I&apos;m open to conversations about fashion, buying, merchandising, product development and creative projects.</p><a className="contact__email" href="mailto:shreyasirigireddy@gmail.com" data-reveal="rise">shreyasirigireddy@gmail.com ↗</a></div></section>
    <section className="end" aria-label="The end"><span className="end__eyebrow" data-reveal="rise">Thanks for being here.</span><div className="end__image" data-reveal="scale"><Image src="/images/the-end.png" alt="The End written on black keyboard keys" width={718} height={635} sizes="(max-width: 700px) 88vw, 540px" loading="eager" unoptimized /></div><span className="end__note">Until the next good idea.</span></section>
    <footer className="site-footer"><span>© 2026 Shreya Sirigireddy</span><span>Made with curiosity & care.</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
