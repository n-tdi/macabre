import Image from "next/image";

import menuItems from "@/public/coursel/meta.json";

import Header from "./header";
import styles from "./page.module.css";
import {
  email,
  instagramUrl,
  legalName,
  siteDescription,
  siteName,
  siteUrl,
} from "./site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      legalName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      description: siteDescription,
      email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email,
      },
      sameAs: [instagramUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: "Macabre and Cheese",
      description: siteDescription,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r=".8" className={styles.iconDot} />
    </svg>
  );
}

function MoonMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120">
      <path d="M72 20c-23 6-36 32-27 54 8 22 31 33 51 25-10 13-25 21-42 21C24 120 0 95 0 65S24 10 54 10c6 0 12 1 18 3Z" />
      <path d="m90 26 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Zm20 29 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <a className={styles.skipLink} href="#creations">
        Skip to our creations
      </a>

      <Header />

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <svg
            className={styles.noodleVine}
            aria-hidden="true"
            viewBox="0 0 720 220"
            preserveAspectRatio="none"
          >
            <path d="M-10 145c88-18 96-91 171-88 76 4 53 105 125 109 70 4 75-121 149-113 77 9 41 119 121 115 64-3 75-71 174-81" />
            <path d="M112 72c-25-9-44-2-55 19 29 7 48 1 55-19Zm392 80c25 8 43 0 53-22-29-5-47 2-53 22Z" />
          </svg>

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 id="hero-title" className={styles.heroTitle}>
                <span>Macabre</span>
                <em>&amp;</em>
                <span>Cheese</span>
              </h1>

              <p className={styles.tagline}>Eat your feelings. Feed your shadows.</p>

              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#creations">
                  Browse the creations <ArrowIcon />
                </a>
                <a className={styles.textButton} href={`mailto:${email}`}>
                  <MailIcon /> Email the coven
                </a>
              </div>
            </div>

            <div className={styles.seal} aria-hidden="true">
              <div className={styles.sealOrbit} />
              <div className={styles.sealCenter}>
                <MoonMark />
                <span>Arriving</span>
                <strong>Soon</strong>
              </div>
            </div>
          </div>

          <a className={styles.scrollCue} href="#creations">
            <span>Meet the menu</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className={styles.creations} id="creations" aria-labelledby="creations-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionKicker}>A taste of what&apos;s to come</p>
              <h2 id="creations-title">From the cauldron</h2>
            </div>
            <p className={styles.sectionIntro}>
              We&apos;re coming soon. Here&apos;s a first look at the menu.
            </p>
          </div>

          <div className={styles.carouselWrap}>
            <div
              className={styles.carousel}
              role="region"
              aria-label="Featured creations"
              tabIndex={0}
            >
              {menuItems.map((item, index) => (
                <article
                  className={styles.menuCard}
                  id={`creation-${index + 1}`}
                  key={item.title}
                >
                  <Image
                    className={styles.menuImage}
                    src={`/${item.image.replace(/^public\//, "")}`}
                    alt={`${item.title}, one of the featured Macabre and Cheese creations`}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 390px"
                    priority={index === 0}
                  />
                  <div className={styles.cardShade} />
                  <div className={styles.cardContent}>
                    <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className={styles.cardType}>
                    {index < 2 ? "Cheesecake" : "Mac & cheese"}
                  </span>
                </article>
              ))}
            </div>

            <div className={styles.carouselMeta}>
              <p>
                <span aria-hidden="true">↔</span> Swipe or drag to explore
              </p>
              <nav className={styles.carouselDots} aria-label="Choose a featured creation">
                {menuItems.map((item, index) => (
                  <a href={`#creation-${index + 1}`} key={item.title}>
                    <span className={styles.srOnly}>View {item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactOrnament} aria-hidden="true">
            <span />
            <MoonMark />
            <span />
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <p className={styles.sectionKicker}>Stay close to the shadows</p>
              <h2 id="contact-title">Be there for the first bite.</h2>
            </div>

            <div className={styles.contactDetails}>
              <p>
                The truck is still coming soon. Send us a note for launch news,
                future bookings, or to simply say hello!
              </p>
              <a className={styles.emailLink} href={`mailto:${email}`}>
                <span>
                  <small>Email us</small>
                  {email}
                </span>
                <ArrowIcon />
              </a>
              <a
                className={styles.socialLink}
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon /> @macabreandcheesetruck
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <a className={styles.footerBrand} href="#top">
            Macabre <i>&amp;</i> Cheese
          </a>
          <p>Eat your feelings. Feed your shadows.</p>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Macabre &amp; Cheese LLC</p>
          <div>
            <a href={`mailto:${email}`}>Email</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
