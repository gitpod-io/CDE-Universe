<script lang="ts">
  import { page } from "$app/stores";
  import type { OpenGraph } from "$lib/types/open-graph";
  export let data: OpenGraph;
  const type = "website";
  const {
    description,
    image = "/open-graph.png",
    title,
    keywords = "",
    norobots = false,
  } = data || {};
  const url = $page.url.toString();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="keywords" content={keywords} />
  <meta name="description" content={description} />

  {#if norobots}
    <meta name="robots" content="noindex" />
  {/if}

  <!-- Opengraph Card -->
  <meta property="og:image" content="https://cdeuniverse.com{image}" />
  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@cdeuniverse" />
  <meta name="twitter:creator" content="@cdeuniverse" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="https://cdeuniverse.com{image}" />
</svelte:head>
