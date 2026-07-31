import Image from "next/image";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Sash.module.css";

const FEATURES = [
  "Full strip-back and sanding of existing paintwork",
  "Timber repairs and putty replacement where required",
  "Two-coat primer and three-coat top finish",
  "Draught-sealing and smooth sash operation restored",
  "Perfect colour-matched to existing or new specification",
];

export default function Sash() {
  return (
    <section className={styles.section} id="sash" aria-label="Sash window restoration">
      <div className={styles.grid}>
        <ScrollReveal className={styles.imageGrid}>
          <div className={styles.imgTop}>
            <Image
              src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=900&q=80"
              alt="Freshly restored white timber sash window on a London period townhouse"
              fill
              sizes="(max-width: 960px) 100vw, 40vw"
              className={styles.photo}
            />
          </div>
          <div className={styles.imgBL}>
            <Image
              src="https://images.unsplash.com/photo-1503594384566-461fe158e797?w=600&q=80"
              alt="Close-up of sash window detail with freshly applied gloss finish"
              fill
              sizes="(max-width: 960px) 50vw, 20vw"
              className={styles.photo}
            />
          </div>
          <div className={styles.imgBR}>
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
              alt="Interior view of restored sash window in period living room"
              fill
              sizes="(max-width: 960px) 50vw, 20vw"
              className={styles.photo}
            />
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal>
            <span className="eyebrow">Specialists</span>
            <h2 className="section-headline">
              Window <em>Restoration</em>
            </h2>
            <p className={styles.body}>
              London&apos;s Victorian and Georgian sash windows are architectural
              treasures. We restore them to their original glory — stripping
              decades of built-up paint, repairing timber, and applying a
              flawless hand-finished coat that will last years without peeling
              or cracking.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <ul className={styles.checklist} aria-label="Sash window restoration features">
              {FEATURES.map((f) => (
                <li key={f} className={styles.checkItem}>
                  <span className={styles.tick} aria-hidden="true">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M1 6l4 4 10-9" stroke="var(--gilt2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <a href="#contact" className="btn-primary">
              Request a Survey
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
