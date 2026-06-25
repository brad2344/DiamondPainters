import styles from "./Strip.module.css";

const ITEMS = [
  "Interior Painting",
  "Exterior Painting",
  "Commercial Decorating",
  "Sash Window Restoration",
  "Venetian Plastering",
  "Woodwork Finishing",
  "Eco-Friendly Paints",
];

const SEPARATOR = (
  <span className={styles.sep} aria-hidden="true">◆</span>
);

export default function Strip() {
  const allItems = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className={styles.strip} aria-label="Services offered">
      <div className={styles.track}>
        {allItems.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            {SEPARATOR}
          </span>
        ))}
      </div>
    </div>
  );
}
