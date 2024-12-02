import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { Database, BarChart3, Users, School } from "lucide-react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero", "py-16 lg:py-24")}
      style={{ backgroundColor: "#1e40af" }}
    >
      <div className="container">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-[800px]">
            <Heading
              as="h1"
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              {siteConfig.title}
            </Heading>
            <p
              className="text-xl md:text-2xl font-['InterVariable']"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              {siteConfig.tagline}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              className="button button--lg button--primary"
              style={{
                backgroundColor: "#ffffff",
                color: "#1e40af",
                borderColor: "#ffffff",
              }}
              to="/docs/intro"
            >
              Get Started
            </Link>
            <Link
              className="button button--lg button--outline"
              style={{
                color: "#ffffff",
                borderColor: "#ffffff",
              }}
              to="/docs/templates"
            >
              View Templates
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--ifm-background-color)" }}
    >
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="flex flex-col items-start p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--ifm-card-background-color)" }}
          >
            <div
              className="p-2 rounded-lg mb-4"
              style={{ backgroundColor: "#dbeafe" }}
            >
              <Database className="w-6 h-6" style={{ color: "#1e40af" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-['InterVariable']">
              Data Management
            </h3>
            <p
              className="font-['InterVariable']"
              style={{ color: "var(--ifm-color-emphasis-700)" }}
            >
              Efficiently store and manage data using the eScholar data
              warehouse model with standardized templates.
            </p>
          </div>
          <div
            className="flex flex-col items-start p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--ifm-card-background-color)" }}
          >
            <div
              className="p-2 rounded-lg mb-4"
              style={{ backgroundColor: "#dbeafe" }}
            >
              <BarChart3 className="w-6 h-6" style={{ color: "#1e40af" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-['InterVariable']">
              Analytics & Reporting
            </h3>
            <p
              className="font-['InterVariable']"
              style={{ color: "var(--ifm-color-emphasis-700)" }}
            >
              Access comprehensive analytics and reporting tools to make
              data-driven decisions.
            </p>
          </div>
          <div
            className="flex flex-col items-start p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--ifm-card-background-color)" }}
          >
            <div
              className="p-2 rounded-lg mb-4"
              style={{ backgroundColor: "#dbeafe" }}
            >
              <Users className="w-6 h-6" style={{ color: "#1e40af" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-['InterVariable']">
              Collaboration
            </h3>
            <p
              className="font-['InterVariable']"
              style={{ color: "var(--ifm-color-emphasis-700)" }}
            >
              Foster collaboration between PDE and local education agencies
              across the commonwealth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description="Resources for PIMS">
      <HomepageHeader />
      <main>
        <Features />
      </main>
    </Layout>
  );
}
