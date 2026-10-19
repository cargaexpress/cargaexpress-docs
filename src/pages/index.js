import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const areas = [
  {title: 'Project and business context', text: 'Understand the 3PL operating model, scope, and business goals.', to: '/docs/project/business-context'},
  {title: 'Requirements and canonical states', text: 'Review shipment states, business rules, and requirement traceability.', to: '/docs/requirements/canonical-states'},
  {title: 'Architecture and integrations', text: 'Explore system boundaries, data keys, ingestion patterns, and the Type B simulator.', to: '/docs/architecture/overview'},
  {title: 'Sprint documentation', text: 'Follow the documented Sprint 1 and Sprint 3 scope and delivery status.', to: '/docs/sprints/overview'},
];

export default function Home() {
  return (
    <Layout title="Project Documentation" description="CargaExpress Supply Chain project documentation">
      <header className={`hero hero--primary ${styles.heroBanner}`}>
        <div className="container">
          <Heading as="h1" className="hero__title">CargaExpress Supply Chain</Heading>
          <p className="hero__subtitle">Shipment visibility, carrier integration, and logistics operations</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">Explore the documentation</Link>
          </div>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <p>
          Project documentation for a third-party logistics environment connecting brands, distribution centers,
          and carriers through a consistent shipment-status model. The site separates approved requirements,
          target architecture, and implementation status.
        </p>
        <div className="row">
          {areas.map((area) => (
            <div className="col col--6 margin-bottom--lg" key={area.title}>
              <div className="card h-100">
                <div className="card__header"><Heading as="h2">{area.title}</Heading></div>
                <div className="card__body"><p>{area.text}</p></div>
                <div className="card__footer"><Link className="button button--primary button--block" to={area.to}>Open section</Link></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
