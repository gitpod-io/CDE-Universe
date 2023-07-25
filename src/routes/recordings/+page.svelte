<script lang="ts">
  import PrimaryButton from "$lib/components/library/primary-button.svelte";

  interface Recording {
    title: string;
    description: string;

    pfp: string;
    person: string;
    jobTitle: string;

    link: string;
  }

  const recordings: Recording[] = [
    {
      title: "Accelerate developers with a CDE",
      description:
        "Olga introduces Isospin, the runtime environment used in Shopify's CDE.",
      pfp: "/images/speakers/olga.webp",
      person: "Olga Pilipenco",
      jobTitle: "Senior Production Engineer at Shopify",
      link: "https://youtu.be/uoGmXdB65PI",
    },
    {
      title: "Automating menial engineering tasks with LLMs",
      description:
        "Louis talks about navigating large codebases with LLMs and how CDEs can help.",
      pfp: "/images/speakers/louis.webp",
      person: "Louis Knight-Webb",
      jobTitle: "CEO & Co-Founder Bloop.ai",
      link: "https://youtu.be/xoLxcW8VnMc",
    },
    {
      title: "How DevPod became Uber's primary development environment",
      description:
        "Matas talks about how DevPod became Uber's primary development environment",
      pfp: "/images/speakers/matas.webp",
      person: "Matas Strukčinskas",
      jobTitle: "Software Engineer II at Uber",
      link: "https://youtu.be/TJsuLPk7ZYw",
    },
    {
      title: "The power of SecretOps automating secret workflows",
      description:
        "Nic dives into the power of SecretOps automating secret workflows.",
      pfp: "/images/speakers/nic-manoogian.webp",
      person: "Nic Manoogian",
      jobTitle: "Senior Software Developer at Doppler",
      link: "https://youtu.be/wOBah-1VouY",
    },
    {
      title: "Remote development, without the networking",
      description:
        "Kabir will give a glimpse at modern remote cloud development with Tailscale Funnels.",
      pfp: "/images/speakers/kabir.webp",
      person: "Kabir Sikand",
      jobTitle: "Senior Production Engineer at Shopify",
      link: "https://youtu.be/6_BvMMObC4A",
    },
  ];
</script>

<div class="text-center space-y-3 md:space-y-6 mt-12 mb-32">
  <h1 class="text-3xl md:text-6xl font-extrabold">View recordings</h1>

  <p class="text-md md:text-lg font-normal">
    All recordings from CDE Universe June 1-2 2023
  </p>
</div>

<div class="flex flex-wrap justify-center gap-x-8 gap-y-xx-large mx-4">
  {#each recordings as recording}
    <div class="max-w-[400px] text-center md:text-left">
      <div
        class="bg-blue relative rounded-xl flex flex-col md:flex-row  gap-4 md:gap-8 px-6 py-8 md:px-8 md:py-10 items-center"
      >
        <a
          href={recording.link}
          target="_blank"
          style="background-color: rgba(5, 57, 224, 0.8)"
          class="inset-0 absolute w-full h-full rounded-xl opacity-0 hover:opacity-100 z-10 grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="40"
            fill="none"
          >
            <path
              fill="#F9F9F9"
              d="M33 18.075c1.333.77 1.333 2.694 0 3.464L3 38.859c-1.333.77-3-.192-3-1.732V2.487C0 .946 1.667-.017 3 .753l30 17.32Z"
            />
          </svg>
        </a>

        <img
          class="border-8 rounded-xl border-rose max-w-[140px]"
          src={recording.pfp}
          alt="{recording.person}'s pfp"
        />

        <div>
          <h4 class="text-sm m-0 mb-4">{recording.title}</h4>

          <p class="text-sm font-bold text-white m-0">
            {recording.person}
          </p>

          <p class="text-sm m-0">{recording.jobTitle}</p>
        </div>
      </div>

      <h3 class="hidden md:block mt-4 mb-2">{recording.person}</h3>
      <p class="md:max-w-[300px] mt-4 md:mt-0">{recording.description}</p>
    </div>
  {/each}
</div>

<div class="text-center mx-auto mt-32 text-2xl">
  <p>More recordings will follow soon.</p>
  <p class="mt-0 mb-6">
    Sign-up if you'd like to get notified about upcoming events.
  </p>

  <PrimaryButton
    text="Get notified on upcoming events"
    style="line"
    href="/notify"
  />
</div>
