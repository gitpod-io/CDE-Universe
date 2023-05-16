import type { JobRoles } from "./types/job-roles";
import type { Speaker } from "./types/speakers";
import type { PrimarySpeaker } from "./types/primary-speakers";
import type { FAQ } from "./types/faq";

export const primarySpeakers: PrimarySpeaker[] = [
  {
    image: "/images/speakers/pamela.webp",
    name: "Pamela Vagata",
    title: "Former AI Tech Lead at Stripe",
    linkedin: "https://www.linkedin.com/in/pamela-vagata-8396074",
    imgTitle:
      "Pamela is a former AI Tech Lead at Stripe, now co-founder of Pebblebed. She will discuss Generative AI in CDEs.",
  },
  {
    image: "/images/speakers/johannes.webp",
    name: "Johannes Landgraf",
    title: "CEO & Co-Founder at Gitpod",
    // mastodon: "https://fosstodon.org/@gitpod",
    twitter: "jolandgraf",
    linkedin: "https://www.linkedin.com/in/johanneslandgraf/",
    imgTitle:
      "Johannes is the CEO at Gitpod, a CDE used by 900k+ developers. <a href='https://www.gitpod.io/cde' target='_blank'> Read about Gitpod's vision for CDEs. </a>",
  },
  {
    image: "/images/speakers/beyang.webp",
    name: "Beyang Liu",
    title: "CTO & Co-Founder at Sourcegraph",
    twitter: "beyang",
    linkedin: "https://www.linkedin.com/in/beyang-liu/",
    imgTitle:
      "Beyang co-founded Sourcegraph and will share his take on LLM-backed coding assistants. <a href='https://about.sourcegraph.com/blog/cheating-is-all-you-need' target='_blank'>Read more</a>.",
  },
  {
    image: "/images/speakers/chris.webp",
    name: "Chris Aniszczyk",
    title: "CTO at Cloud Native Computing Foundation",
    twitter: "cra",
    linkedin: "https://www.linkedin.com/in/caniszczyk",
    imgTitle:
      "Chris is CTO at CNCF and will talk about the role of CDEs in securing our software supply chain.",
  },
];

export const speakers: Speaker[] = [
  {
    image: "/images/speakers/kent-beck.webp",
    name: "Kent Beck",
    title: "Creator of Extreme Programming",
    twitter: "KentBeck",
    github: "KentBeck",
    linkedin: "https://www.linkedin.com/in/kentbeck/",
    imgTitle:
      "Kent is a pioneer of software design patterns and methodologies. <a href='https://medium.com/@kentbeck_7670/cloud-development-environments-tame-complexity-by-reducing-state-4a154ea7959f' target='_blank'> Read his blog post on CDEs.</a>",
  },
  {
    image: "/images/speakers/olga.webp",
    name: "Olga Pilipenco",
    title: "Senior Production Engineer at Shopify",
    linkedin: "https://www.linkedin.com/in/olgapilipenco",
    imgTitle:
      "Olga introduces Isospin, the runtime environment used in Shopify's CDE. <a href='https://shopify.engineering/shopifys-cloud-development-journey' target='_blank'> Read about Shopify's CDE approach</a>.",
  },
  {
    image: "/images/speakers/nathan.webp",
    name: "Nathan Sobo",
    title: "Founder at Zed Industries",
    linkedin: "https://www.linkedin.com/in/nathan-sobo-92b46720/",
    twitter: "nathansobo",
    imgTitle:
      "Nathan is the creator of Atom, now building Zed, a multi-player code editor. <a href='https://www.youtube.com/watch?v=wXT73bBr83s' target='_blank'>Watch Nathan's DevX Conf talk on Zed. </a>",
  },
  {
    image: "/images/speakers/swyx.webp",
    name: "Swyx",
    title: "Developer Experience Engineer",
    twitter: "swyx",
    imgTitle:
      "Swyx is a DX engineer (Airbyte, Temporal, Netlify) and Tech writer. Read his post <a href='https://dx.tips/the-end-of-localhost' target='_blank'>The end of localhost.</a>",
  },
  {
    image: "/images/speakers/mike.webp",
    name: "Mike Brevoort",
    title: "Chief Product Officer at Gitpod",
    twitter: "mbrevoort",
    linkedin: "https://www.linkedin.com/in/mikebrevoort",
    imgTitle:
      "Conference introduction sharing our vision for CDEs, extensibility and a vibrant ecosystem.",
  },
  {
    image: "/images/speakers/louis.webp",
    name: "Louis Knight-Webb",
    title: "CEO & Co-Founder Bloop.ai",
    twitter: "LouisKnightWebb",
    linkedin: "https://www.linkedin.com/in/knightwebb/",
    imgTitle:
      "Louis is CEO & Co-Founder from <a href='https://bloop.ai' target='_blank'>bloop.ai</a>. He will talk about navigating large codebases with LLMs and how CDEs can help.</a>",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Sylvestor George",
    title: "Staff Software Engineer at Slack",
    twitter: "sylvestor88",
    linkedin: "https://www.linkedin.com/in/sylvestor88",
    imgTitle:
      "Sylvestor is part of the Remote Development Environments project at Slack. <a href='https://slack.engineering/remote-development-at-slack/' target='_blank'> Read about Slack's CDE approach. </a>",
  },
  {
    image: "/images/speakers/shelby.webp",
    name: "Shelby Carpenter",
    title: "Senior Product Marketing Manager at MongoDB",
    twitter: "shelbscarps",
    github: "getsendy",
    imgTitle:
      "Shelby will discuss the role of cloud databases within cloud-first development workflows and CDEs.",
  },
  {
    image: "/images/speakers/soam-vasani.webp",
    name: "Soam Vasani",
    title: "Software Engineer at Stripe",
    linkedin: "https://www.linkedin.com/in/soamvasani/",
    imgTitle:
      "Soam is part of the Dev Environments team at Stripe. <a href='https://www.infoq.com/presentations/stripe-dev-env-infrastructure/' target='_blank'> Read about Stripe's CDE approach. </a>",
  },
  {
    image: "/images/speakers/kabir.webp",
    name: "Kabir Sikand",
    title: "Product Manager at Tailscale",
    twitter: "kabirsikand",
    imgTitle:
      "Kabir will give a glimpse at modern remote cloud development with <a href='https://tailscale.com/blog/tailscale-funnel-beta/' target='_blank'>Tailscale Funnels</a>",
  },
  {
    image: "/images/speakers/nic-manoogian.webp",
    name: "Nic Manoogian",
    title: "Senior Software Developer at Doppler",
    twitter: "nicmanoogian",
    linkedin: "https://www.linkedin.com/in/nmanoogian",
    github: "nmanoogian",
    imgTitle:
      "Nic works at Doppler, a platform for managing secrets at scale. <a href='https://www.gitpod.io/blog/securely-manage-development-secrets-with-doppler-and-gitpod' target='_blank'> Read about Doppler for CDEs.</a>",
  },
  {
    image: "/images/speakers/matas.webp",
    name: "Matas Strukčinskas",
    title: "Software Engineer II at Uber",
    linkedin: "https://www.linkedin.com/in/matas-strukcinskas/",
    imgTitle:
      "Matas Strukčinskas is part of the Devpod team at Uber. <a href='https://www.uber.com/en-DE/blog/devpod-improving-developer-productivity-at-uber/' target='_blank'>Read about Uber’s CDE approach.</a>",
  },
  {
    image: "/images/speakers/pahud.webp",
    name: "Pahud Hsieh",
    title: "Senior Solutions Architect at Amazon Web Services",
    twitter: "pahudnet",
    imgTitle:
      "Pahud is part of the AWS CDK team and will be talking about how to boost your DevX using AWS CDK with Gitpod.",
  },
  {
    image: "/images/speakers/aaron.webp",
    name: "Aaron Williams",
    title: "Chief Advocate at FOSSA",
    twitter: "_arw_",
    linkedin: "https://www.linkedin.com/in/aaronwilliams/",
    imgTitle:
      "Aaron talks about how to manage software supply chain security and open source risk.",
  },
  {
    image: "/images/speakers/pauline.webp",
    name: "Pauline Narvas",
    title: "Head of Community at Gitpod",
    twitter: "paulienuh",
    linkedin: "https://www.linkedin.com/in/pnarvas",
    imgTitle:
      "Pauline is a community builder in the developer experience space. She will be the MC for CDE Universe.",
  },
];

