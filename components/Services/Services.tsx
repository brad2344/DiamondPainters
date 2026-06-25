import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Services.module.css";

const SERVICES = [
  {
    roman: "I",
    name: "Residential Decorating",
    description:
      "Bespoke interior and exterior painting for private homes. From single rooms to complete refurbishments, executed with absolute precision.",
  },
  {
    roman: "II",
    name: "Commercial Painting",
    description:
      "Offices, retail spaces, and hospitality venues across Central London. We work around your schedule to minimise disruption.",
  },
  {
    roman: "III",
    name: "Plastering & Repair",
    description:
      "Fine skimming, patch repairs, and full re-plastering. Our decorators restore damaged walls and ceilings to a flawless finish.",
  },
  {
    roman: "IV",
    name: "Woodwork Finishing",
    description:
      "Doors, architraves, skirting boards, and staircases brought back to life. Hand-applied eggshell and gloss finishes.",
  },
  {
    roman: "V",
    name: "Sash Window Restoration",
    description:
      "London&apos;s finest sash window specialists. We strip, repair, prime, and repaint to original specification — preserving heritage character.",
  },
  {
    roman: "VI",
    name: "Venetian Plaster",
    description:
      "Luxurious polished plaster surfaces applied by certified artisans. The ultimate statement finish for living rooms and entrance halls.",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services" aria-label="Our services">
      <div className={styles.inner}>
        <ScrollReveal className={styles.header}>
          <span className="eyebrow">What We Do</span>
          <h2 className="section-headline">
            A Complete Decorating <em>Service</em>
          </h2>
          <p className={styles.intro}>
            Every project is personally managed from first survey to final brush
            stroke. No subcontractors. No surprises.
          </p>
        </ScrollReveal>

        <div className={styles.list} role="list">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.roman} delay={(Math.min(i + 1, 5)) as 1 | 2 | 3 | 4 | 5}>
              <div className={styles.row} role="listitem">
                <span className={styles.roman} aria-hidden="true">{s.roman}</span>
                <div className={styles.rowContent}>
                  <h3 className={styles.serviceName}>{s.name}</h3>
                  <p
                    className={styles.serviceDesc}
                    dangerouslySetInnerHTML={{ __html: s.description }}
                  />
                </div>
                <span className={styles.arrow} aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M14 20h12M20 14l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
