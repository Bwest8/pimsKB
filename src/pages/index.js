import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.textBackdrop}>
            <Heading as="h1" className={styles.hero__title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Resources for PIMS">
      <HomepageHeader />
    </Layout>
  );
}
