"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Gallery.module.css";

const CDN = "https://imagecdn.websitebuilder.prositehosting.co.uk";

const ALL_PHOTOS = [
  { id: "f475f7cd-6eeb-4998-81f2-374a35956a27", ext: "jpg",  cat: "Interior" },
  { id: "9108248d-8403-4238-8093-f28b06fb3f9e", ext: "jpg",  cat: "Interior" },
  { id: "ad23a571-c312-495b-a93d-017b51de6ad2", ext: "jpg",  cat: "Interior" },
  { id: "a7ce8226-4d12-40a1-bdc0-7984cd07bfb3", ext: "jpg",  cat: "Exterior" },
  { id: "a9d8a828-7ec8-462c-b4c5-22545f7760b3", ext: "jpg",  cat: "Interior" },
  { id: "42ad7c8f-bbe3-41f2-b12e-962a715296dc", ext: "jpg",  cat: "Exterior" },
  { id: "cf7de615-aa4d-4c24-a92b-ac1e60369932", ext: "jpg",  cat: "Interior" },
  { id: "4d18ad17-8015-402f-870c-3b78ae691af8", ext: "jpg",  cat: "Woodwork" },
  { id: "f3b906d0-4913-4ad3-869a-5816f5da5d0f", ext: "jpg",  cat: "Interior" },
  { id: "3e373722-d993-4c5c-b371-78e5d1da1fdb", ext: "jpg",  cat: "Interior" },
  { id: "85251d65-b36d-4661-a290-b7a03e2e1c21", ext: "jpeg", cat: "Interior" },
  { id: "b232e36a-971d-42f3-b633-f26ada3d3cd1", ext: "jpeg", cat: "Exterior" },
  { id: "03853eb9-3ebb-437c-8b6f-3142dfb9a25b", ext: "jpeg", cat: "Sash Windows" },
  { id: "b4d8c55b-c8dc-4adb-96ad-f86db2993f11", ext: "jpeg", cat: "Sash Windows" },
  { id: "8e6b33b2-3691-4dad-b575-981b372f79fc", ext: "jpeg", cat: "Interior" },
  { id: "c6c42bad-8a92-49fd-81a8-5d8aa28ac39a", ext: "jpeg", cat: "Interior" },
  { id: "fd144c44-9bdd-46e3-a92b-2c6c31149963", ext: "jpeg", cat: "Exterior" },
  { id: "16353fda-5043-45fb-8db9-188a8ca02ffd", ext: "jpeg", cat: "Interior" },
  { id: "10afde99-4f01-484d-adcb-fe98cf60d031", ext: "jpeg", cat: "Woodwork" },
  { id: "4ebb2667-9313-4ea2-94bc-eb5ff752774b", ext: "jpeg", cat: "Interior" },
  { id: "7ee60576-db2e-4bf4-bb30-886438352154", ext: "jpeg", cat: "Interior" },
  { id: "d69dac76-6e33-489f-9fa7-d84353ddc0f6", ext: "jpeg", cat: "Exterior" },
  { id: "6e04aa03-de35-4dd4-8281-165dc3f30de6", ext: "jpeg", cat: "Interior" },
  { id: "2bb2780b-f650-4fbc-b2d0-e44ad369f509", ext: "jpeg", cat: "Sash Windows" },
  { id: "2df8dee8-f0ae-42fa-b680-64a9267ad905", ext: "jpeg", cat: "Interior" },
  { id: "551a66b0-ae5a-42bc-a8c1-c4f325a516b4", ext: "jpeg", cat: "Interior" },
  { id: "aa1b5c6a-a182-4dd3-975d-6ed0f29313fc", ext: "jpeg", cat: "Woodwork" },
  { id: "b4056db0-72ef-439a-84d3-bc9903a44f15", ext: "jpeg", cat: "Interior" },
  { id: "e323d6f5-b365-4a30-9873-2ceef03703f1", ext: "jpeg", cat: "Exterior" },
  { id: "e9e0e5d3-2849-4dc6-adad-3c4a984995a9", ext: "jpeg", cat: "Interior" },
  { id: "9132c9fb-0f4e-4429-bb75-cb032fefa581", ext: "jpeg", cat: "Interior" },
  { id: "b6aaf9f7-d75f-4a91-ae53-eea1b356cb25", ext: "jpeg", cat: "Sash Windows" },
  { id: "2ec78409-b0a9-432b-b6c9-24ca16e5f6e7", ext: "jpeg", cat: "Interior" },
  { id: "fdb1bfae-1ac9-46ce-a535-be2924f20cc2", ext: "jpeg", cat: "Woodwork" },
  { id: "e1488e42-cce8-47ae-93d1-428702740c05", ext: "jpeg", cat: "Interior" },
  { id: "c410412b-43d1-4879-9a72-b3b752b4874e", ext: "jpeg", cat: "Exterior" },
  { id: "85505283-f89d-4709-860e-a3020b8725ab", ext: "jpeg", cat: "Interior" },
  { id: "06330646-0fb9-4b8c-b86e-807e239350ba", ext: "jpeg", cat: "Interior" },
  { id: "bcbaa6b4-f26c-49e7-b271-355f7366a8ff", ext: "jpeg", cat: "Exterior" },
  { id: "d2ab54c5-0bea-49d2-8d6e-4a4cb58cc364", ext: "jpeg", cat: "Interior" },
  { id: "d5d3db2b-3d81-4b58-9e8a-64b7f05cb8f4", ext: "jpeg", cat: "Woodwork" },
  { id: "e04ab258-ebf9-4f09-b947-d2e8560d00a3", ext: "jpeg", cat: "Interior" },
  { id: "edbfe58c-b9bd-4290-8caa-4ebbefead8e3", ext: "jpeg", cat: "Interior" },
  { id: "501884cf-3fc5-46c1-b60d-f95608be0af2", ext: "jpeg", cat: "Sash Windows" },
  { id: "4d7dfb50-f5c2-4024-bbd4-b4dad5976eac", ext: "jpeg", cat: "Interior" },
  { id: "c016d960-8c54-4427-bd97-2abd085165e6", ext: "jpeg", cat: "Exterior" },
  { id: "5f0df231-2a5b-40b0-9968-69217fbd9e5d", ext: "jpeg", cat: "Interior" },
  { id: "9195d705-f08d-4551-98d2-18a945a795a1", ext: "jpeg", cat: "Interior" },
  { id: "e6a8f8c4-8deb-4593-b139-639d721532f6", ext: "jpg",  cat: "Exterior" },
];

