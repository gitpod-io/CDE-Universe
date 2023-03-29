<script>
  import Speakers from "$lib/components/layout/speakers.svelte";
  import OpenGraph from "$lib/components/library/open-graph.svelte";
  import Hero from "$lib/components/index/hero.svelte";
  import ConferenceInfo from "$lib/components/index/conference-info.svelte";
  import CfpCard from "$lib/components/layout/cfp-card.svelte";
  import Partners from "$lib/components/layout/partners.svelte";
  import JoinUs from "$lib/components/layout/join-us.svelte";
  import { speakers } from "$lib/data";
</script>

<OpenGraph
  data={{
    // TODO: #6 Update Opengraph data.
    title: "CDE Universe - DevX Conf 2023",
    description:
      "The first conference dedicated to Cloud Development Environments (CDEs) and Developer Experience (DevX).",
    keywords:
      "cde, cloud development environment, devx, developer experience, devops, devops tools, devx tools, devx conference",
  }}
/>

<Hero />
<ConferenceInfo />
<Speakers {speakers} />
<CfpCard />
<Partners />
<JoinUs />
