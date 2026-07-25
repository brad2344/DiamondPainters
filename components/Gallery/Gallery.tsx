import Image from "next/image";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Gallery.module.css";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Freshly painted bright living room with period cornice detailing",
    label: "Residential Interior — Highgate",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=700&q=80",
    alt: "Elegant hallway with high-gloss painted woodwork and dado rail",
    label: "Hallway & Staircase — Islington",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=700&q=80",
    alt: "Restored sash window with crisp white gloss finish",
    label: "Sash Window Restoration — Hampstead",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    alt: "Venetian polished plaster feature wall in warm neutral tone",
    label: "Venetian Plaster — Muswell Hill",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&q=80",
    alt: "Deep charcoal painted study with bespoke joinery",
    label: "Study & Library — Crouch End",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=80",
    alt: "Period kitchen with hand-painted cabinetry in sage green",
    label: "Kitchen Cabinetry — Finsbury Park",
    span: "wide",
  },
];

export default function Gallery() {
  return (
    <section className={styles.section} id="gallery" aria-label="Our work">
      <div className={styles.inner}>
        <ScrollReveal className={styles.header}>
          <span className="eyebrow">Our Work</span>
          <h2 className="section-headline">
            Projects We&apos;re <em>Proud Of</em>
          </h2>
          <p className={styles.intro}>
            Every job we complete is a testament to the craft and care our team
            brings to each surface. Here&apos;s a selection of recent projects
            across North London.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {PHOTOS.map((photo, i) => (
            <ScrollReveal
              key={i}
              delay={(Math.min((i % 3) + 1, 3)) as 1 | 2 | 3}
              className={`${styles.item} ${photo.span === "wide" ? styles.wide : ""}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  className={styles.photo}
                />
                <div className={styles.overlay}>
                  <span className={styles.label}>{photo.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className={styles.cta}>
          <p className={styles.ctaText}>
            Want to see your project here? We photograph every completed job.
          </p>
          <a href="#contact" className="btn-outline">
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
