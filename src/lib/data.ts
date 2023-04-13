import type { Speaker } from "./types/speakers";
import type { FAQ } from "./types/faq";
import type { JobRoles } from "./types/job-roles";
import type { PrincipleListItem } from "./types/principles";

export const speakers: Speaker[] = [
  {
    image: "/images/speakers/kent-beck.webp",
    name: "Kent Beck",
    title: "Creator of Extreme Programming",
    twitter: "KentBeck",
    github: "KentBeck",
    linkedin: "https://www.linkedin.com/in/kentbeck/",
    imgTitle:
      "Kent is a pioneer of software design patterns and methodologies. <a href='https://medium.com/@kentbeck_7670/cloud-development-environments-tame-complexity-by-reducing-state-4a154ea7959f'> Read his blog post on CDEs.</a>",
  },
  {
    image: "/images/speakers/johannes.webp",
    name: "Johannes Landgraf",
    title: "CEO & Co-Founder of Gitpod",
    twitter: "jolandgraf",
    github: "JohannesLandgraf",
    // mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/in/johanneslandgraf/",
    imgTitle:
      "Johannes co-founded Gitpod, a CDE used by 800k+ developers. <a href='https://www.gitpod.io/cde'> Read about Gitpod's vision for CDEs. </a>",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Sylvestor George",
    title: "Staff Software Engineer at Slack",
    twitter: "sylvestor88",
    linkedin: "https://www.linkedin.com/in/sylvestor88",
    imgTitle:
      "Sylvestor is part of the Remote Development Environments project at Slack. <a href='https://slack.engineering/remote-development-at-slack/'> Read about Slack's CDE approach. </a>",
  },
  {
    image: "/images/speakers/nic-manoogian.webp",
    name: "Nic Manoogian",
    title: "Senior Software Developer at Doppler",
    twitter: "nicmanoogian",
    linkedin: "https://www.linkedin.com/in/nmanoogian",
    github: "nmanoogian",
    imgTitle:
      "Nic works at Doppler, a platform for managing secrets at scale. <a href='https://www.gitpod.io/blog/securely-manage-development-secrets-with-doppler-and-gitpod'> Read about Doppler for CDEs.</a>",
  },
  {
    image: "/images/speakers/soam-vasani.webp",
    name: "Soam Vasani",
    title: "Software Engineer at Stripe",
    linkedin: "https://www.linkedin.com/in/soamvasani/",
    imgTitle:
      "Soam is part of the Dev Environments team at Stripe. <a href='https://www.infoq.com/presentations/stripe-dev-env-infrastructure/'> Read about Stripe's CDE approach. </a>",
  },
  {
    image: "/images/speakers/swyx.webp",
    name: "Swyx",
    title: "Add speaker title/role-name here",
    twitter: "swyx",
    imgTitle: "Add some details here",
  },
  {
    image: "/images/speakers/new-speaker.webp",
    name: "To be announced",
    title:
      "CFP is open.<br/> <a href='https://www.papercall.io/cde-universe'>Submit your proposal</a>",
  },
];

export const faqs: FAQ[] = [
  {
    title: "Who will be invited to join?",
    description:
      "CDE Universe is for anyone building and implementing for a better software development experience. Platform engineers, DevOps, and developer experience engineers, will all be in attendance.",
  },
  {
    title: "Why should I join?",
    description:
      "CDE Universe is small and curated. Connect with leading minds across the developer tool space. Learn best practices in cloud development, CDE adoption and emerging technologies that enable better software development.",
  },
  {
    title: "When will I hear back regarding attendance?",
    description:
      "Remaining tickets will be released on a weekly basis. You'll hear back about your application within 7 days.",
  },
  {
    title: "Is the conference free?",
    description: "Yes, the event is free for participants.",
  },
  {
    title: "Will there be recordings?",
    description: "Yes, talks will be recorded.",
  },
  {
    title: "Can I attend virtually as well?",
    description:
      "No, this is an in-person event. Recordings will be up on our YouTube channel after the event.",
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

export const PrincipleItems: PrincipleListItem[] = [
  {
    description: "A fresh disposable development environment for every task.",
    heading: "Ephemeral",
    subHeading: "over long lived",
  },
  {
    description: "Consistently replicable without manual intervention.",
    heading: "Reproducible",
    subHeading: "over cobbled together",
  },
  {
    description: "With minimal friction and difficulty.",
    heading: "Effortless",
    subHeading: "over arduous",
  },
  {
    description: "Instantaneously obtainable, seemingly infinite.",
    heading: "Abundant",
    subHeading: "over scarce",
  },
  {
    description: "Isolated and self-sufficient.",
    heading: "Independent",
    subHeading: "over tangled",
  },
  {
    description: "Supports the most expansive development activities.",
    heading: "Powerful",
    subHeading: "over constrained",
  },
  {
    description: "Lowers the barrier to software development.",
    heading: "Equitable",
    subHeading: "over requiring specialized skills",
  },
  {
    description: "Enables collaboration across time, space and practice.",
    heading: "Collaborative",
    subHeading: "over solitary",
  },
];
