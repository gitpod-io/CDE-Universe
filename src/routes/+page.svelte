<script>
  import ConferenceInfo from "$lib/components/index/conference-info.svelte";
  import OpenGraph from "$lib/components/library/open-graph.svelte";
  import AttendCta from "$lib/components/layout/attend-cta.svelte";
  import Speakers from "$lib/components/layout/speakers.svelte";
  import Partners from "$lib/components/layout/partners.svelte";
  import Content from "$lib/components/layout/content.svelte";
  import JoinUs from "$lib/components/layout/join-us.svelte";
  import Hero from "$lib/components/index/hero.svelte";
  import { speakers } from "$lib/data";
</script>

<OpenGraph
  data={{
    title: "CDE Universe 2023 - Cloud Development Conference by Gitpod",
    description:
      "Join platform and DX teams that are building and implementing cloud development environments at CDE Universe in San Francisco on June 1, 2023.",
    keywords:
      "cde, cloud development environment, devx, developer experience, devx tools, devx conference, gitpod, gitpod conference, gitpod cde, gitpod devx, gitpod devops, gitpod devx tools, gitpod devops tools, gitpod cde conference, gitpod cde tools, gitpod cde universe, gitpod cde universe 2023, gitpod cde universe conference, gitpod cde universe",
  }}
/>

<Hero />
<ConferenceInfo />
<Speakers {speakers} />
<Content />
<AttendCta />
<Partners />
<JoinUs />