export const faqs: FAQ[] = [
  {
    title: "What is a CDE?",
    description:
      "CDE is short for Cloud Development Environment.\n\nCDEs are on-demand development environments that are pre-configured with all tools, libraries, and dependencies needed to write and review code. They can be easily duplicated and shared across teams.",
  },
  {
    title: "What is CDE Universe?",
    description:
      "It is a two-day, single-track conference organized by Gitpod.\n\nCDE Universe features the leading minds of the ecosystem on how to use cloud-first developer tools to improve our collective developer experience.",
  },
  {
    title: "Who should attend?",
    description:
      "We'll have attendees who work in roles like platform engineering, DevOps, and developer experience as well as engineering leadership.\n\nEveryone interested in improving the developer experience of their team is welcome.",
  },
  {
    title: "What if I cannot take two days off from work?",
    description:
      "The event is designed to give you time to work on both Thursday and Friday.\n\nOn Thursday, we'll start at 2 PM and run until 9 PM. On Friday, the event will be organized like a long “Lunch & Learn”, going from 11 AM to 4 PM.",
  },
  {
    title: "What is included in the ticket?",
    description:
      "The ticket includes access to the event on both days including all talks and workshops.\n\nIt also includes drinks and refreshments, as well as a dinner (Thursday) and lunch (Friday).",
  },
  {
    title: "Who is behind CDE Universe?",
    description:
      "The conference is organized by the team at Gitpod - the developer platform for on-demand cloud development environments to create software faster and more securely.",
  },
  {
    title: "Will there be recordings?",
    description:
      "Yes, talks will be recorded and up on our YouTube channel after the event.",
  },
];

/**
 * Job Roles
 * @see https://github.com/gitpod-io/gitpod/blob/main/components/dashboard/src/onboarding/job-roles.ts
 *
 */
export const JOB_ROLE_OTHER = "other";

export const jobRoles: JobRoles[] = [
  { value: "software-eng", label: "Software Engineering" },
  { value: "data", label: "Data / Analytics" },
  { value: "academics", label: "Academia (Student, Researcher)" },
  { value: "enabling", label: "Platform or Developer Experience" },
  { value: "team-lead", label: "A Team Lead or Function Lead role" },
  { value: "devrel", label: "DevRel" },
  { value: "product-design", label: "Product" },
  { value: JOB_ROLE_OTHER, label: "Other" },
];