const FILTERS = ["All", "Interior", "Exterior", "Sash Windows", "Woodwork"];

function photoUrl(p: { id: string; ext: string }) {
  const prefix = p.id.slice(0, 2) + "/" + p.id.slice(2, 4);
  return `${CDN}/${prefix}/${p.id}.${p.ext}`;
}

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = active === "All"
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter((p) => p.cat === active);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
  }, [visible.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % visible.length));
  }, [visible.length]);

  return (
    <section className={styles.section} id="gallery" aria-label="Our work gallery">
      <div className={styles.inner}>
        <ScrollReveal className={styles.header}>
          <span className="eyebrow">Our Work</span>
          <h2 className="section-headline">
            Projects We&apos;re <em>Proud Of</em>
          </h2>
          <p className={styles.intro}>
            Every job tells a story. Browse our portfolio of completed projects
            across North London — from period hallways to sash window restorations.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <div className={styles.filters} role="tablist" aria-label="Filter gallery by type">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`${styles.filter} ${active === f ? styles.filterActive : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
              {active === f && (
                <span className={styles.filterCount}>
                  {f === "All" ? ALL_PHOTOS.length : ALL_PHOTOS.filter(p => p.cat === f).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className={styles.grid} role="list">
          {visible.map((photo, i) => (
            <button
              key={photo.id}
              className={styles.cell}
              onClick={() => openLightbox(i)}
              aria-label={`View ${photo.cat} photo ${i + 1} in full screen`}
              role="listitem"
            >
              <div className={styles.imageWrap}>
                <Image
                  src={photoUrl(photo)}
                  alt={`${photo.cat} work by Kami Decorators`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  className={styles.photo}
                  loading="lazy"
                />
                <div className={styles.cellOverlay} aria-hidden="true">
                  <span className={styles.cellCat}>{photo.cat}</span>
                  <svg className={styles.cellIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <ScrollReveal className={styles.cta}>
          <p className={styles.ctaText}>
            &ldquo;Ready to transform your property?&rdquo;
          </p>
          <a href="#contact" className="btn-primary">
            Get a Free Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={closeLightbox}
        >
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close lightbox">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={prev} aria-label="Previous photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className={styles.lbImage}>
              <Image
                src={photoUrl(visible[lightbox])}
                alt={`${visible[lightbox].cat} work by Kami Decorators`}
                fill
                sizes="90vw"
                className={styles.lbPhoto}
                priority
              />
            </div>

            <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={next} aria-label="Next photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <div className={styles.lbMeta}>
              <span className={styles.lbCat}>{visible[lightbox].cat}</span>
              <span className={styles.lbCount}>{lightbox + 1} / {visible.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
