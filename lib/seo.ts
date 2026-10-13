export const SITE_URL = "https://www.sahilshrestha2003.com.np";
export const SITE_NAME = "Sahil Shrestha Portfolio";
export const AUTHOR = "Sahil Shrestha";
export const DEFAULT_DESCRIPTION =
  "Sahil Shrestha is a full-stack developer from Nepal specializing in React, Next.js, Node.js & TypeScript. Available for freelance and remote work worldwide.";

export const SOCIAL_LINKS = [
  "https://github.com/lihasahil",
  "https://www.linkedin.com/in/sahil-shrestha-b46887319/",
  "https://www.instagram.com/sahil.shresthaa/",
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: AUTHOR,
  url: SITE_URL,
  image: `${SITE_URL}/Sahil.jpg`,
  jobTitle: "Full Stack Developer",
  description: DEFAULT_DESCRIPTION,
  nationality: "Nepali",
  address: { "@type": "PostalAddress", addressCountry: "NP" },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Web Development",
  ],
  sameAs: SOCIAL_LINKS,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#person` },
};
