<script>
  import OpenGraph from "$lib/components/library/open-graph.svelte";
  import Speakers from "$lib/components/layout/speakers.svelte";
  import Partners from "$lib/components/layout/partners.svelte";
  import CfpCard from "$lib/components/layout/cfp-card.svelte";
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

<div class="space-y-64">
  <Speakers {speakers} />
  <CfpCard />
  <Partners />
  <JoinUs />
</div>
