import styles from "./ReviewBar.module.css";

export default function ReviewBar() {
  return (
    <section className={styles.bar} aria-label="Customer review">
      <div className={styles.inner}>
        <div className={styles.stars} aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="var(--ink)"
                stroke="var(--ink)"
              />
            </svg>
          ))}
        </div>

        <blockquote className={styles.quote}>
          &ldquo;Absolutely exceptional. The finish on our Belgravia drawing room
          is flawless — they matched a heritage Farrow &amp; Ball shade perfectly
          and the preparation work was meticulous. I would not use anyone else
          in London.&rdquo;
        </blockquote>

        <a
          href="https://g.co/kgs/Lvjuo7P"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.attr}
          aria-label="Verified Google Review — opens in a new tab"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6.292l5.76-5.76-1.414-1.414-4.346 4.346-2.051-2.051-1.414 1.414 3.465 3.465z" fill="currentColor"/>
          </svg>
          Verified Google Review
        </a>
      </div>
    </section>
  );
}
