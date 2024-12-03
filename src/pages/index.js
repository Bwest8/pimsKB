import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { BookOpen, FileQuestion, Database, Users, Phone } from "lucide-react";

function Hero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className="px-4 py-24 bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white dark:text-gray-100 tracking-tight leading-tight">
            {siteConfig.title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Your comprehensive resource for managing and understanding the
            Pennsylvania Information Management System (PIMS)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/docs/intro"
              className="button button--lg button--primary"
            >
              Get Started
            </Link>
            <Link
              to="/docs/templates"
              className="button button--lg button--secondary"
            >
              Data Templates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center">
    <Icon size={48} className="text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Guides",
      description:
        "Step-by-step instructions for data entry, validation, and reporting processes.",
    },
    {
      icon: FileQuestion,
      title: "Troubleshooting Tips",
      description:
        "Common issues and their solutions to help you quickly resolve problems.",
    },
    {
      icon: Database,
      title: "Data Standards",
      description:
        "Detailed information on PIMS data standards and best practices for data management.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-12">
          Resources for Data Administrators
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
function QuickLinks() {
  const links = [
    { title: "Data Collection Calendar", href: "/docs/intro" },
    { title: "Reporting Templates", href: "/docs/templates" },
    { title: "Error Code Reference", href: "/docs/intro" },
    { title: "PIMS Updates", href: "/docs/intro" },
  ];

  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Quick Links
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-blue-600 dark:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section className="px-4 py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Need Additional Support?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our team is here to help you with any questions or issues you may
          encounter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/docs/intro"
            className="button button--outline button--primary flex items-center"
          >
            <Users className="w-5 h-5 mr-2" />
            <span>Contact Support Team</span>
          </Link>
          <Link
            to="tel:+18005551234"
            className="button button--outline button--secondary flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span>Call Helpline</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Pennsylvania Information Management System (PIMS) Documentation and Resources"
    >
      <Hero />
      <Features />
      <QuickLinks />
      <Support />
    </Layout>
  );
}
