import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Diamond Painters</span>
          <sup className={styles.logoSup}>Ltd</sup>
        </div>

        <p className={styles.copy}>
          &copy; {year} Diamond Painters Ltd. All rights reserved.{" "}
          <span className={styles.reg}>Registered in England &amp; Wales.</span>
        </p>

        <a href="mailto:info@diamondpainters.co.uk" className={styles.email}>
          info@diamondpainters.co.uk
        </a>
      </div>
    </footer>
  );
}
