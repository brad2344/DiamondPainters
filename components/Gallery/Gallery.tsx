"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Gallery.module.css";

const CDN = "https://imagecdn.websitebuilder.prositehosting.co.uk";

const PHOTOS = [
  { id: "f475f7cd-6eeb-4998-81f2-374a35956a27", ext: "jpg" },
  { id: "9108248d-8403-4238-8093-f28b06fb3f9e", ext: "jpg" },
  { id: "ad23a571-c312-495b-a93d-017b51de6ad2", ext: "jpg" },
  { id: "a7ce8226-4d12-40a1-bdc0-7984cd07bfb3", ext: "jpg" },
  { id: "a9d8a828-7ec8-462c-b4c5-22545f7760b3", ext: "jpg" },
  { id: "42ad7c8f-bbe3-41f2-b12e-962a715296dc", ext: "jpg" },
  { id: "cf7de615-aa4d-4c24-a92b-ac1e60369932", ext: "jpg" },
  { id: "4d18ad17-8015-402f-870c-3b78ae691af8", ext: "jpg" },
  { id: "f3b906d0-4913-4ad3-869a-5816f5da5d0f", ext: "jpg" },
  { id: "3e373722-d993-4c5c-b371-78e5d1da1fdb", ext: "jpg" },
  { id: "85251d65-b36d-4661-a290-b7a03e2e1c21", ext: "jpeg" },
  { id: "b232e36a-971d-42f3-b633-f26ada3d3cd1", ext: "jpeg" },
  { id: "03853eb9-3ebb-437c-8b6f-3142dfb9a25b", ext: "jpeg" },
  { id: "b4d8c55b-c8dc-4adb-96ad-f86db2993f11", ext: "jpeg" },
  { id: "8e6b33b2-3691-4dad-b575-981b372f79fc", ext: "jpeg" },
  { id: "c6c42bad-8a92-49fd-81a8-5d8aa28ac39a", ext: "jpeg" },
  { id: "fd144c44-9bdd-46e3-a92b-2c6c31149963", ext: "jpeg" },
  { id: "10afde99-4f01-484d-adcb-fe98cf60d031", ext: "jpeg" },
  { id: "4ebb2667-9313-4ea2-94bc-eb5ff752774b", ext: "jpeg" },
  { id: "7ee60576-db2e-4bf4-bb30-886438352154", ext: "jpeg" },
  { id: "d69dac76-6e33-489f-9fa7-d84353ddc0f6", ext: "jpeg" },
  { id: "6e04aa03-de35-4dd4-8281-165dc3f30de6", ext: "jpeg" },
  { id: "2bb2780b-f650-4fbc-b2d0-e44ad369f509", ext: "jpeg" },
  { id: "2df8dee8-f0ae-42fa-b680-64a9267ad905", ext: "jpeg" },
  { id: "551a66b0-ae5a-42bc-a8c1-c4f325a516b4", ext: "jpeg" },
  { id: "aa1b5c6a-a182-4dd3-975d-6ed0f29313fc", ext: "jpeg" },
  { id: "b4056db0-72ef-439a-84d3-bc9903a44f15", ext: "jpeg" },
  { id: "e323d6f5-b365-4a30-9873-2ceef03703f1", ext: "jpeg" },
  { id: "e9e0e5d3-2849-4dc6-adad-3c4a984995a9", ext: "jpeg" },
  { id: "9132c9fb-0f4e-4429-bb75-cb032fefa581", ext: "jpeg" },
  { id: "b6aaf9f7-d75f-4a91-ae53-eea1b356cb25", ext: "jpeg" },
  { id: "fdb1bfae-1ac9-46ce-a535-be2924f20cc2", ext: "jpeg" },
  { id: "e1488e42-cce8-47ae-93d1-428702740c05", ext: "jpeg" },
  { id: "c410412b-43d1-4879-9a72-b3b752b4874e", ext: "jpeg" },
  { id: "85505283-f89d-4709-860e-a3020b8725ab", ext: "jpeg" },
  { id: "06330646-0fb9-4b8c-b86e-807e239350ba", ext: "jpeg" },
  { id: "bcbaa6b4-f26c-49e7-b271-355f7366a8ff", ext: "jpeg" },
  { id: "d2ab54c5-0bea-49d2-8d6e-4a4cb58cc364", ext: "jpeg" },
  { id: "d5d3db2b-3d81-4b58-9e8a-64b7f05cb8f4", ext: "jpeg" },
  { id: "e04ab258-ebf9-4f09-b947-d2e8560d00a3", ext: "jpeg" },
  { id: "edbfe58c-b9bd-4290-8caa-4ebbefead8e3", ext: "jpeg" },
  { id: "501884cf-3fc5-46c1-b60d-f95608be0af2", ext: "jpeg" },
  { id: "4d7dfb50-f5c2-4024-bbd4-b4dad5976eac", ext: "jpeg" },
  { id: "c016d960-8c54-4427-bd97-2abd085165e6", ext: "jpeg" },
  { id: "5f0df231-2a5b-40b0-9968-69217fbd9e5d", ext: "jpeg" },
];

function photoUrl(p: { id: string; ext: string }) {
  const prefix = p.id.slice(0, 2) + "/" + p.id.slice(2, 4);
  return `${CDN}/${prefix}/${p.id}.${p.ext}`;
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.75;
    track.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length)), []);

  const next = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i + 1) % PHOTOS.length)), []);

  return (
    <section className={styles.section} id="gallery" aria-label="Our work gallery">
      <div className={styles.inner}>
        <ScrollReveal className={styles.header}>
          <span className="eyebrow">Our Work</span>
          <h2 className="section-headline">
            Projects We&apos;re <em>Proud Of</em>
          </h2>
          <p className={styles.intro}>
            Browse our portfolio of completed projects across North London —
            from period hallways to sash window restorations.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className={styles.carouselWrap}>
          <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={() => scroll("prev")} aria-label="Previous photos">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className={styles.track} ref={trackRef}>
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.id}
                className={styles.slide}
                onClick={() => setLightbox(i)}
                aria-label={`View photo ${i + 1}`}
              >
                <div className={styles.slideInner}>
                  <Image
                    src={photoUrl(photo)}
                    alt={`Kami Decorators project ${i + 1}`}
                    fill
                    sizes="(max-width: 600px) 80vw, (max-width: 960px) 45vw, 30vw"
                    className={styles.photo}
                    loading="lazy"
                  />
                  <div className={styles.slideOverlay} aria-hidden="true">
                    <svg className={styles.expandIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7"/>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={() => scroll("next")} aria-label="Next photos">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <ScrollReveal className={styles.cta}>
          <p className={styles.ctaText}>&ldquo;Ready to transform your property?&rdquo;</p>
          <a href="#contact" className="btn-primary">
            Get a Free Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className={styles.lbImage}>
              <Image
                src={photoUrl(PHOTOS[lightbox])}
                alt={`Kami Decorators project ${lightbox + 1}`}
                fill
                sizes="90vw"
                className={styles.lbPhoto}
                priority
              />
            </div>
            <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div className={styles.lbMeta}>
              <span className={styles.lbCount}>{lightbox + 1} / {PHOTOS.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
