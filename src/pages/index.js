
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const sections = [
  {
    icon: '📦',
    title: 'Project Overview',
    description:
      'Understand the CargaExpress business context, objectives, scope, and functional requirements.',
    link: '/docs/intro',
    label: 'Explore project',
  },
  {
    icon: '🏗️',
    title: 'Architecture',
    description:
      'Explore the system architecture, components, data model, and technical design.',
    link: '/docs/architecture/architecture-overview',
    label: 'View architecture',
  },
  {
    icon: '🧭',
    title: 'Architecture Decisions',
    description:
      'Review the architectural decisions and the reasoning behind the selected solutions.',
    link: '/docs/architecture/architecture-decisions',
    label: 'View decisions',
  },
  {
    icon: '🚀',
    title: 'Sprint Plan',
    description:
      'Navigate the project sprints, planned work, deliverables, and implementation progress.',
    link: '/docs/sprints/sprint-overview',
    label: 'Explore sprints',
  },
];

function HomePage() {
  return (
    <Layout
      title="Supply Chain Documentation"
      description="Technical documentation for the CargaExpress Supply Chain Control Tower."
    >
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              SUPPLY CHAIN · TECHNICAL DOCUMENTATION
            </span>

            <h1>
              CargaExpress
              <span className={styles.heroAccent}> Control Tower</span>
            </h1>

            <p className={styles.heroDescription}>
              A central knowledge hub for shipment visibility, carrier
              integration, logistics operations, and system architecture.
            </p>

            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Explore documentation <span aria-hidden="true">→</span>
              </Link>

              <Link className={styles.secondaryButton} to="/docs/sprints/sprint-overview">
                View sprint plan
              </Link>
            </div>

            <div className={styles.heroNote}>
              <span className={styles.statusDot} />
              Project documentation and technical reference
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <span className={styles.visualDot} />
                <span className={styles.visualDot} />
                <span className={styles.visualDot} />
                <span className={styles.visualLabel}>CONTROL TOWER</span>
              </div>

              <div className={styles.visualPackage}>📦</div>
              <div className={styles.visualLine} />
              <div className={styles.visualLineShort} />

              <div className={styles.visualFooter}>
                <span>SHIPMENT VISIBILITY</span>
                <span className={styles.visualArrow}>↗</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.resources}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>KNOWLEDGE CENTER</span>
              <h2>Explore the project</h2>
              <p>
                Access the main areas of the CargaExpress documentation.
              </p>
            </div>
            <span className={styles.resourceCount}>04 RESOURCES</span>
          </div>

          <div className={styles.cardGrid}>
            {sections.map((section) => (
              <article className={styles.resourceCard} key={section.title}>
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {section.icon}
                  </span>
                  <span className={styles.cardArrow} aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h3>{section.title}</h3>
                <p>{section.description}</p>

                <Link className={styles.cardLink} to={section.link}>
                  {section.label} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bottomBanner}>
          <div>
            <span className={styles.sectionEyebrow}>BUILT FOR CLARITY</span>
            <h2>One project. One knowledge hub.</h2>
            <p>
              Find the technical context you need to understand the platform
              and follow its implementation.
            </p>
          </div>
          <Link className={styles.bannerLink} to="/docs/intro">
            Get started →
          </Link>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
