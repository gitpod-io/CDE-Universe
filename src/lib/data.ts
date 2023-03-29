import type { Speaker } from "./types/speakers";
import type { FAQ } from "./types/faq";
import type { JobRoles } from "./types/job-roles";

export const speakers: Speaker[] = [
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Sylvestor George",
    title: "Staff Software Engineer at Slack",
    twitter: "sylvestor88",
    // mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/in/sylvestor88",
    // github: "gitpod",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Erika Blue",
    title: "Head of engineering at Spotify",
    twitter: "gitpod",
    mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/company/gitpod",
    github: "gitpod",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Erika Blue",
    title: "Head of engineering at Spotify",
    twitter: "gitpod",
    mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/company/gitpod",
    github: "gitpod",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Erika Blue",
    title: "Head of engineering at Spotify",
    twitter: "gitpod",
    mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/company/gitpod",
    github: "gitpod",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Erika Blue",
    title: "Head of engineering at Spotify",
    twitter: "gitpod",
    mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/company/gitpod",
    github: "gitpod",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Erika Blue",
    title: "Head of engineering at Spotify",
    twitter: "gitpod",
    mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/company/gitpod",
    github: "gitpod",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Erika Blue",
    title: "Head of engineering at Spotify",
    twitter: "gitpod",
    mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/company/gitpod",
    github: "gitpod",
  },
  {
    image: "/images/speakers/slyvestor-george.webp",
    name: "Erika Blue",
    title: "Head of engineering at Spotify",
    twitter: "gitpod",
    mastodon: "https://fosstodon.org/@gitpod",
    linkedin: "https://www.linkedin.com/company/gitpod",
    github: "gitpod",
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
  { value: "", label: "Please select one" },
  { value: "software-eng", label: "Software Engineering" },
  { value: "data", label: "Data / Analytics" },
  { value: "academics", label: "Academia (Student, Researcher)" },
  { value: "enabling", label: "Platform or Developer Experience" },
  { value: "team-lead", label: "A Team Lead or Function Lead role" },
  { value: "devrel", label: "DevRel" },
  { value: "product-design", label: "Product" },
  { value: JOB_ROLE_OTHER, label: "Other" },
];
