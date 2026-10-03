import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Work = {
  kind: string;
  title: string;
  subtitle: string;
  returnTo: string;
  sections: { heading: string; copy: string }[];
  images?: { src: string; alt: string; width: number; height: number }[];
  logo?: { src: string; alt: string; width: number; height: number };
  tags?: string[];
};

const work: Record<string, Work> = {
  idepl: {
    kind: "Product development · proposed concept",
    title: "Improving Product Development Efficiency at IDEPL",
    subtitle: "A clearer way to track requests, samples and feedback across product development teams.",
    returnTo: "projects",
    sections: [
      { heading: "Project overview", copy: "During my internship with the Product Development team at Indian Designs Export Private Limited (IDEPL), I observed that tracking design requests, coordinating with multiple departments, and following up on sample progress involved information spread across emails, spreadsheets, and direct communication." },
      { heading: "Proposed solution", copy: "The project proposes a centralised, request-based digital platform to streamline product development activities. It would bring tech pack approvals, CAD and marker requests, costing, sample tracking, and buyer feedback together under a unique Style ID. Real-time status updates, automated reminders, and a central dashboard would make progress easier to see and reduce repetitive follow-ups." },
      { heading: "Expected outcome", copy: "The proposed system aims to improve interdepartmental coordination, reduce manual tracking, identify development bottlenecks, and support faster sample development and timely buyer submissions." },
    ],
    images: [
      { src: "/images/work/idepl-dashboard.png", alt: "Concept dashboard showing product development workflow stages and style tracking", width: 922, height: 504 },
      { src: "/images/work/idepl-dashboard-details.png", alt: "Concept screens showing style details, supplier performance and collaboration", width: 922, height: 504 },
    ],
    tags: ["Workflow optimisation", "Digital process management", "Sample tracking", "Cross-functional coordination"],
  },
  "trash-to-trend": {
    kind: "First place · reSPARKle 2025",
    title: "Trash to Trend",
    subtitle: "A first-place fashion project at reSPARKle 2025.",
    returnTo: "projects",
    sections: [
      { heading: "The project", copy: "Trash to Trend was recognised with first place at reSPARKle 2025. These moments from the event show the team receiving the award and the design on the runway." },
    ],
    images: [
      { src: "/images/work/trash-award.png", alt: "Trash to Trend team receiving the first-place award on stage", width: 1280, height: 960 },
      { src: "/images/work/trash-runway.png", alt: "Trash to Trend design on the runway at reSPARKle 2025", width: 591, height: 1280 },
    ],
  },
  "bhargavi-amirineni": {
    kind: "Fashion design & production internship · 2024",
    title: "Working at Bhargavi Amirineni Studio",
    subtitle: "From sourcing and artisan schedules to custom orders and visual content.",
    returnTo: "experience",
    sections: [
      { heading: "The work", copy: "At Bhargavi Amirineni Studio in Hyderabad, I coordinated sourcing, artisan schedules and custom orders. I also contributed to sustainable design work, product photography and social content." },
      { heading: "What I learned", copy: "This role brought together the creative and production sides of fashion, with close attention to people, timing and the details of each order." },
    ],
    logo: { src: "/images/logos/bhargavi.png", alt: "Bhargavi Amirineni logo", width: 625, height: 625 },
  },
  "costume-design": {
    kind: "Assistant costume designer · 2022–2023",
    title: "Costume design for screen",
    subtitle: "Practical styling and continuity work for Ardhamayyindha Arun Kumar.",
    returnTo: "experience",
    sections: [
      { heading: "The work", copy: "Working with Laughing Cow Productions and aha, I managed on-set costume inventory, fittings and continuity across scenes for Ardhamayyindha Arun Kumar." },
      { heading: "On set", copy: "The role required translating creative direction into practical styling decisions while keeping costumes consistent through production." },
    ],
    logo: { src: "/images/logos/aha.png", alt: "aha logo", width: 600, height: 300 },
  },
};

export function generateStaticParams() {
  return Object.keys(work).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = work[slug];
  return item ? { title: `${item.title} | Shreya Sirigireddy`, description: item.subtitle } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = work[slug];
  if (!item) notFound();

  return <main className="work-page">
    <div className="work-page__top section-shell"><Link href={`/#${item.returnTo}`} className="work-page__back">← Back to portfolio</Link><span>SHREYA SIRIGIREDDY / PORTFOLIO 2026</span></div>
    <header className="work-page__hero section-shell"><p className="eyebrow">{item.kind}</p><h1>{item.title}</h1><p className="work-page__subtitle">{item.subtitle}</p></header>
    {item.logo && <div className="work-page__logo section-shell"><Image src={item.logo.src} alt={item.logo.alt} width={item.logo.width} height={item.logo.height} loading="eager" unoptimized /></div>}
    <div className="work-page__content section-shell"><div className="work-page__facts"><span>THE WORK</span><span>{item.kind}</span></div><div className="work-page__sections">{item.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.copy}</p></section>)}</div></div>
    {item.tags && <div className="work-page__tags section-shell">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
    {item.images && <div className={`work-page__gallery section-shell work-page__gallery--${slug}`}>{item.images.map(image => <figure key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 90vw, 70vw" /></figure>)}</div>}
    <footer className="work-page__footer section-shell"><Link href={`/#${item.returnTo}`}>← Back to portfolio</Link><Link href="/#contact">Start a conversation ↗</Link></footer>
  </main>;
}
