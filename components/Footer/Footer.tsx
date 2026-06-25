import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Kami Decorators</span>
          <sup className={styles.logoSup}>Ltd</sup>
        </div>

        <p className={styles.copy}>
          &copy; {year} Kami Decorators Ltd. All rights reserved.{" "}
          <span className={styles.reg}>Registered in England &amp; Wales.</span>
        </p>

        <a href="mailto:info@kamidecorators.co.uk" className={styles.email}>
          info@kamidecorators.co.uk
        </a>
      </div>
    </footer>
  );
}
