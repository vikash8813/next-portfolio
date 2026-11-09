import Head from 'next/head';
import { NAME, SITE_URL, SOCIAL_LINKS, TECH_STACK, DETAILS, CONTACTS } from '../constants/constants';

const DEFAULT_DESCRIPTION =
  'Vikash Jangir is a Full Stack Developer and Software Engineer at The Times of India, building web apps with React, Vue.js, Next.js, Node.js and TypeScript, and AI workflows with RAG, LLMs and n8n.';
const OG_IMAGE = `${SITE_URL}/images/minePhoto.png`;

// Structured data so search engines can connect this site, GitHub and LinkedIn
// to the same person.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Bennett Coleman & Co. Ltd. (The Times of India)',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Indira Gandhi University, Meerpur',
  },
  email: `mailto:${CONTACTS.EMAIL}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: DETAILS.City,
    addressCountry: DETAILS.Residence,
  },
  knowsAbout: TECH_STACK,
  sameAs: Object.values(SOCIAL_LINKS),
};

/**
 * Per-page SEO tags.
 * @param {string} title  Page-specific title; the site name is appended.
 * @param {string} description
 * @param {string} path   Path of the page, e.g. "/portfolio".
 * @param {boolean} person Include Person structured data (use on the home page).
 */
const Seo = ({ title, description = DEFAULT_DESCRIPTION, path = '/', person = false }) => {
  const fullTitle = title ? `${title} | ${NAME}` : `${NAME} – Full Stack Developer (React, Vue.js, Node.js)`;
  const url = `${SITE_URL}${path === '/' ? '' : path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='author' content={NAME} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' href={url} />

      <meta property='og:type' content={person ? 'profile' : 'website'} />
      <meta property='og:site_name' content={NAME} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={OG_IMAGE} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={OG_IMAGE} />

      {person && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      )}
    </Head>
  );
};

export default Seo;
