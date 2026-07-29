export type ContentSection = {
  id: string;
  heading: string;
  body: string[];
};

export type Benefit = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  label: string;
  to: string;
  description?: string;
};

export type CallToAction = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export type PageContentBase = {
  /** Visible H1 */
  h1: string;
  eyebrow?: string;
  summary: string;
  sections: ContentSection[];
  benefits?: Benefit[];
  steps?: Step[];
  faq?: FaqItem[];
  relatedLinks: RelatedLink[];
  cta: CallToAction;
};

export type ServicePageContent = PageContentBase & {
  kind: 'service';
};

export type IndustryPageContent = PageContentBase & {
  kind: 'industry';
};

export type ResourcePageContent = PageContentBase & {
  kind: 'resource';
  /** ISO date YYYY-MM-DD */
  datePublished: string;
  dateModified: string;
  authorName: string;
};

/** Case study content — only publish when every evidence field is verified. */
export type CaseStudyEvidence = {
  label: string;
  value: string;
  /** Source note for editors; not rendered unless desired */
  verified: boolean;
};

export type CaseStudyPageContent = PageContentBase & {
  kind: 'case-study';
  datePublished: string;
  dateModified: string;
  authorName: string;
  sector: string;
  /** Display name or anonymous descriptor */
  clientLabel: string;
  /** true = named client authorized; false = anonymous descriptor only */
  clientNamed: boolean;
  problem: string[];
  approach: string[];
  outcomes: string[];
  learnings?: string[];
  evidence: CaseStudyEvidence[];
  testimonial?: {
    quote: string;
    attribution: string;
    authorized: boolean;
  };
};

export type InteriorPageContent =
  | ServicePageContent
  | IndustryPageContent
  | ResourcePageContent
  | CaseStudyPageContent;
