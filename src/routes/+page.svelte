<script>
  import ComingSoon from "$lib/components/layout/coming-soon.svelte";
  import OpenGraph from "$lib/components/library/open-graph.svelte";
  import Hero from "$lib/components/index/hero.svelte";
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
