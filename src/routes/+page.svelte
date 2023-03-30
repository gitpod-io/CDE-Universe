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
    title:
      "Join us at CDE Universe - Cloud Development Environment Conference 2023 | Gitpod",
    description:
      "Experience the latest advancements in cloud development environments at CDE Universe, the first conference of its kind in the world. Hosted by Gitpod in 2023, CDE Universe brings together experts, thought leaders, and enthusiasts from around the globe to explore the future of cloud development. Join us for engaging discussions, insightful talks, and hands-on workshops that will help you master the CDE universe. Register now and be a part of the most anticipated event in the world of cloud development.",
    keywords:
      "cde, cloud development environment, devx, developer experience, devx tools, devx conference, gitpod, gitpod conference, gitpod cde, gitpod devx, gitpod devops, gitpod devx tools, gitpod devops tools, gitpod cde conference, gitpod cde tools, gitpod cde universe, gitpod cde universe 2023, gitpod cde universe conference, gitpod cde universe",
  }}
/>

<Hero />
<ConferenceInfo />
<Speakers {speakers} />
<CfpCard />
<Partners />
<JoinUs />
