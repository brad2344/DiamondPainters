import Image from "next/image";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Philosophy.module.css";

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "£5M", label: "Liability Cover" },
];

const POSTCODES = ["N1", "N4", "N5", "N6", "N8", "N10", "NW3", "NW5", "NW6", "NW8"];

export default function Philosophy() {
  return (
    <section className={styles.section} id="about" aria-label="About Kami Decorators">
      <div className={styles.grid}>
        <ScrollReveal className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Professional painter rolling paint onto a wall"
              fill
              sizes="(max-width: 960px) 100vw, 45vw"
              className={styles.photo}
            />
            <span className={styles.cornerTL} aria-hidden="true" />
            <span className={styles.cornerBR} aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal>
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="section-headline">
              Built on Craft<br />and <em>Reputation</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className={styles.stats}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className={styles.body}>
              Founded over two decades ago by master decorators who believed that
              painting was an art form — not a trade. Kami Decorators has grown
              into one of North London&apos;s most trusted names, serving
              private residences, luxury developers, and heritage properties.
            </p>
            <p className={styles.body}>
              We combine time-honoured technique with the very best modern
              materials — including premium low-VOC eco paints — to deliver
              finishes that are as beautiful a decade from now as they are on the
              day we complete them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p className={styles.coverage}>
              <span className={styles.coverageLabel}>Areas served</span>
              <span className={styles.postcodes}>
                {POSTCODES.join("  ·  ")} and surrounding London areas
              </span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <a href="#contact" className="btn-outline" style={{ marginTop: "0.5rem" }}>
              Discuss Your Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
