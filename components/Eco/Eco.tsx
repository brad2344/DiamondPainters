import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Eco.module.css";

const TAGS = ["Low VOC", "Eco-Certified", "Sustainable Sourcing", "Child & Pet Safe"];

export default function Eco() {
  return (
    <section className={styles.section} aria-label="Our eco pledge">
      <div className={styles.inner}>
        <ScrollReveal className={styles.emblem} aria-hidden="true">
          <div className={styles.emblemOuter}>
            <div className={styles.emblemInner}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path
                  d="M20 4C12 4 6 12 6 20c0 4 2 7 5 9 0-4 2-9 9-12-7 3-9 8-9 12 3 2 6 3 9 3 8 0 14-6 14-14 0-6-4-11-9-12-1 3-2 6-5 8 4-1 7-4 8-7-1-1-2-3-3-3z"
                  fill="var(--gilt)"
                  opacity="0.9"
                />
              </svg>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.copy}>
          <ScrollReveal>
            <h2 className={styles.headline}>
              Kinder to your home.<br />
              Kinder to the <em className={styles.em}>planet.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p className={styles.body}>
              We exclusively use paints from our approved eco-certified suppliers —
              all carrying low or zero VOC formulations. Better for the air
              quality in your home, safer for children and pets, and gentler on
              the environment without any compromise on colour depth or durability.
            </p>
            <p className={styles.body}>
              Our waste minimisation programme ensures unused paint is recycled
              or responsibly disposed of, and all packaging is separated for
              collection. A beautiful finish that you can feel good about.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <ul className={styles.tags} aria-label="Eco credentials">
              {TAGS.map((t) => (
                <li key={t} className={styles.tag}>{t}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
