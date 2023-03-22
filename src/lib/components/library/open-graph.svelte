<script lang="ts">
  import { page } from "$app/stores";
  import type { OpenGraph } from "$lib/types/open-graph";
  export let data: OpenGraph;
  const type = "website";
  const {
    description,
    // TODO: add image to `/static` and use it here .
    image = "/favicon.png",
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

  <!-- https://ogp.me -->
  <meta property="og:image" content="https://cdeuniverse.com{image}" />
  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />

  <!-- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup -->
  <!-- <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@gitpod" />
      <meta name="twitter:creator" content="@gitpod" />
      <meta name="twitter:image" content="https://cdeuniverse.com/{imageTwitter}" /> -->
</svelte:head>
