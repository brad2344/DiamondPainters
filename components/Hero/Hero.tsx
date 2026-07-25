import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.left}>
        <span className="eyebrow" style={{ marginBottom: "1.5rem" }}>
          North London&apos;s Premier Decorators
        </span>

        <h1 className={styles.headline}>
          The Art of<br />
          Immaculate{" "}
          <em className={styles.italic}>Interiors</em>
        </h1>

        <p className={styles.sub}>
          Kami Decorators delivers museum-grade finishing for London&apos;s most
          discerning homes and businesses. From Belgravia drawing rooms to
          Chelsea townhouses — every surface, perfected.
        </p>

        <div className={styles.ctas}>
          <a href="#contact" className="btn-primary">
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#services" className="btn-outline">
            Our Services
          </a>
        </div>

        <div className={styles.discoverHint} aria-hidden="true">
          <span className={styles.discoverLine} />
          <span className={styles.discoverText}>Discover</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageWrap}>
          <Image
            src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=1200&q=85"
            alt="Elegant painted interior room with period detailing"
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            priority
            className={styles.photo}
          />
          <div className={styles.gradient} aria-hidden="true" />
        </div>

        <div className={styles.badge} aria-label="Decorators, London">
          <svg viewBox="0 0 120 120" className={styles.badgeSvg} aria-hidden="true">
            <defs>
              <path
                id="circlePath"
                d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            <text className={styles.badgeText}>
              <textPath href="#circlePath" startOffset="0%">
                DECORATORS · LONDON · KAMI ·
              </textPath>
            </text>
            <circle cx="60" cy="60" r="6" className={styles.badgeDot} />
          </svg>
        </div>
      </div>
    </section>
  );
}
